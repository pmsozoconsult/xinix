"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutGoalProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Our goal",
    title: "A dependable local source for the products Africa relies on",
    body: "Our goal is simple: homes, hospitals, farms and factories in Ethiopia and East Africa should be able to buy effective water treatment, hygiene and cleaning products made on the continent, without depending on imports.",
    lead: "To get there, we are working towards five priorities:",
    items: [
      {
        title: "Safer water for more families",
        body: "Make water treatment affordable and easy to use for households, schools and community water programmes.",
      },
      {
        title: "Healthier homes and institutions",
        body: "Give clinics, schools and workplaces reliable hygiene products for everyday use.",
      },
      {
        title: "Less food lost after harvest",
        body: "Help farmers, packhouses and exporters keep produce, flowers, coffee and spices clean and fresh through storage, handling and transport.",
      },
      {
        title: "Less dependence on imports",
        body: "Offer locally made alternatives to imported water treatment, hygiene and cleaning products, with dependable supply and pricing in birr.",
      },
      {
        title: "Cleaner manufacturing",
        body: "Show that manufacturing in Africa can run on solar power, keep process water on site and make products that break down after use.",
      },
    ],
  },
  am: {
    eyebrow: "ግባችን",
    title: "አፍሪካ ለምትደገፍባቸው ምርቶች የሚታመን የአገር ውስጥ ምንጭ",
    body: "ግባችን ቀላል ነው፦ በኢትዮጵያና በምስራቅ አፍሪካ ያሉ ቤቶች፣ ሆስፒታሎች፣ እርሻዎችና ፋብሪካዎች ውጤታማ የውሃ ሕክምና፣ ንጽህናና ማጽጃ ምርቶችን በአህጉሩ የተሠሩ፣ በማስመጣት ሳይደገፉ መግዛት መቻል አለባቸው።",
    lead: "ወደዚያ ለመድረስ በአምስት ቅድሚያዎች እንሠራለን፦",
    items: [
      {
        title: "ለተጨማሪ ቤተሰቦች ደህንነቱ የተጠበቀ ውሃ",
        body: "የውሃ ሕክምናን ለቤተሰብ፣ ለትምህርት ቤትና ለማህበረሰብ የውሃ ፕሮግራሞች ርካሽና ለመጠቀም ቀላል ማድረግ።",
      },
      {
        title: "ጤናማ ቤቶችና ተቋማት",
        body: "ለክሊኒኮች፣ ለትምህርት ቤቶችና ለሥራ ቦታዎች ለዕለት ተዕለት አስተማማኝ የንጽህና ምርቶች መስጠት።",
      },
      {
        title: "ከመከር በኋላ የሚጠፋ ምግብ መቀነስ",
        body: "ገበሬዎች፣ ማሸጊያ ቤቶችና ላኪዎች ምርት፣ አበባ፣ ቡናና ቅመም በማከማቻ፣ በአያያዝና በመጓጓዣ ንጹሕና ትኩስ እንዲቆዩ መርዳት።",
      },
      {
        title: "በማስመጣት ላይ ያለውን ጥገኝነት መቀነስ",
        body: "ለሚመጡ የውሃ ሕክምና፣ ንጽህናና ማጽጃ ምርቶች በአገር ውስጥ የተሠሩ አማራጮች፣ በብር የሚታመን አቅርቦትና ዋጋ።",
      },
      {
        title: "ንጹሕ ማምረት",
        body: "በአፍሪካ ማምረት በፀሐይ ኃይል እንደሚሠራ፣ የሂደት ውሃ በቦታው እንደሚቆይ፣ ምርቶች ከጥቅም በኋላ እንደሚበሰብሱ ማሳየት።",
      },
    ],
  },
} as const;

export function AboutGoal({ locale }: AboutGoalProps) {
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
            {t.body}
          </p>
          <p className="mt-4 text-sm font-medium text-deep-navy">{t.lead}</p>
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
