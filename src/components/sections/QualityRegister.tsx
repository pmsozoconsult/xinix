"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface QualityRegisterProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "The register",
    title: "What you can verify",
    colRef: "Item",
    colClaim: "What Xinix commits",
    rows: [
      {
        ref: "A",
        claim:
          "Products are registered and made to recognised quality and safety standards.",
      },
      {
        ref: "B",
        claim:
          "A licence number will be published here once it is issued. Until then, treat this as pending — not as a stand-in code.",
      },
      {
        ref: "C",
        claim:
          "Every product has a datasheet and a safety data sheet. Anyone can request or download them.",
      },
      {
        ref: "D",
        claim:
          "Each batch is made to the same formulation and checked before it leaves the plant.",
      },
    ],
  },
  am: {
    eyebrow: "መዝገብ",
    title: "ማረጋገጥ የሚችሉት",
    colRef: "ነጥብ",
    colClaim: "ዚኒክስ የሚገባው ቃል",
    rows: [
      {
        ref: "A",
        claim: "ምርቶች በሕጋዊነት የተመዘገቡ ሲሆኑ በታወቁ የጥራትና የደህንነት ደረጃዎች ይመረታሉ።",
      },
      {
        ref: "B",
        claim:
          "የፈቃድ ቁጥር ሲሰጥ እዚህ ይታተማል። እስከዚያ ድረስ ይህ በመጠባበቅ ላይ ነው — ምትክ ቁጥር አይደለም።",
      },
      {
        ref: "C",
        claim: "እያንዳንዱ ምርት የመረጃ ሉህና የደህንነት መረጃ ሉህ አለው። ማንኛውም ሰው መጠየቅ ወይም ማውረድ ይችላል።",
      },
      {
        ref: "D",
        claim: "እያንዳንዱ ባች በተመሳሳይ ቀመር ይመረታል፣ ከፋብሪካ ከመውጣቱ በፊት ይመረመራል።",
      },
    ],
  },
} as const;

export function QualityRegister({ locale, content }: QualityRegisterProps) {
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
                className="grid grid-cols-[4.5rem_1fr] items-baseline border-b border-line last:border-b-0 px-4 py-5 sm:px-6 sm:py-6"
              >
                <span className="font-mono text-sm font-bold text-xinix-teal">
                  {row.ref}
                </span>
                <p className="text-base leading-relaxed text-deep-navy">{row.claim}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone">
            {content.quality.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
