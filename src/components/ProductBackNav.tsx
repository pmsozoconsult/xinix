import Link from "next/link";
import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductBackNavProps {
  locale: Locale;
  backHref: string;
  backLabel: string;
  crumbs?: BreadcrumbItem[];
  className?: string;
}

const copy = {
  en: { back: "Back to" },
  am: { back: "ወደ" },
} as const;

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductBackNav({
  locale,
  backHref,
  backLabel,
  crumbs,
  className,
}: ProductBackNavProps) {
  const t = copy[locale];

  return (
    <div className={cn("space-y-3", className)}>
      <Link
        href={localePath(locale, backHref)}
        className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 pl-2 pr-4 text-sm font-semibold text-white shadow-lg shadow-black/15 backdrop-blur-md transition hover:border-white/35 hover:bg-white/15"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition group-hover:-translate-x-0.5 group-hover:bg-white/25">
          <ChevronLeft className="h-4 w-4" />
        </span>
        <span className="truncate">
          {t.back} {backLabel}
        </span>
      </Link>

      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="text-xs text-white/50 sm:text-sm">
          <ol className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((item, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <span className="text-white/25" aria-hidden>
                      /
                    </span>
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={localePath(locale, item.href)}
                      className="transition hover:text-white/80"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "font-medium text-white/75" : undefined}>
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </div>
  );
}
