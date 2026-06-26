"use client";

import { usePathname } from "next/navigation";
import type { Locale, SiteContent } from "@/types/content";
import { SiteHeader } from "@/components/SiteHeader";
import { isValidLocale } from "@/lib/i18n";

interface HeaderShellProps {
  locale: Locale;
  content: SiteContent;
}

export function HeaderShell({ locale, content }: HeaderShellProps) {
  const pathname = usePathname();
  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  return <SiteHeader locale={locale} content={content} transparent={isHome} />;
}
