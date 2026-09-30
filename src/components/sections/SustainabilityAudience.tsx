"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface SustainabilityAudienceProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Who this is for",
    title: "Proof for buyers, and for partners",
    buyers: {
      kicker: "Specify the plant, not a slogan",
      title: "Buyers",
      body: "If origin, residue and discharge matter to your tender or brand, this is the manufacturing story behind the range.",
    },
    partners: {
      kicker: "How the plant actually runs",
      title: "Funders and partners",
      body: "Solar, zero discharge and local sourcing are operational facts — the case to weigh before you commit.",
    },
  },
  am: {
    eyebrow: "ለማን",
    title: "ለገዢዎች እና ለአጋሮች ማስረጃ",
    buyers: {
      kicker: "መፈክር ሳይሆን ፋብሪካውን ይግለጹ",
      title: "ገዢዎች",
      body: "ምንጭ፣ ቅሪት እና ፍሳሽ ለጨረታዎ ወይም ለምርት ስምዎ ከተቆጠረ፣ ከስብስቡ ጀርባ ያለው የማምረቻ ታሪክ ይህ ነው።",
    },
    partners: {
      kicker: "ፋብሪካው በትክክል የሚሠራበት",
      title: "ፈንዳዎችና አጋሮች",
      body: "ፀሐይ፣ ዜሮ ፍሳሽ እና የአገር ውስጥ ግብዓት የሥራ እውነታዎች ናቸው — ከመወሰንዎ በፊት የሚመዘን ጉዳይ።",
    },
  },
} as const;

export function SustainabilityAudience({
  locale,
  content,
}: SustainabilityAudienceProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="bg-deep-navy">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24 lg:pl-8 lg:pr-14 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p
            className="pointer-events-none absolute -right-4 top-10 font-mono text-[8rem] font-bold leading-none text-white/[0.04] sm:text-[10rem]"
            aria-hidden
          >
            01
          </p>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
              {t.eyebrow}
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              {t.buyers.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.buyers.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              {t.buyers.body}
            </p>
            <div className="mt-10">
              <Button href={localePath(locale, "/products")} tone="onDark">
                {content.ui.browseRange}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative overflow-hidden border-t border-white/10 bg-deep-teal/35 px-4 py-16 sm:px-6 lg:border-l lg:border-t-0 lg:py-24 lg:pl-14 lg:pr-8 xl:pr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p
            className="pointer-events-none absolute -right-4 top-10 font-mono text-[8rem] font-bold leading-none text-white/[0.06] sm:text-[10rem]"
            aria-hidden
          >
            02
          </p>
          <Reveal delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-green">
              {t.partners.kicker}
            </p>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.partners.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              {t.partners.body}
            </p>
            <div className="mt-10">
              <Button
                href={localePath(locale, "/contact")}
                variant="secondary"
                tone="onDark"
              >
                {content.ui.contactUs}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
