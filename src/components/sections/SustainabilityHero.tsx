"use client";

import type { Locale } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface SustainabilityHeroProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "How the plant runs",
    claims: ["Solar power", "Zero discharge", "Biodegradable"],
    dek: "Manufacturing is part of what Xinix sells. The page below is the plant, not a policy.",
    cta: "Start with the power",
  },
  am: {
    eyebrow: "ፋብሪካው እንዴት እንደሚሠራ",
    claims: ["የፀሐይ ኃይል", "ዜሮ ፈሳሽ ቆሻሻ", "በተፈጥሮ የሚበሰብስ"],
    dek: "ማምረቻው የዚኒክስ ሽያጭ አካል ነው። ከዚህ በታች ያለው ፋብሪካው ነው እንጂ ፖሊሲ አይደለም።",
    cta: "ከኃይሉ ይጀምሩ",
  },
} as const;

export function SustainabilityHero({ locale }: SustainabilityHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="light"
      className={cn("overflow-hidden bg-paper", headerClearance)}
    >
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <ol className="mt-10 border-t border-line">
            {t.claims.map((claim) => (
              <li
                key={claim}
                className="border-b border-line py-5 sm:py-7"
              >
                <span className="block text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl lg:text-6xl">
                  {claim}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone">{t.dek}</p>
          <div className="mt-8">
            <Button href="#power">{t.cta}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
