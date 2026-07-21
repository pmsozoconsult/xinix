import Link from "next/link";
import type { Locale, Product, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { ProductPackVisual } from "@/components/ProductPackVisual";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";
import { categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface ProductHeroProps {
  locale: Locale;
  content: SiteContent;
  product: Product;
  categorySlug: CategorySlug;
}

export function ProductHero({
  locale,
  content,
  product,
  categorySlug,
}: ProductHeroProps) {
  const { details } = product;
  const label = content.categoryLabels[categorySlug];
  const color = categoryColor[categorySlug];

  const chips = [details.packSize, details.extra].filter(Boolean) as string[];

  return (
    <section className="relative overflow-hidden bg-deep-navy pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(24,182,199,0.12),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pb-20 lg:pt-14">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link
                  href={localePath(locale, "/products")}
                  className="transition hover:text-white"
                >
                  {content.nav.products}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li>
                <Link
                  href={localePath(locale, `/products/${categorySlug}`)}
                  className="transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li className="font-medium text-white/90">{product.name}</li>
            </ol>
          </nav>

          <span
            className={cn(
              "mt-6 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ring-1",
              color?.softBg,
              color?.text,
              color?.ring,
            )}
          >
            {label}
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            {details.tagline}
          </p>

          {chips.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90"
                >
                  {chip}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/contact")} tone="onDark">
              {content.ui.requestQuote}
            </Button>
            <Link
              href="#datasheet"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {content.ui.downloadDatasheet}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <ProductPackVisual
              name={product.name}
              packSize={details.packSize}
              categorySlug={categorySlug}
              size="lg"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
