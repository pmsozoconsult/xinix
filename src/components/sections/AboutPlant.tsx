"use client";

import Link from "next/link";
import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { type CategorySlug } from "@/lib/categories";

interface AboutPlantProps {
  locale: Locale;
}

const heading = {
  en: {
    eyebrow: "What we make",
    title: "Five areas, one manufacturer",
  },
  am: {
    eyebrow: "የምናመርተው",
    title: "አምስት መስኮች፣ አንድ አምራች",
  },
} as const;

const areas: Record<
  Locale,
  { slug: CategorySlug; title: string; body: string }[]
> = {
  en: [
    {
      slug: "water-and-household",
      title: "For your home",
      body: "Safer drinking water, hand hygiene, foot care and food washing.",
    },
    {
      slug: "hygiene-and-institutional",
      title: "Healthcare and institutions",
      body: "Hygiene for hospitals, clinics, schools, hotels and offices.",
    },
    {
      slug: "water-and-household",
      title: "Water systems and aviation",
      body: "Treatment for water tanks, reservoirs, airports and aircraft water storage systems.",
    },
    {
      slug: "food-and-agriculture",
      title: "Food and agriculture",
      body: "After harvest care, greenhouse hygiene and animal housing hygiene.",
    },
    {
      slug: "industrial-and-biofilm",
      title: "Food, beverage and industry",
      body: "Biofilm control for process lines and industrial cleaners for production equipment.",
    },
  ],
  am: [
    {
      slug: "water-and-household",
      title: "ለቤትዎ",
      body: "ደህንነቱ የተጠበቀ የመጠጥ ውሃ፣ የእጅ ንጽህና፣ የእግር እንክብካቤና የምግብ ማጠብ።",
    },
    {
      slug: "hygiene-and-institutional",
      title: "ጤናና ተቋማት",
      body: "ለሆስፒታሎች፣ ክሊኒኮች፣ ትምህርት ቤቶች፣ ሆቴሎችና ቢሮዎች ንጽህና።",
    },
    {
      slug: "water-and-household",
      title: "የውሃ ሥርዓቶችና አቪዬሽን",
      body: "ለውሃ ታንኮች፣ ማጠራቀሚያዎች፣ አውሮፕላን ማረፊያዎችና የአውሮፕላን ውሃ ማከማቻ።",
    },
    {
      slug: "food-and-agriculture",
      title: "ምግብና ግብርና",
      body: "ከመከር በኋላ እንክብካቤ፣ የግሪንሀውስ ንጽህናና የእንስሳት መኖሪያ ንጽህና።",
    },
    {
      slug: "industrial-and-biofilm",
      title: "ምግብ፣ መጠጥና ኢንዱስትሪ",
      body: "ለሂደት መስመሮች የባዮፊልም ቁጥጥርና ለምርት መሣሪያዎች የኢንዱስትሪ ማጽጃ።",
    },
  ],
};

export function AboutPlant({ locale }: AboutPlantProps) {
  const h = heading[locale];
  const items = areas[locale];

  return (
    <section data-header-tone="dark" className="relative min-h-[28rem] overflow-hidden bg-deep-navy sm:min-h-[36rem]">
      <div className="absolute inset-0">
        <ScrollImage src={visuals.manufacturing} effect="parallax-up" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-xinix-blue/30 to-xinix-blue/10" />
      </div>

      <div className="relative flex min-h-[28rem] flex-col justify-end sm:min-h-[36rem]">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-band">
              {h.eyebrow}
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {h.title}
            </h2>
          </Reveal>
        </div>
        <div className="border-t border-white/15 bg-deep-navy/70 backdrop-blur-sm">
          <nav className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-5">
            {items.map((item, index) => (
              <Link
                key={`${item.title}-${index}`}
                href={localePath(locale, `/products/${item.slug}`)}
                className="border-t border-white/10 px-4 py-5 transition hover:bg-white/5 sm:border-t-0 sm:border-l sm:first:border-l-0 sm:px-5"
              >
                <p className="font-mono text-[11px] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 hidden text-xs leading-relaxed text-white/55 lg:block">
                  {item.body}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
