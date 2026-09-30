"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutFootprintProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Where we sit",
    title: "Addis, the plant, and the route out",
    points: [
      { label: "Head office", key: "office" as const },
      { label: "Plant", key: "plant" as const },
      {
        label: "Markets",
        text: "Buyers across Ethiopia, with exports into East Africa and the wider continent.",
      },
    ],
  },
  am: {
    eyebrow: "የት እንዳለን",
    title: "አዲስ አበባ፣ ፋብሪካው፣ እና የውጭ መስመር",
    points: [
      { label: "ዋና ቢሮ", key: "office" as const },
      { label: "ፋብሪካ", key: "plant" as const },
      {
        label: "ገበያዎች",
        text: "በመላው ኢትዮጵያ ገዢዎች፣ ወደ ምስራቅ አፍሪካ እና አህጉሩ የሚወጣ ንግድ።",
      },
    ],
  },
} as const;

export function AboutFootprint({ locale, content }: AboutFootprintProps) {
  const t = copy[locale];
  const { contact } = content;

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12">
          <div className="mb-8 hidden h-px bg-line sm:block" aria-hidden />
          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {t.points.map((point, index) => {
              const body =
                "key" in point ? contact[point.key] : point.text;
              return (
                <li key={point.label} className="relative">
                  <span className="mb-4 hidden h-2.5 w-2.5 rounded-full bg-xinix-teal sm:block" />
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone">
                    {String(index + 1).padStart(2, "0")} · {point.label}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-deep-navy">{body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
