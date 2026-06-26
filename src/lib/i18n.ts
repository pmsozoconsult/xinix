import type { Locale } from "@/types/content";

export type { Locale };
export const locales: Locale[] = ["en", "am"];
export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "am" : "en";
}

export function localeLabel(locale: Locale): string {
  return locale === "en" ? "English" : "አማርኛ";
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }
  return localePath(targetLocale);
}
