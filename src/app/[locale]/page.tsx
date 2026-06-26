import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ExportBand } from "@/components/sections/ExportBand";
import { StatsAtAGlance } from "@/components/sections/StatsAtAGlance";
import { SustainabilityTeaser } from "@/components/sections/SustainabilityTeaser";
import { WhyXinixSection } from "@/components/sections/WhyXinixSection";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

const categoryOrder = [
  "water-and-household",
  "hygiene-and-institutional",
  "food-and-agriculture",
  "industrial-and-biofilm",
] as const;

const exportMarkets = {
  en: ["Ethiopia", "Uganda", "Rwanda", "East Africa", "Continental export"],
  am: ["ኢትዮጵያ", "ዩጋንዳ", "ሩዋንዳ", "ምስራቅ አፍሪካ", "የአህጉር ወጪ ንግድ"],
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
    title: home.seo.title,
    description: home.seo.description,
    keywords: home.seo.keywords,
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

  const categoryPanels = categoryOrder.map((slug, index) => ({
    slug,
    title: home.rangeItems[index].title,
    description: home.rangeItems[index].description,
  }));

  return (
    <>
      <CinematicHero locale={locale} content={content} />

      <StatsAtAGlance
        eyebrow={locale === "en" ? "At a glance" : "በአጭሩ"}
        headline={
          locale === "en"
            ? "Manufacturing that speaks in numbers"
            : "በቁጥር የሚናገር ማምረቻ"
        }
        stats={home.stats}
      />

      <CategoryShowcase
        locale={locale}
        title={home.rangeTitle}
        panels={categoryPanels}
        cta={ui.viewRange}
        exploreCta={ui.exploreProducts}
      />

      <SustainabilityTeaser locale={locale} content={content} />

      <WhyXinixSection
        locale={locale}
        title={home.whyTitle}
        subtitle={
          locale === "en"
            ? "Built for buyers who need reliability, not imports."
            : "ለአስተማማኝ አቅርቦት የሚፈልጉ ገዢዎች የተሠራ።"
        }
        whyItems={home.whyItems}
      />

      <ExportBand
        locale={locale}
        headline={home.exportHeadline}
        body={home.exportBody}
        cta={ui.becomeDistributor}
        markets={[...exportMarkets[locale]]}
      />

      <ClosingCta locale={locale} content={content} />
    </>
  );
}
