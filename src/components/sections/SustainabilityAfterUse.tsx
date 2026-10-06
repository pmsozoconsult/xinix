"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

interface SustainabilityAfterUseProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "After the job",
    title: "The chemistry is not meant to stay",
    stages: [
      { label: "In use", body: "It does the work it was sold for." },
      { label: "Breaks down", body: "The formula is biodegradable." },
      { label: "Harmless", body: "Byproducts do not linger in water and soil." },
    ],
  },
  am: {
    eyebrow: "ከሥራው በኋላ",
    title: "ኬሚካሉ እንዲቀመጥ አይደለም",
    stages: [
      { label: "በጥቅም ላይ", body: "ለተሸጠበት ሥራ ይሠራል።" },
      { label: "ይበሰብሳል", body: "ቀመሩ በተፈጥሮ ይበሰብሳል።" },
      { label: "አይጎዳም", body: "ንጥረ ነገሮቹ በውሃና በአፈር ውስጥ አይቀመጡም።" },
    ],
  },
} as const;

const washes = ["opacity-100", "opacity-55", "opacity-25"] as const;

export function SustainabilityAfterUse({ locale }: SustainabilityAfterUseProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-green">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>
      </div>

      <div className="grid border-t border-line lg:grid-cols-3">
        {t.stages.map((stage, index) => (
          <article
            key={stage.label}
            className="relative min-h-[18rem] overflow-hidden border-t border-line lg:border-l lg:border-t-0 lg:first:border-l-0"
          >
            <div className={`absolute inset-0 ${washes[index]}`}>
              <ScrollImage src={visuals.water} effect="parallax-up" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-wash/70 via-sky-wash/25 to-transparent" />
            </div>
            <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-6 sm:p-8">
              <p className="font-mono text-xs text-stone">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-deep-navy">
                {stage.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">{stage.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
