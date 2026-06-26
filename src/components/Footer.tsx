import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { Logo } from "@/components/Logo";

interface FooterProps {
  locale: Locale;
  content: SiteContent;
}

export function Footer({ locale, content }: FooterProps) {
  const { contact, nav } = content;

  return (
    <footer className="relative mt-auto overflow-hidden bg-deep-teal text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-drop-cyan/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(19,124,135,0.35),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        <div className="lg:col-span-4">
          <Logo variant="light" size="md" />
          <p className="mt-5 text-sm leading-relaxed text-white/75">{content.meta.companyName}</p>
          <p className="mt-3 text-base italic text-drop-cyan">{content.meta.tagline}</p>
          <Link
            href={localePath(locale, "/contact")}
            className="mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-deep-teal transition hover:bg-paper"
          >
            {nav.requestQuote}
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
              {nav.products}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              {Object.entries(content.categoryLabels).map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    href={localePath(locale, `/products/${slug}`)}
                    className="transition hover:text-drop-cyan"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
              {nav.about}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>
                <Link href={localePath(locale, "/sustainability")} className="transition hover:text-drop-cyan">
                  {nav.sustainability}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, "/quality")} className="transition hover:text-drop-cyan">
                  {nav.quality}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, "/distributors")} className="transition hover:text-drop-cyan">
                  {nav.distributors}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, "/about")} className="transition hover:text-drop-cyan">
                  {nav.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
              {nav.contact}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>
                <a href={`mailto:${contact.email}`} className="transition hover:text-drop-cyan">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="transition hover:text-drop-cyan">
                  {contact.phone}
                </a>
              </li>
              <li className="leading-relaxed text-white/60">{contact.office}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Xinix Chemicals Manufacturing PLC</p>
          <p className="font-medium text-drop-cyan/90">
            {locale === "en" ? "Made in Ethiopia" : "በኢትዮጵያ የተሠራ"}
          </p>
        </div>
      </div>
    </footer>
  );
}
