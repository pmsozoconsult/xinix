"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorLaneProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Consignment",
    title: "The goods are already on a lane",
    rows: [
      {
        col: "Origin",
        mark: "ET",
        title: "Ethiopia",
        body: "The plant packs for transit, with room to grow beside a partner.",
      },
      {
        col: "In transit",
        mark: "Live",
        title: "Already supplied",
        body: "Distributors beyond Ethiopia are taking product now.",
      },
      {
        col: "Open",
        mark: "Next",
        title: "East Africa, then the continent",
        body: "Conversations are open. This is a market, not a one-off container.",
      },
    ],
  },
  am: {
    eyebrow: "ጭነት",
    title: "ምርቱ አሁን በመስመር ላይ ነው",
    rows: [
      {
        col: "መነሻ",
        mark: "ET",
        title: "ኢትዮጵያ",
        body: "ፋብሪካው ለመጓጓዣ ያሽጋል፣ ከአጋር ጋር ለማደግ ቦታ አለው።",
      },
      {
        col: "በመንገድ",
        mark: "አሁን",
        title: "ቀድሞ ይቀርባል",
        body: "ከኢትዮጵያ ውጭ ያሉ አከፋፋዮች ምርት እየወሰዱ ነው።",
      },
      {
        col: "ክፍት",
        mark: "ቀጥል",
        title: "ምስራቅ አፍሪካ፣ ከዚያ አህጉሩ",
        body: "ውይይቶች ክፍት ናቸው። ይህ ገበያ ነው እንጂ አንድ ኮንቴይነር አይደለም።",
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden border border-deep-navy/15 bg-white">
          <div className="hidden grid-cols-[8rem_5rem_1fr] border-b border-line bg-deep-navy font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 sm:grid">
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
