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
    origin: "Origin",
    plant: "Ethiopian plant",
    plantNote: "Made here, then moved through partners.",
    ethiopia: {
      status: "Appointing now",
      label: "Ethiopia",
      body: "In Ethiopia, we are appointing wholesalers and distributors to serve customers nationwide.",
      scope: "Nationwide",
    },
    east: {
      status: "Partnerships signed",
      label: "East Africa",
      body: "Beyond Ethiopia, we have export partnerships signed in East Africa and welcome enquiries from established importers and distributors across the region.",
      scope: "The region",
      open: "Further enquiries welcome",
    },
  },
  am: {
    eyebrow: "ገበያዎች",
    title: "ኢትዮጵያ እና ምስራቅ አፍሪካ",
    origin: "መነሻ",
    plant: "የኢትዮጵያ ፋብሪካ",
    plantNote: "እዚህ የተሠራ፣ በአጋሮች የሚንቀሳቀስ።",
    ethiopia: {
      status: "አሁን እየሾምን",
      label: "ኢትዮጵያ",
      body: "በኢትዮጵያ በሀገር አቀፍ ደረጃ ደንበኞችን ለማገልገል ጅምላ ነጋዴዎችንና አከፋፋዮችን እየሾምን ነን።",
      scope: "በሀገር አቀፍ",
    },
    east: {
      status: "አጋርነቶች ተፈርመዋል",
      label: "ምስራቅ አፍሪካ",
      body: "ከኢትዮጵያ ውጭ በምስራቅ አፍሪካ የተፈረሙ የወጪ ንግድ አጋርነቶች አሉን፤ በክልሉ ከተቋቋሙ አስመጪዎችና አከፋፋዮች ጥያቄ እንቀበላለን።",
      scope: "ክልሉ",
      open: "ተጨማሪ ጥያቄ እንቀበላለን",
    },
  },
} as const;

export function DistributorMarkets({ locale }: DistributorMarketsProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-line bg-white">
          <div className="grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div className="relative min-h-[14rem] bg-deep-navy lg:min-h-full">
              <ScrollImage src={visuals.export} effect="drift-left" sizes="(max-width: 1024px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-xinix-blue/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-sky-band">
                  {t.origin}
                </p>
                <p className="mt-3 text-2xl font-bold text-white">{t.plant}</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">{t.plantNote}</p>
              </div>
            </div>

            <div className="flex flex-col">
              <article className="flex flex-1 flex-col border-b border-line p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="rounded-sm bg-xinix-blue px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                    {t.ethiopia.status}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                    {t.ethiopia.scope}
                  </p>
                </div>
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
                  {t.ethiopia.label}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-stone sm:text-lg">
                  {t.ethiopia.body}
                </p>
              </article>

              <article className="flex flex-1 flex-col bg-sky-wash p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="rounded-sm border border-deep-navy/20 bg-white px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-deep-navy">
                    {t.east.status}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                    {t.east.scope}
                  </p>
                </div>
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
                  {t.east.label}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-stone sm:text-lg">
                  {t.east.body}
                </p>
                <p className="mt-5 text-sm font-semibold text-xinix-blue">{t.east.open}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
