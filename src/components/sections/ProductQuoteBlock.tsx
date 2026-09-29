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
    response: "Most enquiries answered within one working day.",
    formTitle: "Your enquiry",
    formHint: "Include pack size and quantity for a faster quote.",
    email: "Email",
    phone: "Phone",
    whatsapp: "Message on WhatsApp",
  },
  am: {
    eyebrow: "ዋጋ ያግኙ",
    headlinePrefix: "ለ",
    headlineSuffix: " ዋጋ ይጠይቁ",
    body: "የሚፈልጉትን መጠን ይላኩ፣ አብዛኛውን ጊዜ በአንድ የሥራ ቀን ውስጥ ዋጋ እንመልሳለን።",
    response: "አብዛኛውን ጊዜ በአንድ የሥራ ቀን ውስጥ ምላሽ እንሰጣለን።",
    formTitle: "ጥያቄዎ",
    formHint: "ለፈጣን ዋጋ የመጠን መጠንና ብዛት ያካትቱ።",
    email: "ኢሜይል",
    phone: "ስልክ",
    whatsapp: "በዋትስአፕ ይጻፉ",
  },
} as const;

function ContactPill({
  href,
  label,
  value,
}: {
  href: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 transition hover:border-white/30 hover:bg-white/10"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-drop-cyan">
        {label === "Email" || label === "ኢሜይል" ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/50">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-white group-hover:text-drop-cyan">
          {value}
        </span>
      </span>
    </a>
  );
}

export function ProductQuoteBlock({
  locale,
  content,
  productName,
}: ProductQuoteBlockProps) {
  const labels = t[locale];
  const { contact } = content;

  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-deep-navy/8">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div className="relative overflow-hidden bg-deep-navy p-8 sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(24,182,199,0.2),_transparent_55%)]"
                  aria-hidden
                />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
                    {labels.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    {locale === "en" ? (
                      <>
                        {labels.headlinePrefix}{" "}
                        <span className="text-drop-cyan">{productName}</span>
                      </>
                    ) : (
                      <>
                        {labels.headlinePrefix}
                        <span className="text-drop-cyan">{productName}</span>
                        {(labels as typeof t.am).headlineSuffix}
                      </>
                    )}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                    {labels.body}
                  </p>

                  <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
                    <span className="inline-block h-2 w-2 rounded-full bg-leaf-green" />
                    {labels.response}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ContactPill
                      label={labels.email}
                      href={`mailto:${contact.email}`}
                      value={contact.email}
                    />
                    <ContactPill
                      label={labels.phone}
                      href={contact.phoneHref}
                      value={contact.phone}
                    />
                  </div>

                  <a
                    href="https://wa.me/251904553355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-leaf-green/30 bg-leaf-green/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-leaf-green/25 sm:w-auto"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    {labels.whatsapp}
                  </a>
                </div>
              </div>

              <div className="border-t border-line bg-mist/50 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <h3 className="text-lg font-bold text-xinix-blue">{labels.formTitle}</h3>
                <p className="mt-1 text-sm text-stone">{labels.formHint}</p>
                <div className="mt-6">
                  <EnquiryForm
                    locale={locale}
                    ui={content.ui}
                    productName={productName}
                    hideIntro
                    variant="product"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
