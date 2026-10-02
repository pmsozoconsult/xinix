"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface SustainabilitySourcingProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "What the plant buys",
    title: "Most of the truck is loaded in Ethiopia",
    local: "Bought inside the country",
    rest: "The rest of the bill",
    close:
      "Keeping spend and supply here is how the plant stays close to hand — and how the work stays local.",
  },
  am: {
    eyebrow: "ፋብሪካው የሚገዛው",
    title: "አብዛኛው ጭነት በኢትዮጵያ ይጫናል",
    local: "በሀገር ውስጥ የተገዛ",
    rest: "የቀረው ሂሳብ",
    close: "ወጪና አቅርቦት እዚህ መቆየቱ ፋብሪካውን ቅርብ ያደርገዋል — ሥራውም የአገር ውስጥ እንዲሆን።",
  },
} as const;

export function SustainabilitySourcing({ locale }: SustainabilitySourcingProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12">
          <div className="flex h-16 overflow-hidden rounded-sm sm:h-24">
            <div className="flex w-[95%] items-center bg-xinix-blue px-4 sm:px-6">
              <span className="font-mono text-2xl font-bold text-white sm:text-4xl">95%</span>
            </div>
            <div className="w-[5%] bg-deep-navy/15" />
          </div>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-sm text-stone">
            <p>{t.local}</p>
            <p className="font-mono text-xs uppercase tracking-wider">{t.rest}</p>
          </div>
        </div>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-stone sm:text-lg">{t.close}</p>
      </div>
    </section>
  );
}
