import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { SustainabilityAfterUse } from "@/components/sections/SustainabilityAfterUse";
import { SustainabilityAudience } from "@/components/sections/SustainabilityAudience";
import { SustainabilityCycle } from "@/components/sections/SustainabilityCycle";
import { SustainabilityHero } from "@/components/sections/SustainabilityHero";
import { SustainabilityPower } from "@/components/sections/SustainabilityPower";
import { SustainabilitySourcing } from "@/components/sections/SustainabilitySourcing";
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
      <SustainabilityPower locale={locale} />
      <SustainabilityCycle locale={locale} />
      <SustainabilityAfterUse locale={locale} />
      <SustainabilitySourcing locale={locale} />
      <SustainabilityAudience locale={locale} />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
