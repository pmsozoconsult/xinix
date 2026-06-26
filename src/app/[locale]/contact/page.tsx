import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/Section";
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
  const page = content.contact;

  return (
    <>
      <PageBanner
        src={visuals.water}
        headline={page.headline}
        body={page.body}
        overlay="teal"
      />
      <Section background="paper">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-stone">
              <p>
                <span className="font-semibold text-deep-navy">Email </span>
                <a href={`mailto:${page.email}`} className="text-teal-text hover:underline">
                  {page.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  {locale === "en" ? "Phone " : "ስልክ "}
                </span>
                <a href={page.phoneHref} className="text-teal-text hover:underline">
                  {page.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  {locale === "en" ? "Office " : "ቢሮ "}
                </span>
                {page.office}
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  {locale === "en" ? "Plant " : "ፋብሪካ "}
                </span>
                {page.plant}
              </p>
              <a
                href="https://wa.me/251904553355"
                className="inline-flex items-center rounded-full bg-leaf-green px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <EnquiryForm locale={locale} ui={content.ui} />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
