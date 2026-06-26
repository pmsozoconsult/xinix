import type { Locale } from "@/types/content";
import { organizationJsonLd, productJsonLd } from "@/lib/structured-data";

export function JsonLd({ locale }: { locale: Locale }) {
  const data = organizationJsonLd(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({
  locale,
  productSlug,
  url,
}: {
  locale: Locale;
  productSlug: string;
  url: string;
}) {
  const data = productJsonLd(locale, productSlug, url);
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
