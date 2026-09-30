"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface QualityPapersProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Two documents",
    title: "Datasheet and safety data sheet",
    body: "Each SKU carries both. They are not the same file: one describes the product for use, the other describes hazards and handling.",
    sheets: [
      {
        mark: "DS",
        title: "Datasheet",
        body: "What the product is for, how it is used, pack size, and the claims that sit on the label.",
      },
      {
        mark: "SDS",
        title: "Safety data sheet",
        body: "Hazards, first aid, storage and handling — the sheet a buyer, store or clinic should keep on file.",
      },
    ],
    pending:
      "Files will sit on each product page once Xinix supplies them. Until then the product page states that clearly.",
  },
  am: {
    eyebrow: "ሁለት ሰነዶች",
    title: "የመረጃ ሉህ እና የደህንነት መረጃ ሉህ",
    body: "እያንዳንዱ ምርት ሁለቱንም ይዞ ይመጣል። አንድ ፋይል አይደሉም፦ አንዱ አጠቃቀምን ይገልጻል፣ ሌላኛው አደጋንና አያያዝን።",
    sheets: [
      {
        mark: "DS",
        title: "የመረጃ ሉህ",
        body: "ምርቱ ለምን እንደሚውል፣ እንዴት እንደሚጠቀም፣ መጠን፣ እና በመለያው ላይ ያሉ ቃላት።",
      },
      {
        mark: "SDS",
        title: "የደህንነት መረጃ ሉህ",
        body: "አደጋ፣ የመጀመሪያ እርዳታ፣ ማከማቻ እና አያያዝ — ገዢ፣ መጋዘን ወይም ክሊኒክ በፋይል ሊያቆየው የሚገባ ሉህ።",
      },
    ],
    pending:
      "ፋይሎቹ ዚኒክስ ሲያቀርባቸው በእያንዳንዱ የምርት ገጽ ላይ ይቀመጣሉ። እስከዚያ ድረስ ገጹ ያንን በግልጽ ይናገራል።",
  },
} as const;

export function QualityPapers({ locale }: QualityPapersProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {t.body}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col items-stretch gap-8 lg:flex-row lg:items-end lg:justify-center">
          {t.sheets.map((sheet, index) => (
            <Reveal key={sheet.mark} delay={index * 0.08} className="flex-1">
              <article
                className="relative mx-auto w-full max-w-md bg-white px-8 py-10 shadow-[8px_12px_40px_rgba(18,58,92,0.12)] ring-1 ring-line"
                style={{
                  transform: index === 1 ? "rotate(1.25deg)" : "rotate(-1.1deg)",
                }}
              >
                <div className="flex items-center justify-between border-b border-dashed border-line pb-4">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-stone">
                    XINIX
                  </span>
                  <span className="font-mono text-lg font-bold text-xinix-teal">
                    {sheet.mark}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-xinix-blue">{sheet.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-stone">{sheet.body}</p>
                <div className="mt-10 h-px bg-line" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-stone/70">
                  {locale === "en" ? "Controlled document" : "ቁጥጥር የሚደረግበት ሰነድ"}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-stone">{t.pending}</p>
      </div>
    </section>
  );
}
