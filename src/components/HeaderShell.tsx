"use client";

import type { Locale, SiteContent } from "@/types/content";
import { SiteHeader } from "@/components/SiteHeader";

interface HeaderShellProps {
  locale: Locale;
  content: SiteContent;
}

export function HeaderShell({ locale, content }: HeaderShellProps) {
  return <SiteHeader locale={locale} content={content} />;
}
