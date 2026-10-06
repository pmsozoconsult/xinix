"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { CategoryIcon } from "@/components/Icons";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { categoryColor, productCountLabel } from "@/lib/productMeta";
import { cn } from "@/lib/utils";

interface SiblingItem {
  slug: string;
  title: string;
  description: string;
  count: number;
}

interface SiblingCategoriesProps {
  locale: Locale;
  items: SiblingItem[];
  cta: string;
}

const heading = {
  en: { eyebrow: "The rest of the range", title: "Explore other families" },
  am: { eyebrow: "የቀሩት ስብስቦች", title: "ሌሎች ቤተሰቦችን ይመልከቱ" },
} as const;

export function SiblingCategories({ locale, items, cta }: SiblingCategoriesProps) {
  const h = heading[locale];

  return (
    <section data-header-tone="light" className="bg-sky-wash py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {h.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {h.title}
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const slug = item.slug as CategorySlug;
            const theme = categoryTheme[slug];
            const color = categoryColor[slug];
            const iconName = theme?.icon as
              | "water"
              | "hygiene"
              | "agriculture"
              | "industrial";

            return (
              <motion.div key={item.slug} variants={staggerItem}>
                <Link
                  href={localePath(locale, `/products/${item.slug}`)}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:border-xinix-blue/40 hover:shadow-md"
                >
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1",
                      color?.softBg,
                      color?.text,
                      color?.ring,
                    )}
                  >
                    <CategoryIcon name={iconName} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-deep-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
                    {item.description}
                  </p>
                  <span
                    className={cn(
                      "mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2",
                      color?.text,
                    )}
                  >
                    {cta}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
