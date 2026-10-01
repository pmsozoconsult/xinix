import type { Metadata } from "next";
import { DistributorApply } from "@/components/sections/DistributorApply";
import { DistributorHero } from "@/components/sections/DistributorHero";
import { DistributorLane } from "@/components/sections/DistributorLane";
import { DistributorManifest } from "@/components/sections/DistributorManifest";
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
      <DistributorLane locale={locale} />
      <DistributorManifest locale={locale} />
      <DistributorApply locale={locale} content={content} />
    </>
  );
}
