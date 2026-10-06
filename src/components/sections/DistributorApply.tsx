"use client";

import type { Locale, SiteContent } from "@/types/content";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorApplyProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    intro: "Tell us about your business",
    body: "Share your territory, the customers you serve and the products you want to carry. We reply within one working day.",
  },
  am: {
    intro: "ስለ ንግድዎ ይንገሩን",
    body: "ግዛትዎን፣ የሚያገለግሏቸውን ደንበኞች እና መሸከም የሚፈልጓቸውን ምርቶች ይንገሩን። በአንድ የሥራ ቀን ውስጥ እንመልሳለን።",
  },
} as const;

export function DistributorApply({ locale, content }: DistributorApplyProps) {
  const t = copy[locale];

  return (
    <section id="apply" data-header-tone="light" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {locale === "en" ? "Application" : "ማመልከቻ"}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.intro}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">{t.body}</p>
          <p className="mt-8 text-sm leading-relaxed text-deep-navy">
            {content.contact.email}
            <br />
            {content.contact.phone}
          </p>
        </Reveal>

        <div className="border border-line bg-paper p-6 sm:p-10">
          <EnquiryForm
            locale={locale}
            ui={content.ui}
            formType="distributor"
            hideIntro
            variant="product"
          />
        </div>
      </div>
    </section>
  );
}
