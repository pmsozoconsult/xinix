import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { SustainabilityAudience } from "@/components/sections/SustainabilityAudience";
import { SustainabilityCycle } from "@/components/sections/SustainabilityCycle";
import { SustainabilityHero } from "@/components/sections/SustainabilityHero";
import { SustainabilityPrinciples } from "@/components/sections/SustainabilityPrinciples";
import { SustainabilityStory } from "@/components/sections/SustainabilityStory";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const page = getContent(localeParam).sustainability;
  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
  };
}

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return null;
  const locale = localeParam as Locale;
  const content = getContent(locale);

  return (
    <>
      <SustainabilityHero locale={locale} content={content} />
      <SustainabilityStory locale={locale} content={content} />
      <SustainabilityPrinciples locale={locale} />
      <SustainabilityCycle locale={locale} />
      <SustainabilityAudience locale={locale} content={content} />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
