import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { headerClearance } from "@/lib/heroLayout";
import { cn } from "@/lib/utils";

interface ProductsHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Products",
    headline: "Clean water, safer food and everyday hygiene, made in Ethiopia",
    body: "Xinix makes water treatment, food hygiene and cleaning products for homes, healthcare, farms, food businesses, aviation and industry. Every product is formulated for one clear job, breaks down naturally after use and is produced in Ethiopia for dependable supply.",
    retailer: "Find a retailer",
    stats: [
      { value: "14", label: "Products" },
      { value: "5", label: "Areas of use" },
      { value: "ET", label: "Made in Ethiopia" },
    ],
  },
  am: {
    eyebrow: "ምርቶች",
    headline: "ንጹሕ ውሃ፣ ይበልጥ ደህንነቱ የተጠበቀ ምግብና የዕለት ንጽህና፣ በኢትዮጵያ የተሠራ",
    body: "ዚኒክስ ለቤቶች፣ ለጤና፣ ለእርሻዎች፣ ለምግብ ንግድ፣ ለአቪዬሽንና ለኢንዱስትሪ የውሃ ሕክምና፣ የምግብ ንጽህናና የማጽዳት ምርቶችን ያመርታል። እያንዳንዱ ምርት ለአንድ ግልጽ ሥራ የተቀመረ፣ ከአጠቃቀም በኋላ በተፈጥሮ የሚበሰብስ፣ እና አስተማማኝ አቅርቦት ለማረጋገጥ በኢትዮጵያ የሚመረት ነው።",
    retailer: "ሻጭ ያግኙ",
    stats: [
      { value: "14", label: "ምርቶች" },
      { value: "5", label: "የአጠቃቀም መስኮች" },
      { value: "ኢት", label: "በኢትዮጵያ የተሠራ" },
    ],
  },
} as const;

export function ProductsHero({ locale, content }: ProductsHeroProps) {
  const t = copy[locale];

  return (
    <section
      data-header-tone="dark"
      className={cn(
        "relative flex min-h-[72vh] items-end overflow-hidden bg-deep-navy",
        headerClearance,
      )}
    >
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.manufacturing} effect="zoom-out" sizes="100vw" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-deep-navy/90 via-xinix-blue/40 to-xinix-blue/15" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,_rgba(43,134,199,0.28),_transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-band">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {t.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/contact")} tone="onDark">
              {content.ui.requestQuote}
            </Button>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {t.retailer}
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
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
