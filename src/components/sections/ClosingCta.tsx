"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface ClosingCtaProps {
  locale: Locale;
  content: SiteContent;
}

const labels = {
  en: {
    eyebrow: "Get started",
    response: "Most enquiries answered within one working day.",
    email: "Email",
    phone: "Phone",
    office: "Head office",
  },
  am: {
    eyebrow: "ጀምሩ",
    response: "አብዛኛውን ጊዜ በአንድ የሥራ ቀን ውስጥ ምላሽ እንሰጣለን።",
    email: "ኢሜይል",
    phone: "ስልክ",
    office: "ዋና ቢሮ",
  },
} as const;

function ContactChannel({
  label,
  href,
  value,
  external,
}: {
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  const className =
    "group flex min-h-[3.25rem] items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-drop-cyan/40 hover:shadow-sm";

  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-teal-text transition-colors group-hover:bg-drop-cyan/15 group-hover:text-xinix-teal">
        {label === "Email" || label === "ኢሜይል" ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone">{label}</p>
        <p className="mt-1 text-sm font-medium text-deep-navy group-hover:text-teal-text">
          {value}
        </p>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {inner}
    </a>
  );
}

export function ClosingCta({ locale, content }: ClosingCtaProps) {
  const { home, ui, contact } = content;
  const t = labels[locale];

  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-line px-4 py-16 sm:px-6 lg:border-b-0 lg:border-r lg:py-24 lg:pl-8 lg:pr-14">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl lg:text-5xl">
              {home.ctaHeadline}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone">{home.ctaBody}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={localePath(locale, "/contact")}>{ui.requestQuote}</Button>
              <Button href={localePath(locale, "/products")} variant="secondary">
                {ui.browseRange}
              </Button>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-stone">
              <span className="inline-block h-2 w-2 rounded-full bg-leaf-green" />
              {t.response}
            </p>
          </Reveal>
        </div>

        <div className="bg-mist/60 px-4 py-16 sm:px-6 lg:py-24 lg:pl-14 lg:pr-8">
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
              {locale === "en" ? "Reach us directly" : "በቀጥታ ያግኙን"}
            </p>
            <div className="mt-6 space-y-3">
              <ContactChannel
                label={t.email}
                href={`mailto:${contact.email}`}
                value={contact.email}
              />
              <ContactChannel
                label={t.phone}
                href={contact.phoneHref}
                value={contact.phone}
              />
              <a
                href="https://wa.me/251904553355"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[3.25rem] items-center gap-4 rounded-2xl border border-leaf-green/30 bg-leaf-green/10 p-5 transition-colors hover:bg-leaf-green/15"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-green/25 text-leaf-green">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-medium text-deep-navy">
                    {locale === "en" ? "Message our sales team" : "የሽያጭ ቡድናችንን ይጻፉ"}
                  </p>
                </div>
              </a>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-stone">
              <span className="font-semibold text-deep-navy">{t.office}: </span>
              {contact.office}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
