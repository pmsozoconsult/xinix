"use client";

import type { Locale, SiteContent } from "@/types/content";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";
import Link from "next/link";

interface ContactDeskProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    pad: "Quote pad",
    intro: "Product and quantity first. That is enough to start a price.",
    sheets: "Datasheets sit on each product page — or ask here and we will send them.",
    range: "Open the range",
  },
  am: {
    pad: "የዋጋ ሰሌዳ",
    intro: "መጀመሪያ ምርትና መጠን። ዋጋ ለመጀመር ያ በቂ ነው።",
    sheets: "የመረጃ ሉሆች በእያንዳንዱ የምርት ገጽ ላይ ናቸው — ወይም እዚህ ይጠይቁ እንልካለን።",
    range: "ስብስቡን ይክፈቱ",
  },
} as const;

export function ContactDesk({ locale, content }: ContactDeskProps) {
  const t = copy[locale];

  return (
    <section
      id="quote"
      data-header-tone="light"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">{t.pad}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {content.ui.requestQuote}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">{t.intro}</p>
          <p className="mt-6 text-sm leading-relaxed text-stone">{t.sheets}</p>
          <Link
            href={localePath(locale, "/products")}
            className="mt-6 inline-flex text-sm font-semibold text-deep-teal hover:text-xinix-teal"
          >
            {t.range} →
          </Link>
        </Reveal>

        <div className="border border-line bg-paper p-6 sm:p-10">
          <div className="mb-6 flex gap-1" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-2 flex-1 bg-white ring-1 ring-line" />
            ))}
          </div>
          <EnquiryForm locale={locale} ui={content.ui} hideIntro variant="product" />
        </div>
      </div>
    </section>
  );
}
