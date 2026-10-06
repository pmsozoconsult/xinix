"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Button } from "@/components/Button";
import {
  IconBiodegradable,
  IconSolar,
  IconZeroDischarge,
} from "@/components/Icons";
import { Reveal, staggerItem, Stagger } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { cn } from "@/lib/utils";

const pillarMeta = [
  { Icon: IconSolar, accent: "text-solar-amber", ring: "ring-solar-amber/30", bar: "bg-solar-amber" },
  { Icon: IconZeroDischarge, accent: "text-drop-cyan", ring: "ring-drop-cyan/30", bar: "bg-drop-cyan" },
  { Icon: IconBiodegradable, accent: "text-leaf-green", ring: "ring-leaf-green/30", bar: "bg-leaf-green" },
] as const;

const teaser = {
  en: {
    eyebrow: "Sustainability",
    title: "Made the way it should be",
    body: "How a product is made matters as much as what it does. Our plant is designed to protect the water, soil and air it depends on.",
    cta: "See how the plant works",
    plantEyebrow: "Our plant",
    plantTitle: "Three principles on every batch",
    pillars: [
      {
        title: "Powered by the sun",
        body: "Built to run on its own solar and battery system, with no connection to the national grid. Power cuts never stop production.",
      },
      {
        title: "No process wastewater",
        body: "Process water is purified, reused in the plant or becomes part of the finished product. Nothing is released to drains, rivers or land.",
      },
      {
        title: "Formulas that break down",
        body: "Our products break down after use and leave no lasting residue in water, soil or food when used as directed.",
      },
    ],
  },
  am: {
    eyebrow: "ዘላቂነት",
    title: "እንደሚገባው የተሠራ",
    body: "አንድ ምርት እንዴት እንደሚሠራ ምን እንደሚያደርግ ያህል አስፈላጊ ነው። ፋብሪካችን የሚደገፍበትን ውሃ፣ አፈርና አየር ለመጠበቅ የተዘጋጀ ነው።",
    cta: "ፋብሪካው እንዴት እንደሚሠራ ይመልከቱ",
    plantEyebrow: "ፋብሪካችን",
    plantTitle: "በእያንዳንዱ ባች ሦስት መርሆዎች",
    pillars: [
      {
        title: "በፀሐይ ኃይል የሚሰራ",
        body: "ከብሔራዊ መስመር ግንኙነት ሳይኖር በራሱ የፀሐይና ባትሪ ሥርዓት እንዲሠራ የተሠራ። የኃይል መቆራረጥ ምርትን አያቆምም።",
      },
      {
        title: "የሂደት ፈሳሽ ቆሻሻ የለም",
        body: "የሂደት ውሃ ይጣራል፣ በፋብሪካው ይደገማል ወይም የተጠናቀቀው ምርት አካል ይሆናል። ወደ ፍሳሽ፣ ወንዝ ወይም መሬት ምንም አይወጣም።",
      },
      {
        title: "የሚበሰብሱ ቀመሮች",
        body: "ምርቶቻችን ከአጠቃቀም በኋላ ይበሰብሳሉ፤ እንደተመራ ሲውሉ በውሃ፣ በአፈር ወይም በምግብ ላይ የሚቀር ቅሪት አይተዉም።",
      },
    ],
  },
} as const;

interface SustainabilityTeaserProps {
  locale: Locale;
}

export function SustainabilityTeaser({ locale }: SustainabilityTeaserProps) {
  const t = teaser[locale];

  return (
    <section data-header-tone="light" className="bg-sky-wash">
      <div className="relative lg:min-h-[32rem]">
        <div className="relative z-10 flex flex-col justify-center px-4 py-16 sm:px-6 lg:w-1/2 lg:py-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-12">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone sm:text-lg">{t.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={localePath(locale, "/sustainability")}>{t.cta}</Button>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[16rem] overflow-hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:min-h-full">
          <ScrollImage
            src={visuals.sustainability}
            effect="parallax-up"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-wash/55 via-sky-wash/15 to-transparent lg:bg-gradient-to-r lg:from-sky-wash/50 lg:via-sky-wash/15 lg:via-[28%] lg:to-transparent" />
        </div>
      </div>

      {/* Manufacturing — the remaining dark plant moment */}
      <div data-header-tone="dark" className="relative border-t-4 border-xinix-blue/40 bg-deep-navy">
        <div className="absolute inset-0 overflow-hidden">
          <ScrollImage
            src={visuals.manufacturing}
            effect="parallax-up"
            intensity={0.85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-deep-navy/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-xinix-blue/25 via-deep-navy/50 to-deep-navy/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-band">
                  {t.plantEyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {t.plantTitle}
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-xinix-blue/20 shadow-xl shadow-black/20 backdrop-blur-sm">
            <Stagger className="grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {t.pillars.map((pillar, index) => {
                const { Icon, accent, ring, bar } = pillarMeta[index % pillarMeta.length];
                return (
                  <motion.div
                    key={pillar.title}
                    variants={staggerItem}
                    className="group relative p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-8"
                  >
                    <div
                      className={cn(
                        "absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-8 sm:right-8",
                        bar,
                      )}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-2 transition-transform duration-300 group-hover:scale-105",
                          accent,
                          ring,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <span className="font-mono text-xs font-bold text-white/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1 text-sm font-semibold text-white">{pillar.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">{pillar.body}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
