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

function LangFlag({ locale, size }: { locale: Locale; size: "sm" | "lg" }) {
  const iso = locale === "en" ? "gb" : "et";
  const dims = size === "lg" ? { w: 32, h: 24, className: "h-6 w-8" } : { w: 16, h: 12, className: "h-3 w-4" };

  return (
    <img
      src={`https://flagcdn.com/w40/${iso}.png`}
      srcSet={`https://flagcdn.com/w80/${iso}.png 2x`}
      width={dims.w}
      height={dims.h}
      alt=""
      className={cn(
        "shrink-0 rounded-[2px] object-cover ring-1 ring-black/10",
        dims.className,
      )}
    />
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5 9.5 17 19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          {options.map((option) => {
            const active = locale === option.code;
            return (
              <Link
                key={option.code}
                href={switchLocalePath(pathname, option.code)}
                hrefLang={option.code}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative flex items-center gap-2.5 rounded-2xl border px-3 py-2.5 transition",
                  active
                    ? "border-xinix-blue bg-xinix-blue text-white shadow-sm"
                    : "border-line bg-white text-deep-navy hover:border-xinix-blue/40",
                )}
              >
                <LangFlag locale={option.code} size="lg" />
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm font-bold leading-tight">{option.label[locale]}</span>
                  <span
                    className={cn(
                      "mt-0.5 block font-mono text-[11px] uppercase tracking-wider",
                      active ? "text-white/75" : "text-stone",
                    )}
                  >
                    {option.short}
                  </span>
                </span>
                {active ? (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span className="sr-only">{locale === "en" ? "Selected" : "ተመርጧል"}</span>
                  </span>
                ) : null}
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
        "flex items-center gap-0.5 rounded-full border p-0.5 transition-colors duration-500 ease-in-out sm:gap-1 sm:p-1",
        dark ? "border-white/30 bg-white/10" : "border-line bg-mist/80",
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => {
        const active = locale === option.code;
        return (
          <Link
            key={option.code}
            href={switchLocalePath(pathname, option.code)}
            hrefLang={option.code}
            aria-current={active ? "true" : undefined}
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-1.5 py-1 text-xs font-semibold tracking-wide transition-all duration-500 ease-in-out sm:gap-1.5 sm:px-2.5",
              active
                ? dark
                  ? "bg-white text-deep-navy shadow-sm"
                  : "bg-xinix-blue text-white shadow-sm"
                : dark
                  ? "text-white/80 hover:text-white"
                  : "text-stone hover:text-deep-navy",
            )}
          >
            <LangFlag locale={option.code} size="sm" />
            {option.short}
          </Link>
        );
      })}
    </div>
  );
}
