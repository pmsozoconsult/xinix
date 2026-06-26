import type { Metadata } from "next";
import { Inter, Noto_Sans_Ethiopic } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { HeaderShell } from "@/components/HeaderShell";
import { JsonLd } from "@/components/JsonLd";
import { getContent } from "@/lib/content";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const content = getContent(localeParam);
  return {
    title: content.home.seo.title,
    description: content.home.seo.description,
    keywords: content.home.seo.keywords,
    alternates: {
      languages: {
        en: "/en",
        am: "/am",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const content = getContent(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${notoEthiopic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd locale={locale} />
        <HeaderShell locale={locale} content={content} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} content={content} />
        <a
          href={content.contact.phoneHref}
          className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-deep-teal text-white shadow-lg ring-4 ring-white/50 transition hover:bg-deep-navy sm:hidden"
          aria-label={content.contact.phone}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
