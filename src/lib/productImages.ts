/** Cut-out pack shots in /public/products/cutouts. Missing SKUs keep the illustrated pack. */
export const productImages: Partial<Record<string, string>> = {
  "drink-plus": "/products/cutouts/drink.png",
  "aquadis-tank": "/products/shots/aquadis-tank.webp",
  handdis: "/products/cutouts/handdis.png",
  surfdis: "/products/cutouts/surfdis.png",
  meddis: "/products/cutouts/meddis.png",
  vegdis: "/products/cutouts/vegdis.png",
  "postharvest-plus": "/products/shots/postharvest-plus.webp",
  fungdis: "/products/shots/fungdis.webp",
  biofilmdis: "/products/shots/biofilmdis.webp",
  "systemflush-plus": "/products/shots/systemflush-plus.webp",
  acidx: "/products/shots/acidx.webp",
  "degrease-plus": "/products/shots/degrease-plus.webp",
};

export function getProductImage(slug: string): string | undefined {
  return productImages[slug];
}
