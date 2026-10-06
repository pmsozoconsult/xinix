"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface DistributorHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "For distributors",
    cta: "Apply to become a distributor",
    facts: [
      { value: "ET", label: "Appointing partners nationwide" },
      { value: "EA", label: "Export partnerships in East Africa" },
      { value: "2026", label: "Commercial production in December" },
    ],
  },
  am: {
    eyebrow: "ለአከፋፋዮች",
    cta: "አከፋፋይ ለመሆን ያመልክቱ",
    facts: [
      { value: "ኢት", label: "በሀገር አቀፍ ደረጃ አጋሮችን እየሾምን" },
      { value: "ምአ", label: "በምስራቅ አፍሪካ የወጪ ንግድ አጋርነት" },
      { value: "2019", label: "ታኅሣሥ የንግድ ምርት" },
    ],
  },
} as const;

export function DistributorHero({ locale, content }: DistributorHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="dark"
      className={cn("relative flex min-h-[32rem] flex-col overflow-hidden bg-deep-navy sm:min-h-[38rem]", headerClearance)}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.export} effect="drift-left" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-xinix-blue/40 to-xinix-blue/15" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-band">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.distributors.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {content.distributors.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#apply" tone="onDark">
              {t.cta}
            </Button>
            <Button href={localePath(locale, "/products")} variant="secondary" tone="onDark">
              {content.ui.browseRange}
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-deep-navy/80 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl sm:grid-cols-3">
          {t.facts.map((fact) => (
            <li
              key={fact.value}
              className="border-t border-white/10 px-4 py-5 sm:border-t-0 sm:border-l sm:px-6 sm:first:border-l-0"
            >
              <p className="font-mono text-sm font-bold text-sky-band">{fact.value}</p>
              <p className="mt-1 text-sm text-white/75">{fact.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
