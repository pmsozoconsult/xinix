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
    stamp: "Hold",
    title: "Nothing leaves until it is checked",
    body: "The same formulation, every batch. Release is a gate, not a hope: if a batch does not match, it does not ship.",
    gates: [
      { n: "01", label: "Formulated" },
      { n: "02", label: "Checked" },
      { n: "03", label: "Released" },
    ],
  },
  am: {
    stamp: "ያዝ",
    title: "እስኪመረመር ድረስ ምንም አይወጣም",
    body: "እያንዳንዱ ባች ተመሳሳይ ቀመር። መውጣት በር ነው እንጂ ተስፋ አይደለም፦ ባቹ ካልተዛመደ አይላክም።",
    gates: [
      { n: "01", label: "ተቀመረ" },
      { n: "02", label: "ተመረመረ" },
      { n: "03", label: "ተፈቀደ" },
    ],
  },
} as const;

export function QualityRelease({ locale }: QualityReleaseProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="relative overflow-hidden bg-deep-navy">
      <div className="absolute inset-0">
        <ScrollImage src={visuals.manufacturing} effect="parallax-up" sizes="100vw" />
        <div className="absolute inset-0 bg-deep-navy/82" />
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
              {index < t.gates.length - 1 && (
                <span className="absolute right-0 top-8 hidden font-mono text-white/25 sm:block">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
