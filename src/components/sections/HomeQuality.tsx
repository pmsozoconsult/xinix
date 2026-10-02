"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface HomeQualityProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Quality",
    title: "Nothing leaves until it passes",
    body: "Every product is made to one approved formula and checked three times, from the raw material to the finished bottle.",
    gates: [
      {
        n: "01",
        label: "Check 1: Incoming materials",
        detail: "Every raw material is checked before it enters production.",
      },
      {
        n: "02",
        label: "Check 2: During production",
        detail: "Samples are tested while the batch is being made.",
      },
      {
        n: "03",
        label: "Check 3: Final release",
        detail: "The finished batch is tested and approved before dispatch.",
      },
    ],
    water:
      "Purified water in every batch. All formulations are made with water from our own borehole, purified by reverse osmosis, so every batch starts from the same clean base.",
  },
  am: {
    eyebrow: "ጥራት",
    title: "እስኪያልፍ ድረስ ምንም አይወጣም",
    body: "እያንዳንዱ ምርት በአንድ የጸደቀ ቀመር ይመረታል፣ ከጥሬ ዕቃው እስከ የተጠናቀቀው ጠርሙስ ሦስት ጊዜ ይመረመራል።",
    gates: [
      {
        n: "01",
        label: "ምርመራ 1፦ የሚመጡ ግብዓቶች",
        detail: "እያንዳንዱ ጥሬ ዕቃ ወደ ምርት ከመግባቱ በፊት ይመረመራል።",
      },
      {
        n: "02",
        label: "ምርመራ 2፦ በምርት ጊዜ",
        detail: "ባቹ እየተመረተ ሳለ ናሙናዎች ይፈተናሉ።",
      },
      {
        n: "03",
        label: "ምርመራ 3፦ የመጨረሻ ፈቃድ",
        detail: "የተጠናቀቀው ባች ከመላኩ በፊት ይፈተናልና ይፀድቃል።",
      },
    ],
    water:
      "በእያንዳንዱ ባች የተጣራ ውሃ። ሁሉም ቀመሮች ከራሳችን ጉድጓድ በሪቨርስ ኦስሞሲስ በተጣራ ውሃ ይመረታሉ፤ ስለዚህ እያንዳንዱ ባች ከተመሳሳይ ንጹሕ መሠረት ይጀምራል።",
  },
} as const;

export function HomeQuality({ locale }: HomeQualityProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {t.body}
          </p>
        </Reveal>
        <ol className="mt-12">
          {t.gates.map((gate) => (
            <li
              key={gate.n}
              className="flex gap-4 border-t border-line py-6 last:border-b sm:gap-6"
            >
              <span className="mt-1 shrink-0 font-mono text-sm text-stone/50">{gate.n}</span>
              <div>
                <p className="text-xl font-bold tracking-tight text-xinix-blue">{gate.label}</p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-stone">{gate.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-deep-navy">{t.water}</p>
      </div>
    </section>
  );
}
