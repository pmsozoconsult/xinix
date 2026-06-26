import type { Locale } from "@/types/content";
import { getContent } from "@/lib/content";

export function organizationJsonLd(locale: Locale) {
  const content = getContent(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.meta.companyName,
    url: "https://www.xinix.et",
    email: content.contact.email,
    telephone: content.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.contact.office,
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
  };
}

export function productJsonLd(
  locale: Locale,
  productSlug: string,
  url: string,
) {
  const content = getContent(locale);
  const product = content.products[productSlug];
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.details.tagline,
    brand: {
      "@type": "Brand",
      name: "Xinix",
    },
    url,
    inLanguage: locale === "am" ? "am-ET" : "en",
  };
}
