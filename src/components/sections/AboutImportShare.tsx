"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutImportShareProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "The problem we were built against",
    fraction: "½+",
    caption: "of the chemicals Ethiopia uses are imported.",
    waits: ["Foreign exchange", "Customs", "Shipping"],
    close: "Buyers wait, and pay whatever the exchange rate decides. Xinix was built to change that for the products it makes.",
  },
  am: {
    eyebrow: "የተሠራንበት ችግር",
    fraction: "½+",
    caption: "ኢትዮጵያ ከምትጠቀምባቸው ኬሚካሎች ከግማሽ በላይ ከውጭ ይመጣል።",
    waits: ["የውጭ ምንዛሬ", "ጉምሩክ", "መጓጓዣ"],
    close: "ገዢዎች ይጠብቃሉ፣ ምንዛሬው የሚወስነውንም ይከፍላሉ። ዚኒክስ ለምናመርታቸው ምርቶች ይህንን ለመቀየር ተመሠረተ።",
  },
} as const;

export function AboutImportShare({ locale }: AboutImportShareProps) {
  const t = copy[locale];

  return (
    <section
      id="import"
      data-header-tone="light"
      className="scroll-mt-24 overflow-hidden bg-paper py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <p className="mt-6 font-mono text-[7rem] font-bold leading-[0.8] tracking-tight text-xinix-blue sm:text-[9rem] lg:text-[10rem]">
            {t.fraction}
          </p>
          <p className="mt-6 max-w-sm text-lg font-medium text-deep-navy">{t.caption}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
            {locale === "en" ? "The wait" : "መጠበቁ"}
          </p>
          <ol className="mt-6">
            {t.waits.map((wait, index) => (
              <li
                key={wait}
                className="flex items-center gap-4 border-t border-line py-5 last:border-b"
              >
                <span className="font-mono text-sm text-stone/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-bold tracking-tight text-xinix-blue sm:text-3xl">
                  {wait}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-stone sm:text-lg">
            {t.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
