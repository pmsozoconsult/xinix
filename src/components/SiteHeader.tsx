"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, SiteContent } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { isNavActive, navItems } from "@/lib/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  locale: Locale;
  content: SiteContent;
  transparent?: boolean;
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader({ locale, content, transparent = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHeroOverlay = transparent && !scrolled;
  const isDarkNav = isHeroOverlay || (transparent && scrolled);
  const showGlass = transparent || scrolled;
  const glassRounded = scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled ? "px-3 pt-3 sm:px-5 lg:px-6" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "relative mx-auto max-w-7xl transition-all duration-500 ease-out",
          glassRounded && "rounded-3xl",
        )}
      >
        {showGlass && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 glass-blur-layer transition-opacity duration-500",
              glassRounded ? "rounded-3xl" : "rounded-none",
              isDarkNav ? "glass-dark" : "glass-light",
            )}
            aria-hidden
          />
        )}

        <div
          className={cn(
            "relative z-10 flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8",
            scrolled && "py-2.5",
            !showGlass && "bg-white shadow-sm",
          )}
        >
          <Link
            href={localePath(locale)}
            className="flex min-w-0 shrink-0 items-center gap-2"
            aria-label={content.meta.companyName}
          >
            <Logo size="md" variant={isDarkNav ? "light" : "default"} />
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-0.5 rounded-2xl p-1 lg:flex",
              isDarkNav ? "text-white" : "text-deep-navy",
              showGlass &&
                scrolled &&
                (isDarkNav ? "bg-black/20" : "bg-white/70"),
            )}
            aria-label="Main"
          >
            {navItems.map((item) => {
              const active = isNavActive(pathname, locale, item.href);

              return (
                <Link
                  key={item.key}
                  href={localePath(locale, item.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? isDarkNav
                        ? "bg-white/20 text-white"
                        : "bg-deep-teal text-white shadow-sm"
                      : isDarkNav
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-stone hover:bg-white hover:text-deep-navy",
                  )}
                >
                  {content.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <LanguageSwitcher locale={locale} pathname={pathname} dark={isDarkNav} />
            <Link
              href={localePath(locale, "/contact")}
              className={cn(
                "group hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 sm:inline-flex",
                isDarkNav
                  ? "bg-white text-deep-teal shadow-md shadow-black/15 hover:bg-paper hover:shadow-lg"
                  : "bg-deep-teal text-white shadow-md shadow-deep-teal/25 hover:bg-xinix-teal hover:shadow-lg",
              )}
            >
              <span className="max-w-[9rem] truncate sm:max-w-none">
                {content.nav.requestQuote}
              </span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
                  isDarkNav ? "bg-deep-teal/10 text-deep-teal" : "bg-white/15 text-white",
                )}
              >
                <QuoteIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
            <MobileNav
              locale={locale}
              content={content}
              pathname={pathname}
              dark={isDarkNav}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
