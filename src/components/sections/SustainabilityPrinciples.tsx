"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import {
  IconBiodegradable,
  IconEthiopia,
  IconSolar,
  IconZeroDischarge,
} from "@/components/Icons";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SustainabilityPrinciplesProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Four principles",
    title: "What every batch is built on",
    body: "Buyers who care where chemicals come from can check the plant, not only the label.",
    items: [
      {
        title: "Solar powered",
        body: "The plant runs on off-grid solar, so production does not depend on the national grid and carries no electricity bill.",
      },
      {
        title: "Zero liquid discharge",
        body: "No wastewater leaves the site. Reject water is reused, and the rest becomes part of the product itself.",
      },
      {
        title: "Biodegradable formulas",
        body: "After use the chemistry breaks down to harmless byproducts, instead of lingering in water and soil.",
      },
      {
        title: "Local materials, local jobs",
        body: "Most raw materials are bought inside Ethiopia, which keeps supply close and money in the country.",
      },
    ],
  },
  am: {
    eyebrow: "አራት መርሆዎች",
    title: "እያንዳንዱ ባች የሚመረትበት መሠረት",
    body: "ኬሚካሎች ከየት እንደመጡ ለሚያስቡ ገዢዎች ፋብሪካውን ማረጋገጥ ይቻላል፣ መለያውን ብቻ ሳይሆን።",
    items: [
      {
        title: "በፀሐይ ኃይል",
        body: "ፋብሪካው ከዋናው መስመር ውጭ በፀሐይ ኃይል ይሠራል፤ ምርት በሀገራዊ ኃይል አቅርቦት ላይ አይደገፍም፣ የኤሌክትሪክ ክፍያም የለውም።",
      },
      {
        title: "ዜሮ ፈሳሽ ቆሻሻ",
        body: "ምንም ፈሳሽ ቆሻሻ ከቦታው አይወጣም። የተቀረው ውሃ እንደገና ጥቅም ላይ ይውላል፣ የቀረውም የምርቱ አካል ይሆናል።",
      },
      {
        title: "በተፈጥሮ የሚበሰብስ",
        body: "ከጥቅም በኋላ ኬሚካሉ ወደማይጎዱ ንጥረ ነገሮች ይበሰብሳል እንጂ በውሃና በአፈር ውስጥ አይቀመጥም።",
      },
      {
        title: "የአገር ውስጥ ግብዓትና ሥራ",
        body: "አብዛኛው ጥሬ ዕቃ ከኢትዮጵያ ውስጥ ይገዛል፤ አቅርቦት ቅርብ ሆኖ ገንዘቡ በሀገር ውስጥ ይቀራል።",
      },
    ],
  },
} as const;

const meta = [
  {
    Icon: IconSolar,
    text: "text-solar-amber",
    soft: "bg-solar-amber/10",
    ring: "ring-solar-amber/30",
    bar: "bg-solar-amber",
  },
  {
    Icon: IconZeroDischarge,
    text: "text-drop-cyan",
    soft: "bg-drop-cyan/10",
    ring: "ring-drop-cyan/30",
    bar: "bg-drop-cyan",
  },
  {
    Icon: IconBiodegradable,
    text: "text-leaf-green",
    soft: "bg-leaf-green/10",
    ring: "ring-leaf-green/30",
    bar: "bg-leaf-green",
  },
  {
    Icon: IconEthiopia,
    text: "text-xinix-teal",
    soft: "bg-xinix-teal/10",
    ring: "ring-xinix-teal/30",
    bar: "bg-xinix-teal",
  },
] as const;

export function SustainabilityPrinciples({ locale }: SustainabilityPrinciplesProps) {
  const t = copy[locale];

  return (
    <section
      id="principles"
      data-header-tone="light"
      className="scroll-mt-24 bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {t.body}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.items.map((item, index) => {
            const { Icon, text, soft, ring, bar } = meta[index];
            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                className="group flex flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl ring-1",
                      soft,
                      text,
                      ring,
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm font-bold text-stone/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-xinix-blue">{item.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-stone">
                  {item.body}
                </p>
                <span
                  className={cn(
                    "mt-6 block h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16",
                    bar,
                  )}
                />
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
