import type { Metadata } from "next";
import { AboutFootprint } from "@/components/sections/AboutFootprint";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutImportShare } from "@/components/sections/AboutImportShare";
import { AboutPlant } from "@/components/sections/AboutPlant";
import { AboutStory } from "@/components/sections/AboutStory";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const page = getContent(localeParam).about;
  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
  };
}

export default async function AboutPage({
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
      <AboutHero locale={locale} content={content} />
      <AboutImportShare locale={locale} />
      <AboutStory locale={locale} content={content} />
      <AboutPlant locale={locale} content={content} />
      <AboutFootprint locale={locale} content={content} />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
