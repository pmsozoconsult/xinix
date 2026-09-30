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
    loop: "Closed loop",
    steps: [
      {
        n: "01",
        title: "Stays on site",
        body: "Effluent is not sent to drain or to a river. Process water never leaves the fence.",
      },
      {
        n: "02",
        title: "Returned to process",
        body: "Streams that fail a pass go back into production instead of being discarded.",
      },
      {
        n: "03",
        title: "Packed as product",
        body: "Water that remains in the chemistry is filled and sold, not discharged.",
      },
    ],
  },
  am: {
    eyebrow: "ዜሮ ፈሳሽ ቆሻሻ",
    title: "ምንም ነገር እንደ ቆሻሻ ከቦታው አይወጣም",
    body: "ሌላ ቦታ የሚጣል ውሃ እዚህ በዑደት ውስጥ ይቀራል፦ በሂደቱ እንደገና ይጠቀማል ወይም በምርቱ ውስጥ ይገባል።",
    loop: "የተዘጋ ዑደት",
    steps: [
      {
        n: "01",
        title: "በቦታው ይቀራል",
        body: "ፍሳሽ ወደ ቧንቧ ወይም ወንዝ አይላክም። የሂደት ውሃ ከአጥሩ ውጭ አይወጣም።",
      },
      {
        n: "02",
        title: "ወደ ሂደት ይመለሳል",
        body: "ያልተሳካ ፍሰት ወደ ምርት ይመለሳል እንጂ አይጣልም።",
      },
      {
        n: "03",
        title: "እንደ ምርት ይሞላል",
        body: "በኬሚካሉ ውስጥ የሚቀረው ውሃ ተሞልቶ ይሸጣል እንጂ አይወጣም።",
      },
    ],
  },
} as const;

export function SustainabilityCycle({ locale }: SustainabilityCycleProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="relative overflow-hidden bg-deep-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-drop-cyan/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-[18rem] w-[18rem] -translate-y-1/2 rounded-full border border-drop-cyan/25"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {t.body}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-drop-cyan/80">
              {t.loop}
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-0 sm:grid-cols-3">
          {t.steps.map((step, index) => (
            <motion.article
              key={step.n}
              variants={staggerItem}
              className="relative px-0 py-8 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="font-mono text-5xl font-bold leading-none text-white/10 sm:text-6xl">
                {step.n}
              </p>
              <div className="relative mt-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-drop-cyan" />
                {index < t.steps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-drop-cyan/40 sm:block"
                    aria-hidden
                  />
                )}
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65 sm:text-base">
                {step.body}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
