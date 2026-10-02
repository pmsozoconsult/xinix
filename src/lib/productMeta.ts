import type { CategorySlug } from "@/lib/categories";
import type { Locale } from "@/types/content";

interface LocalizedList {
  en: string[];
  am: string[];
}

/** Three concrete application points per category (used on category pages). */
export const categoryApplications: Record<CategorySlug, LocalizedList> = {
  "water-and-household": {
    en: [
      "Point-of-use drinking water treatment",
      "Storage tank and line cleaning",
      "Affordable, biodegradable, made locally",
    ],
    am: [
      "በአጠቃቀም ቦታ የመጠጥ ውሃ ማከም",
      "የማጠራቀሚያ ታንክና መስመር ጽዳት",
      "ተመጣጣኝ፣ በተፈጥሮ የሚበሰብስ፣ በአገር ውስጥ የተመረተ",
    ],
  },
  "hygiene-and-institutional": {
    en: [
      "Hand hygiene for high-traffic sites",
      "Surface disinfection at a 1:10 dilution",
      "Clinical-grade protection",
    ],
    am: [
      "ለተጨናነቁ ቦታዎች የእጅ ንጽሕና",
      "በ1:10 ልኬት የገጽ ንጽሕና",
      "ለሕክምና ደረጃ የተዘጋጀ ጥበቃ",
    ],
  },
  "food-and-agriculture": {
    en: [
      "Produce washing and sanitising",
      "Extended post-harvest shelf life",
      "Fungal spoilage control",
    ],
    am: [
      "ፍራፍሬና አትክልት ማጠብና ማጽዳት",
      "ከመከር በኋላ የመቆያ ጊዜ ማራዘም",
      "የፈንገስ ብልሽት መቆጣጠር",
    ],
  },
  "industrial-and-biofilm": {
    en: [
      "Oil and grease degreasing",
      "Scale and mineral descaling",
      "Biofilm breakdown and system flushing",
    ],
    am: [
      "ዘይትና ቅባት ማስወገድ",
      "ካልሲየምና ማዕድን ክምችት ማጽዳት",
      "ባዮፊልም ማፍረስና ስርዓት ማጠብ",
    ],
  },
};

/** Category colour system for pack visuals, cards and accents. */
export const categoryColor: Record<
  CategorySlug,
  {
    text: string;
    bg: string;
    softBg: string;
    ring: string;
    border: string;
    gradient: string;
  }
> = {
  "water-and-household": {
    text: "text-xinix-blue",
    bg: "bg-xinix-blue",
    softBg: "bg-xinix-blue/10",
    ring: "ring-xinix-blue/30",
    border: "border-xinix-blue/40",
    gradient: "from-xinix-blue/30 via-xinix-blue/8 to-transparent",
  },
  "hygiene-and-institutional": {
    text: "text-xinix-teal",
    bg: "bg-xinix-teal",
    softBg: "bg-xinix-teal/10",
    ring: "ring-xinix-teal/30",
    border: "border-xinix-teal/40",
    gradient: "from-xinix-teal/30 via-xinix-teal/8 to-transparent",
  },
  "food-and-agriculture": {
    text: "text-leaf-green",
    bg: "bg-leaf-green",
    softBg: "bg-leaf-green/10",
    ring: "ring-leaf-green/30",
    border: "border-leaf-green/40",
    gradient: "from-leaf-green/30 via-leaf-green/8 to-transparent",
  },
  "industrial-and-biofilm": {
    text: "text-solar-amber",
    bg: "bg-solar-amber",
    softBg: "bg-solar-amber/10",
    ring: "ring-solar-amber/30",
    border: "border-solar-amber/40",
    gradient: "from-solar-amber/30 via-solar-amber/8 to-transparent",
  },
};

/** Sectors served, for the "who it's for" strip on the products hub. */
export const audienceSectors: { en: string; am: string }[] = [
  { en: "Hospitals & clinics", am: "ሆስፒታሎችና ክሊኒኮች" },
  { en: "Schools", am: "ትምህርት ቤቶች" },
  { en: "Packhouses", am: "ማሸጊያ ቤቶች" },
  { en: "Factories", am: "ፋብሪካዎች" },
  { en: "Water authorities", am: "የውሃ ባለስልጣናት" },
  { en: "Distributors", am: "አከፋፋዮች" },
];

export function productCountLabel(count: number, locale: Locale): string {
  return locale === "en"
    ? `${count} ${count === 1 ? "product" : "products"}`
    : `${count} ምርቶች`;
}
