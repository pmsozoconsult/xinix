"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import {
  IconBiodegradable,
  IconSolar,
  IconZeroDischarge,
} from "@/components/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface SustainabilityHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "How the plant runs",
    dek: "Manufacturing is part of what Xinix sells. You are looking at the site that has to stand behind the label.",
    cta: "Start with the power",
    claims: [
      { title: "Solar power", hint: "The plant makes its own electricity." },
      { title: "Zero discharge", hint: "Nothing leaves the site as wastewater." },
      { title: "Biodegradable", hint: "The chemistry is not meant to linger." },
    ],
  },
  am: {
    eyebrow: "ፋብሪካው እንዴት እንደሚሠራ",
    dek: "ማምረቻው የዚኒክስ ሽያጭ አካል ነው። ከመለያው ጀርባ መቆም ያለበት ቦታ ይህ ነው።",
    cta: "ከኃይሉ ይጀምሩ",
    claims: [
      { title: "የፀሐይ ኃይል", hint: "ፋብሪካው ኤሌክትሪኩን እራሱ ያመነጫል።" },
      { title: "ዜሮ ፈሳሽ ቆሻሻ", hint: "ምንም ፈሳሽ ቆሻሻ ከቦታው አይወጣም።" },
      { title: "በተፈጥሮ የሚበሰብስ", hint: "ኬሚካሉ እንዲቀመጥ አይደለም።" },
    ],
  },
} as const;

const claimMeta = [
  { Icon: IconSolar, accent: "text-solar-amber", bar: "bg-solar-amber" },
  { Icon: IconZeroDischarge, accent: "text-drop-cyan", bar: "bg-drop-cyan" },
  { Icon: IconBiodegradable, accent: "text-leaf-green", bar: "bg-leaf-green" },
] as const;

export function SustainabilityHero({ locale, content }: SustainabilityHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="dark"
      className={cn("relative flex min-h-[36rem] flex-col overflow-hidden bg-deep-navy sm:min-h-[42rem]", headerClearance)}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.manufacturing} effect="zoom-out" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-xinix-blue/40 to-xinix-blue/15" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-green">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.sustainability.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{t.dek}</p>
            <div className="mt-8">
              <Button href="#power" tone="onDark">
                {t.cta}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/15 bg-deep-navy/80 backdrop-blur-sm">
          <ul className="mx-auto grid max-w-7xl lg:grid-cols-3">
            {t.claims.map((claim, index) => {
              const { Icon, accent, bar } = claimMeta[index];
              return (
                <li
                  key={claim.title}
                  className="relative border-t border-white/10 px-4 py-5 sm:px-6 lg:border-t-0 lg:border-l lg:first:border-l-0"
                >
                  <span className={cn("absolute inset-x-0 top-0 h-0.5 lg:inset-x-auto lg:left-0 lg:top-0 lg:h-full lg:w-0.5", bar)} />
                  <div className="flex items-start gap-3">
                    <span className={cn("mt-0.5", accent)}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{claim.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{claim.hint}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
