"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface ContactLinesProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Reach us directly",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    waHint: "Message our sales team",
  },
  am: {
    eyebrow: "በቀጥታ ያግኙን",
    email: "ኢሜይል",
    phone: "ስልክ",
    whatsapp: "ዋትስአፕ",
    waHint: "የሽያጭ ቡድናችንን ይጻፉ",
  },
} as const;

export function ContactLines({ locale, content }: ContactLinesProps) {
  const t = copy[locale];
  const { email, phone, phoneHref } = content.contact;

  const rows = [
    {
      label: t.email,
      href: `mailto:${email}`,
      value: email,
      hint: null as string | null,
      external: false,
    },
    {
      label: t.phone,
      href: phoneHref,
      value: phone,
      hint: null,
      external: false,
    },
    {
      label: t.whatsapp,
      href: "https://wa.me/251904553355",
      value: phone,
      hint: t.waHint,
      external: true,
    },
  ];

  return (
    <section data-header-tone="dark" className="bg-deep-navy">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
          {t.eyebrow}
        </p>
      </div>
      <ul className="mt-8">
        {rows.map((row) => (
          <li key={row.label} className="border-t border-white/10 last:border-b">
            <Reveal>
              <a
                href={row.href}
                {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 transition hover:bg-white/5 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-10 lg:px-8"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  {row.label}
                </span>
                <span className="text-right">
                  <span className="block text-2xl font-bold tracking-tight text-white sm:text-4xl">
                    {row.value}
                  </span>
                  {row.hint ? (
                    <span className="mt-1 block text-sm text-drop-cyan">{row.hint}</span>
                  ) : null}
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
