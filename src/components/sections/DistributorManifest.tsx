"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorManifestProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "What we provide",
    title: "Support from the first order",
    items: [
      {
        code: "01",
        title: "Product training",
        body: "Product training for your sales team.",
      },
      {
        code: "02",
        title: "Marketing",
        body: "Marketing materials and product photography.",
      },
      {
        code: "03",
        title: "Technical guidance",
        body: "Technical guidance on dosing and application.",
      },
      {
        code: "04",
        title: "Supply planning",
        body: "Supply planning based on agreed forecasts and orders.",
      },
      {
        code: "05",
        title: "Registration support",
        body: "Technical support for product registration in export markets.",
      },
    ],
  },
  am: {
    eyebrow: "የምንሰጠው",
    title: "ከመጀመሪያው ትዕዛዝ ጀምሮ ድጋፍ",
    items: [
      {
        code: "01",
        title: "የምርት ስልጠና",
        body: "ለሽያጭ ቡድንዎ የምርት ስልጠና።",
      },
      {
        code: "02",
        title: "ግብይት",
        body: "የግብይት ቁሳቁስ እና የምርት ፎቶግራፍ።",
      },
      {
        code: "03",
        title: "ቴክኒካዊ መመሪያ",
        body: "ስለ መጠንና አጠቃቀም ቴክኒካዊ መመሪያ።",
      },
      {
        code: "04",
        title: "የአቅርቦት ዕቅድ",
        body: "በተስማማ ትንበያና ትዕዛዝ ላይ የተመሠረተ የአቅርቦት ዕቅድ።",
      },
      {
        code: "05",
        title: "የምዝገባ ድጋፍ",
        body: "በወጪ ንግድ ገበያዎች ለምርት ምዝገባ ቴክኒካዊ ድጋፍ።",
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
