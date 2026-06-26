import Link from "next/link";
import type { Locale } from "@/types/content";
import { switchLocalePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  pathname: string;
  dark?: boolean;
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

export function LanguageSwitcher({ locale, pathname, dark = false }: LanguageSwitcherProps) {
  const options: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "am", label: "አማ" },
  ];

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border p-1",
        dark
          ? "border-white/20 bg-deep-navy/60"
          : "border-line bg-mist/80",
      )}
      role="group"
      aria-label="Language"
    >
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full",
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
                "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-200",
                active
                  ? dark
                    ? "bg-white text-deep-navy shadow-sm"
                    : "bg-deep-teal text-white shadow-sm"
                  : dark
                    ? "text-white/65 hover:text-white"
                    : "text-stone hover:text-deep-navy",
              )}
            >
              {option.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
