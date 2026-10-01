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
    items: [
      {
        title: "Made in Ethiopia",
        body: "Local production means shorter lead times, more dependable availability and less exposure to foreign exchange constraints, customs processes and overseas shipping delays.",
      },
      {
        title: "More predictable pricing",
        body: "Local production reduces exposure to import delays and exchange rate movements.",
      },
      {
        title: "Products people use every day",
        body: "Drinking water treatment, hand and surface hygiene, food washing, after harvest care and industrial cleaning. Everyday products that customers buy again and again.",
      },
      {
        title: "A range for every customer",
        body: "Retail sizes for shops and pharmacies, plus larger packs and two pack kits for hospitals, farms, hotels and factories.",
      },
      {
        title: "Built on cleaner manufacturing",
        body: "Solar powered production, zero process wastewater and biodegradable formulas. A manufacturing story that institutional and export customers increasingly ask about.",
      },
    ],
  },
  am: {
    eyebrow: "ከዚኒክስ ጋር ለምን",
    title: "ደንበኞችዎ ሊተማመኑበት የሚችሉ የአገር ውስጥ አምራች",
    items: [
      {
        title: "በኢትዮጵያ የተሠራ",
        body: "የአገር ውስጥ ምርት አጭር የመላኪያ ጊዜ፣ የሚታመን አቅርቦት፣ እና በውጭ ምንዛሬ፣ ጉምሩክና የባህር ማዶ መጓጓዣ መዘግየት ላይ ያለውን ተጋላጭነት ይቀንሳል።",
      },
      {
        title: "ይበልጥ ሊገመት የሚችል ዋጋ",
        body: "የአገር ውስጥ ምርት የማስመጣት መዘግየትና የምንዛሬ እንቅስቃሴ ተጋላጭነትን ይቀንሳል።",
      },
      {
        title: "ሰዎች ዕለት የሚጠቀሙባቸው ምርቶች",
        body: "የመጠጥ ውሃ ሕክምና፣ የእጅና የገጽታ ንጽህና፣ የምግብ ማጠብ፣ ከመከር በኋላ እንክብካቤና የኢንዱስትሪ ማጽዳት። ደንበኞች ደጋግመው የሚገዙዋቸው ምርቶች።",
      },
      {
        title: "ለእያንዳንዱ ደንበኛ ስብስብ",
        body: "ለሱቆችና ፋርማሲዎች የችርቻሮ መጠኖች፣ ለሆስፒታሎች፣ እርሻዎች፣ ሆቴሎችና ፋብሪካዎች ትላልቅ ጥቅሎችና የሁለት ጥቅል ስብስቦች።",
      },
      {
        title: "በንጹሕ ማምረት ላይ የተመሠረተ",
        body: "በፀሐይ ኃይል ምርት፣ ዜሮ የሂደት ፈሳሽ ቆሻሻ፣ የሚበሰብሱ ቀመሮች። ተቋማዊና የወጪ ንግድ ደንበኞች እየጠየቁት ያለ የማምረቻ ታሪክ።",
      },
    ],
  },
} as const;

export function DistributorWhy({ locale }: DistributorWhyProps) {
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
        </Reveal>
        <ol className="mt-10">
          {t.items.map((item, index) => (
            <li
              key={item.title}
              className="flex gap-4 border-t border-line py-5 last:border-b sm:gap-6"
            >
              <span className="mt-1 shrink-0 font-mono text-sm text-stone/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xl font-bold tracking-tight text-xinix-blue sm:text-2xl">
                  {item.title}
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-stone">
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
