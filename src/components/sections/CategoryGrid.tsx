"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { CategoryIcon } from "@/components/Icons";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { categoryImages } from "@/lib/visuals";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { categoryColor, productCountLabel } from "@/lib/productMeta";
import { cn } from "@/lib/utils";

interface CategoryGridItem {
  slug: string;
  title: string;
  description: string;
  count: number;
  themeSlug?: CategorySlug;
  href?: string;
}

interface CategoryGridProps {
  locale: Locale;
  items: CategoryGridItem[];
  cta: string;
}

const heading = {
  en: { eyebrow: "Five areas", title: "Find the range for your need" },
  am: { eyebrow: "አምስት መስኮች", title: "ለፍላጎትዎ የሚሆነውን ስብስብ ያግኙ" },
} as const;

export function CategoryGrid({ locale, items, cta }: CategoryGridProps) {
  const h = heading[locale];

  return (
    <section id="categories" data-header-tone="light" className="scroll-mt-24 bg-sky-wash py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {h.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {h.title}
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item) => {
            const slug = (item.themeSlug ?? item.slug) as CategorySlug;
            const theme = categoryTheme[slug];
            const color = categoryColor[slug];
            const iconName = theme?.icon as
              | "water"
              | "hygiene"
              | "agriculture"
              | "industrial";
            const href = item.href ?? localePath(locale, `/products/${item.slug}`);

            return (
              <motion.div key={item.slug} variants={staggerItem}>
                <Link
                  href={href}
                  className="group relative flex h-full min-h-[19rem] flex-col justify-end overflow-hidden rounded-3xl border border-line p-7 transition duration-300 hover:border-xinix-blue/40"
                >
                  <div className="absolute inset-0">
                    <ScrollImage
                      src={categoryImages[slug]}
                      effect="zoom-in"
                      intensity={0.6}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-xinix-blue/35 to-xinix-blue/10 transition-opacity duration-300 group-hover:from-deep-navy" />
                  </div>

                  <div className="relative">
                    <div
                      className={cn(
                        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 backdrop-blur",
                        color?.softBg,
                        color?.text,
                        color?.ring,
                      )}
                    >
                      <CategoryIcon name={iconName} className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1",
                          color?.softBg,
                          color?.text,
                          color?.ring,
                        )}
                      >
                        {productCountLabel(item.count, locale)}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
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
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
