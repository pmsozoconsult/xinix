"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

interface SustainabilityStoryProps {
  locale: Locale;
  content: SiteContent;
}

const heading = {
  en: {
    eyebrow: "The plant",
    title: "Manufacturing is part of the product",
  },
  am: {
    eyebrow: "ፋብሪካው",
    title: "ማምረቻው የምርቱ አካል ነው",
  },
} as const;

export function SustainabilityStory({ locale, content }: SustainabilityStoryProps) {
  const h = heading[locale];
  const paragraphs = content.sustainability.body.split("\n\n");

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {h.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {h.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-xl shadow-deep-navy/10">
            <ScrollImage
              src={visuals.manufacturing}
              effect="parallax-up"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-navy/80 to-transparent p-6">
              <p className="text-sm font-semibold text-white">
                {locale === "en"
                  ? "Off-grid solar plant, Ethiopia"
                  : "ከመስመር ውጭ የፀሐይ ኃይል ፋብሪካ፣ ኢትዮጵያ"}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
