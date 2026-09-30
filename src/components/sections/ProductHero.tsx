import Link from "next/link";
import type { Locale, Product, SiteContent } from "@/types/content";
import { ProductBackNav } from "@/components/ProductBackNav";
import { ProductPackVisual } from "@/components/ProductPackVisual";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";
import { categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { headerClearance, heroContentInset } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface ProductHeroProps {
  locale: Locale;
  content: SiteContent;
  product: Product;
  categorySlug: CategorySlug;
}

const labels = {
  en: { pack: "Pack size", notes: "Notes" },
  am: { pack: "የመጠን መጠን", notes: "ማስታወሻ" },
} as const;

function PackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 7h8l1 14H7L8 7ZM10 7V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
  const t = labels[locale];

  const specs = [
    { key: "pack", icon: PackIcon, title: t.pack, value: details.packSize },
    ...(details.extra
      ? [{ key: "notes", icon: NoteIcon, title: t.notes, value: details.extra }]
      : []),
  ];

  return (
    <section data-header-tone="dark" className={cn("relative overflow-hidden bg-deep-navy", headerClearance)}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(24,182,199,0.12),_transparent_55%)]"
        aria-hidden
      />

      <div className={heroContentInset}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <ProductBackNav
              locale={locale}
              backHref={`/products/${categorySlug}`}
              backLabel={label}
            />

            <span
              className={cn(
                "mt-24 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ring-1",
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

            {specs.length > 0 && (
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {specs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <li
                      key={spec.key}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-4 backdrop-blur-sm"
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1",
                          color?.softBg,
                          color?.text,
                          color?.ring,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
                          {spec.title}
                        </span>
                        <span className="mt-1 block text-sm font-semibold leading-snug text-white">
                          {spec.value}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="mt-8 w-full max-w-xl">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/12 bg-white/[0.06] p-1.5 shadow-2xl shadow-black/25 backdrop-blur-md sm:flex-row sm:rounded-full">
                <Link
                  href={localePath(locale, "/contact")}
                  className="group flex min-h-11 flex-1 items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-xinix-teal to-deep-teal px-5 py-3.5 text-sm font-semibold text-white transition hover:shadow-lg sm:justify-center sm:rounded-full"
                >
                  <span>{content.ui.requestQuote}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="#datasheet"
                  className="group flex min-h-11 flex-1 items-center justify-between gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 sm:justify-center sm:rounded-full"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80">
                    <DownloadIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{content.ui.downloadDatasheet}</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
              <ProductPackVisual
                slug={product.slug}
                name={product.name}
                packSize={details.packSize}
                categorySlug={categorySlug}
                size="lg"
                variant="dark"
                priority
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
