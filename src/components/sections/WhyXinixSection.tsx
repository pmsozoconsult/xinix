"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface WhyXinixSectionProps {
  locale: Locale;
  title: string;
}

const copy = {
  en: {
    eyebrow: "Why Xinix",
    lead: "Importing hygiene and water treatment products means waiting on foreign exchange, customs and shipping. A local manufacturer changes that.",
    imports: "Imported products",
    importsPoints: [
      "Exposed to foreign exchange shortages",
      "Delayed by customs and shipping",
      "Prices that move with the exchange rate",
      "Support from a supplier far away",
    ],
    xinix: "Xinix, made in Ethiopia",
    xinixPoints: [
      "Shorter lead times from a local plant",
      "More predictable pricing",
      "Formulas made for Ethiopian conditions",
      "Help with product choice, dosing and staff training",
    ],
  },
  am: {
    eyebrow: "ለምን ዚኒክስ",
    lead: "የንጽህናና የውሃ ሕክምና ምርቶችን ማስመጣት በውጭ ምንዛሬ፣ ጉምሩክና መጓጓዣ መጠበቅ ማለት ነው። የአገር ውስጥ አምራች ያንን ይቀይራል።",
    imports: "የሚመጡ ምርቶች",
    importsPoints: [
      "ለውጭ ምንዛሬ እጥረት የተጋለጡ",
      "በጉምሩክና በመጓጓዣ የሚዘገዩ",
      "ከምንዛሬ ጋር የሚንቀሳቀስ ዋጋ",
      "ከሩቅ አቅራቢ የሚመጣ ድጋፍ",
    ],
    xinix: "ዚኒክስ፣ በኢትዮጵያ የተሠራ",
    xinixPoints: [
      "ከአገር ውስጥ ፋብሪካ አጭር የመላኪያ ጊዜ",
      "ይበልጥ ሊገመት የሚችል ዋጋ",
      "ለኢትዮጵያ ሁኔታ የተሠሩ ቀመሮች",
      "በምርት ምርጫ፣ መጠንና የሠራተኛ ስልጠና እርዳታ",
    ],
  },
} as const;

export function WhyXinixSection({ locale, title }: WhyXinixSectionProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-paper to-mist/50" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--line) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-drop-cyan/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">{t.lead}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto_1fr]">
              <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                  {t.imports}
                </p>
                <ul className="mt-5 space-y-3">
                  {t.importsPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-stone/70 line-through decoration-stone/30 sm:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center border-b border-line bg-mist/50 px-6 py-4 lg:border-b-0 lg:px-8">
                <span className="rounded-full border border-line bg-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-teal-text">
                  vs
                </span>
              </div>

              <div className="p-6 sm:p-8 lg:border-l lg:border-line">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-green">
                  {t.xinix}
                </p>
                <ul className="mt-5 space-y-3">
                  {t.xinixPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm font-medium text-deep-navy sm:text-base"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-green/15 text-xs text-leaf-green">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
