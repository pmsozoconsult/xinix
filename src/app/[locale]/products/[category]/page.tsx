import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { getCategorySlugs, getContent } from "@/lib/content";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { categoryImages } from "@/lib/visuals";

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "am"];
  return locales.flatMap((locale) =>
    getCategorySlugs().map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, category } = await params;
  if (!isValidLocale(localeParam)) return {};
  const content = getContent(localeParam);
  const cat = content.categories[category];
  if (!cat) return {};
  return {
    title: cat.seo.title,
    description: cat.seo.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: localeParam, category: categorySlug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const content = getContent(locale);
  const category = content.categories[categorySlug];
  if (!category) notFound();

  const products = category.productSlugs.map((slug) => content.products[slug]);

  return (
    <>
      <PageBanner
        src={categoryImages[categorySlug] ?? categoryImages["water-and-household"]}
        headline={category.headline}
        body={category.body}
      >
        <Button href={localePath(locale, "/contact")}>
          {content.ui.requestQuote}
        </Button>
      </PageBanner>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            locale={locale}
            className="mb-8"
            items={[
              { label: content.nav.products, href: "/products" },
              { label: content.categoryLabels[categorySlug] },
            ]}
          />
          <Reveal>
            <h2 className="text-2xl font-bold text-deep-navy">
              {content.categoryLabels[categorySlug]}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                locale={locale}
                product={product}
                cta={content.ui.viewRange}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
