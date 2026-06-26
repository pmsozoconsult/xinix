"use client";

import { useRef } from "react";
import type { Locale } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";

interface ExportBandProps {
  locale: Locale;
  headline: string;
  body: string;
  cta: string;
  markets: string[];
}

const stats = {
  en: [
    { value: "12", label: "Export-ready SKUs" },
    { value: "5+", label: "Active markets" },
    { value: "100%", label: "Biodegradable range" },
  ],
  am: [
    { value: "12", label: "ለወጪ ንግድ የቀረቡ ምርቶች" },
    { value: "5+", label: "ንቁ ገበያዎች" },
    { value: "100%", label: "በተፈጥሮ የሚበሰብሱ ምርቶች" },
  ],
} as const;

export function ExportBand({
  locale,
  headline,
  body,
  cta,
  markets,
}: ExportBandProps) {
  const statItems = stats[locale];
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-deep-navy">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-5">
        <div className="relative flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 lg:col-span-3 lg:px-8 lg:py-16 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <div
            className="pointer-events-none absolute inset-y-8 left-0 w-1 bg-gradient-to-b from-drop-cyan via-xinix-teal to-transparent"
            aria-hidden
          />

          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
              {locale === "en" ? "Export & distribution" : "ወጪ ንግድ እና ስርጭት"}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
              {body}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/10 py-5 sm:gap-4">
              {statItems.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-drop-cyan">
                {locale === "en" ? "Supply routes" : "የአቅርቦት መስመሮች"}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {markets.map((market) => (
                  <li
                    key={market}
                    className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white"
                  >
                    {market}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Button href={localePath(locale, "/distributors")} tone="onDark">
                {cta}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:col-span-2 lg:min-h-[22rem] lg:self-stretch">
          <ScrollImage
            src={visuals.export}
            effect="zoom-in-continuous"
            intensity={1.35}
            scrollTargetRef={sectionRef}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-deep-navy lg:via-deep-navy/40 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
