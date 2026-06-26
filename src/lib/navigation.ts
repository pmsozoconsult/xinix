import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";

export const navItems = [
  { key: "home" as const, href: "/" },
  { key: "products" as const, href: "/products" },
  { key: "sustainability" as const, href: "/sustainability" },
  { key: "quality" as const, href: "/quality" },
  { key: "about" as const, href: "/about" },
  { key: "distributors" as const, href: "/distributors" },
  { key: "contact" as const, href: "/contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];

export function isNavActive(pathname: string, locale: Locale, href: string): boolean {
  const homePath = localePath(locale);
  const target = localePath(locale, href);

  if (href === "/") {
    return pathname === homePath || pathname === `${homePath}/`;
  }

  if (href === "/products") {
    return pathname.startsWith(`${homePath}/products`);
  }

  return pathname === target || pathname.startsWith(`${target}/`);
}
