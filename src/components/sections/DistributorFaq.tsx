"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface DistributorFaqProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Frequently asked questions",
    title: "Before you apply",
    items: [
      {
        q: "When can distributors place orders?",
        a: "Commercial production begins in December 2026. We are appointing distributors now so that stock, training and marketing are ready for launch.",
      },
      {
        q: "Do you offer exclusive territories?",
        a: "Territory arrangements are agreed case by case, based on market size, sales capacity and commitment.",
      },
      {
        q: "Is there a minimum order?",
        a: "Order volumes are agreed with each partner as part of the distribution agreement.",
      },
      {
        q: "Do you supply outside Ethiopia?",
        a: "Yes. We have export partnerships in East Africa and welcome enquiries from established importers and distributors across the region.",
      },
      {
        q: "Will you help with product registration in my country?",
        a: "Yes. We provide technical support for product registration. Final requirements and approvals depend on the destination market and its national authority.",
      },
      {
        q: "Can I sell to both retail and institutional customers?",
        a: "Yes. The range includes retail sizes for shops and pharmacies, plus larger formats for institutions, farms and industry.",
      },
    ],
  },
  am: {
    eyebrow: "ተደጋጋሚ ጥያቄዎች",
    title: "ከማመልከትዎ በፊት",
    items: [
      {
        q: "አከፋፋዮች መቼ ማዘዝ ይችላሉ?",
        a: "ንግድ ምርት ከታኅሣሥ 2019 ዓ.ም. ይጀምራል። ለመጀመሪያው ክምችት፣ ስልጠናና ግብይት ዝግጁ እንዲሆን አከፋፋዮችን አሁን እየሾምን ነን።",
      },
      {
        q: "ልዩ ግዛት ትሰጣላችሁ?",
        a: "የግዛት ሥምምነቶች በገበያ መጠን፣ የሽያጭ አቅምና ቁርጠኝነት መሠረት በእያንዳንዱ ጉዳይ ይወሰናሉ።",
      },
      {
        q: "ዝቅተኛ ትዕዛዝ አለ?",
        a: "የትዕዛዝ መጠኖች ከእያንዳንዱ አጋር ጋር በስርጭት ሥምምነቱ ውስጥ ይወሰናሉ።",
      },
      {
        q: "ከኢትዮጵያ ውጭ ታቀርባላችሁ?",
        a: "አዎ። በምስራቅ አፍሪካ የወጪ ንግድ አጋርነቶች አሉን፤ በክልሉ ከተቋቋሙ አስመጪዎችና አከፋፋዮች ጥያቄ እንቀበላለን።",
      },
      {
        q: "በሀገሬ የምርት ምዝገባ ትረዱኛላችሁ?",
        a: "አዎ። ለምርት ምዝገባ ቴክኒካዊ ድጋፍ እንሰጣለን። የመጨረሻ መስፈርቶችና ፈቃዶች በመድረሻ ገበያውና በብሔራዊ ባለሥልጣኑ ይወሰናሉ።",
      },
      {
        q: "ለችርቻሮም ለተቋማትም መሸጥ እችላለሁ?",
        a: "አዎ። ስብስቡ ለሱቆችና ፋርማሲዎች የችርቻሮ መጠኖች፣ ለተቋማት፣ እርሻዎችና ኢንዱስትሪ ትላልቅ ቅርጾችን ያካትታል።",
      },
    ],
  },
} as const;

export function DistributorFaq({ locale }: DistributorFaqProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.items.map((item) => (
            <article key={item.q} className="rounded-2xl border border-line bg-white p-6">
              <p className="text-lg font-bold text-deep-navy">{item.q}</p>
              <p className="mt-3 text-base leading-relaxed text-stone">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
