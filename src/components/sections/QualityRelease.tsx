"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

interface QualityReleaseProps {
  locale: Locale;
}

const copy = {
  en: {
    stamp: "How we check",
    title: "Nothing leaves until it passes",
    body: "Quality is checked at three stages, from incoming raw materials to the finished bottle. If a batch does not match its specification, it does not ship.",
    gates: [
      {
        n: "01",
        label: "Incoming materials",
        detail: "Every raw material is checked before it enters production.",
      },
      {
        n: "02",
        label: "During production",
        detail: "Samples are tested while the batch is being made.",
      },
      {
        n: "03",
        label: "Final release",
        detail: "The finished batch is tested and approved before dispatch.",
      },
    ],
    water:
      "Purified water. All formulations are made with purified water from our own borehole and reverse osmosis system, so every batch starts with the same controlled water base.",
  },
  am: {
    stamp: "እንዴት እንደምንመረምር",
    title: "እስኪያልፍ ድረስ ምንም አይወጣም",
    body: "ጥራት ከሚመጡ ጥሬ ዕቃዎች እስከ የተጠናቀቀው ጠርሙስ በሦስት ደረጃ ይመረመራል። ባቹ ከመግለጫው ካልተዛመደ አይላክም።",
    gates: [
      {
        n: "01",
        label: "የሚመጡ ግብዓቶች",
        detail: "እያንዳንዱ ጥሬ ዕቃ ወደ ምርት ከመግባቱ በፊት ይመረመራል።",
      },
      {
        n: "02",
        label: "በምርት ጊዜ",
        detail: "ባቹ እየተመረተ ሳለ ናሙናዎች ይፈተናሉ።",
      },
      {
        n: "03",
        label: "የመጨረሻ ፈቃድ",
        detail: "የተጠናቀቀው ባች ከመላኩ በፊት ይፈተናልና ይፀድቃል።",
      },
    ],
    water:
      "የተጣራ ውሃ። ሁሉም ቀመሮች ከራሳችን ጉድጓድና ከሪቨርስ ኦስሞሲስ ሥርዓት በተጣራ ውሃ ይመረታሉ፤ ስለዚህ እያንዳንዱ ባች በተመሳሳይ ቁጥጥር የተደረገበት ውሃ ይጀምራል።",
  },
} as const;

export function QualityRelease({ locale }: QualityReleaseProps) {
  const t = copy[locale];

  return (
    <section
      id="release"
      data-header-tone="dark"
      className="relative overflow-hidden bg-deep-navy"
    >
      <div className="absolute inset-0">
        <ScrollImage src={visuals.manufacturing} effect="parallax-up" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-xinix-blue/35 to-xinix-blue/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="inline-flex rounded-sm border-2 border-solar-amber/80 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.22em] text-solar-amber">
            {t.stamp}
          </p>
          <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            {t.body}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-0">
          {t.gates.map((gate, index) => (
            <li
              key={gate.n}
              className="relative border-t border-white/20 pt-6 sm:border-t-0 sm:border-l sm:border-white/20 sm:pl-8 sm:pt-0 sm:first:border-l-0 sm:first:pl-0"
            >
              <p className="font-mono text-sm text-white/40">{gate.n}</p>
              <p className="mt-3 text-2xl font-bold text-white">{gate.label}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65">
                {gate.detail}
              </p>
              {index < t.gates.length - 1 && (
                <span className="absolute right-0 top-8 hidden font-mono text-white/25 sm:block">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          {t.water}
        </p>
      </div>
    </section>
  );
}
