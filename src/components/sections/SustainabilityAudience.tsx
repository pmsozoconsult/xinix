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
      title: "Buyers",
      body: "If origin, residue and discharge matter to your tender or brand, this is the manufacturing story behind the range.",
    },
    partners: {
      title: "Funders and partners",
      body: "Solar, zero discharge and local sourcing are how the plant actually runs — the case to weigh, not a slogan.",
    },
  },
  am: {
    eyebrow: "ለማን",
    title: "ለገዢዎች እና ለአጋሮች ማስረጃ",
    buyers: {
      title: "ገዢዎች",
      body: "ምንጭ፣ ቅሪት እና ፍሳሽ ለጨረታዎ ወይም ለምርት ስምዎ ከተቆጠረ፣ ከስብስቡ ጀርባ ያለው የማምረቻ ታሪክ ይህ ነው።",
    },
    partners: {
      title: "ፈንዳዎችና አጋሮች",
      body: "ፀሐይ፣ ዜሮ ፍሳሽ እና የአገር ውስጥ ግብዓት ፋብሪካው በትክክል የሚሠራበት መንገድ ነው — መፈተሽ ያለበት ጉዳይ እንጂ መፈክር አይደለም።",
    },
  },
} as const;

export function SustainabilityAudience({
  locale,
  content,
}: SustainabilityAudienceProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-xinix-blue">{t.buyers.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-stone">
                {t.buyers.body}
              </p>
              <div className="mt-8">
                <Button href={localePath(locale, "/products")}>
                  {content.ui.browseRange}
                </Button>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-xinix-blue">{t.partners.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-stone">
                {t.partners.body}
              </p>
              <div className="mt-8">
                <Button href={localePath(locale, "/contact")} variant="secondary">
                  {content.ui.contactUs}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
