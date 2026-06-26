"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { localePath } from "@/lib/i18n";
import { categoryImages } from "@/lib/visuals";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface CategoryPanel {
  slug: string;
  title: string;
  description: string;
}

interface CategoryShowcaseProps {
  locale: Locale;
  title: string;
  panels: CategoryPanel[];
  cta: string;
  exploreCta: string;
}

export function CategoryShowcase({
  locale,
  title,
  panels,
  cta,
  exploreCta,
}: CategoryShowcaseProps) {
  return (
    <section className="bg-deep-navy pt-8">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </Reveal>
      </div>

      {panels.map((panel, index) => {
        const reversed = index % 2 === 1;
        const theme = categoryTheme[panel.slug as CategorySlug];
        const image = categoryImages[panel.slug];

        return (
          <div
            key={panel.slug}
            className="relative border-t border-white/10"
          >
            <div
              className={cn(
                "mx-auto grid max-w-7xl lg:grid-cols-2 lg:min-h-[32rem]",
                reversed && "lg:[&>*:first-child]:order-2",
              )}
            >
              <motion.div
                initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[18rem] overflow-hidden lg:min-h-full"
              >
                <ScrollImage
                  src={image}
                  effect="parallax-up"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent lg:bg-gradient-to-r lg:from-deep-navy/60 lg:to-transparent" />
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-40 w-56 bg-gradient-to-tr from-deep-navy/75 via-deep-navy/35 to-transparent lg:h-48 lg:w-72"
                  aria-hidden
                />
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                  <span
                    className={cn(
                      "relative block text-7xl font-bold leading-none tracking-tighter sm:text-8xl",
                      theme?.accent ?? "text-drop-cyan",
                    )}
                    aria-hidden
                  >
                    <span className="absolute inset-0 text-white/45 mix-blend-soft-light blur-[0.5px]">
                      0{index + 1}
                    </span>
                    <span className="relative text-white/30 mix-blend-overlay drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] [text-shadow:0_0_40px_rgba(255,255,255,0.12)]">
                      0{index + 1}
                    </span>
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-14 lg:py-16"
              >
                <span
                  className={cn(
                    "text-sm font-semibold uppercase tracking-[0.15em]",
                    theme?.accent ?? "text-drop-cyan",
                  )}
                >
                  {panel.title}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {panel.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                  {panel.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={localePath(locale, `/products/${panel.slug}`)}>
                    {cta}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}

      <div className="border-t border-white/10 py-12 text-center">
        <Link
          href={localePath(locale, "/products")}
          className="text-sm font-semibold uppercase tracking-widest text-drop-cyan hover:text-white"
        >
          {exploreCta} →
        </Link>
      </div>
    </section>
  );
}
