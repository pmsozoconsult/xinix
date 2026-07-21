import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryHero } from "@/components/sections/CategoryHero";
import { CategoryApplications } from "@/components/sections/CategoryApplications";
import { ProductLineup } from "@/components/sections/ProductLineup";
import { SiblingCategories } from "@/components/sections/SiblingCategories";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { getCategorySlugs, getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { type CategorySlug } from "@/lib/categories";

const categoryOrder = [
  "water-and-household",
  "hygiene-and-institutional",
  "food-and-agriculture",
  "industrial-and-biofilm",
] as const;

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

  const slug = categorySlug as CategorySlug;
  const products = category.productSlugs.map((s) => content.products[s]);

  const siblings = categoryOrder
    .map((s, index) => ({
      slug: s,
      title: content.home.rangeItems[index].title,
      description: content.home.rangeItems[index].description,
      count: content.categories[s].productSlugs.length,
    }))
    .filter((item) => item.slug !== categorySlug);

  return (
    <>
      <CategoryHero locale={locale} content={content} categorySlug={slug} />
      <CategoryApplications locale={locale} categorySlug={slug} />
      <ProductLineup
        locale={locale}
        categorySlug={slug}
        products={products}
        cta={content.ui.viewRange}
      />
      <SiblingCategories
        locale={locale}
        items={siblings}
        cta={content.ui.viewRange}
      />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
