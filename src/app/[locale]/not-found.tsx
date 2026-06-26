import Link from "next/link";
import { Button } from "@/components/Button";
import { getContent } from "@/lib/content";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { Section } from "@/components/Section";

export default async function NotFound({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const localeParam = params ? (await params).locale : "en";
  const locale: Locale = isValidLocale(localeParam) ? localeParam : "en";
  const content = getContent(locale);

  return (
    <Section>
      <h1 className="text-3xl font-bold text-deep-navy">404</h1>
      <p className="mt-4 max-w-xl text-stone">{content.ui.notFound}</p>
      <p className="mt-2 text-stone">{content.ui.notFoundAction}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={localePath(locale, "/products")} variant="secondary">
          {content.ui.browseRange}
        </Button>
        <Button href={localePath(locale)}>{content.ui.contactUs}</Button>
      </div>
      <p className="mt-6 text-sm">
        <Link href={localePath(locale)} className="text-teal-text hover:underline">
          ← Home
        </Link>
      </p>
    </Section>
  );
}
