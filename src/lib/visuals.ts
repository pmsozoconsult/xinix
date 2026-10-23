export const visuals = {
  hero:
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=2400&q=80",
  manufacturing: "/manufacturing-plant-interior.webp",
  water:
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1800&q=80",
  hygiene: "/category-hygiene-institutional.webp",
  agriculture: "/category-food-agriculture.webp",
  industrial: "/range-food-beverage-industry.webp",
  home: "/range-for-your-home.webp",
  waterSystems: "/range-water-systems-aviation.webp",
  sustainability:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=80",
  export: "/export-distribution-africa.jpg",
  about: "/about-local-solutions.webp",
  plantRuns: "/sustainability-plant-runs.webp",
  plantPower: "/sustainability-solar-power.webp",
  zeroDischarge: "/sustainability-zero-discharge.webp",
  afterUseInUse: "/sustainability-in-use.webp",
  afterUseBreaksDown: "/sustainability-breaks-down.webp",
  afterUseHarmless: "/sustainability-harmless.webp",
} as const;

export const categoryImages: Record<string, string> = {
  home: visuals.home,
  "water-and-household": visuals.waterSystems,
  water: visuals.waterSystems,
  "hygiene-and-institutional": visuals.hygiene,
  "food-and-agriculture": visuals.agriculture,
  "industrial-and-biofilm": visuals.industrial,
  industry: visuals.industrial,
};

export function rangeImage(slug: string, themeSlug?: string) {
  return categoryImages[slug] ?? categoryImages[themeSlug ?? ""] ?? visuals.hygiene;
}
