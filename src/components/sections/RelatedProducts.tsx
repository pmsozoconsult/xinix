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

interface RelatedProductsProps {
  locale: Locale;
  categorySlug: CategorySlug;
  categoryLabel: string;
  products: Product[];
  cta: string;
}

const heading = {
  en: { eyebrow: "More in", title: "Related products" },
  am: { eyebrow: "ተጨማሪ በ", title: "ተዛማጅ ምርቶች" },
} as const;

export function RelatedProducts({
  locale,
  categorySlug,
  categoryLabel,
  products,
  cta,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  const h = heading[locale];
  const color = categoryColor[categorySlug];

  return (
    <section data-header-tone="light" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {h.eyebrow} {categoryLabel}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {h.title}
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.article
              key={product.slug}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-52 overflow-hidden">
                <ProductPackVisual
                  slug={product.slug}
                  name={product.name}
                  packSize={product.details.packSize}
                  categorySlug={categorySlug}
                  size="sm"
                  variant="shelf"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-xinix-blue">
                  {product.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-stone">
                  {product.details.tagline}
                </p>
                <Link
                  href={localePath(
                    locale,
                    `/products/${categorySlug}/${product.slug}`,
                  )}
                  className={cn(
                    "mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2",
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
