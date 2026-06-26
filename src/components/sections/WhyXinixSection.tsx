"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import {
  IconBiodegradable,
  IconEthiopia,
  IconSolar,
} from "@/components/Icons";
import { Reveal, staggerItem, Stagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface WhyXinixSectionProps {
  locale: Locale;
  title: string;
  subtitle: string;
  whyItems: string[];
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 17l5-5 4 4 7-9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h5v5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const copy = {
  en: {
    eyebrow: "The case for local supply",
    imports: "Imported chemicals",
    importsPoints: [
      "Foreign exchange exposure",
      "Customs delays and price swings",
      "Distant supply chains",
    ],
    xinix: "Xinix, made in Ethiopia",
    xinixPoints: [
      "Stable local pricing",
      "Plant supply you can reach",
      "Solar powered, zero discharge",
    ],
    benefitsLabel: "Why buyers choose Xinix",
  },
  am: {
    eyebrow: "ለአገር ውስጥ አቅርቦት ምክንያት",
    imports: "የማስመጣት ኬሚካሎች",
    importsPoints: [
      "የውጭ ምንዛሬ ተጋላጭነት",
      "የጉምሩክ መዘግየት እና የዋጋ ዝውውር",
      "ሩቅ የአቅርቦት ሰንሰለት",
    ],
    xinix: "ዚኒክስ፣ በኢትዮጵያ የተሠራ",
    xinixPoints: [
      "አስተማማኝ የአገር ውስጥ ዋጋ",
      "ሊደርሱበት የሚችሉት አቅርቦት",
      "በፀሐይ ኃይል፣ ውሃ አይወጣም",
    ],
    benefitsLabel: "ገዢዎች ዚኒክስን ለምን ይመርጣሉ",
  },
} as const;

const benefitMeta = [
  { Icon: TrendIcon, icon: "text-xinix-teal", bg: "bg-xinix-teal/10", bar: "bg-xinix-teal" },
  { Icon: IconEthiopia, icon: "text-xinix-teal", bg: "bg-xinix-teal/10", bar: "bg-xinix-teal" },
  { Icon: IconSolar, icon: "text-solar-amber", bg: "bg-solar-amber/10", bar: "bg-solar-amber" },
  { Icon: IconBiodegradable, icon: "text-leaf-green", bg: "bg-leaf-green/10", bar: "bg-leaf-green" },
] as const;

export function WhyXinixSection({ locale, title, subtitle, whyItems }: WhyXinixSectionProps) {
  const t = copy[locale];

  return (
    <section className="relative overflow-hidden bg-paper">
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
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">{subtitle}</p>
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

        <div className="mt-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {t.benefitsLabel}
            </p>
          </Reveal>

          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <Stagger className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {whyItems.map((benefit, index) => {
                const { Icon, icon, bg, bar } = benefitMeta[index % benefitMeta.length];
                return (
                  <motion.div
                    key={benefit}
                    variants={staggerItem}
                    className="group relative flex items-start gap-3 p-4 sm:p-5"
                  >
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 top-0 w-0.5 opacity-0 transition-opacity group-hover:opacity-100",
                        bar,
                      )}
                    />
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        bg,
                        icon,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium leading-snug text-deep-navy">{benefit}</p>
                  </motion.div>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
