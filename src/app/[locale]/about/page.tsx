import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { ProseBlock, Section } from "@/components/Section";
import { getContent } from "@/lib/content";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";

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
  const page = content.about;

  return (
    <>
      <PageBanner src={visuals.about} headline={page.headline} overlay="navy" />
      <Section>
        <Reveal>
          <ProseBlock text={page.body} />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={localePath(locale, "/products")} variant="secondary">
            {content.ui.browseRange}
          </Button>
          <Button href={localePath(locale, "/contact")}>{content.ui.contactUs}</Button>
        </div>
      </Section>
    </>
  );
}
