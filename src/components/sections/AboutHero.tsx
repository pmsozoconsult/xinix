"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface AboutHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "About Xinix",
    dek: "Xinix Chemicals Manufacturing PLC is an Ethiopian manufacturer of water treatment, food hygiene and cleaning products. We make effective, high quality products in Ethiopia for households, institutions and businesses that need dependable supply at prices local buyers can plan around.",
    story: "Our story",
  },
  am: {
    eyebrow: "ስለ ዚኒክስ",
    dek: "ዚኒክስ ኬሚካልስ ማኑፋክቸሪንግ ኃ/የተ/የግ/ማህበር የውሃ ሕክምና፣ የምግብ ንጽህናና ማጽጃ ምርቶች የኢትዮጵያ አምራች ነው። ውጤታማ፣ ከፍተኛ ጥራት ያላቸውን ምርቶች በኢትዮጵያ ለቤተሰብ፣ ለተቋማትና ለንግድ እናመርታለን — አቅርቦቱ የሚታመን፣ ዋጋውም ገዢዎች ሊያቅዱበት የሚችሉ።",
    story: "ታሪካችን",
  },
} as const;

export function AboutHero({ locale, content }: AboutHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="light"
      className={cn("overflow-hidden bg-paper", headerClearance)}
    >
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col justify-end px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pt-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {t.eyebrow}
            </p>
            <p className="mt-6 max-w-xl text-2xl font-bold leading-tight tracking-tight text-xinix-blue sm:text-3xl lg:text-4xl">
              {content.meta.companyName}
            </p>
            <h1 className="mt-8 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-deep-navy sm:text-5xl">
              {content.about.headline}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">{t.dek}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#company">{t.story}</Button>
              <Button href={localePath(locale, "/products")} variant="secondary">
                {content.ui.browseRange}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[22rem] bg-deep-navy lg:min-h-[36rem]">
          <ScrollImage src={visuals.about} effect="drift-right" sizes="50vw" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent lg:bg-gradient-to-l" />
        </div>
      </div>
    </section>
  );
}
