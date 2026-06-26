import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductJsonLd } from "@/components/JsonLd";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { getContent, getProductSlugs } from "@/lib/content";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { categoryImages } from "@/lib/visuals";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "am"];
  const content = getContent("en");

  return locales.flatMap((locale) =>
    getProductSlugs().map((productSlug) => {
      const product = content.products[productSlug];
      return {
        locale,
        category: product.categorySlug,
        product: productSlug,
      };
    }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; product: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, product: productSlug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const content = getContent(localeParam);
  const product = content.products[productSlug];
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; product: string }>;
}) {
  const {
    locale: localeParam,
    category: categorySlug,
    product: productSlug,
  } = await params;

  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const content = getContent(locale);
  const product = content.products[productSlug];

  if (!product || product.categorySlug !== categorySlug) notFound();

  const theme = categoryTheme[categorySlug as CategorySlug];
  const { details } = product;
  const specRows = [
    { label: locale === "en" ? "Used by" : "ለማን", value: details.usedBy },
    { label: locale === "en" ? "Feature" : "ባህሪ", value: details.feature },
    { label: locale === "en" ? "Pack size" : "መጠን", value: details.packSize },
    ...(details.extra
      ? [{ label: locale === "en" ? "Notes" : "ማስታወሻ", value: details.extra }]
      : []),
  ];

  return (
    <>
      <ProductJsonLd
        locale={locale}
        productSlug={productSlug}
        url={`https://www.xinix.et/${locale}/products/${categorySlug}/${productSlug}`}
      />
      <PageBanner
        src={categoryImages[categorySlug]}
        headline={product.name}
        body={details.tagline}
        overlay="teal"
      >
        <Button href={localePath(locale, "/contact")}>
          {content.ui.requestQuote}
        </Button>
        <Button href="#datasheet" variant="secondary" tone="onDark">
          {content.ui.downloadDatasheet}
        </Button>
      </PageBanner>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            locale={locale}
            items={[
              { label: content.nav.products, href: "/products" },
              {
                label: content.categoryLabels[categorySlug],
                href: `/products/${categorySlug}`,
              },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="bg-paper pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative min-h-[22rem] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={categoryImages[categorySlug]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div
                    className={cn(
                      "mx-auto flex h-40 w-20 flex-col items-center justify-end rounded-t-[4rem] border-2 bg-white/95 pb-4 shadow-2xl",
                      theme?.accent?.replace("text-", "border-") ?? "border-xinix-teal",
                    )}
                  >
                    <span className="text-xs font-bold text-deep-navy">{product.name}</span>
                  </div>
                  <p className="mt-4 text-center text-sm text-white/90">{details.packSize}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xl font-bold text-deep-navy">
                {locale === "en" ? "Specification" : "ዝርዝር መግለጫ"}
              </h2>
              <dl className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                {specRows.map((row) => (
                  <div key={row.label} className="grid gap-1 px-5 py-4 sm:grid-cols-3">
                    <dt className="text-sm font-semibold text-deep-navy">{row.label}</dt>
                    <dd className="text-sm text-stone sm:col-span-2">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div
                id="datasheet"
                className="mt-6 rounded-2xl border border-dashed border-line bg-white p-5 text-sm text-stone"
              >
                {locale === "en"
                  ? "Datasheet and safety data sheet will be available here once supplied by Xinix."
                  : "የመረጃ ሉህ እና የደህንነት መረጃ ሉህ ከዚኒክስ ከተላኩ በኋላ እዚህ ይገኛሉ።"}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-deep-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-white">{content.ui.requestQuote}</h2>
            <div className="mt-8 max-w-2xl rounded-2xl bg-white/5 p-6 backdrop-blur sm:p-8">
              <EnquiryForm
                locale={locale}
                ui={content.ui}
                productName={product.name}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
