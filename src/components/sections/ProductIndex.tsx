"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ProductPackVisual } from "@/components/ProductPackVisual";
import { localePath } from "@/lib/i18n";
import { categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

export interface ProductIndexItem {
  slug: string;
  name: string;
  categorySlug: string;
  categoryLabel: string;
  tagline: string;
  packSize: string;
}

interface ProductIndexProps {
  locale: Locale;
  products: ProductIndexItem[];
  filters: { slug: string; label: string }[];
  cta: string;
}

const heading = {
  en: { eyebrow: "Full range", title: "All twelve products", all: "All" },
  am: { eyebrow: "ሙሉ ስብስብ", title: "ሁሉም አሥራ ሁለት ምርቶች", all: "ሁሉም" },
} as const;

export function ProductIndex({ locale, products, filters, cta }: ProductIndexProps) {
  const h = heading[locale];
  const [active, setActive] = useState<string>("all");

  const visible =
    active === "all"
      ? products
      : products.filter((p) => p.categorySlug === active);

  const tabs = [{ slug: "all", label: h.all }, ...filters];

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

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab.slug === active;
            return (
              <button
                key={tab.slug}
                type="button"
                onClick={() => setActive(tab.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-deep-teal bg-deep-teal text-white shadow-sm"
                    : "border-line bg-white text-stone hover:border-deep-teal/40 hover:text-deep-navy",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => {
              const color = categoryColor[product.categorySlug as CategorySlug];
              return (
                <motion.article
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ProductPackVisual
                      name={product.name}
                      packSize={product.packSize}
                      categorySlug={product.categorySlug}
                      size="sm"
                      className="h-full w-full"
                    />
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold ring-1 backdrop-blur",
                        color?.text,
                        color?.ring,
                      )}
                    >
                      {product.categoryLabel}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-deep-navy">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-stone">
                      {product.tagline}
                    </p>
                    <Link
                      href={localePath(
                        locale,
                        `/products/${product.categorySlug}/${product.slug}`,
                      )}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-text transition group-hover:gap-2 group-hover:text-deep-teal"
                    >
                      {cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
