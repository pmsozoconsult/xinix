import type { Metadata } from "next";
import { ContactDesk } from "@/components/sections/ContactDesk";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactLines } from "@/components/sections/ContactLines";
import { ContactPlaces } from "@/components/sections/ContactPlaces";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const page = getContent(localeParam).contact;
  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
  };
}

export default async function ContactPage({
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
      <ContactHero locale={locale} content={content} />
      <ContactLines locale={locale} content={content} />
      <ContactPlaces locale={locale} content={content} />
      <ContactDesk locale={locale} content={content} />
    </>
  );
}
