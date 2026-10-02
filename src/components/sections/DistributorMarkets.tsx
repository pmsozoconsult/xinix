"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorMarketsProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Markets",
    title: "Ethiopia and East Africa",
    ethiopia: {
      label: "Ethiopia",
      body: "In Ethiopia, we are appointing wholesalers and distributors to serve customers nationwide.",
    },
    east: {
      label: "East Africa",
      body: "Beyond Ethiopia, we have export partnerships signed in East Africa and welcome enquiries from established importers and distributors across the region.",
    },
  },
  am: {
    eyebrow: "ገበያዎች",
    title: "ኢትዮጵያ እና ምስራቅ አፍሪካ",
    ethiopia: {
      label: "ኢትዮጵያ",
      body: "በኢትዮጵያ በሀገር አቀፍ ደረጃ ደንበኞችን ለማገልገል ጅምላ ነጋዴዎችንና አከፋፋዮችን እየሾምን ነን።",
    },
    east: {
      label: "ምስራቅ አፍሪካ",
      body: "ከኢትዮጵያ ውጭ በምስራቅ አፍሪካ የተፈረሙ የወጪ ንግድ አጋርነቶች አሉን፤ በክልሉ ከተቋቋሙ አስመጪዎችና አከፋፋዮች ጥያቄ እንቀበላለን።",
    },
  },
} as const;

export function DistributorMarkets({ locale }: DistributorMarketsProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
              {t.ethiopia.label}
            </p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-deep-navy">
              {t.ethiopia.body}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
              {t.east.label}
            </p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-deep-navy">
              {t.east.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
