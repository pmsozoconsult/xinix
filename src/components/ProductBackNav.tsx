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
  tone?: "dark" | "light";
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
  tone = "dark",
}: ProductBackNavProps) {
  const t = copy[locale];
  const light = tone === "light";

  return (
    <div className={cn("space-y-3", className)}>
      <Link
        href={localePath(locale, backHref)}
        className={cn(
          "group inline-flex max-w-full items-center gap-2.5 rounded-full border py-2 pl-2 pr-4 text-sm font-semibold shadow-lg backdrop-blur-md transition",
          light
            ? "border-line bg-white text-deep-navy shadow-deep-navy/10 hover:border-xinix-blue/40 hover:bg-sky-wash"
            : "border-white/20 bg-white/10 text-white shadow-black/15 hover:border-white/35 hover:bg-white/15",
        )}
      >
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition group-hover:-translate-x-0.5",
            light ? "bg-sky-wash text-xinix-blue-deep group-hover:bg-xinix-blue/15" : "bg-white/15 text-white group-hover:bg-white/25",
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </span>
        <span className="truncate">
          {t.back} {backLabel}
        </span>
      </Link>

      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className={cn("text-xs sm:text-sm", light ? "text-stone" : "text-white/50")}>
          <ol className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((item, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <span className={light ? "text-line" : "text-white/25"} aria-hidden>
                      /
                    </span>
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={localePath(locale, item.href)}
                      className={light ? "transition hover:text-xinix-blue" : "transition hover:text-white/80"}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? (light ? "font-medium text-deep-navy" : "font-medium text-white/75") : undefined}>
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
