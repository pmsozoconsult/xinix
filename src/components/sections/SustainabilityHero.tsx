"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance, heroContentInset } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface SustainabilityHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "How we make it",
    dek: "The way Xinix makes its products is part of what it sells. Off-grid solar, zero liquid discharge, and formulas that break down after use.",
    stats: [
      { value: "100%", label: "Solar powered" },
      { value: "0", label: "Wastewater leaving the plant" },
      { value: "95%", label: "Locally sourced materials" },
    ],
  },
  am: {
    eyebrow: "እንዴት እንሠራለን",
    dek: "ዚኒክስ ምርቶቹን የሚያመርትበት ዘላቂ መንገድ የድርጅቱ ዋነኛ መለያ ነው። ከመስመር ውጭ የፀሐይ ኃይል፣ ዜሮ ፈሳሽ ቆሻሻ፣ እና ከጥቅም በኋላ የሚበሰብሱ ቀመሮች።",
    stats: [
      { value: "100%", label: "በፀሐይ ኃይል" },
      { value: "0", label: "ከፋብሪካ የሚወጣ ፈሳሽ ቆሻሻ" },
      { value: "95%", label: "የአገር ውስጥ ጥሬ ዕቃ" },
    ],
  },
} as const;

export function SustainabilityHero({ locale, content }: SustainabilityHeroProps) {
  const t = copy[locale];
  const page = content.sustainability;

  return (
    <section
      data-header-tone="dark"
      className={cn("relative overflow-hidden bg-deep-navy", headerClearance)}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.sustainability} effect="zoom-out" sizes="100vw" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-deep-navy via-deep-navy/75 to-deep-navy/50" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,_rgba(24,182,199,0.18),_transparent_55%)]" />

      <div className={cn("relative z-10", heroContentInset)}>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-green">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {page.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {t.dek}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#principles" tone="onDark">
              {locale === "en" ? "See the principles" : "መርሆዎቹን ይመልከቱ"}
            </Button>
            <Button
              href={localePath(locale, "/contact")}
              variant="secondary"
              tone="onDark"
            >
              {content.ui.contactUs}
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
