"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface SustainabilityPowerProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Energy",
    live: "Off-grid solar",
    dead: [
      { strike: "National grid", note: "Production does not wait on it." },
      { strike: "Electricity bill", note: "The plant does not carry one." },
    ],
    close:
      "The site makes its own power from the sun. That is why every batch can run without the national supply, and without an electricity invoice.",
  },
  am: {
    eyebrow: "ኃይል",
    live: "ከመስመር ውጭ የፀሐይ ኃይል",
    dead: [
      { strike: "ሀገራዊ መስመር", note: "ምርት በእሱ አይጠብቅም።" },
      { strike: "የኤሌክትሪክ ክፍያ", note: "ፋብሪካው የለውም።" },
    ],
    close:
      "ቦታው ኃይሉን ከፀሐይ ያመነጫል። ስለዚህ እያንዳንዱ ባች ያለ ሀገራዊ አቅርቦት፣ ያለ የኤሌክትሪክ ደረሰኝ ይሠራል።",
  },
} as const;

export function SustainabilityPower({ locale }: SustainabilityPowerProps) {
  const t = copy[locale];

  return (
    <section
      id="power"
      data-header-tone="light"
      className="scroll-mt-24 bg-[linear-gradient(180deg,#fff8e8_0%,#f7f4ee_55%,#f7f4ee_100%)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-solar-amber">
            {t.eyebrow}
          </p>
          <p className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-deep-navy sm:text-6xl lg:text-7xl">
            {t.live}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <ol className="space-y-8">
            {t.dead.map((row) => (
              <li key={row.strike}>
                <p className="text-2xl font-semibold tracking-tight text-stone/45 line-through decoration-stone/40 sm:text-3xl">
                  {row.strike}
                </p>
                <p className="mt-2 text-base text-deep-navy sm:text-lg">{row.note}</p>
              </li>
            ))}
          </ol>
          <Reveal delay={0.08}>
            <p className="max-w-md text-lg leading-relaxed text-stone">{t.close}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
