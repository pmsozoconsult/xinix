"use client";

import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { ProductPackVisual } from "@/components/ProductPackVisual";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";
import { productCountLabel } from "@/lib/productMeta";
import { productRangeCopy, productRangeGroups } from "@/lib/productRange";
import { cn } from "@/lib/utils";

interface DistributorRangeProps {
  locale: Locale;
  content: SiteContent;
}

const heading = {
  en: {
    eyebrow: "What we make",
    title: "The assortment you would carry",
    dek: "One Ethiopian plant, five doors into the customers you already serve. These are the SKUs that go on the truck.",
  },
  am: {
    eyebrow: "የምናመርተው",
    title: "ሊሸከሙት የሚችሉት ስብስብ",
    dek: "አንድ የኢትዮጵያ ፋብሪካ፣ አስቀድመው ወደሚያገለግሏቸው ደንበኞች አምስት መግቢያዎች። በጭነት ላይ የሚሄዱት ምርቶች እነዚህ ናቸው።",
  },
} as const;

function AislePacks({
  locale,
  content,
  group,
  dark,
}: {
  locale: Locale;
  content: SiteContent;
  group: (typeof productRangeGroups)[number];
  dark?: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        group.productSlugs.length === 1 && "max-w-xs",
        group.productSlugs.length === 2 && "grid-cols-2",
        group.productSlugs.length === 3 && "grid-cols-2 sm:grid-cols-3",
        group.productSlugs.length >= 4 && "grid-cols-2 md:grid-cols-4",
      )}
    >
      {group.productSlugs.map((slug) => {
        const product = content.products[slug];
        if (!product) return null;
        return (
          <li key={slug}>
            <Link
              href={localePath(locale, `/products/${group.themeSlug}/${slug}`)}
              className="group block"
            >
              <div
                className={cn(
                  "relative h-36 overflow-hidden rounded-xl sm:h-40",
                  dark ? "ring-1 ring-white/10" : "ring-1 ring-line",
                )}
              >
                <ProductPackVisual
                  slug={slug}
                  name={product.name}
                  packSize={product.details.packSize}
                  categorySlug={group.themeSlug}
                  size="sm"
                  variant="shelf"
                  className="h-full w-full"
                />
              </div>
              <p
                className={cn(
                  "mt-2 text-sm font-semibold group-hover:text-xinix-blue",
                  dark ? "text-white" : "text-deep-navy",
                )}
              >
                {product.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function AisleMeta({
  kicker,
  title,
  body,
  count,
  locale,
  invert,
}: {
  kicker: string;
  title: string;
  body: string;
  count: number;
  locale: Locale;
  invert?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p
          className={cn(
            "font-mono text-[11px] font-bold uppercase tracking-[0.22em]",
            invert ? "text-sky-band" : "text-xinix-blue",
          )}
        >
          {kicker}
        </p>
        <p className={cn("text-xs", invert ? "text-white/50" : "text-stone")}>
          {productCountLabel(count, locale)}
        </p>
      </div>
      <h3
        className={cn(
          "mt-3 text-2xl font-bold tracking-tight",
          invert ? "text-white" : "text-deep-navy",
        )}
      >
        {title}
      </h3>
      <p className={cn("mt-3 max-w-md text-sm leading-relaxed sm:text-base", invert ? "text-white/70" : "text-stone")}>
        {body}
      </p>
    </div>
  );
}

export function DistributorRange({ locale, content }: DistributorRangeProps) {
  const h = heading[locale];
  const range = productRangeCopy[locale];
  const [home, healthcare, water, food, industry] = productRangeGroups;

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
              {h.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              {h.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">{h.dek}</p>
          </Reveal>
          <Button href={localePath(locale, "/products")}>{content.ui.browseRange}</Button>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-line bg-white">
          <article className="grid gap-8 border-b border-line p-4 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <AisleMeta
              kicker={locale === "en" ? "Aisle A" : "መደርደሪያ A"}
              title={range.home.title}
              body={range.home.homeBody}
              count={home.productSlugs.length}
              locale={locale}
            />
            <AislePacks locale={locale} content={content} group={home} />
          </article>

          <div className="grid lg:grid-cols-2">
            <article className="border-b border-line p-4 sm:p-8 lg:border-r">
              <AisleMeta
                kicker={locale === "en" ? "Aisle B" : "መደርደሪያ B"}
                title={range.healthcare.title}
                body={range.healthcare.homeBody}
                count={healthcare.productSlugs.length}
                locale={locale}
              />
              <div className="mt-6">
                <AislePacks locale={locale} content={content} group={healthcare} />
              </div>
            </article>
            <article className="border-b border-line bg-sky-wash p-4 sm:p-8">
              <AisleMeta
                kicker={locale === "en" ? "Aisle C" : "መደርደሪያ C"}
                title={range.water.title}
                body={range.water.homeBody}
                count={water.productSlugs.length}
                locale={locale}
              />
              <div className="mt-6">
                <AislePacks locale={locale} content={content} group={water} />
              </div>
            </article>
          </div>

          <article className="grid gap-8 border-b border-line p-4 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
            <AisleMeta
              kicker={locale === "en" ? "Aisle D" : "መደርደሪያ D"}
              title={range.food.title}
              body={range.food.homeBody}
              count={food.productSlugs.length}
              locale={locale}
            />
            <AislePacks locale={locale} content={content} group={food} />
          </article>

          <article className="grid gap-8 bg-deep-navy p-4 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <AisleMeta
              kicker={locale === "en" ? "Aisle E" : "መደርደሪያ E"}
              title={range.industry.title}
              body={range.industry.homeBody}
              count={industry.productSlugs.length}
              locale={locale}
              invert
            />
            <AislePacks locale={locale} content={content} group={industry} dark />
          </article>
        </div>
      </div>
    </section>
  );
}
