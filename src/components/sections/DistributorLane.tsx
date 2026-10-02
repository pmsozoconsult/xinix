"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorLaneProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "How it works",
    title: "From first contact to first delivery",
    rows: [
      {
        col: "Step",
        mark: "01",
        title: "Apply",
        body: "Tell us about your business, your territory and the customers you serve.",
      },
      {
        col: "Step",
        mark: "02",
        title: "Talk",
        body: "Our team contacts you to discuss products, volumes and terms.",
      },
      {
        col: "Step",
        mark: "03",
        title: "Agree",
        body: "We confirm territory, pricing and supply arrangements in a written agreement.",
      },
      {
        col: "Step",
        mark: "04",
        title: "Launch",
        body: "We train your team, provide marketing materials and plan your first delivery.",
      },
    ],
  },
  am: {
    eyebrow: "እንዴት እንደሚሠራ",
    title: "ከመጀመሪያ ግንኙነት እስከ መጀመሪያ መላኪያ",
    rows: [
      {
        col: "ደረጃ",
        mark: "01",
        title: "ያመልክቱ",
        body: "ስለ ንግድዎ፣ ግዛትዎ እና ስለሚያገለግሏቸው ደንበኞች ይንገሩን።",
      },
      {
        col: "ደረጃ",
        mark: "02",
        title: "ይነጋገሩ",
        body: "ቡድናችን ስለ ምርቶች፣ መጠኖችና ውሎች ለመወያየት ያገኝዎታል።",
      },
      {
        col: "ደረጃ",
        mark: "03",
        title: "ይስማሙ",
        body: "ግዛት፣ ዋጋና የአቅርቦት ሥርዓቶችን በጽሑፍ ሥምምነት እናረጋግጣለን።",
      },
      {
        col: "ደረጃ",
        mark: "04",
        title: "ይጀምሩ",
        body: "ቡድንዎን እናሰለጥናለን፣ የግብይት ቁሳቁስ እንሰጣለን፣ የመጀመሪያ መላኪያዎን እናቅዳለን።",
      },
    ],
  },
} as const;

export function DistributorLane({ locale }: DistributorLaneProps) {
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

        <div className="mt-12 overflow-hidden border border-deep-navy/15 bg-white">
          <div className="hidden grid-cols-[8rem_5rem_1fr] border-b border-line bg-xinix-blue-deep font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 sm:grid">
            <span className="px-4 py-3">{locale === "en" ? "Stage" : "ደረጃ"}</span>
            <span className="px-4 py-3">{locale === "en" ? "Code" : "ኮድ"}</span>
            <span className="px-4 py-3">{locale === "en" ? "Note" : "ማስታወሻ"}</span>
          </div>
          <ol>
            {t.rows.map((row) => (
              <li
                key={row.title}
                className="grid gap-2 border-b border-line px-4 py-6 last:border-b-0 sm:grid-cols-[8rem_5rem_1fr] sm:items-start sm:px-0 sm:py-0"
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-stone sm:px-4 sm:py-6">
                  {row.col}
                </p>
                <p className="font-mono text-sm font-bold text-solar-amber sm:px-4 sm:py-6">
                  {row.mark}
                </p>
                <div className="sm:px-4 sm:py-6">
                  <p className="text-lg font-bold text-deep-navy">{row.title}</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                    {row.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
