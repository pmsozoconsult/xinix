import type { Metadata } from "next";
import Link from "next/link";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { getContent } from "@/lib/content";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";

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
    title: `Products | ${content.meta.companyName}`,
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

  const categoryPanels = categoryOrder.map((slug, index) => ({
    slug,
    title: content.home.rangeItems[index].title,
    description: content.home.rangeItems[index].description,
  }));

  return (
    <>
      <PageBanner
        src={visuals.industrial}
        headline={content.ui.exploreProducts}
        body={content.home.body}
        overlay="teal"
      />
      <CategoryShowcase
        locale={locale}
        title={content.home.rangeTitle}
        panels={categoryPanels}
        cta={content.ui.viewRange}
        exploreCta={content.ui.requestQuote}
      />
      <section className="bg-deep-navy py-12 text-center">
        <Reveal>
          <Link
            href={localePath(locale, "/contact")}
            className="text-sm font-semibold uppercase tracking-widest text-drop-cyan hover:text-white"
          >
            {content.ui.requestQuote} →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
