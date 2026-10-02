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
  en: [] as { value: string; label: string }[],
  am: [] as { value: string; label: string }[],
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
    <section ref={sectionRef} data-header-tone="light" className="relative overflow-hidden bg-sky-wash">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-5">
        <div className="relative flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 lg:col-span-3 lg:px-8 lg:py-16 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <div
            className="pointer-events-none absolute inset-y-8 left-0 w-1 bg-gradient-to-b from-xinix-blue via-sky-band to-transparent"
            aria-hidden
          />

          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {locale === "en" ? "For distributors" : "ለአከፋፋዮች"}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-stone">
              {body}
            </p>

            {statItems.length > 0 ? (
            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-line py-5 sm:gap-4">
              {statItems.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl font-bold text-xinix-blue-deep sm:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-stone">{stat.label}</p>
                </div>
              ))}
            </div>
            ) : null}

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-xinix-blue">
                {locale === "en" ? "Where we partner" : "የምንተባበርባቸው ቦታዎች"}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {markets.map((market) => (
                  <li
                    key={market}
                    className="rounded-full border border-xinix-blue/25 bg-white px-3.5 py-1.5 text-sm font-medium text-deep-navy"
                  >
                    {market}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Button href={localePath(locale, "/distributors")}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-xinix-blue/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-sky-wash lg:via-sky-wash/40 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
