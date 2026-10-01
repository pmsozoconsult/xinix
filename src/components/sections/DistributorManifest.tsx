"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorManifestProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "What we look for",
    title: "The crate only moves with the right partner",
    items: [
      {
        code: "01 REACH",
        title: "Into the segments we serve",
        body: "Water, hygiene, harvest, industry — not a general warehouse looking for any SKU.",
      },
      {
        code: "02 STORE",
        title: "The means to hold and move product",
        body: "Proper storage and distribution, not a one-van trial.",
      },
      {
        code: "03 STAY",
        title: "A market, not a single order",
        body: "We grow with partners who intend to be in the territory.",
      },
    ],
  },
  am: {
    eyebrow: "የምንፈልገው",
    title: "ሳጥኑ የሚንቀሳቀሰው ትክክለኛ አጋር ሲኖር ነው",
    items: [
      {
        code: "01 ደረስ",
        title: "ወደምናገለግላቸው ክፍሎች",
        body: "ውሃ፣ ንጽህና፣ መከር፣ ኢንዱስትሪ — ማንኛውንም ምርት የሚፈልግ መጋዘን አይደለም።",
      },
      {
        code: "02 አከማች",
        title: "ምርትን የማቆየትና የማንቀሳቀስ አቅም",
        body: "ትክክለኛ ማከማቻና ስርጭት፣ አንድ ቫን ሙከራ አይደለም።",
      },
      {
        code: "03 ቆይ",
        title: "ገበያ፣ አንድ ትዕዛዝ አይደለም",
        body: "በግዛቱ ለመኖር ካሰቡ አጋሮች ጋር እናድጋለን።",
      },
    ],
  },
} as const;

export function DistributorManifest({ locale }: DistributorManifestProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="bg-deep-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-solar-amber">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <ol className="mt-14 divide-y divide-dashed divide-white/20 border-y border-dashed border-white/20">
          {t.items.map((item) => (
            <li
              key={item.code}
              className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-10"
            >
              <p className="font-mono text-sm font-bold tracking-[0.18em] text-solar-amber">
                {item.code}
              </p>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
