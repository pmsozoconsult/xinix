"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale, Product } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { ProductPackVisual } from "@/components/ProductPackVisual";
import { localePath } from "@/lib/i18n";
import { categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface ProductLineupProps {
  locale: Locale;
  categorySlug: CategorySlug;
  products: Product[];
  cta: string;
}

const heading = {
  en: { eyebrow: "The lineup", title: "Products in this range" },
  am: { eyebrow: "ስብስቡ", title: "በዚህ ስብስብ ውስጥ ያሉ ምርቶች" },
} as const;

const specLabels = {
  en: { usedBy: "Used by", feature: "Feature", pack: "Pack" },
  am: { usedBy: "ተጠቃሚዎች", feature: "ጥቅም", pack: "መጠን" },
} as const;

export function ProductLineup({
  locale,
  categorySlug,
  products,
  cta,
}: ProductLineupProps) {
  const h = heading[locale];
  const labels = specLabels[locale];
  const color = categoryColor[categorySlug];

  return (
    <section id="lineup" className="scroll-mt-24 bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {h.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {h.title}
          </h2>
        </Reveal>

        <Stagger className="mt-10 flex flex-col gap-5">
          {products.map((product) => (
            <motion.article
              key={product.slug}
              variants={staggerItem}
              className="group grid gap-6 overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg sm:grid-cols-[13rem_1fr] sm:items-center sm:p-6"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
                <ProductPackVisual
                  name={product.name}
                  packSize={product.details.packSize}
                  categorySlug={categorySlug}
                  size="sm"
                  className="h-full w-full"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-deep-navy">{product.name}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-stone">
                  {product.details.tagline}
                </p>

                <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                  {(
                    [
                      [labels.usedBy, product.details.usedBy],
                      [labels.feature, product.details.feature],
                      [labels.pack, product.details.packSize],
                    ] as const
                  ).map(([term, value]) => (
                    <div
                      key={term}
                      className="rounded-xl bg-paper px-3 py-2.5"
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-text">
                        {term}
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-deep-navy">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={localePath(
                    locale,
                    `/products/${categorySlug}/${product.slug}`,
                  )}
                  className={cn(
                    "mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2",
                    color?.text,
                  )}
                >
                  {cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
