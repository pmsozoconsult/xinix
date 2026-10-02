"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance, heroContentInset } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface QualityHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Quality and safety",
    dek: "Every Xinix product is made to an approved formula, checked before release and supported by a datasheet and a safety data sheet. You should never have to take quality on trust.",
    stats: [
      { value: "14", label: "Products in the range" },
      { value: "3", label: "Quality checks on every batch" },
      { value: "2", label: "Documents for every product" },
    ],
    register: "View our quality steps",
    documents: "Request product documents",
  },
  am: {
    eyebrow: "ጥራት እና ደህንነት",
    dek: "እያንዳንዱ የዚኒክስ ምርት በጸደቀ ቀመር ይመረታል፣ ከመውጣቱ በፊት ይመረመራል፣ የመረጃ ሉህና የደህንነት መረጃ ሉህም አለው። ጥራትን በእምነት ብቻ መቀበል የለብዎትም።",
    stats: [
      { value: "14", label: "በስብስቡ ያሉ ምርቶች" },
      { value: "3", label: "በእያንዳንዱ ባች የጥራት ምርመራ" },
      { value: "2", label: "ለእያንዳንዱ ምርት ሰነዶች" },
    ],
    register: "የጥራት ደረጃዎቻችንን ይመልከቱ",
    documents: "የምርት ሰነዶችን ይጠይቁ",
  },
} as const;

export function QualityHero({ locale, content }: QualityHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="dark"
      className={cn("relative overflow-hidden bg-deep-navy", headerClearance)}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.hygiene} effect="zoom-out" sizes="100vw" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-deep-navy/90 via-xinix-blue/45 to-xinix-blue/20" />

      <div className={cn("relative z-10", heroContentInset)}>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-band">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.quality.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {t.dek}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#release" tone="onDark">
              {t.register}
            </Button>
            <Button href="#documents" variant="secondary" tone="onDark">
              {t.documents}
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
