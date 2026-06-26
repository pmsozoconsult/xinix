"use client";

import { motion } from "framer-motion";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import {
  IconBiodegradable,
  IconEthiopia,
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
  { Icon: IconEthiopia, accent: "text-xinix-teal", ring: "ring-xinix-teal/30", bar: "bg-xinix-teal" },
  { Icon: IconBiodegradable, accent: "text-leaf-green", ring: "ring-leaf-green/30", bar: "bg-leaf-green" },
] as const;

interface SustainabilityTeaserProps {
  locale: Locale;
  content: SiteContent;
}

export function SustainabilityTeaser({ locale, content }: SustainabilityTeaserProps) {
  const { sustainability, home, ui, nav } = content;
  const paragraphs = sustainability.body.split("\n\n");
  const manufacturingTitle =
    locale === "en" ? "How we manufacture" : "እንዴት እንሠራለን";

  return (
    <section className="bg-deep-navy">
      <div className="relative lg:min-h-[32rem]">
        <div className="relative z-10 flex flex-col justify-center px-4 py-16 sm:px-6 lg:w-1/2 lg:py-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-12">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-green">
              {nav.sustainability}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {sustainability.headline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={localePath(locale, "/sustainability")}>{ui.readStory}</Button>
              <Button href={localePath(locale, "/contact")} variant="secondary" tone="onDark">
                {ui.contactUs}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[16rem] overflow-hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:min-h-full">
          <ScrollImage
            src={visuals.sustainability}
            effect="parallax-up"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent lg:bg-gradient-to-r lg:from-deep-navy lg:via-deep-navy/45 lg:to-transparent" />
        </div>
      </div>

      {/* Manufacturing — visually distinct sub-section */}
      <div className="relative border-t-4 border-drop-cyan/25 bg-deep-teal/20">
        <div className="absolute inset-0 overflow-hidden">
          <ScrollImage
            src={visuals.manufacturing}
            effect="parallax-up"
            intensity={0.85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-deep-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/60 via-deep-navy/40 to-deep-navy/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-drop-cyan">
                  {locale === "en" ? "Our plant" : "አብነተ ስራችን"}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {manufacturingTitle}
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/55">
                {locale === "en"
                  ? "Four principles that guide every batch we make."
                  : "እያንዳንዱን ባች የሚመሩ አራት መርሆዎች።"}
              </p>
            </div>
          </Reveal>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-deep-teal/50 shadow-xl shadow-black/20 backdrop-blur-sm">
            <Stagger className="grid divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {home.pillars.map((pillar, index) => {
                const { Icon, accent, ring, bar } = pillarMeta[index % pillarMeta.length];
                return (
                  <motion.div
                    key={pillar}
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
                        <p className="mt-1 text-sm leading-relaxed text-white/90">{pillar}</p>
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
