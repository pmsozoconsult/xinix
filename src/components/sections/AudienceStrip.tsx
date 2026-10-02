"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";

interface AudienceStripProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Why Xinix",
    title: "Simple to choose. Made to use correctly.",
    body: "Local production, formulas that break down after use, and a range where each product has one job.",
    items: [
      {
        title: "Made in Ethiopia",
        body: "Local production means shorter lead times, steady availability and fair pricing.",
      },
      {
        title: "Kind to the environment",
        body: "Our formulations break down after use and leave no lasting residue in water, soil or food when used as directed.",
      },
      {
        title: "One product, one job",
        body: "Each product is designed for a specific use, which makes it simple to choose and easy to use correctly.",
      },
      {
        title: "Practical support",
        body: "We help businesses and institutions with product selection, dosing and staff training.",
      },
    ],
  },
  am: {
    eyebrow: "ለምን ዚኒክስ",
    title: "ለመምረጥ ቀላል። በትክክል ለመጠቀም የተሠራ።",
    body: "የአገር ውስጥ ምርት፣ ከአጠቃቀም በኋላ የሚበሰብሱ ቀመሮች፣ እና እያንዳንዱ ምርት አንድ ሥራ ያለው ስብስብ።",
    items: [
      {
        title: "በኢትዮጵያ የተሠራ",
        body: "የአገር ውስጥ ምርት አጭር የመላኪያ ጊዜ፣ የተረጋጋ አቅርቦትና ፍትሐዊ ዋጋ ማለት ነው።",
      },
      {
        title: "ለአካባቢ የለዘበ",
        body: "ቀመሮቻችን ከአጠቃቀም በኋላ ይበሰብሳሉ፤ እንደተመራ ሲውሉ በውሃ፣ በአፈር ወይም በምግብ ላይ የሚቀር ቅሪት አይተዉም።",
      },
      {
        title: "አንድ ምርት፣ አንድ ሥራ",
        body: "እያንዳንዱ ምርት ለተወሰነ አጠቃቀም የተዘጋጀ ነው፤ ይህም ለመምረጥ ቀላልና በትክክል ለመጠቀም ያቀላል።",
      },
      {
        title: "ተግባራዊ ድጋፍ",
        body: "ለንግድና ተቋማት የምርት ምርጫ፣ መጠንና የሠራተኛ ስልጠና እንረዳለን።",
      },
    ],
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
  const h = copy[locale];

  return (
    <section data-header-tone="light" className="relative overflow-hidden bg-paper py-20 sm:py-24">
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {h.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
              {h.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
              {h.body}
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3">
            {h.items.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-xinix-blue/10 text-xinix-blue">
                  <CheckMark />
                </span>
                <div>
                  <p className="text-sm font-semibold text-deep-navy">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
