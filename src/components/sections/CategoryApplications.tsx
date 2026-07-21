"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { categoryApplications } from "@/lib/productMeta";
import { categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface CategoryApplicationsProps {
  locale: Locale;
  categorySlug: CategorySlug;
}

const heading = {
  en: { eyebrow: "Where it works", title: "Built for the job" },
  am: { eyebrow: "የት እንደሚሠራ", title: "ለሥራው የተዘጋጀ" },
} as const;

export function CategoryApplications({
  locale,
  categorySlug,
}: CategoryApplicationsProps) {
  const h = heading[locale];
  const items = categoryApplications[categorySlug][locale];
  const color = categoryColor[categorySlug];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {h.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {h.title}
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item}
              variants={staggerItem}
              className="relative overflow-hidden rounded-2xl border border-line bg-paper p-7"
            >
              <span
                className={cn(
                  "font-mono text-5xl font-bold opacity-20",
                  color?.text,
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-lg font-semibold leading-snug text-deep-navy">
                {item}
              </p>
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-1",
                  color?.bg,
                )}
              />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
