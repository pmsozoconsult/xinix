import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { QualityHero } from "@/components/sections/QualityHero";
import { QualityLibrary } from "@/components/sections/QualityLibrary";
import { QualityRegister } from "@/components/sections/QualityRegister";
import { QualityRelease } from "@/components/sections/QualityRelease";
import { getContent } from "@/lib/content";
import { qualityDocumentGroups } from "@/lib/qualityDocuments";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const page = getContent(localeParam).quality;
  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
  };
}

export default async function QualityPage({
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
      <QualityHero locale={locale} content={content} />
      <QualityRegister locale={locale} />
      <QualityRelease locale={locale} />
      <QualityLibrary
        locale={locale}
        groups={qualityDocumentGroups(content, locale)}
      />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
