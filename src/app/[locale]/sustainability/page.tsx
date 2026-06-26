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
  const page = content.sustainability;

  return (
    <>
      <PageBanner
        src={visuals.sustainability}
        headline={page.headline}
        overlay="teal"
      />
      <Section className="bg-white">
        <Reveal>
          <ProseBlock text={page.body} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.home.pillars.map((pillar, i) => (
            <div
              key={pillar}
              className="rounded-2xl bg-paper p-6 ring-1 ring-line"
            >
              <span className="text-3xl font-bold text-xinix-teal/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm text-stone">{pillar}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button href={localePath(locale, "/contact")}>{content.ui.contactUs}</Button>
        </div>
      </Section>
    </>
  );
}
