import type { Metadata } from "next";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { AudienceStrip } from "@/components/sections/AudienceStrip";
import {
  ProductIndex,
  type ProductIndexItem,
} from "@/components/sections/ProductIndex";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

const categoryOrder = [
  "water-and-household",
  "hygiene-and-institutional",
  "food-and-agriculture",
  "industrial-and-biofilm",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const content = getContent(localeParam);
  return {
    title: `${content.nav.products} | ${content.meta.companyName}`,
    description: content.home.seo.description,
  };
}

export default async function ProductsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return null;
  const locale = localeParam as Locale;
  const content = getContent(locale);

  const categoryItems = categoryOrder.map((slug, index) => ({
    slug,
    title: content.home.rangeItems[index].title,
    description: content.home.rangeItems[index].description,
    count: content.categories[slug].productSlugs.length,
  }));

  const indexProducts: ProductIndexItem[] = categoryOrder.flatMap((slug) =>
    content.categories[slug].productSlugs.map((productSlug) => {
      const product = content.products[productSlug];
      return {
        slug: product.slug,
        name: product.name,
        categorySlug: slug,
        categoryLabel: content.categoryLabels[slug],
        tagline: product.details.tagline,
        packSize: product.details.packSize,
      };
    }),
  );

  const filters = categoryOrder.map((slug) => ({
    slug,
    label: content.categoryLabels[slug],
  }));

  return (
    <>
      <ProductsHero locale={locale} content={content} />
      <CategoryGrid locale={locale} items={categoryItems} cta={content.ui.viewRange} />
      <AudienceStrip locale={locale} />
      <ProductIndex
        locale={locale}
        products={indexProducts}
        filters={filters}
        cta={content.ui.viewRange}
      />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
