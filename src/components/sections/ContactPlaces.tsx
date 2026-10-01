"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

interface ContactPlacesProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    officeLabel: "Head office",
    plantLabel: "Plant",
  },
  am: {
    officeLabel: "ዋና ቢሮ",
    plantLabel: "ፋብሪካ",
  },
} as const;

export function ContactPlaces({ locale, content }: ContactPlacesProps) {
  const t = copy[locale];
  const { office, plant } = content.contact;

  return (
    <section data-header-tone="light" className="grid lg:grid-cols-2">
      <div className="bg-mist px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
            {t.officeLabel}
          </p>
          <p className="mt-6 max-w-md text-2xl font-bold leading-snug tracking-tight text-deep-navy">
            {office}
          </p>
        </Reveal>
      </div>
      <div className="relative min-h-[16rem] overflow-hidden bg-deep-navy lg:min-h-[22rem]">
        <ScrollImage src={visuals.manufacturing} effect="parallax-up" sizes="50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-drop-cyan">
            {t.plantLabel}
          </p>
          <p className="mt-3 text-2xl font-bold text-white">{plant}</p>
        </div>
      </div>
    </section>
  );
}
