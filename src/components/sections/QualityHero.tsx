"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance, heroContentInset } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface QualityHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Quality & compliance",
    dek: "Buyers should not have to take quality on faith. Registration, batch checks, and documents you can open yourself.",
    stats: [
      { value: "12", label: "Products, same discipline" },
      { value: "2", label: "Documents per SKU" },
      { value: "1", label: "Formulation per product" },
    ],
    register: "Open the register",
  },
  am: {
    eyebrow: "ጥራት እና ተገዢነት",
    dek: "ገዢዎች ጥራትን በእምነት ብቻ መቀበል የለባቸውም። ምዝገባ፣ የባች ምርመራ፣ እና እራስዎ የሚከፍቷቸው ሰነዶች።",
    stats: [
      { value: "12", label: "ምርቶች፣ አንድ ዲሲፕሊን" },
      { value: "2", label: "በእያንዳንዱ ምርት ሰነድ" },
      { value: "1", label: "በምርት አንድ ቀመር" },
    ],
    register: "መዝገቡን ይክፈቱ",
  },
} as const;

export function QualityHero({ locale, content }: QualityHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="dark"
      className={cn("relative overflow-hidden bg-deep-navy", headerClearance)}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.hygiene} effect="zoom-out" sizes="100vw" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-deep-navy via-deep-navy/80 to-deep-navy/55" />

      <div className={cn("relative z-10", heroContentInset)}>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.quality.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {t.dek}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#register" tone="onDark">
              {t.register}
            </Button>
            <Button href="#documents" variant="secondary" tone="onDark">
              {content.ui.downloadDatasheet}
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
