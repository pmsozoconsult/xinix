"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface ProductsFaqProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Frequently asked questions",
    items: [
      {
        q: "Where are Xinix products made?",
        a: "All Xinix products are made in Ethiopia. Our head office is in Addis Ababa.",
      },
      {
        q: "Can I use Drink+ at home?",
        a: "Yes. Drink+ is designed for household water containers and storage tanks. Follow the dosing guide on the label for your container size.",
      },
      {
        q: "How is PureStep used?",
        a: "Spray PureStep directly onto clean, dry feet once or twice a day. It helps eliminate foot fungus and reduce odour when used as shown on the label.",
      },
      {
        q: "What foods can VegDis be used on?",
        a: "VegDis is suitable for fruit, vegetables, meat, chicken and fish. Dilute and rinse as shown on the label.",
      },
      {
        q: "What is a two pack product?",
        a: "AquaDis Tank, PostHarvest+, FungDis and BiofilmDis are supplied as two separate packs. You mix them on site just before use, which keeps the product at full strength until the moment you need it.",
      },
      {
        q: "Can PostHarvest+ be used in coffee processing?",
        a: "Yes. PostHarvest+ treats the water used to wash coffee at washing stations, helping keep process water clean through each batch.",
      },
      {
        q: "Is AquaDis Tank suitable for aviation water systems?",
        a: "Yes. AquaDis Tank is used for airport water facilities and aircraft water storage systems, applied according to the product instructions.",
      },
      {
        q: "Is HandDis safe for children?",
        a: "HandDis is alcohol free and made for frequent use. Children should use it with adult supervision, as with any hygiene product.",
      },
      {
        q: "Can businesses buy in bulk?",
        a: "Yes. We supply hospitals, schools, hotels, airlines, farms, food processors and factories at volume prices. Request a quote with the products and quantities you need.",
      },
      {
        q: "Do you deliver outside Addis Ababa?",
        a: "Yes. Include your delivery location in your quote request and we will confirm availability, delivery timing and freight costs.",
      },
    ],
  },
  am: {
    eyebrow: "ተደጋጋሚ ጥያቄዎች",
    items: [
      {
        q: "የዚኒክስ ምርቶች የት ይመረታሉ?",
        a: "ሁሉም የዚኒክስ ምርቶች በኢትዮጵያ ይመረታሉ። ዋና ቢሮአችን በአዲስ አበባ ነው።",
      },
      {
        q: "Drink+ በቤት መጠቀም እችላለሁ?",
        a: "አዎ። Drink+ ለቤት የውሃ መያዣዎችና ማጠራቀሚያ ታንኮች የተዘጋጀ ነው። ለመያዣዎ መጠን በመለያው ላይ ያለውን የመጠን መመሪያ ይከተሉ።",
      },
      {
        q: "PureStep እንዴት ይውላል?",
        a: "PureStepን በቀን አንድ ወይም ሁለት ጊዜ በንጹሕ፣ ደረቅ እግሮች ላይ በቀጥታ ይርጩ። በመለያው እንደተመለከተ ሲውል የእግር ፈንገስን ለማስወገድና ሽታን ለመቀነስ ይረዳል።",
      },
      {
        q: "VegDis በየትኞቹ ምግቦች ላይ ይውላል?",
        a: "VegDis ለፍራፍሬ፣ አትክልት፣ ሥጋ፣ ዶሮና ዓሳ ተስማሚ ነው። በመለያው እንደተመለከተ ይቀልጡና ያጥቡ።",
      },
      {
        q: "የሁለት ጥቅል ምርት ምንድን ነው?",
        a: "AquaDis Tank፣ PostHarvest+፣ FungDis እና BiofilmDis እንደ ሁለት የተለያዩ ጥቅሎች ይቀርባሉ። ከመጠቀም በፊት በቦታው ይደባለቋቸዋል፤ ይህም ምርቱ እስከሚያስፈልግበት ጊዜ ሙሉ ጥንካሬውን እንዲጠብቅ ያደርጋል።",
      },
      {
        q: "PostHarvest+ በቡና ማቀነባበር ላይ ይውላል?",
        a: "አዎ። PostHarvest+ በማጠቢያ ጣቢያዎች ቡና ለማጠብ የሚውለውን ውሃ ያክማል፤ በእያንዳንዱ ባች የሂደት ውሃ ንጹሕ እንዲቆይ ይረዳል።",
      },
      {
        q: "AquaDis Tank ለአቪዬሽን ውሃ ሥርዓቶች ተስማሚ ነው?",
        a: "አዎ። AquaDis Tank ለአውሮፕላን ማረፊያ ውሃ ተቋማትና የአውሮፕላን ውሃ ማከማቻ ሥርዓቶች ይውላል፤ እንደ ምርቱ መመሪያ ይተገበራል።",
      },
      {
        q: "HandDis ለልጆች ደህንነቱ የተጠበቀ ነው?",
        a: "HandDis ከአልኮል ነፃና ለተደጋጋሚ አጠቃቀም የተሠራ ነው። ልጆች እንደማንኛውም የንጽህና ምርት በአዋቂ ክትትል ሊጠቀሙበት ይገባል።",
      },
      {
        q: "ንግዶች በጅምላ መግዛት ይችላሉ?",
        a: "አዎ። ሆስፒታሎችን፣ ትምህርት ቤቶችን፣ ሆቴሎችን፣ አየር መንገዶችን፣ እርሻዎችን፣ የምግብ ማቀነባበሪያዎችንና ፋብሪካዎችን በመጠን ዋጋ እናቀርባለን። የሚያስፈልጉዎትን ምርቶችና መጠኖች ጠቅሰው ዋጋ ይጠይቁ።",
      },
      {
        q: "ከአዲስ አበባ ውጭ ታደርሳላችሁ?",
        a: "አዎ። በዋጋ ጥያቄዎ የመላኪያ ቦታዎን ያካትቱ፤ አቅርቦት፣ የመላኪያ ጊዜና የጭነት ወጪ እናረጋግጣለን።",
      },
    ],
  },
} as const;

export function ProductsFaq({ locale }: ProductsFaqProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
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
