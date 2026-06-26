export type Locale = "en" | "am";

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface ProductDetail {
  tagline: string;
  usedBy: string;
  feature: string;
  packSize: string;
  extra?: string;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  seo: SeoMeta;
  details: ProductDetail;
  datasheetPath?: string;
}

export interface Category {
  slug: string;
  seo: SeoMeta;
  headline: string;
  body: string;
  productSlugs: string[];
}

export interface PageContent {
  seo: SeoMeta;
  headline: string;
  body: string;
}

export interface SiteContent {
  meta: {
    companyName: string;
    tagline: string;
  };
  nav: {
    home: string;
    products: string;
    sustainability: string;
    quality: string;
    about: string;
    distributors: string;
    contact: string;
    requestQuote: string;
  };
  home: {
    seo: SeoMeta;
    headline: string;
    body: string;
    pillars: string[];
    rangeTitle: string;
    rangeItems: { title: string; description: string }[];
    exportHeadline: string;
    exportBody: string;
    whyTitle: string;
    whyItems: string[];
    ctaHeadline: string;
    ctaBody: string;
    stats: { value: string; label: string }[];
    heroBadges: string[];
  };
  categories: Record<string, Category>;
  products: Record<string, Product>;
  sustainability: PageContent;
  quality: PageContent;
  about: PageContent;
  distributors: PageContent;
  contact: PageContent & {
    email: string;
    phone: string;
    phoneHref: string;
    office: string;
    plant: string;
  };
  ui: {
    requestQuote: string;
    browseRange: string;
    exploreProducts: string;
    viewRange: string;
    downloadDatasheet: string;
    becomeDistributor: string;
    readStory: string;
    contactUs: string;
    sendEnquiry: string;
    formIntro: string;
    formFields: {
      name: string;
      organisation: string;
      contact: string;
      country: string;
      need: string;
    };
    privacyLine: string;
    successMessage: string;
    errorMessage: string;
    notFound: string;
    notFoundAction: string;
  };
  trustBar: string[];
  categoryLabels: Record<string, string>;
}
