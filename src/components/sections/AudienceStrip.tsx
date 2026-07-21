"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { audienceSectors } from "@/lib/productMeta";

interface AudienceStripProps {
  locale: Locale;
}

const heading = {
  en: {
    eyebrow: "Who it's for",
    title: "Trusted across sectors",
    body: "From single clinics to national water authorities, Xinix supplies buyers who need a dependable, local source.",
  },
  am: {
    eyebrow: "ለማን",
    title: "በተለያዩ ዘርፎች የታመነ",
    body: "ከአንድ ክሊኒክ እስከ አገር አቀፍ የውሃ ባለስልጣናት፣ ዚኒክስ አስተማማኝና የአገር ውስጥ አቅርቦት ለሚፈልጉ ገዢዎች ያቀርባል።",
  },
} as const;

function CheckMark() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AudienceStrip({ locale }: AudienceStripProps) {
  const h = heading[locale];

  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--line) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
          <Reveal className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {h.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              {h.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
              {h.body}
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-3">
            {audienceSectors.map((sector) => (
              <motion.div
                key={sector.en}
                variants={staggerItem}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-xinix-teal/10 text-teal-text">
                  <CheckMark />
                </span>
                <span className="text-sm font-semibold text-deep-navy">
                  {locale === "en" ? sector.en : sector.am}
                </span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
