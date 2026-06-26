import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { ProseBlock, Section } from "@/components/Section";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";

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
  const page = content.distributors;

  return (
    <>
      <PageBanner src={visuals.export} headline={page.headline} overlay="navy" />
      <Section>
        <Reveal>
          <ProseBlock text={page.body} />
        </Reveal>
      </Section>
      <Section background="paper">
        <Reveal>
          <h2 className="text-2xl font-bold text-deep-navy">
            {content.ui.becomeDistributor}
          </h2>
          <div className="mt-8 max-w-2xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <EnquiryForm
              locale={locale}
              ui={content.ui}
              formType="distributor"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
