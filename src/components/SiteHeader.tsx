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
import { useSectionHeaderTone } from "@/hooks/useSectionHeaderTone";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  locale: Locale;
  content: SiteContent;
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

export function SiteHeader({ locale, content }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const sectionTone = useSectionHeaderTone(pathname);
  const isDarkNav = sectionTone === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-site-header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        scrolled ? "px-3 pt-3 sm:px-5 lg:px-6" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden transition-all duration-500 ease-in-out",
          scrolled ? "rounded-3xl" : "rounded-b-3xl",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 glass-blur-layer glass-light transition-opacity duration-500 ease-in-out",
            scrolled ? "rounded-3xl" : "rounded-b-3xl",
            isDarkNav ? "opacity-0" : "opacity-100",
          )}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 glass-blur-layer glass-dark transition-opacity duration-500 ease-in-out",
            scrolled ? "rounded-3xl" : "rounded-b-3xl",
            isDarkNav ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        />

        <div
          className={cn(
            "relative z-10 flex items-center justify-between gap-3 px-4 py-3 transition-[padding] duration-500 ease-in-out sm:gap-4 sm:px-6 lg:px-8",
            scrolled && "py-2.5",
          )}
        >
          <Link
            href={localePath(locale)}
            className="flex min-w-0 shrink-0 items-center gap-2"
            aria-label={content.meta.companyName}
          >
            <Logo size="md" variant={isDarkNav ? "light" : "default"} priority />
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-0.5 rounded-2xl p-1 transition-colors duration-500 ease-in-out lg:flex",
              isDarkNav ? "text-white" : "text-deep-navy",
              scrolled && (isDarkNav ? "bg-black/20" : "bg-white/70"),
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
                    "relative rounded-xl px-3 py-2 text-sm font-medium transition-all duration-500 ease-in-out",
                    active
                      ? "bg-xinix-blue text-white shadow-sm"
                      : isDarkNav
                        ? "text-white/90 hover:bg-xinix-blue/20 hover:text-white"
                        : "text-stone hover:bg-sky-wash hover:text-deep-navy",
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
              className="group hidden items-center gap-2 rounded-full bg-xinix-blue px-4 py-2 text-sm font-semibold text-white shadow-md shadow-xinix-blue/25 transition-all duration-500 ease-in-out hover:bg-xinix-blue-deep hover:shadow-lg sm:inline-flex"
            >
              <span className="max-w-[9rem] truncate sm:max-w-none">
                {content.nav.requestQuote}
              </span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-500 ease-in-out group-hover:translate-x-0.5">
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
