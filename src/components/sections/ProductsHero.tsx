import Link from "next/link";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";

interface ProductsHeroProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Product range",
    headline: "Twelve products. Four applications.",
    body: "A focused range of biodegradable disinfection and cleaning chemicals, made in Ethiopia for water, hygiene, agriculture and industry. Every product is built for dependable supply and priced to compete with imports.",
    browse: "Browse by category",
    stats: [
      { value: "12", label: "Products" },
      { value: "4", label: "Applications" },
      { value: "100%", label: "Biodegradable" },
    ],
  },
  am: {
    eyebrow: "የምርት ስብስብ",
    headline: "አሥራ ሁለት ምርቶች። አራት አጠቃቀሞች።",
    body: "በተፈጥሮ የሚበሰብሱ የማጽጃና የመበከል መከላከያ ኬሚካሎች ስብስብ፣ ለውሃ፣ ለንጽሕና፣ ለግብርናና ለኢንዱስትሪ በኢትዮጵያ የተመረቱ። እያንዳንዱ ምርት አስተማማኝ አቅርቦትን ታሳቢ አድርጎ የተሠራና ከውጭ ከሚገቡ ጋር ለመወዳደር የተመጠነ ነው።",
    browse: "በምድብ ይመልከቱ",
    stats: [
      { value: "12", label: "ምርቶች" },
      { value: "4", label: "አጠቃቀሞች" },
      { value: "100%", label: "በተፈጥሮ የሚበሰብስ" },
    ],
  },
} as const;

export function ProductsHero({ locale, content }: ProductsHeroProps) {
  const t = copy[locale];

  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-deep-navy pt-24">
      <div className="absolute inset-0 z-0">
        <ScrollImage src={visuals.manufacturing} effect="zoom-out" sizes="100vw" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-deep-navy via-deep-navy/70 to-deep-navy/60" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,_rgba(24,182,199,0.18),_transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {t.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#categories" tone="onDark">
              {t.browse}
            </Button>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {content.ui.requestQuote}
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
