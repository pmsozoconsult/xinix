"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { categoryApplications, categoryColor } from "@/lib/productMeta";
import { type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface CategoryApplicationsProps {
  locale: Locale;
  categorySlug: CategorySlug;
}

const heading = {
  en: {
    eyebrow: "Where it works",
    title: "Built for the job",
    body: "Three ways this range solves real problems in the field, on the line, and at the point of use.",
  },
  am: {
    eyebrow: "የት እንደሚሠራ",
    title: "ለሥራው የተዘጋጀ",
    body: "ይህ ስብስብ በመስክ፣ በመስመር እና በአጠቃቀም ቦታ ላይ እውነተኛ ችግሮችን የሚፈታው በሦስት መንገዶች።",
  },
} as const;

function StepIcon({ index }: { index: number }) {
  const paths = [
    <path
      key="0"
      d="M12 3S6 10 6 15a6 6 0 0 0 12 0c0-5-6-12-6-12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />,
    <path
      key="1"
      d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />,
    <path
      key="2"
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />,
  ];

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      {paths[index % paths.length]}
    </svg>
  );
}

export function CategoryApplications({
  locale,
  categorySlug,
}: CategoryApplicationsProps) {
  const h = heading[locale];
  const items = categoryApplications[categorySlug][locale];
  const color = categoryColor[categorySlug];

  return (
    <section data-header-tone="light" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div
        className={cn(
          "pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full blur-3xl",
          color?.softBg,
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--line) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,26rem)_1fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
              {h.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
              {h.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
              {h.body}
            </p>
            <div
              className={cn(
                "mt-8 hidden h-1 w-16 rounded-full lg:block",
                color?.bg,
              )}
            />
          </Reveal>

          <Stagger className="relative space-y-0">
            <div
              className={cn(
                "absolute bottom-6 left-[1.65rem] top-6 hidden w-px sm:block",
                color?.bg,
                "opacity-25",
              )}
              aria-hidden
            />

            {items.map((item, index) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="group relative flex gap-5 pb-8 last:pb-0 sm:gap-6 sm:pb-10"
              >
                <div
                  className={cn(
                    "relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border bg-white shadow-sm transition duration-300 group-hover:shadow-md",
                    color?.softBg,
                    color?.border,
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg",
                      color?.softBg,
                      color?.text,
                    )}
                  >
                    <StepIcon index={index} />
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 font-mono text-[10px] font-bold tracking-wider",
                      color?.text,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={cn(
                    "flex min-h-[5.5rem] flex-1 flex-col justify-center rounded-2xl border border-line bg-white p-5 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:border-transparent group-hover:shadow-lg sm:p-6",
                    "group-hover:ring-1",
                    color?.ring,
                  )}
                >
                  <p className="text-lg font-semibold leading-snug text-xinix-blue sm:text-xl">
                    {item}
                  </p>
                  <span
                    className={cn(
                      "mt-4 block h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16",
                      color?.bg,
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
