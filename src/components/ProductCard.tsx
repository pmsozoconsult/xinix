"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale, Product } from "@/types/content";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { categoryImages } from "@/lib/visuals";

interface ProductCardProps {
  locale: Locale;
  product: Product;
  cta: string;
}

export function ProductCard({ locale, product, cta }: ProductCardProps) {
  const image = categoryImages[product.categorySlug];

  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <ScrollImage
          src={image}
          effect="zoom-in"
          intensity={0.7}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <p className="mt-1 text-xs text-white/75">{product.details.packSize}</p>
        </div>
      </div>
      <div className="bg-white p-5">
        <p className="text-sm leading-relaxed text-stone">{product.details.tagline}</p>
        <Link
          href={localePath(
            locale,
            `/products/${product.categorySlug}/${product.slug}`,
          )}
          className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-teal-text transition group-hover:gap-2 group-hover:text-deep-teal"
        >
          {cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
