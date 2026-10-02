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
    bill: "Application",
    ref: "Distributor",
    fromLabel: "From",
    toLabel: "To",
    from: "Your market",
    to: "Xinix partnership team",
    intro: "Tell us about your business",
  },
  am: {
    bill: "ማመልከቻ",
    ref: "አከፋፋይ",
    fromLabel: "ከ",
    toLabel: "ወደ",
    from: "የእርስዎ ገበያ",
    to: "የዚኒክስ የአጋርነት ቡድን",
    intro: "ስለ ንግድዎ ይንገሩን",
  },
} as const;

export function DistributorApply({ locale, content }: DistributorApplyProps) {
  const t = copy[locale];

  return (
    <section
      id="apply"
      data-header-tone="light"
      className="scroll-mt-24 bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-paper shadow-[12px_20px_50px_rgba(18,58,92,0.12)] ring-1 ring-deep-navy/10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-line bg-xinix-blue-deep px-6 py-4 text-white sm:px-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]">
              {t.bill}
            </p>
            <p className="font-mono text-xs tracking-wider text-white/60">{t.ref}</p>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="border-b border-dashed border-line px-6 py-10 sm:px-10 lg:border-b-0 lg:border-r">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight text-xinix-blue">
                  {t.intro}
                </h2>
                <dl className="mt-8 space-y-5 font-mono text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-stone">
                      {t.fromLabel}
                    </dt>
                    <dd className="mt-1 text-base text-deep-navy">{t.from}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-stone">
                      {t.toLabel}
                    </dt>
                    <dd className="mt-1 text-base text-deep-navy">{t.to}</dd>
                  </div>
                </dl>
                <p className="mt-8 text-sm leading-relaxed text-stone">
                  {content.contact.email}
                  <br />
                  {content.contact.phone}
                </p>
              </Reveal>
            </div>

            <div className="px-6 py-10 sm:px-10">
              <EnquiryForm
                locale={locale}
                ui={content.ui}
                formType="distributor"
                hideIntro
                variant="product"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
