"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorWhoProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Who we are looking for",
    title: "The right partners, for the long term",
    intro:
      "We work with established businesses that can represent the range properly and grow with us.",
    items: [
      "Wholesalers and distributors serving shops, supermarkets and pharmacies",
      "Suppliers to hospitals, clinics, schools and hotels",
      "Agricultural suppliers serving farms, flower growers and packhouses",
      "Industrial suppliers serving food, beverage and manufacturing plants",
      "Importers and distributors in East African markets",
    ],
    close:
      "We look for appropriate storage and delivery capacity, reach into the sectors we serve, and a commitment to building the market rather than placing a single order.",
  },
  am: {
    eyebrow: "የምንፈልጋቸው",
    title: "ለረጅም ጊዜ የሚሆኑ ትክክለኛ አጋሮች",
    intro: "ስብስቡን በአግባቡ ሊወክሉና ከእኛ ጋር ሊያድጉ ከሚችሉ የተቋቋሙ ንግዶች ጋር እንሠራለን።",
    items: [
      "ሱቆችን፣ ሱፐርማርኬቶችንና ፋርማሲዎችን የሚያገለግሉ ጅምላ ነጋዴዎችና አከፋፋዮች",
      "ለሆስፒታሎች፣ ክሊኒኮች፣ ትምህርት ቤቶችና ሆቴሎች አቅራቢዎች",
      "እርሻዎችን፣ የአበባ አምራቾችንና ማሸጊያ ቤቶችን የሚያገለግሉ የግብርና አቅራቢዎች",
      "የምግብ፣ መጠጥና ማምረቻ ፋብሪካዎችን የሚያገለግሉ የኢንዱስትሪ አቅራቢዎች",
      "በምስራቅ አፍሪካ ገበያዎች አስመጪዎችና አከፋፋዮች",
    ],
    close:
      "ተገቢ የማከማቻና የመላኪያ አቅም፣ ወደምናገለግላቸው ዘርፎች መድረስ፣ እና አንድ ትዕዛዝ ከመጣል ይልቅ ገበያውን ለመገንባት ቁርጠኝነት እንፈልጋለን።",
  },
} as const;

export function DistributorWho({ locale }: DistributorWhoProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {t.intro}
          </p>
        </Reveal>
        <ol className="mt-10">
          {t.items.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-4 border-t border-line py-5 last:border-b"
            >
              <span className="font-mono text-sm text-stone/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-bold tracking-tight text-xinix-blue sm:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone">{t.close}</p>
      </div>
    </section>
  );
}
