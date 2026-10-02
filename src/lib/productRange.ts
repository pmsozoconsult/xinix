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
      homeBody:
        "Safer drinking water with no chlorine taste, gentle alcohol free hand hygiene, a foot care spray that helps eliminate foot fungus, and a food wash for fruit, vegetables, meat, chicken and fish.",
      skus: "Drink+, HandDis, PureStep, VegDis",
    },
    healthcare: {
      title: "Healthcare and institutions",
      description: "MedDis healthcare hygiene and SurfDis surface hygiene.",
      homeBody:
        "Everyday hygiene for patient rooms, treatment areas, laboratories, classrooms, hotels and offices. Fast acting, with no rinsing needed on most hard surfaces.",
      skus: "MedDis, SurfDis",
    },
    water: {
      title: "Water systems and aviation",
      description:
        "AquaDis Tank, a two pack system for tanks, reservoirs, distribution lines and aircraft water storage.",
      homeBody:
        "A two pack treatment for water tanks, reservoirs and distribution lines, including airport water facilities and aircraft water storage systems.",
      skus: "AquaDis Tank",
    },
    food: {
      title: "Food and agriculture",
      description:
        "PostHarvest+ after harvest care, FungDis greenhouse and storage hygiene, and VetDis animal housing hygiene.",
      homeBody:
        "After harvest care for cut flowers, spices, vegetables and fruit, wash water treatment for coffee processing, greenhouse and storage hygiene, and hygiene for animal housing.",
      skus: "PostHarvest+, FungDis, VetDis",
    },
    industry: {
      title: "Food, beverage and industry",
      description:
        "BiofilmDis water line and process treatment, plus the ProCleen industrial cleaners: SystemFlush+, AcidX and Degrease+.",
      homeBody:
        "Biofilm removal for pipes, cooling towers and CIP systems, plus industrial cleaners for flushing, descaling and degreasing production lines.",
      skus: "BiofilmDis, SystemFlush+, AcidX, Degrease+",
    },
  },
  am: {
    home: {
      title: "ለቤትዎ",
      description: "Drink+ የመጠጥ ውሃ ሕክምና፣ HandDis የእጅ ንጽህና፣ PureStep የእግር እንክብካቤ ርጭትና VegDis የምግብ ማጠቢያ።",
      homeBody:
        "የክሎሪን ጣዕም የሌለው ይበልጥ ደህንነቱ የተጠበቀ መጠጥ ውሃ፣ ከአልኮል ነፃ የለዘበ የእጅ ንጽህና፣ የእግር ፈንገስን ለማስወገድ የሚረዳ የእግር እንክብካቤ ርጭት፣ እና ለፍራፍሬ፣ አትክልት፣ ሥጋ፣ ዶሮና ዓሳ የምግብ ማጠቢያ።",
      skus: "Drink+፣ HandDis፣ PureStep፣ VegDis",
    },
    healthcare: {
      title: "ጤናና ተቋማት",
      description: "MedDis የጤና ንጽህናና SurfDis የገጽታ ንጽህና።",
      homeBody:
        "ለታካሚ ክፍሎች፣ የሕክምና ቦታዎች፣ ላቦራቶሪዎች፣ ክፍሎች፣ ሆቴሎችና ቢሮዎች የዕለት ንጽህና። ፈጣን ምላሽ፣ በአብዛኛዎቹ ጠንካራ ገጾች ላይ ማጠብ አያስፈልግም።",
      skus: "MedDis፣ SurfDis",
    },
    water: {
      title: "የውሃ ሥርዓቶችና አቪዬሽን",
      description: "AquaDis Tank፣ ለታንኮች፣ ማጠራቀሚያዎች፣ የስርጭት መስመሮችና የአውሮፕላን ውሃ ማከማቻ የሁለት ጥቅል ሥርዓት።",
      homeBody:
        "ለውሃ ታንኮች፣ ማጠራቀሚያዎችና የስርጭት መስመሮች፣ የአውሮፕላን ማረፊያ ውሃ ተቋማትና የአውሮፕላን ውሃ ማከማቻ ሥርዓቶች የሁለት ጥቅል ሕክምና።",
      skus: "AquaDis Tank",
    },
    food: {
      title: "ምግብና ግብርና",
      description: "PostHarvest+ ከመከር በኋላ እንክብካቤ፣ FungDis የግሪንሀውስና ማከማቻ ንጽህና፣ እና VetDis የእንስሳት መኖሪያ ንጽህና።",
      homeBody:
        "ለቆርጦ የሚሸጡ አበቦች፣ ቅመሞች፣ አትክልትና ፍራፍሬ ከመከር በኋላ እንክብካቤ፣ ለቡና ማቀነባበር የማጠቢያ ውሃ ሕክምና፣ የግሪንሀውስና የማከማቻ ንጽህና፣ እና የእንስሳት መኖሪያ ንጽህና።",
      skus: "PostHarvest+፣ FungDis፣ VetDis",
    },
    industry: {
      title: "ምግብ፣ መጠጥና ኢንዱስትሪ",
      description:
        "BiofilmDis የውሃ መስመርና ሂደት ሕክምና፣ እና የProCleen የኢንዱስትሪ ማጽጃዎች፦ SystemFlush+፣ AcidX እና Degrease+።",
      homeBody:
        "ለቧንቧዎች፣ የማቀዝቀዣ ግንቦችና CIP ሥርዓቶች ባዮፊልም ማስወገድ፣ እንዲሁም የምርት መስመሮችን ለማጠብ፣ ድንጋይ ለማስወገድና ቅባት ለማጥፋት የኢንዱስትሪ ማጽጃዎች።",
      skus: "BiofilmDis፣ SystemFlush+፣ AcidX፣ Degrease+",
    },
  },
} as const;
