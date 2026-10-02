"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

interface SustainabilityCycleProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Zero liquid discharge",
    title: "Nothing leaves the site as waste",
    body: "Water that would be dumped elsewhere is kept in the loop: reused in the process, or taken up in the product.",
    steps: [
      {
        n: "01",
        title: "Stays on site",
        body: "Effluent is not sent to drain or to a river.",
      },
      {
        n: "02",
        title: "Returned to process",
        body: "Failed streams go back into production, not to waste.",
      },
      {
        n: "03",
        title: "Packed as product",
        body: "What remains in the chemistry is filled and sold.",
      },
    ],
  },
  am: {
    eyebrow: "ዜሮ ፈሳሽ ቆሻሻ",
    title: "ምንም ነገር እንደ ቆሻሻ ከቦታው አይወጣም",
    body: "ሌላ ቦታ የሚጣል ውሃ እዚህ በዑደት ውስጥ ይቀራል፦ በሂደቱ እንደገና ይጠቀማል ወይም በምርቱ ውስጥ ይገባል።",
    steps: [
      {
        n: "01",
        title: "በቦታው ይቀራል",
        body: "ፍሳሽ ወደ ቧንቧ ወይም ወንዝ አይላክም።",
      },
      {
        n: "02",
        title: "ወደ ሂደት ይመለሳል",
        body: "ያልተሳካ ፍሰት ወደ ምርት ይመለሳል እንጂ አይጣልም።",
      },
      {
        n: "03",
        title: "እንደ ምርት ይሞላል",
        body: "በኬሚካሉ ውስጥ የሚቀረው ተሞልቶ ይሸጣል።",
      },
    ],
  },
} as const;

export function SustainabilityCycle({ locale }: SustainabilityCycleProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="relative overflow-hidden bg-deep-navy">
      <div className="absolute inset-0">
        <ScrollImage
          src={visuals.manufacturing}
          effect="parallax-up"
          intensity={0.8}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-xinix-blue/25 to-xinix-blue/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-band">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {t.body}
            </p>
          </Reveal>
        </div>

        <Stagger className="space-y-0 rounded-3xl border border-white/15 bg-deep-navy/50 p-2 backdrop-blur-sm sm:p-3">
          {t.steps.map((step, index) => (
            <motion.article
              key={step.n}
              variants={staggerItem}
              className="relative flex gap-5 px-4 py-5 sm:px-5 sm:py-6"
            >
              {index < t.steps.length - 1 && (
                <div
                  className="absolute bottom-0 left-[2.15rem] top-16 w-px bg-sky-band/35"
                  aria-hidden
                />
              )}
              <span className="relative z-10 font-mono text-sm font-bold text-sky-band">
                {step.n}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
