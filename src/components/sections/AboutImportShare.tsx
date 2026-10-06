"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutImportShareProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Dependence on imports",
    fraction: "60%",
    caption:
      "of the hygiene, water treatment, post harvest and cleaning products used in Ethiopia are imported.",
    waits: ["Foreign exchange", "Customs", "Shipping"],
    close:
      "Buyers wait, and pay prices set by exchange rates. Local manufacturing gives them a closer and more dependable source.",
  },
  am: {
    eyebrow: "በማስመጣት ላይ ያለ ጥገኝነት",
    fraction: "60%",
    caption:
      "በኢትዮጵያ ከሚውሉ የንጽህና፣ የውሃ ሕክምና፣ ከመከር በኋላና ማጽጃ ምርቶች የሚገመተው 60% ከውጭ ይመጣል።",
    waits: ["የውጭ ምንዛሬ", "ጉምሩክ", "መጓጓዣ"],
    close:
      "ገዢዎች ይጠብቃሉ፣ በምንዛሬ የተቀመጠ ዋጋ ይከፍላሉ። የአገር ውስጥ ማምረት ቅርብና የሚታመን ምንጭ ይሰጣቸዋል።",
  },
} as const;

export function AboutImportShare({ locale }: AboutImportShareProps) {
  const t = copy[locale];

  return (
    <section
      id="import"
      data-header-tone="light"
      className="scroll-mt-24 overflow-hidden bg-white py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <p className="mt-6 font-mono text-[clamp(3.5rem,22vw,10rem)] font-bold leading-[0.8] tracking-tight text-xinix-blue">
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
