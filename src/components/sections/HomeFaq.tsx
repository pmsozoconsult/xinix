"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface HomeFaqProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Frequently asked questions",
    title: "Questions buyers ask us",
    items: [
      {
        q: "Where are Xinix products made?",
        a: "All Xinix products are made in our own plant in Ethiopia. Our head office is in Addis Ababa.",
      },
      {
        q: "When can I order?",
        a: "Commercial production begins in December 2026. You can request a quote now and plan your first delivery from launch.",
      },
      {
        q: "Can I buy in bulk?",
        a: "Yes. We supply hospitals, schools, hotels, airlines, farms, food processors and factories at volume prices.",
      },
      {
        q: "Do you deliver outside Addis Ababa?",
        a: "Yes. Include your delivery location in your quote request and we will confirm timing and freight costs.",
      },
      {
        q: "Are your products safe for food contact?",
        a: "VegDis and PostHarvest+ are made for use on food and in food handling. Follow the dilution and rinse instructions on the label.",
      },
    ],
  },
  am: {
    eyebrow: "ተደጋጋሚ ጥያቄዎች",
    title: "ገዢዎች የሚጠይቁን ጥያቄዎች",
    items: [
      {
        q: "የዚኒክስ ምርቶች የት ይመረታሉ?",
        a: "ሁሉም የዚኒክስ ምርቶች በኢትዮጵያ ባለን የራሳችን ፋብሪካ ይመረታሉ። ዋና ቢሮአችን በአዲስ አበባ ነው።",
      },
      {
        q: "መቼ ማዘዝ እችላለሁ?",
        a: "ንግድ ምርት ከታኅሣሥ 2019 ዓ.ም. ይጀምራል። አሁን ዋጋ መጠየቅና ከመጀመሪያው ጀምሮ የመጀመሪያ መላኪያዎን ማቀድ ይችላሉ።",
      },
      {
        q: "በጅምላ መግዛት እችላለሁ?",
        a: "አዎ። ሆስፒታሎችን፣ ትምህርት ቤቶችን፣ ሆቴሎችን፣ አየር መንገዶችን፣ እርሻዎችን፣ የምግብ ማቀነባበሪያዎችንና ፋብሪካዎችን በመጠን ዋጋ እናቀርባለን።",
      },
      {
        q: "ከአዲስ አበባ ውጭ ታደርሳላችሁ?",
        a: "አዎ። በዋጋ ጥያቄዎ የመላኪያ ቦታዎን ያካትቱ፤ ጊዜና የጭነት ወጪ እናረጋግጣለን።",
      },
      {
        q: "ምርቶቻችሁ ከምግብ ጋር ለሚገናኙ አጠቃቀሞች ደህንነታቸው የተጠበቀ ነው?",
        a: "VegDis እና PostHarvest+ በምግብ ላይና በምግብ አያያዝ ለመጠቀም የተሠሩ ናቸው። በመለያው ላይ ያለውን የማቅለጥና የማጠብ መመሪያ ይከተሉ።",
      },
    ],
  },
} as const;

export function HomeFaq({ locale }: HomeFaqProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
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
          {t.items.map((item) => (
            <li key={item.q} className="border-t border-line py-6 last:border-b">
              <p className="text-lg font-bold text-xinix-blue">{item.q}</p>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-stone">{item.a}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
