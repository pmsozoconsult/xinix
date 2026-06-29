export const visuals = {
  hero:
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=2400&q=80",
  manufacturing: "/manufacturing-plant-interior.webp",
  water:
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1800&q=80",
  hygiene: "/category-hygiene-institutional.webp",
  agriculture: "/category-food-agriculture.webp",
  industrial: "/category-industrial-biofilm.webp",
  sustainability:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=80",
  export: "/export-distribution-africa.webp",
  about:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80",
} as const;

export const categoryImages: Record<string, string> = {
  "water-and-household": visuals.water,
  "hygiene-and-institutional": visuals.hygiene,
  "food-and-agriculture": visuals.agriculture,
  "industrial-and-biofilm": visuals.industrial,
};
