import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ExportBand } from "@/components/sections/ExportBand";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { HomeMatters } from "@/components/sections/HomeMatters";
import { HomeQuality } from "@/components/sections/HomeQuality";
import { StatsAtAGlance } from "@/components/sections/StatsAtAGlance";
import { SustainabilityTeaser } from "@/components/sections/SustainabilityTeaser";
import { WhyXinixSection } from "@/components/sections/WhyXinixSection";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { productRangeCopy, productRangeGroups } from "@/lib/productRange";

const exportMarkets = {
  en: ["Ethiopia", "East Africa"],
  am: ["ኢትዮጵያ", "ምስራቅ አፍሪካ"],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const { home } = getContent(localeParam);
  return {
    title: { absolute: home.seo.title },
    description: home.seo.description,
    keywords: home.seo.keywords,
    alternates: {
      canonical: `https://xinix.et/${localeParam}`,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return null;
  const locale = localeParam as Locale;
  const content = getContent(locale);
  const { home, ui } = content;
  const rangeCopy = productRangeCopy[locale];

  const categoryPanels = productRangeGroups.map((group) => ({
    slug: group.slug,
    themeSlug: group.themeSlug,
    title: rangeCopy[group.slug].title,
    description: rangeCopy[group.slug].homeBody,
    products: rangeCopy[group.slug].skus,
  }));

  return (
    <>
      <CinematicHero locale={locale} content={content} />

      <StatsAtAGlance
        eyebrow={locale === "en" ? "At a glance" : "በአጭሩ"}
        headline=""
        stats={home.stats}
      />

      <CategoryShowcase
        locale={locale}
        title={home.rangeTitle}
        body={home.rangeBody}
        panels={categoryPanels}
        cta={ui.viewRange}
        exploreCta={ui.exploreProducts}
      />

      <HomeMatters locale={locale} cta={ui.readStory} />

      <WhyXinixSection locale={locale} title={home.whyTitle} />

      <SustainabilityTeaser locale={locale} />

      <HomeQuality locale={locale} />

      <ExportBand
        locale={locale}
        headline={home.exportHeadline}
        body={home.exportBody}
        cta={ui.becomeDistributor}
        markets={[...exportMarkets[locale]]}
      />

      <HomeFaq locale={locale} />

      <ClosingCta locale={locale} content={content} />
    </>
  );
}
