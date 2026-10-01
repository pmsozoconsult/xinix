import type { Product, SiteContent } from "@/types/content";

const libraryGroups: { id: string; slugs: string[] }[] = [
  {
    id: "home",
    slugs: ["drink-plus", "handdis", "purestep", "vegdis"],
  },
  {
    id: "healthcare",
    slugs: ["meddis", "surfdis"],
  },
  {
    id: "water",
    slugs: ["aquadis-tank"],
  },
  {
    id: "food",
    slugs: ["postharvest-plus", "fungdis", "vetdis"],
  },
  {
    id: "industry",
    slugs: ["biofilmdis", "systemflush-plus", "acidx", "degrease-plus"],
  },
];

const labels = {
  en: {
    home: "For your home",
    healthcare: "Healthcare and institutions",
    water: "Water systems and aviation",
    food: "Food and agriculture",
    industry: "Food, beverage and industry",
  },
  am: {
    home: "ለቤትዎ",
    healthcare: "ጤናና ተቋማት",
    water: "የውሃ ሥርዓቶችና አቪዬሽን",
    food: "ምግብና ግብርና",
    industry: "ምግብ፣ መጠጥና ኢንዱስትሪ",
  },
} as const;

export function qualityDocumentGroups(
  content: SiteContent,
  locale: "en" | "am",
): {
  id: string;
  label: string;
  products: Product[];
}[] {
  const groupLabels = labels[locale];
  return libraryGroups.map((group) => ({
    id: group.id,
    label: groupLabels[group.id as keyof typeof groupLabels],
    products: group.slugs
      .map((slug) => content.products[slug])
      .filter((product): product is Product => Boolean(product)),
  }));
}
