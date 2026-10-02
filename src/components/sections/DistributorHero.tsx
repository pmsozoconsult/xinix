"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface DistributorHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    stencil: "For distributors",
    dek: "Partner with an Ethiopian manufacturer of water treatment, food hygiene and cleaning products. We are building a network of wholesalers and distributors across Ethiopia and East Africa ahead of commercial production in December 2026.",
    cta: "Apply to become a distributor",
  },
  am: {
    stencil: "ለአከፋፋዮች",
    dek: "የውሃ ሕክምና፣ የምግብ ንጽህናና ማጽጃ ምርቶች ከኢትዮጵያ አምራች ጋር ይተባበሩ። ከታኅሣሥ 2019 ዓ.ም. የንግድ ምርት በፊት በኢትዮጵያና በምስራቅ አፍሪካ የጅምላ ነጋዴዎችና አከፋፋዮች መረብ እየገነባን ነን።",
    cta: "አከፋፋይ ለመሆን ያመልክቱ",
  },
} as const;

export function DistributorHero({ locale, content }: DistributorHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="dark"
      className={cn("relative overflow-hidden bg-deep-navy", headerClearance)}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.export} effect="drift-left" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-xinix-blue/40 to-xinix-blue/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        <Reveal>
          <p className="inline-block border border-dashed border-solar-amber/80 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-solar-amber">
            {t.stencil}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.distributors.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{t.dek}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#apply" tone="onDark">
              {t.cta}
            </Button>
            <Button href={localePath(locale, "/products")} variant="secondary" tone="onDark">
              {content.ui.browseRange}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
