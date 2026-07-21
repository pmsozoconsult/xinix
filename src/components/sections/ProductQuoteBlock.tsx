import type { Locale, SiteContent } from "@/types/content";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";

interface ProductQuoteBlockProps {
  locale: Locale;
  content: SiteContent;
  productName: string;
}

const t = {
  en: {
    eyebrow: "Get pricing",
    headlinePrefix: "Request a quote for",
    body: "Send the quantity you need and we will come back with a price, usually within one working day.",
    email: "Email",
    phone: "Phone",
  },
  am: {
    eyebrow: "ዋጋ ያግኙ",
    headlinePrefix: "ለ",
    headlineSuffix: " ዋጋ ይጠይቁ",
    body: "የሚፈልጉትን መጠን ይላኩ፣ አብዛኛውን ጊዜ በአንድ የሥራ ቀን ውስጥ ዋጋ እንመልሳለን።",
    email: "ኢሜይል",
    phone: "ስልክ",
  },
} as const;

export function ProductQuoteBlock({
  locale,
  content,
  productName,
}: ProductQuoteBlockProps) {
  const labels = t[locale];
  const { contact } = content;
  const headline =
    locale === "en"
      ? `${labels.headlinePrefix} ${productName}`
      : `${labels.headlinePrefix}${productName}${(labels as typeof t.am).headlineSuffix}`;

  return (
    <section className="bg-deep-navy py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
            {labels.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            {labels.body}
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-drop-cyan">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {labels.email}
                </p>
                <p className="mt-0.5 text-sm font-medium text-white">
                  {contact.email}
                </p>
              </div>
            </a>
            <a
              href={contact.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-drop-cyan">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {labels.phone}
                </p>
                <p className="mt-0.5 text-sm font-medium text-white">
                  {contact.phone}
                </p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-8">
            <EnquiryForm
              locale={locale}
              ui={content.ui}
              productName={productName}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
