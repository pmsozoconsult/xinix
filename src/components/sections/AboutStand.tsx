"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutStandProps {
  locale: Locale;
}

const copy = {
  en: {
    missionEyebrow: "Our mission",
    mission:
      "To make safe, effective and affordable water treatment, hygiene and cleaning products in Africa, for Africa, so that homes, institutions and businesses can rely on a local source.",
    visionEyebrow: "Our vision",
    vision:
      "To be East Africa's most trusted manufacturer of water treatment, food hygiene and cleaning products, built on clean energy and local enterprise.",
    standEyebrow: "What we stand for",
    values: [
      {
        title: "Local",
        body: "We manufacture in Ethiopia, create skilled jobs and keep investment in the country.",
      },
      {
        title: "Responsible",
        body: "We use solar power, protect water and make formulas that break down after use.",
      },
      {
        title: "Reliable",
        body: "Every product is made to one approved formula, and every batch is checked before it ships.",
      },
      {
        title: "Honest",
        body: "We say only what we can prove, and we share our product documents on request.",
      },
    ],
  },
  am: {
    missionEyebrow: "ተልዕኮአችን",
    mission:
      "ደህንነቱ የተጠበቀ፣ ውጤታማና ተመጣጣኝ የውሃ ሕክምና፣ ንጽህናና ማጽጃ ምርቶችን በአፍሪካ ለአፍሪካ ማምረት፣ ቤቶች፣ ተቋማትና ንግዶች በአገር ውስጥ ምንጭ እንዲተማመኑ።",
    visionEyebrow: "ራዕያችን",
    vision:
      "በንጹሕ ኃይልና በአገር ውስጥ ሥራ ላይ የተመሠረተ፣ በምስራቅ አፍሪካ በጣም የሚታመን የውሃ ሕክምና፣ የምግብ ንጽህናና ማጽጃ ምርቶች አምራች መሆን።",
    standEyebrow: "የምንቆምበት",
    values: [
      {
        title: "አገር ውስጥ",
        body: "በኢትዮጵያ እናመርታለን፣ የክህሎት ሥራ እንፈጥራለን፣ ኢንቨስትመንትን በሀገር ውስጥ እናቆያለን።",
      },
      {
        title: "ኃላፊነት",
        body: "የፀሐይ ኃይል እንጠቀማለን፣ ውሃን እንጠብቃለን፣ ከጥቅም በኋላ የሚበሰብሱ ቀመሮች እናመርታለን።",
      },
      {
        title: "አስተማማኝ",
        body: "እያንዳንዱ ምርት በአንድ የጸደቀ ቀመር ይመረታል፤ እያንዳንዱ ባች ከመላኩ በፊት ይመረመራል።",
      },
      {
        title: "ታማኝ",
        body: "ማረጋገጥ የምንችለውን ብቻ እንናገራለን፤ የምርት ሰነዶቻችንን በጥያቄ እናካፍላለን።",
      },
    ],
  },
} as const;

export function AboutStand({ locale }: AboutStandProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {t.missionEyebrow}
            </p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-deep-navy sm:text-2xl">
              {t.mission}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {t.visionEyebrow}
            </p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-deep-navy sm:text-2xl">
              {t.vision}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.standEyebrow}
          </p>
        </Reveal>
        <ol className="mt-6">
          {t.values.map((item, index) => (
            <li
              key={item.title}
              className="flex gap-4 border-t border-line py-5 last:border-b sm:items-center sm:gap-6"
            >
              <span className="shrink-0 font-mono text-sm text-stone/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-8">
                <p className="text-2xl font-bold tracking-tight text-xinix-blue">{item.title}</p>
                <p className="mt-2 text-base leading-relaxed text-stone sm:mt-0">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
