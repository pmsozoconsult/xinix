import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductJsonLd } from "@/components/JsonLd";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductDetailBody } from "@/components/sections/ProductDetailBody";
import { RelatedProducts } from "@/components/sections/RelatedProducts";
import { ProductQuoteBlock } from "@/components/sections/ProductQuoteBlock";
import { type CategorySlug } from "@/lib/categories";
import { getContent, getProductSlugs } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "am"];
  const content = getContent("en");

  return locales.flatMap((locale) =>
    getProductSlugs().map((productSlug) => {
      const product = content.products[productSlug];
      return {
        locale,
        category: product.categorySlug,
        product: productSlug,
      };
    }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; product: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, product: productSlug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const content = getContent(localeParam);
  const product = content.products[productSlug];
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; product: string }>;
}) {
  const {
    locale: localeParam,
    category: categorySlugParam,
    product: productSlug,
  } = await params;

  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const content = getContent(locale);
  const product = content.products[productSlug];

  if (!product || product.categorySlug !== categorySlugParam) notFound();

  const categorySlug = categorySlugParam as CategorySlug;
  const category = content.categories[categorySlug];
  const related = category.productSlugs
    .filter((slug) => slug !== productSlug)
    .map((slug) => content.products[slug]);

  return (
    <>
      <ProductJsonLd
        locale={locale}
        productSlug={productSlug}
        url={`https://www.xinix.et/${locale}/products/${categorySlug}/${productSlug}`}
      />
      <ProductHero
        locale={locale}
        content={content}
        product={product}
        categorySlug={categorySlug}
      />
      <ProductDetailBody
        locale={locale}
        product={product}
        categorySlug={categorySlug}
      />
      <RelatedProducts
        locale={locale}
        categorySlug={categorySlug}
        categoryLabel={content.categoryLabels[categorySlug]}
        products={related}
        cta={content.ui.viewRange}
      />
      <ProductQuoteBlock
        locale={locale}
        content={content}
        productName={product.name}
      />
    </>
  );
}
