import type { CategorySlug } from "@/lib/categories";

export const productRangeGroups = [
  {
    slug: "home",
    themeSlug: "hygiene-and-institutional" as CategorySlug,
    productSlugs: ["drink-plus", "handdis", "purestep", "vegdis"],
  },
  {
    slug: "healthcare",
    themeSlug: "hygiene-and-institutional" as CategorySlug,
    productSlugs: ["meddis", "surfdis"],
  },
  {
    slug: "water",
    themeSlug: "water-and-household" as CategorySlug,
    productSlugs: ["aquadis-tank"],
  },
  {
    slug: "food",
    themeSlug: "food-and-agriculture" as CategorySlug,
    productSlugs: ["postharvest-plus", "fungdis", "vetdis"],
  },
  {
    slug: "industry",
    themeSlug: "industrial-and-biofilm" as CategorySlug,
    productSlugs: ["biofilmdis", "systemflush-plus", "acidx", "degrease-plus"],
  },
] as const;

export const productRangeCopy = {
  en: {
    home: {
      title: "For your home",
      description:
        "Drink+ drinking water treatment, HandDis hand hygiene, PureStep foot care spray and VegDis food wash.",
    },
    healthcare: {
      title: "Healthcare and institutions",
      description: "MedDis healthcare hygiene and SurfDis surface hygiene.",
    },
    water: {
      title: "Water systems and aviation",
      description:
        "AquaDis Tank, a two pack system for tanks, reservoirs, distribution lines and aircraft water storage.",
    },
    food: {
      title: "Food and agriculture",
      description:
        "PostHarvest+ after harvest care, FungDis greenhouse and storage hygiene, and VetDis animal housing hygiene.",
    },
    industry: {
      title: "Food, beverage and industry",
      description:
        "BiofilmDis water line and process treatment, plus the ProCleen industrial cleaners: SystemFlush+, AcidX and Degrease+.",
    },
  },
  am: {
    home: {
      title: "ለቤትዎ",
      description: "Drink+ የመጠጥ ውሃ ሕክምና፣ HandDis የእጅ ንጽህና፣ PureStep የእግር እንክብካቤ ርጭትና VegDis የምግብ ማጠቢያ።",
    },
    healthcare: {
      title: "ጤናና ተቋማት",
      description: "MedDis የጤና ንጽህናና SurfDis የገጽታ ንጽህና።",
    },
    water: {
      title: "የውሃ ሥርዓቶችና አቪዬሽን",
      description: "AquaDis Tank፣ ለታንኮች፣ ማጠራቀሚያዎች፣ የስርጭት መስመሮችና የአውሮፕላን ውሃ ማከማቻ የሁለት ጥቅል ሥርዓት።",
    },
    food: {
      title: "ምግብና ግብርና",
      description: "PostHarvest+ ከመከር በኋላ እንክብካቤ፣ FungDis የግሪንሀውስና ማከማቻ ንጽህና፣ እና VetDis የእንስሳት መኖሪያ ንጽህና።",
    },
    industry: {
      title: "ምግብ፣ መጠጥና ኢንዱስትሪ",
      description:
        "BiofilmDis የውሃ መስመርና ሂደት ሕክምና፣ እና የProCleen የኢንዱስትሪ ማጽጃዎች፦ SystemFlush+፣ AcidX እና Degrease+።",
    },
  },
} as const;
