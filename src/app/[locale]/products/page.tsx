import type { Metadata } from "next";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { AudienceStrip } from "@/components/sections/AudienceStrip";
import {
  ProductIndex,
  type ProductIndexItem,
} from "@/components/sections/ProductIndex";
import { ProductsPartner } from "@/components/sections/ProductsPartner";
import { ProductsFaq } from "@/components/sections/ProductsFaq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { productRangeCopy, productRangeGroups } from "@/lib/productRange";

const productsSeo = {
  en: {
    title: "Water Treatment, Food Hygiene and Cleaning Products | Xinix Ethiopia",
    description:
      "Safer drinking water, food wash for produce and meat, foot and hand care, and industrial cleaners made in Ethiopia. Request a quote today.",
  },
  am: {
    title: "የውሃ ሕክምና፣ የምግብ ንጽህናና የማጽዳት ምርቶች | ዚኒክስ ኢትዮጵያ",
    description:
      "ደህንነቱ የተጠበቀ መጠጥ ውሃ፣ ለፍራፍሬና ሥጋ የምግብ ማጠቢያ፣ የእግርና የእጅ እንክብካቤ፣ እና በኢትዮጵያ የተሠሩ የኢንዱስትሪ ማጽጃዎች። ዛሬ ዋጋ ይጠይቁ።",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const seo = productsSeo[localeParam];
  return {
    title: { absolute: seo.title },
    description: seo.description,
  };
}

export default async function ProductsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return null;
  const locale = localeParam as Locale;
  const content = getContent(locale);
  const rangeCopy = productRangeCopy[locale];

  const categoryItems = productRangeGroups.map((group) => ({
    slug: group.slug,
    themeSlug: group.themeSlug,
    href: "#range",
    title: rangeCopy[group.slug].title,
    description: rangeCopy[group.slug].description,
    count: group.productSlugs.length,
  }));

  const indexProducts: ProductIndexItem[] = productRangeGroups.flatMap((group) =>
    group.productSlugs.map((productSlug) => {
      const product = content.products[productSlug];
      return {
        slug: product.slug,
        name: product.name,
        categorySlug: product.categorySlug,
        groupSlug: group.slug,
        categoryLabel: rangeCopy[group.slug].title,
        tagline: product.details.tagline,
        packSize: product.details.packSize,
      };
    }),
  );

  const filters = productRangeGroups.map((group) => ({
    slug: group.slug,
    label: rangeCopy[group.slug].title,
  }));

  return (
    <>
      <ProductsHero locale={locale} content={content} />
      <CategoryGrid locale={locale} items={categoryItems} cta={content.ui.viewRange} />
      <AudienceStrip locale={locale} />
      <ProductIndex
        locale={locale}
        products={indexProducts}
        filters={filters}
        cta={content.ui.viewRange}
      />
      <ProductsPartner locale={locale} content={content} />
      <ProductsFaq locale={locale} />
      <ClosingCta locale={locale} content={content} />
    </>
  );
}
