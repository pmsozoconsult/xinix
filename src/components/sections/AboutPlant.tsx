"use client";

import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { type CategorySlug } from "@/lib/categories";

const categoryOrder: CategorySlug[] = [
  "water-and-household",
  "hygiene-and-institutional",
  "food-and-agriculture",
  "industrial-and-biofilm",
];

interface AboutPlantProps {
  locale: Locale;
  content: SiteContent;
}

const heading = {
  en: {
    eyebrow: "From the plant",
    title: "Four needs, one manufacturer",
  },
  am: {
    eyebrow: "ከፋብሪካው",
    title: "አራት ፍላጎት፣ አንድ አምራች",
  },
} as const;

export function AboutPlant({ locale, content }: AboutPlantProps) {
  const h = heading[locale];

  return (
    <section data-header-tone="dark" className="relative min-h-[28rem] overflow-hidden bg-deep-navy sm:min-h-[36rem]">
      <div className="absolute inset-0">
        <ScrollImage src={visuals.manufacturing} effect="parallax-up" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-deep-navy/20" />
      </div>

      <div className="relative flex min-h-[28rem] flex-col justify-end sm:min-h-[36rem]">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
              {h.eyebrow}
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {h.title}
            </h2>
          </Reveal>
        </div>
        <div className="border-t border-white/15 bg-deep-navy/70 backdrop-blur-sm">
          <nav className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
            {categoryOrder.map((slug, index) => {
              const item = content.home.rangeItems[index];
              if (!item) return null;
              return (
                <Link
                  key={slug}
                  href={localePath(locale, `/products/${slug}`)}
                  className="border-t border-white/10 px-4 py-5 transition hover:bg-white/5 sm:border-t-0 sm:border-l sm:first:border-l-0 sm:px-6"
                >
                  <p className="font-mono text-[11px] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
