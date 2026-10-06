"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorWhyProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Why partner with Xinix",
    title: "A local manufacturer your customers can rely on",
    supply: "Supply",
    ethiopia: {
      title: "Made in Ethiopia",
      body: "Local production means shorter lead times, more dependable availability and less exposure to foreign exchange constraints, customs processes and overseas shipping delays.",
    },
    pricing: {
      title: "More predictable pricing",
      body: "Local production reduces exposure to import delays and exchange rate movements.",
    },
    offPath: "Off the import path",
    offItems: ["Foreign exchange queues", "Customs holds", "Overseas shipping"],
    shelf: "What you can sell",
    everyday: {
      title: "Products people use every day",
      body: "Drinking water treatment, hand and surface hygiene, food washing, after harvest care and industrial cleaning. Everyday products that customers buy again and again.",
    },
    range: {
      title: "A range for every customer",
      body: "Retail sizes for shops and pharmacies, plus larger packs and two pack kits for hospitals, farms, hotels and factories.",
    },
    retail: "Retail",
    retailNote: "Shops and pharmacies",
    bulk: "Bulk and kits",
    bulkNote: "Hospitals, farms, hotels, factories",
    buyers: ["Shops", "Pharmacies", "Hospitals", "Farms", "Hotels", "Factories"],
    tender: "The story tenders now ask for",
    clean: {
      title: "Built on cleaner manufacturing",
      body: "Solar powered production, zero process wastewater and biodegradable formulas. A manufacturing story that institutional and export customers increasingly ask about.",
    },
    stamps: ["Solar powered", "Zero process wastewater", "Biodegradable formulas"],
  },
  am: {
    eyebrow: "ከዚኒክስ ጋር ለምን",
    title: "ደንበኞችዎ ሊተማመኑበት የሚችሉ የአገር ውስጥ አምራች",
    supply: "አቅርቦት",
    ethiopia: {
      title: "በኢትዮጵያ የተሠራ",
      body: "የአገር ውስጥ ምርት አጭር የመላኪያ ጊዜ፣ የሚታመን አቅርቦት፣ እና በውጭ ምንዛሬ፣ ጉምሩክና የባህር ማዶ መጓጓዣ መዘግየት ላይ ያለውን ተጋላጭነት ይቀንሳል።",
    },
    pricing: {
      title: "ይበልጥ ሊገመት የሚችል ዋጋ",
      body: "የአገር ውስጥ ምርት የማስመጣት መዘግየትና የምንዛሬ እንቅስቃሴ ተጋላጭነትን ይቀንሳል።",
    },
    offPath: "ከማስመጣት መንገድ ውጭ",
    offItems: ["የውጭ ምንዛሬ ወረፋ", "የጉምሩክ መቆያ", "የባህር ማዶ መጓጓዣ"],
    shelf: "መሸጥ የሚችሉት",
    everyday: {
      title: "ሰዎች ዕለት የሚጠቀሙባቸው ምርቶች",
      body: "የመጠጥ ውሃ ሕክምና፣ የእጅና የገጽታ ንጽህና፣ የምግብ ማጠብ፣ ከመከር በኋላ እንክብካቤና የኢንዱስትሪ ማጽዳት። ደንበኞች ደጋግመው የሚገዙዋቸው ምርቶች።",
    },
    range: {
      title: "ለእያንዳንዱ ደንበኛ ስብስብ",
      body: "ለሱቆችና ፋርማሲዎች የችርቻሮ መጠኖች፣ ለሆስፒታሎች፣ እርሻዎች፣ ሆቴሎችና ፋብሪካዎች ትላልቅ ጥቅሎችና የሁለት ጥቅል ስብስቦች።",
    },
    retail: "ችርቻሮ",
    retailNote: "ሱቆችና ፋርማሲዎች",
    bulk: "ጅምላና ስብስቦች",
    bulkNote: "ሆስፒታሎች፣ እርሻዎች፣ ሆቴሎች፣ ፋብሪካዎች",
    buyers: ["ሱቆች", "ፋርማሲዎች", "ሆስፒታሎች", "እርሻዎች", "ሆቴሎች", "ፋብሪካዎች"],
    tender: "ጨረታዎች አሁን የሚጠይቁት",
    clean: {
      title: "በንጹሕ ማምረት ላይ የተመሠረተ",
      body: "በፀሐይ ኃይል ምርት፣ ዜሮ የሂደት ፈሳሽ ቆሻሻ፣ የሚበሰብሱ ቀመሮች። ተቋማዊና የወጪ ንግድ ደንበኞች እየጠየቁት ያለ የማምረቻ ታሪክ።",
    },
    stamps: ["በፀሐይ ኃይል", "ዜሮ የሂደት ፈሳሽ ቆሻሻ", "የሚበሰብሱ ቀመሮች"],
  },
} as const;

export function DistributorWhy({ locale }: DistributorWhyProps) {
  const t = copy[locale];

  return (
    <>
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-deep-navy/15">
          <p className="pt-6 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-xinix-blue">
            {t.supply}
          </p>

          <div className="mt-6 grid gap-8 border-b border-line py-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
            <h3 className="text-2xl font-bold tracking-tight text-deep-navy">{t.ethiopia.title}</h3>
            <p className="max-w-2xl text-base leading-relaxed text-stone sm:text-lg">{t.ethiopia.body}</p>
          </div>
          <div className="grid gap-8 border-b border-line py-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
            <h3 className="text-2xl font-bold tracking-tight text-deep-navy">{t.pricing.title}</h3>
            <p className="max-w-2xl text-base leading-relaxed text-stone sm:text-lg">{t.pricing.body}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">{t.offPath}</p>
            {t.offItems.map((item) => (
              <span
                key={item}
                className="text-sm text-stone/55 line-through decoration-stone/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-xinix-blue">
            {t.shelf}
          </p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-deep-navy">
                  {t.everyday.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone">{t.everyday.body}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-deep-navy">
                  {t.range.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone">{t.range.body}</p>
              </div>
            </div>

          <div className="grid grid-cols-2 gap-3" aria-hidden>
            <div className="flex flex-col items-center justify-end rounded-2xl bg-sky-wash px-4 pb-5 pt-8">
              <span className="h-16 w-10 rounded-b-2xl rounded-t-md bg-xinix-blue shadow-md" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-deep-navy">
                {t.retail}
              </p>
              <p className="mt-1 text-center text-xs leading-snug text-stone">{t.retailNote}</p>
            </div>
            <div className="flex flex-col items-center justify-end rounded-2xl bg-deep-navy px-4 pb-5 pt-8">
              <span className="flex items-end gap-1.5">
                <span className="h-24 w-12 rounded-b-2xl rounded-t-md bg-sky-band" />
                <span className="flex flex-col gap-1">
                  <span className="h-10 w-8 rounded-md bg-white/85" />
                  <span className="h-10 w-8 rounded-md bg-white/60" />
                </span>
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
                {t.bulk}
              </p>
              <p className="mt-1 text-center text-xs leading-snug text-white/65">{t.bulkNote}</p>
            </div>
          </div>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {t.buyers.map((buyer) => (
            <li
              key={buyer}
              className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-medium text-deep-navy"
            >
              {buyer}
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section data-header-tone="dark" className="bg-deep-navy">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-sky-band">
            {t.tender}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.stamps.map((stamp) => (
              <span
                key={stamp}
                className="rounded-sm border border-white/35 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white"
              >
                {stamp}
              </span>
            ))}
          </div>
          <h3 className="mt-8 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {t.clean.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.clean.body}
          </p>
        </div>
    </section>
    </>
  );
}
