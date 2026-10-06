import { getContent } from "@/lib/content";
import { productRangeGroups } from "@/lib/productRange";
import type { Locale } from "@/types/content";

export function contactProductOptions(locale: Locale): { slug: string; name: string }[] {
  const catalog = getContent(locale).products;
  return productRangeGroups.flatMap((group) =>
    group.productSlugs.map((slug) => ({
      slug,
      name: catalog[slug]?.name ?? slug,
    })),
  );
}

export const CONTACT_PRODUCT_SLUGS: string[] = productRangeGroups.flatMap((group) => [
  ...group.productSlugs,
]);
