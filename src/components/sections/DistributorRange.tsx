"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface DistributorRangeProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "What we make",
    title: "Five areas, one manufacturer",
    items: [
      { title: "For your home", body: "Drink+, HandDis, PureStep, VegDis" },
      { title: "Healthcare and institutions", body: "MedDis, SurfDis" },
      { title: "Water systems and aviation", body: "AquaDis Tank" },
      { title: "Food and agriculture", body: "PostHarvest+, FungDis, VetDis" },
      { title: "Food, beverage and industry", body: "BiofilmDis, SystemFlush+, AcidX, Degrease+" },
    ],
  },
  am: {
    eyebrow: "የምናመርተው",
    title: "አምስት መስኮች፣ አንድ አምራች",
    items: [
      { title: "ለቤትዎ", body: "Drink+፣ HandDis፣ PureStep፣ VegDis" },
      { title: "ጤናና ተቋማት", body: "MedDis፣ SurfDis" },
      { title: "የውሃ ሥርዓቶችና አቪዬሽን", body: "AquaDis Tank" },
      { title: "ምግብና ግብርና", body: "PostHarvest+፣ FungDis፣ VetDis" },
      { title: "ምግብ፣ መጠጥና ኢንዱስትሪ", body: "BiofilmDis፣ SystemFlush+፣ AcidX፣ Degrease+" },
    ],
  },
} as const;

export function DistributorRange({ locale, content }: DistributorRangeProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-sky-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              {t.title}
            </h2>
          </Reveal>
          <Button href={localePath(locale, "/products")}>{content.ui.browseRange}</Button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-base font-bold text-deep-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-xinix-blue">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
