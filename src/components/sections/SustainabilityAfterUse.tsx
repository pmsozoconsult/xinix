"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

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

export function SustainabilityAfterUse({ locale }: SustainabilityAfterUseProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-green">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <ol className="mt-16">
          {t.stages.map((stage, index) => {
            const fade = ["text-deep-navy", "text-xinix-teal", "text-leaf-green"][index];
            const weight = ["opacity-100", "opacity-80", "opacity-70"][index];
            return (
              <li
                key={stage.label}
                className={`border-t border-line py-8 last:border-b sm:grid sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-end sm:gap-10 ${weight}`}
              >
                <p className="font-mono text-xs tracking-[0.18em] text-stone">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-3 sm:mt-0">
                  <p
                    className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${fade}`}
                  >
                    {stage.label}
                  </p>
                  <p className="mt-3 max-w-md text-base text-stone sm:text-lg">{stage.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
