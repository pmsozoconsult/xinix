"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutChallengesProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "The challenges we address",
    items: [
      {
        stat: "14%",
        title: "Safe drinking water",
        body: "Only 14% of people in Ethiopia use a safely managed drinking water service. Many families collect, carry and store water whose quality can change before it is used. Drink+ and AquaDis Tank make stored water, tanks and distribution lines safer to use.",
      },
      {
        stat: "3%",
        title: "Everyday hygiene",
        body: "Just 3% of Ethiopian households have a place to wash hands with soap and water at home. Our hand, surface and healthcare hygiene products are made for homes, schools and clinics where clean running water cannot be taken for granted.",
      },
      {
        stat: "½",
        title: "Food lost after harvest",
        body: "Across sub-Saharan Africa, up to half of all fruit and vegetables are lost before they reach the market, often where storage, transport and cold chain capacity are limited. PostHarvest+, VegDis and FungDis help keep produce, flowers, coffee and spices clean and fresh for longer.",
      },
    ],
  },
  am: {
    eyebrow: "የምንፈታቸው ችግሮች",
    items: [
      {
        stat: "14%",
        title: "ደህንነቱ የተጠበቀ የመጠጥ ውሃ",
        body: "በኢትዮጵያ ከህዝቡ 14% ብቻ ደህንነቱ በአግባብ የተጠበቀ የመጠጥ ውሃ አገልግሎት ይጠቀማል። ብዙ ቤተሰቦች ጥራቱ ከመጠቀም በፊት ሊቀየር የሚችል ውሃ ይሰበስባሉ፣ ይሸከማሉ፣ ያከማቻሉ። Drink+ እና AquaDis Tank የተከማቸ ውሃ፣ ታንኮችና የስርጭት መስመሮችን ለመጠቀም ይበልጥ ደህንነቱ የተጠበቀ ያደርጋሉ።",
      },
      {
        stat: "3%",
        title: "ዕለታዊ ንጽህና",
        body: "የኢትዮጵያ ቤተሰቦች ከ3% ብቻ በቤት ውስጥ በሳሙናና በውሃ እጅ የሚታጠብበት ቦታ አላቸው። የእጅ፣ የገጽታና የጤና ተቋም ንጽህና ምርቶቻችን ንጹሕ የሚፈስ ውሃ እንደማይታሰብ ለሚሆኑ ቤቶች፣ ትምህርት ቤቶችና ክሊኒኮች ተሠርተዋል።",
      },
      {
        stat: "½",
        title: "ከመከር በኋላ የሚጠፋ ምግብ",
        body: "በሰሃራ ደቡብ አፍሪካ እስከ ግማሽ የሚሆነው ፍራፍሬና አትክልት ገበያ ሳይደርስ ይጠፋል — ብዙውን ጊዜ ማከማቻ፣ መጓጓዣና ቀዝቃዛ ሰንሰለት በሚጎድልበት። PostHarvest+፣ VegDis እና FungDis ምርት፣ አበባ፣ ቡናና ቅመም ረዘም ላለ ጊዜ ንጹሕና ትኩስ እንዲቆዩ ይረዳሉ።",
      },
    ],
  },
} as const;

export function AboutChallenges({ locale }: AboutChallengesProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {t.items.map((item) => (
            <Reveal key={item.title}>
              <p className="font-mono text-6xl font-bold leading-none tracking-tight text-xinix-blue sm:text-7xl">
                {item.stat}
              </p>
              <h3 className="mt-5 text-xl font-bold text-deep-navy">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-stone">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
