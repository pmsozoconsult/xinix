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
      { title: "Product training", body: "Product training for your sales team." },
      { title: "Marketing", body: "Marketing materials and product photography." },
      { title: "Technical guidance", body: "Technical guidance on dosing and application." },
      { title: "Supply planning", body: "Supply planning based on agreed forecasts and orders." },
      { title: "Registration support", body: "Technical support for product registration in export markets." },
    ],
  },
  am: {
    eyebrow: "የምንሰጠው",
    title: "ከመጀመሪያው ትዕዛዝ ጀምሮ ድጋፍ",
    items: [
      { title: "የምርት ስልጠና", body: "ለሽያጭ ቡድንዎ የምርት ስልጠና።" },
      { title: "ግብይት", body: "የግብይት ቁሳቁስ እና የምርት ፎቶግራፍ።" },
      { title: "ቴክኒካዊ መመሪያ", body: "ስለ መጠንና አጠቃቀም ቴክኒካዊ መመሪያ።" },
      { title: "የአቅርቦት ዕቅድ", body: "በተስማማ ትንበያና ትዕዛዝ ላይ የተመሠረተ የአቅርቦት ዕቅድ።" },
      { title: "የምዝገባ ድጋፍ", body: "በወጪ ንግድ ገበያዎች ለምርት ምዝገባ ቴክኒካዊ ድጋፍ።" },
    ],
  },
} as const;

export function DistributorManifest({ locale }: DistributorManifestProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-sky-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] bg-line sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((item, index) => (
            <article key={item.title} className="bg-white p-6 sm:p-7">
              <span className="block h-1 w-8 rounded-full bg-xinix-blue" />
              <p className="mt-5 font-mono text-xs text-stone">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-bold text-deep-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
