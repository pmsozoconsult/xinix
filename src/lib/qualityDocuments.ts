import type { Product, SiteContent } from "@/types/content";
import { type CategorySlug } from "@/lib/categories";

const categoryOrder: CategorySlug[] = [
  "water-and-household",
  "hygiene-and-institutional",
  "food-and-agriculture",
  "industrial-and-biofilm",
];

export function qualityDocumentGroups(content: SiteContent): {
  slug: CategorySlug;
  label: string;
  products: Product[];
}[] {
  return categoryOrder.map((slug) => ({
    slug,
    label: content.categoryLabels[slug],
    products: content.categories[slug].productSlugs.map(
      (productSlug) => content.products[productSlug],
    ),
  }));
}
