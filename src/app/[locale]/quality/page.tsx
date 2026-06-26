import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { ProseBlock, Section } from "@/components/Section";
import { getContent, getProductSlugs } from "@/lib/content";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";

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
  const page = content.quality;
  const products = getProductSlugs().map((slug) => content.products[slug]);

  return (
    <>
      <PageBanner src={visuals.hygiene} headline={page.headline} overlay="dark" />
      <Section background="paper">
        <Reveal>
          <ProseBlock text={page.body} />
        </Reveal>
        <h2 className="mt-12 text-xl font-bold text-deep-navy">
          {locale === "en" ? "Product documents" : "የምርት ሰነዶች"}
        </h2>
        <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          {products.map((product) => (
            <li
              key={product.slug}
              className="flex items-center justify-between gap-4 px-5 py-4 text-sm transition hover:bg-paper"
            >
              <span className="font-medium text-deep-navy">{product.name}</span>
              <Link
                href={localePath(
                  locale,
                  `/products/${product.categorySlug}/${product.slug}`,
                )}
                className="font-semibold text-teal-text hover:text-deep-teal"
              >
                {content.ui.downloadDatasheet}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href={localePath(locale, "/contact")}>{content.ui.requestQuote}</Button>
        </div>
      </Section>
    </>
  );
}
