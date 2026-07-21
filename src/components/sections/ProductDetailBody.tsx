import type { Locale, Product } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface ProductDetailBodyProps {
  locale: Locale;
  product: Product;
  categorySlug: CategorySlug;
}

const t = {
  en: {
    overview: "Overview",
    glance: "At a glance",
    spec: "Specification",
    usedBy: "Used by",
    feature: "Feature",
    pack: "Pack size",
    notes: "Notes",
    biodegradable: "Biodegradable",
    made: "Made in Ethiopia",
    datasheetTitle: "Datasheet & safety data sheet",
    datasheet:
      "The datasheet and safety data sheet for this product will be available here once supplied by Xinix.",
  },
  am: {
    overview: "አጠቃላይ እይታ",
    glance: "በአጭሩ",
    spec: "ዝርዝር መግለጫ",
    usedBy: "ተጠቃሚዎች",
    feature: "ጥቅም",
    pack: "የመጠን መጠን",
    notes: "ማስታወሻ",
    biodegradable: "በተፈጥሮ የሚበሰብስ",
    made: "በኢትዮጵያ የተመረተ",
    datasheetTitle: "የመረጃ ሉህና የደህንነት መረጃ ሉህ",
    datasheet:
      "የዚህ ምርት የመረጃ ሉህና የደህንነት መረጃ ሉህ ከዚኒክስ ከተላከ በኋላ እዚህ ይገኛል።",
  },
} as const;

export function ProductDetailBody({
  locale,
  product,
  categorySlug,
}: ProductDetailBodyProps) {
  const labels = t[locale];
  const { details } = product;
  const color = categoryColor[categorySlug];

  const glance = [
    { label: labels.usedBy, value: details.usedBy },
    { label: labels.feature, value: details.feature },
    { label: labels.pack, value: details.packSize },
    ...(details.extra
      ? [{ label: labels.notes, value: details.extra }]
      : []),
  ];

  const specRows = [
    { label: labels.usedBy, value: details.usedBy },
    { label: labels.feature, value: details.feature },
    { label: labels.pack, value: details.packSize },
    ...(details.extra
      ? [{ label: labels.notes, value: details.extra }]
      : []),
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:gap-14 lg:px-8">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {labels.overview}
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-deep-navy sm:text-3xl">
              {details.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              {details.feature}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {labels.glance}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {glance.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-paper p-5"
                >
                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.12em]",
                      color?.text,
                    )}
                  >
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-medium leading-snug text-deep-navy">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-leaf-green/10 px-3.5 py-1.5 text-sm font-medium text-leaf-green">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-green" />
                {labels.biodegradable}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-solar-amber/10 px-3.5 py-1.5 text-sm font-medium text-solar-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-solar-amber" />
                {labels.made}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-1">
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
                {labels.spec}
              </h2>
              <dl className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                {specRows.map((row) => (
                  <div key={row.label} className="px-5 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm text-deep-navy">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div
                id="datasheet"
                className="mt-4 scroll-mt-28 rounded-2xl border border-dashed border-line bg-paper p-5"
              >
                <p className="text-sm font-semibold text-deep-navy">
                  {labels.datasheetTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {labels.datasheet}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
