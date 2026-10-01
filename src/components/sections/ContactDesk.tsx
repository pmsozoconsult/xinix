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
    pad: "Request a quote",
    intro: "Tell us what you need",
    other: "Other enquiries",
    distributor: "Want to become a distributor?",
    distributorBody: "Visit our For Distributors page to apply.",
    fit: "Not sure which product fits your needs?",
    fitBody:
      "Tell us about your application in the message field and our team will recommend a suitable product and explain its correct use.",
  },
  am: {
    pad: "ዋጋ ይጠይቁ",
    intro: "የሚፈልጉትን ይንገሩን",
    other: "ሌሎች ጥያቄዎች",
    distributor: "አከፋፋይ መሆን ይፈልጋሉ?",
    distributorBody: "ለማመልከት የአከፋፋዮች ገጻችንን ይጎብኙ።",
    fit: "የትኛው ምርት እንደሚስማማ እርግጠኛ አይደሉም?",
    fitBody:
      "ስለ አገልግሎትዎ በመልዕክት መስኩ ይንገሩን፤ ቡድናችን ተስማሚ ምርት ይመክራል፣ ትክክለኛ አጠቃቀሙንም ያብራራል።",
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
            {t.intro}
          </h2>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-teal-text">
            {t.other}
          </p>
          <p className="mt-4 font-semibold text-deep-navy">{t.distributor}</p>
          <p className="mt-2 text-base leading-relaxed text-stone">{t.distributorBody}</p>
          <Link
            href={localePath(locale, "/distributors")}
            className="mt-3 inline-flex text-sm font-semibold text-deep-teal hover:text-xinix-teal"
          >
            {content.nav.distributors} →
          </Link>
          <p className="mt-8 font-semibold text-deep-navy">{t.fit}</p>
          <p className="mt-2 text-base leading-relaxed text-stone">{t.fitBody}</p>
        </Reveal>

        <div className="border border-line bg-paper p-6 sm:p-10">
          <div className="mb-6 flex gap-1" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-2 flex-1 bg-white ring-1 ring-line" />
            ))}
          </div>
          <EnquiryForm
            locale={locale}
            ui={content.ui}
            formType="contact"
            hideIntro
            variant="product"
          />
        </div>
      </div>
    </section>
  );
}
