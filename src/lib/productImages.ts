/** Cut-out pack shots in /public/products/cutouts. Missing SKUs keep the illustrated pack. */
export const productImages: Partial<Record<string, string>> = {
  "drink-plus": "/products/cutouts/drink.png",
  "aquadis-tank": "/products/cutouts/aquadis.png",
  handdis: "/products/cutouts/handdis.png",
  surfdis: "/products/cutouts/surfdis.png",
  meddis: "/products/cutouts/meddis.png",
  vegdis: "/products/cutouts/vegdis.png",
  "postharvest-plus": "/products/cutouts/postharvest.png",
  fungdis: "/products/cutouts/fungdis.png",
  biofilmdis: "/products/cutouts/biofilmdis.png",
};

export function getProductImage(slug: string): string | undefined {
  return productImages[slug];
}
