import type { MetadataRoute } from "next";
import en from "@/content/en.json";
import { getCategorySlugs, getProductSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

const baseUrl = "https://www.xinix.et";

const staticPaths = [
  "",
  "/products",
  "/sustainability",
  "/quality",
  "/about",
  "/distributors",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }

    for (const category of getCategorySlugs()) {
      entries.push({
        url: `${baseUrl}/${locale}/products/${category}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const productSlug of getProductSlugs()) {
      const product = en.products[productSlug as keyof typeof en.products];
      entries.push({
        url: `${baseUrl}/${locale}/products/${product.categorySlug}/${productSlug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
