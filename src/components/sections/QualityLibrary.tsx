"use client";

import Link from "next/link";
import type { Locale, Product } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface QualityLibraryProps {
  locale: Locale;
  groups: { id: string; label: string; products: Product[] }[];
}

const copy = {
  en: {
    eyebrow: "Document library",
    title: "Find the documents for a product",
    hint: "Request documents from the product page. Files are added there when they are ready to download.",
    cta: "Request documents",
  },
  am: {
    eyebrow: "የሰነድ መዝገብ",
    title: "የምርቱን ሰነዶች ያግኙ",
    hint: "ሰነዶችን ከምርቱ ገጽ ይጠይቁ። ለማውረድ ሲዘጋጁ እዚያ ይታከላሉ።",
    cta: "ሰነዶችን ይጠይቁ",
  },
} as const;

export function QualityLibrary({ locale, groups }: QualityLibraryProps) {
  const t = copy[locale];

  return (
    <section
      id="documents"
      data-header-tone="light"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">{t.hint}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {groups.map((group) => (
            <Reveal key={group.id}>
              <div>
                <h3 className="border-b border-deep-navy pb-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-deep-navy">
                  {group.label}
                </h3>
                <ul className="mt-1">
                  {group.products.map((product) => (
                    <li key={product.slug} className="border-b border-line">
                      <Link
                        href={localePath(
                          locale,
                          `/products/${product.categorySlug}/${product.slug}`,
                        )}
                        className="flex items-baseline justify-between gap-4 py-3.5 text-sm transition hover:text-xinix-blue-deep"
                      >
                        <span className="font-semibold text-xinix-blue">{product.name}</span>
                        <span className="shrink-0 font-mono text-[11px] text-stone">
                          {t.cta}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
