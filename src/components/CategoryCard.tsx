import Link from "next/link";
import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { CategoryIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  cta: string;
}

export function CategoryCard({
  locale,
  slug,
  title,
  description,
  cta,
}: CategoryCardProps) {
  const theme = categoryTheme[slug as CategorySlug];
  const iconName = theme?.icon as "water" | "hygiene" | "agriculture" | "industrial";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        theme?.border,
        "border-t-4",
      )}
    >
      <div className="p-6">
        <div
          className={cn(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
            theme?.bg,
            theme?.accent,
          )}
        >
          {theme && <CategoryIcon name={iconName} />}
        </div>
        <h3 className="text-xl font-bold text-deep-navy">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{description}</p>
        <Link
          href={localePath(locale, `/products/${slug}`)}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-text transition group-hover:gap-2 group-hover:text-deep-teal"
        >
          {cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
