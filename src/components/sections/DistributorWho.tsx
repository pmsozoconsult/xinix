"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface DistributorWhoProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Who we are looking for",
    title: "The right partners, for the long term",
    intro:
      "We work with established businesses that can represent the range properly and grow with us. Each partner already has a door into a market we make for.",
    ledger: "Partner types",
    items: [
      {
        door: "Trade",
        role: "Wholesalers and distributors",
        serves: ["Shops", "Supermarkets", "Pharmacies"],
      },
      {
        door: "Institutions",
        role: "Institutional suppliers",
        serves: ["Hospitals", "Clinics", "Schools", "Hotels"],
      },
      {
        door: "Agriculture",
        role: "Agricultural suppliers",
        serves: ["Farms", "Flower growers", "Packhouses"],
      },
      {
        door: "Industry",
        role: "Industrial suppliers",
        serves: ["Food plants", "Beverage plants", "Manufacturing"],
      },
    ],
    export: {
      door: "Export",
      role: "Importers and distributors in East African markets",
      note: "For partners already moving goods across the region.",
    },
    screen: "What we screen for",
    criteria: [
      { title: "Capacity", body: "Appropriate storage and delivery." },
      { title: "Reach", body: "Customers in the sectors we serve." },
      { title: "Commitment", body: "Building the market, not a single order." },
    ],
  },
  am: {
    eyebrow: "የምንፈልጋቸው",
    title: "ለረጅም ጊዜ የሚሆኑ ትክክለኛ አጋሮች",
    intro:
      "ስብስቡን በአግባቡ ሊወክሉና ከእኛ ጋር ሊያድጉ ከሚችሉ የተቋቋሙ ንግዶች ጋር እንሠራለን። እያንዳንዱ አጋር ወደምናመርትለት ገበያ አስቀድሞ መግቢያ አለው።",
    ledger: "የአጋር ዓይነቶች",
    items: [
      {
        door: "ንግድ",
        role: "ጅምላ ነጋዴዎችና አከፋፋዮች",
        serves: ["ሱቆች", "ሱፐርማርኬቶች", "ፋርማሲዎች"],
      },
      {
        door: "ተቋማት",
        role: "የተቋም አቅራቢዎች",
        serves: ["ሆስፒታሎች", "ክሊኒኮች", "ትምህርት ቤቶች", "ሆቴሎች"],
      },
      {
        door: "ግብርና",
        role: "የግብርና አቅራቢዎች",
        serves: ["እርሻዎች", "የአበባ አምራቾች", "ማሸጊያ ቤቶች"],
      },
      {
        door: "ኢንዱስትሪ",
        role: "የኢንዱስትሪ አቅራቢዎች",
        serves: ["የምግብ ፋብሪካዎች", "የመጠጥ ፋብሪካዎች", "ማምረቻ"],
      },
    ],
    export: {
      door: "ወጪ ንግድ",
      role: "በምስራቅ አፍሪካ ገበያዎች አስመጪዎችና አከፋፋዮች",
      note: "በክልሉ እቃ የሚያንቀሳቅሱ አጋሮች።",
    },
    screen: "የምንፈልገው",
    criteria: [
      { title: "አቅም", body: "ተገቢ ማከማቻና መላኪያ።" },
      { title: "መድረስ", body: "ወደምናገለግላቸው ዘርፎች ደንበኞች።" },
      { title: "ቁርጠኝነት", body: "አንድ ትዕዛዝ ሳይሆን ገበያ መገንባት።" },
    ],
  },
} as const;

const doorTone = [
  "border-l-xinix-blue",
  "border-l-xinix-teal",
  "border-l-leaf-green",
  "border-l-solar-amber",
] as const;

export function DistributorWho({ locale }: DistributorWhoProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-stone sm:text-lg">
              {t.intro}
            </p>
          </Reveal>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-xinix-blue lg:text-right">
            {t.ledger}
          </p>
        </div>

        <div className="mt-10 border-t border-deep-navy/15">
          {t.items.map((item, index) => (
            <article
              key={item.door}
              className={cn(
                "grid gap-3 border-b border-line py-6 pl-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:pl-5",
                "border-l-4",
                doorTone[index],
              )}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone">
                {item.door}
              </p>
              <div>
                <p className="text-xl font-bold tracking-tight text-deep-navy">{item.role}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {item.serves.map((customer) => (
                    <li key={customer} className="text-sm text-stone">
                      {customer}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="grid gap-3 border-b border-line bg-paper py-6 pl-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:pl-5 border-l-4 border-l-deep-navy">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-deep-navy">
              {t.export.door}
            </p>
            <div>
              <p className="text-xl font-bold tracking-tight text-deep-navy">{t.export.role}</p>
              <p className="mt-2 text-sm text-stone">{t.export.note}</p>
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-8 border-t border-deep-navy/15 pt-8 sm:grid-cols-3">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-xinix-blue sm:col-span-3">
            {t.screen}
          </p>
          {t.criteria.map((item) => (
            <div key={item.title}>
              <p className="text-lg font-bold text-deep-navy">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone sm:text-base">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
