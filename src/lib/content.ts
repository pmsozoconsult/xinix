import type { Locale, SiteContent } from "@/types/content";
import en from "@/content/en.json";
import am from "@/content/am.json";

const content: Record<Locale, SiteContent> = { en, am };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getCategorySlugs(): string[] {
  return Object.keys(en.categories);
}

export function getProductSlugs(): string[] {
  return Object.keys(en.products);
}
