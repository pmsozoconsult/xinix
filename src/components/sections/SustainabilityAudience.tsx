"use client";

import Link from "next/link";
import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface SustainabilityAudienceProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Who this is for",
    title: "Proof for buyers, and for partners",
    buyers: {
      title: "Buyers",
      body: "If origin, residue and discharge matter to your tender or brand, this is the manufacturing story behind the range.",
      cta: "See the range",
    },
    partners: {
      title: "Funders and partners",
      body: "Solar, zero discharge and local sourcing are how the plant actually runs — the case to weigh, not a slogan.",
      cta: "Start a conversation",
    },
  },
  am: {
    eyebrow: "ለማን",
    title: "ለገዢዎች እና ለአጋሮች ማስረጃ",
    buyers: {
      title: "ገዢዎች",
      body: "ምንጭ፣ ቅሪት እና ፍሳሽ ለጨረታዎ ወይም ለምርት ስምዎ ከተቆጠረ፣ ከስብስቡ ጀርባ ያለው የማምረቻ ታሪክ ይህ ነው።",
      cta: "ስብስቡን ይመልከቱ",
    },
    partners: {
      title: "ፈንዳዎችና አጋሮች",
      body: "ፀሐይ፣ ዜሮ ፍሳሽ እና የአገር ውስጥ ግብዓት ፋብሪካው በትክክል የሚሠራበት መንገድ ነው — መፈተሽ ያለበት ጉዳይ እንጂ መፈክር አይደለም።",
      cta: "ውይይት ይጀምሩ",
    },
  },
} as const;

function Arrow() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SustainabilityAudience({ locale }: SustainabilityAudienceProps) {
  const t = copy[locale];
  const rows = [
    {
      title: t.buyers.title,
      body: t.buyers.body,
      href: localePath(locale, "/products"),
      cta: t.buyers.cta,
    },
    {
      title: t.partners.title,
      body: t.partners.body,
      href: localePath(locale, "/contact"),
      cta: t.partners.cta,
    },
  ];

  return (
    <section data-header-tone="light" className="border-y border-line bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {rows.map((row) => (
            <Reveal key={row.title}>
              <div className="grid gap-4 py-8 sm:grid-cols-[11rem_1fr_auto] sm:items-center sm:gap-8 lg:py-10">
                <h3 className="text-lg font-bold text-xinix-blue">{row.title}</h3>
                <p className="max-w-xl text-base leading-relaxed text-stone">{row.body}</p>
                <Link
                  href={row.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-xinix-blue transition hover:text-xinix-blue-deep"
                >
                  {row.cta}
                  <Arrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
