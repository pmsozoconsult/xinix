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
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>
        <ol className="mt-10">
          {t.items.map((item, index) => (
            <li
              key={item.title}
              className="flex gap-4 border-t border-line py-5 last:border-b sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-sm text-stone/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xl font-bold text-xinix-blue">{item.title}</p>
                <p className="mt-1 text-base text-stone">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href={localePath(locale, "/products")}>{content.ui.browseRange}</Button>
        </div>
      </div>
    </section>
  );
}
