import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { CategoryIcon } from "@/components/Icons";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { categoryImages } from "@/lib/visuals";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { categoryColor, productCountLabel } from "@/lib/productMeta";
import { cn } from "@/lib/utils";

interface CategoryHeroProps {
  locale: Locale;
  content: SiteContent;
  categorySlug: CategorySlug;
}

export function CategoryHero({ locale, content, categorySlug }: CategoryHeroProps) {
  const category = content.categories[categorySlug];
  const label = content.categoryLabels[categorySlug];
  const theme = categoryTheme[categorySlug];
  const color = categoryColor[categorySlug];
  const iconName = theme?.icon as
    | "water"
    | "hygiene"
    | "agriculture"
    | "industrial";

  return (
    <section className="relative overflow-hidden bg-deep-navy pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(24,182,199,0.12),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pb-20 lg:pt-16">
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
              <li className="font-medium text-white/90">{label}</li>
            </ol>
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <span
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1",
                color?.softBg,
                color?.text,
                color?.ring,
              )}
            >
              <CategoryIcon name={iconName} className="h-6 w-6" />
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ring-1",
                color?.softBg,
                color?.text,
                color?.ring,
              )}
            >
              {productCountLabel(category.productSlugs.length, locale)}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {category.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {category.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/contact")} tone="onDark">
              {content.ui.requestQuote}
            </Button>
            <Link
              href="#lineup"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {content.ui.viewRange}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <ScrollImage
              src={categoryImages[categorySlug]}
              effect="parallax-up"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
