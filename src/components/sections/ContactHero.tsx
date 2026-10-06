"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface ContactHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Contact us",
    stamp: "1 working day",
    stampNote: "We aim to reply within this window.",
    cta: "Request a quote",
    launch:
      "Commercial production is scheduled to begin in December 2026. Quotes and orders placed now can be planned for delivery from launch.",
  },
  am: {
    eyebrow: "ያግኙን",
    stamp: "1 የሥራ ቀን",
    stampNote: "በዚህ ጊዜ ውስጥ ለመመለስ እንሠራለን።",
    cta: "ዋጋ ይጠይቁ",
    launch:
      "ንግድ ምርት ከታኅሣሥ 2019 ዓ.ም. እንዲጀምር ታቅዷል። አሁን የሚቀርቡ ዋጋዎችና ትዕዛዞች ከመጀመሪያው ጀምሮ ለመላክ ሊታቀዱ ይችላሉ።",
  },
} as const;

export function ContactHero({ locale, content }: ContactHeroProps) {
  const t = copy[locale];
  const page = content.contact;

  return (
    <section
      data-header-tone="light"
      className={cn("overflow-hidden bg-paper", headerClearance)}
    >
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-8 lg:pb-24 lg:pt-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-xl text-3xl font-bold leading-[1.12] tracking-tight text-deep-navy sm:text-5xl lg:text-6xl">
            {page.headline}
          </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">{page.body}</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-stone">{t.launch}</p>
          <div className="mt-8">
            <Button href="#quote">{t.cta}</Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-sm bg-xinix-blue/20" aria-hidden />
            <div className="relative border border-line bg-white p-8 shadow-[8px_16px_40px_rgba(18,58,92,0.1)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                Xinix
              </p>
              <p className="mt-8 font-mono text-7xl font-bold leading-none text-xinix-blue">1</p>
              <p className="mt-3 text-xl font-bold text-deep-navy">{t.stamp}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">{t.stampNote}</p>
              <div className="mt-8 h-1.5 w-16 bg-xinix-blue" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
