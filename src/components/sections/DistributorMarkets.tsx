"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

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
    <section data-header-tone="light" className="overflow-hidden bg-sky-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-line lg:grid-cols-2">
          <div className="relative min-h-[16rem] bg-deep-navy lg:min-h-[22rem]">
            <ScrollImage src={visuals.export} effect="zoom-in" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-xinix-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-band">
                {t.ethiopia.label}
              </p>
              <p className="mt-3 max-w-md text-lg font-medium leading-relaxed text-white">
                {t.ethiopia.body}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {t.east.label}
            </p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-deep-navy sm:text-2xl">
              {t.east.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
