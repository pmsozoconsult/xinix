"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";

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
        title: "Process water stays on site",
        body: "The plant is designed so effluent is not sent to drain or to a river.",
      },
      {
        n: "02",
        title: "Reject water is reused",
        body: "Streams that fail a pass are returned into production instead of being discarded.",
      },
      {
        n: "03",
        title: "The rest becomes product",
        body: "Water that remains in the chemistry is packed and sold, not discharged.",
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
        title: "የሂደት ውሃ በቦታው ይቀራል",
        body: "ፋብሪካው ፍሳሽ ወደ ቧንቧ ወይም ወንዝ እንዳይላክ ተደርጎ የተዘጋጀ ነው።",
      },
      {
        n: "02",
        title: "የተቀረ ውሃ እንደገና ይጠቀማል",
        body: "ያልተሳካ ፍሰት ወደ ምርት ይመለሳል እንጂ አይጣልም።",
      },
      {
        n: "03",
        title: "የቀረው የምርት አካል ይሆናል",
        body: "በኬሚካሉ ውስጥ የሚቀረው ውሃ ተሞልቶ ይሸጣል እንጂ አይወጣም።",
      },
    ],
  },
} as const;

export function SustainabilityCycle({ locale }: SustainabilityCycleProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="bg-deep-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t.body}
          </p>
        </Reveal>

        <Stagger className="relative mt-14 space-y-0">
          {t.steps.map((step, index) => (
            <motion.article
              key={step.n}
              variants={staggerItem}
              className="relative grid gap-4 border-t border-white/10 py-8 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-10 last:pb-0"
            >
              {index < t.steps.length - 1 && (
                <div
                  className="absolute left-[1.4rem] top-[4.75rem] hidden h-[calc(100%-1.5rem)] w-px bg-drop-cyan/30 sm:block"
                  aria-hidden
                />
              )}
              <p className="font-mono text-3xl font-bold text-drop-cyan/80">{step.n}</p>
              <div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-white/70">
                  {step.body}
                </p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
