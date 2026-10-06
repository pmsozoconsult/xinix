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
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">{t.intro}</p>
          <p className="mt-6 text-base leading-relaxed text-deep-navy">{t.close}</p>
        </Reveal>
        <ul className="space-y-3">
          {t.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-line bg-sky-wash px-5 py-4 text-base font-medium text-deep-navy"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-xinix-blue" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
