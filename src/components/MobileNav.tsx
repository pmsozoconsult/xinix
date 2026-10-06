"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileNav({ locale, content, pathname, dark = false }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    html.classList.add("nav-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    const blockScroll = (event: Event) => {
      event.preventDefault();
    };
    document.addEventListener("touchmove", blockScroll, { passive: false });
    document.addEventListener("wheel", blockScroll, { passive: false });

    return () => {
      html.classList.remove("nav-open");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      document.removeEventListener("touchmove", blockScroll);
      document.removeEventListener("wheel", blockScroll);
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 ease-in-out",
          dark
            ? "border-white/30 bg-white/10 text-white hover:bg-white/15"
            : "border-line bg-mist/80 text-deep-navy hover:bg-white",
        )}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={locale === "en" ? "Open menu" : "ምናሌ ክፈት"}
      >
        <span className="sr-only">{locale === "en" ? "Menu" : "ምናሌ"}</span>
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-[60] h-[100dvh] overflow-hidden overscroll-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.15 : 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-deep-navy/50 backdrop-blur-sm"
              aria-label={locale === "en" ? "Close menu" : "ምናሌ ዝጋ"}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-nav-panel"
              className="absolute right-0 top-0 flex h-[100dvh] max-h-[100dvh] w-[min(100%,22rem)] flex-col overflow-hidden overscroll-none bg-paper pt-[env(safe-area-inset-top)] shadow-2xl"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? undefined : { x: "100%" }}
              transition={{ duration: reduce ? 0 : 0.38, ease }}
            >
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-line px-5 py-4">
                <Logo size="panel" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-full p-2 text-stone hover:bg-mist"
                  aria-label={locale === "en" ? "Close" : "ዝጋ"}
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
              <nav className="min-h-0 flex-1 overflow-hidden px-4 py-2">
                <ul className="flex h-full flex-col justify-center gap-0.5">
                  {navItems.map((item, index) => {
                    const active = isNavActive(pathname, locale, item.href);
                    return (
                      <motion.li
                        key={item.key}
                        initial={reduce ? false : { opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduce ? 0 : 0.08 + index * 0.04, duration: 0.35, ease }}
                      >
                        <Link
                          href={localePath(locale, item.href)}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
                            active
                              ? "bg-xinix-blue/10 text-xinix-blue-deep"
                              : "text-deep-navy hover:bg-mist",
                          )}
                        >
                          {content.nav[item.key]}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
              <div className="shrink-0 space-y-3 border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <LanguageSwitcher locale={locale} pathname={pathname} layout="panel" />
                <Link
                  href={localePath(locale, "/contact")}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-xinix-blue px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
                >
                  {content.nav.requestQuote}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
