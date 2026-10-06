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
      { mark: "01", title: "Apply", body: "Tell us about your business, your territory and the customers you serve." },
      { mark: "02", title: "Talk", body: "Our team contacts you to discuss products, volumes and terms." },
      { mark: "03", title: "Agree", body: "We confirm territory, pricing and supply arrangements in a written agreement." },
      { mark: "04", title: "Launch", body: "We train your team, provide marketing materials and plan your first delivery." },
    ],
  },
  am: {
    eyebrow: "እንዴት እንደሚሠራ",
    title: "ከመጀመሪያ ግንኙነት እስከ መጀመሪያ መላኪያ",
    rows: [
      { mark: "01", title: "ያመልክቱ", body: "ስለ ንግድዎ፣ ግዛትዎ እና ስለሚያገለግሏቸው ደንበኞች ይንገሩን።" },
      { mark: "02", title: "ይነጋገሩ", body: "ቡድናችን ስለ ምርቶች፣ መጠኖችና ውሎች ለመወያየት ያገኝዎታል።" },
      { mark: "03", title: "ይስማሙ", body: "ግዛት፣ ዋጋና የአቅርቦት ሥርዓቶችን በጽሑፍ ሥምምነት እናረጋግጣለን።" },
      { mark: "04", title: "ይጀምሩ", body: "ቡድንዎን እናሰለጥናለን፣ የግብይት ቁሳቁስ እንሰጣለን፣ የመጀመሪያ መላኪያዎን እናቅዳለን።" },
    ],
  },
} as const;

export function DistributorLane({ locale }: DistributorLaneProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.rows.map((row, index) => (
            <li key={row.title} className="relative">
              {index < t.rows.length - 1 ? (
                <span className="pointer-events-none absolute left-12 top-5 hidden h-px bg-xinix-blue/30 lg:block lg:right-[-1.5rem]" />
              ) : null}
              <p className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-xinix-blue font-mono text-sm font-bold text-white">
                {row.mark}
              </p>
              <h3 className="mt-5 text-xl font-bold text-deep-navy">{row.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">{row.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
