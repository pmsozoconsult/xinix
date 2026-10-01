"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface QualityRegisterProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Our commitments",
    title: "What you can verify",
    colRef: "Item",
    colClaim: "What Xinix commits",
    rows: [
      {
        ref: "A",
        claim:
          "Documents for every product. Each product has a datasheet and a safety data sheet. Both can be requested today and will be downloadable from each product page as files are added.",
      },
      {
        ref: "B",
        claim:
          "Same formula, every batch. Each product has one approved formula. Every batch follows that formula and is checked before it leaves the plant.",
      },
    ],
  },
  am: {
    eyebrow: "ቃላችን",
    title: "ማረጋገጥ የሚችሉት",
    colRef: "ነጥብ",
    colClaim: "ዚኒክስ የሚገባው ቃል",
    rows: [
      {
        ref: "A",
        claim:
          "ለእያንዳንዱ ምርት ሰነዶች። እያንዳንዱ ምርት የመረጃ ሉህና የደህንነት መረጃ ሉህ አለው። ሁለቱም ዛሬ ሊጠየቁ ይችላሉ፤ ፋይሎች ሲታከሉ ከእያንዳንዱ የምርት ገጽ ይወርዳሉ።",
      },
      {
        ref: "B",
        claim:
          "እያንዳንዱ ባች ተመሳሳይ ቀመር። እያንዳንዱ ምርት አንድ የጸደቀ ቀመር አለው። እያንዳንዱ ባች ያንን ቀመር ይከተላል፣ ከፋብሪካ ከመውጣቱ በፊት ይመረመራል።",
      },
    ],
  },
} as const;

export function QualityRegister({ locale }: QualityRegisterProps) {
  const t = copy[locale];

  return (
    <section
      id="register"
      data-header-tone="light"
      className="scroll-mt-24 bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 overflow-hidden rounded-sm border border-line bg-white">
            <div className="grid grid-cols-[4.5rem_1fr] border-b border-line bg-mist px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone sm:px-6">
              <span>{t.colRef}</span>
              <span>{t.colClaim}</span>
            </div>
            {t.rows.map((row) => (
              <div
                key={row.ref}
                className="grid grid-cols-[4.5rem_1fr] items-baseline border-b border-line px-4 py-5 last:border-b-0 sm:px-6 sm:py-6"
              >
                <span className="font-mono text-sm font-bold text-xinix-teal">
                  {row.ref}
                </span>
                <p className="text-base leading-relaxed text-deep-navy">{row.claim}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
