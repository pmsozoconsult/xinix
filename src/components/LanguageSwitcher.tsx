import Link from "next/link";
import type { Locale } from "@/types/content";
import { switchLocalePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  pathname: string;
  dark?: boolean;
  layout?: "compact" | "panel";
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 3 4 6 4 9s-1.5 6-4 9M12 3c-2.5 3-4 6-4 9s1.5 6 4 9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function LanguageSwitcher({
  locale,
  pathname,
  dark = false,
  layout = "compact",
}: LanguageSwitcherProps) {
  const options: { code: Locale; short: string; label: { en: string; am: string } }[] = [
    { code: "en", short: "EN", label: { en: "English", am: "English" } },
    { code: "am", short: "አማ", label: { en: "Amharic", am: "አማርኛ" } },
  ];

  if (layout === "panel") {
    return (
      <div role="group" aria-label="Language">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
          {locale === "en" ? "Language" : "ቋንቋ"}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {options.map((option) => {
            const active = locale === option.code;
            return (
              <Link
                key={option.code}
                href={switchLocalePath(pathname, option.code)}
                hrefLang={option.code}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "flex flex-col items-start rounded-2xl border px-4 py-3 transition",
                  active
                    ? "border-xinix-blue bg-xinix-blue text-white shadow-sm"
                    : "border-line bg-white text-deep-navy hover:border-xinix-blue/40",
                )}
              >
                <span className="text-sm font-bold">{option.label[locale]}</span>
                <span
                  className={cn(
                    "mt-1 font-mono text-[11px] uppercase tracking-wider",
                    active ? "text-white/75" : "text-stone",
                  )}
                >
                  {option.short}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border p-0.5 transition-colors duration-500 ease-in-out sm:gap-2 sm:p-1",
        dark
          ? "border-white/30 bg-white/10"
          : "border-line bg-mist/80",
      )}
      role="group"
      aria-label="Language"
    >
      <span
        className={cn(
          "hidden h-7 w-7 items-center justify-center rounded-full transition-colors duration-500 ease-in-out sm:flex",
          dark ? "text-white/60" : "text-stone",
        )}
      >
        <GlobeIcon className="h-4 w-4" />
      </span>
      <div className="flex items-center gap-0.5 pr-1">
        {options.map((option) => {
          const active = locale === option.code;
          return (
            <Link
              key={option.code}
              href={switchLocalePath(pathname, option.code)}
              hrefLang={option.code}
              aria-current={active ? "true" : undefined}
              className={cn(
                "rounded-full px-2 py-1 text-xs font-semibold tracking-wide transition-all duration-500 ease-in-out sm:px-2.5",
                active
                  ? dark
                    ? "bg-white text-deep-navy shadow-sm"
                    : "bg-xinix-blue text-white shadow-sm"
                  : dark
                    ? "text-white/80 hover:text-white"
                    : "text-stone hover:text-deep-navy",
              )}
            >
              {option.short}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
