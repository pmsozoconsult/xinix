import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { DistributorApply } from "@/components/sections/DistributorApply";
import { DistributorFaq } from "@/components/sections/DistributorFaq";
import { DistributorHero } from "@/components/sections/DistributorHero";
import { DistributorLane } from "@/components/sections/DistributorLane";
import { DistributorManifest } from "@/components/sections/DistributorManifest";
import { DistributorMarkets } from "@/components/sections/DistributorMarkets";
import { DistributorRange } from "@/components/sections/DistributorRange";
import { DistributorWho } from "@/components/sections/DistributorWho";
import { DistributorWhy } from "@/components/sections/DistributorWhy";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const page = getContent(localeParam).distributors;
  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
  };
}

export default async function DistributorsPage({
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
      <DistributorHero locale={locale} content={content} />
      <DistributorWhy locale={locale} />
      <DistributorManifest locale={locale} />
      <DistributorWho locale={locale} />
      <DistributorMarkets locale={locale} />
      <DistributorLane locale={locale} />
      <DistributorRange locale={locale} content={content} />
      <DistributorApply locale={locale} content={content} />
      <DistributorFaq locale={locale} />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
