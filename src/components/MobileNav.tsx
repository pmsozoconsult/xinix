"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { isNavActive, navItems } from "@/lib/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  locale: Locale;
  content: SiteContent;
  pathname: string;
  dark?: boolean;
}

export function MobileNav({ locale, content, pathname, dark = false }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
          dark
            ? "border-white/25 bg-black/20 text-white hover:bg-white/10"
            : "border-line bg-mist/80 text-deep-navy hover:bg-white",
        )}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-deep-navy/50 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-stone hover:bg-mist"
                aria-label="Close"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const active = isNavActive(pathname, locale, item.href);
                  return (
                    <li key={item.key}>
                      <Link
                        href={localePath(locale, item.href)}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-deep-teal/10 text-deep-teal"
                            : "text-deep-navy hover:bg-mist",
                        )}
                      >
                        {content.nav[item.key]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="border-t border-line p-4 space-y-4">
              <LanguageSwitcher locale={locale} pathname={pathname} />
              <Link
                href={localePath(locale, "/contact")}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-deep-teal px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
              >
                {content.nav.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
