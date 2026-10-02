"use client";

import type { Locale, SiteContent } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";

interface AboutStoryProps {
  locale: Locale;
  content: SiteContent;
}

export function AboutStory({ locale, content }: AboutStoryProps) {
  const paragraphs = content.about.body.split("\n\n").filter(Boolean);
  const [first, ...rest] = paragraphs;
  const lead = first ?? "";
  const drop = lead.charAt(0);
  const remainder = lead.slice(1);

  return (
    <section
      id="company"
      data-header-tone="light"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {locale === "en" ? "The company" : "ኩባንያው"}
          </p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-xinix-blue sm:text-3xl">
            {locale === "en"
              ? "A manufacturer, not an importer"
              : "አምራች እንጂ አስመጪ አይደለንም"}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-deep-navy">
            <p>
              <span
                className="float-left mr-3 mt-1 font-mono text-6xl font-bold leading-none text-xinix-blue"
                aria-hidden
              >
                {drop}
              </span>
              {remainder}
            </p>
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-stone">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
