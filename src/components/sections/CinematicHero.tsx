"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Locale, SiteContent } from "@/types/content";
import { IconEthiopia, IconSolar } from "@/components/Icons";
import { HeroTrustMarquee } from "@/components/sections/HeroTrustMarquee";
import { localePath } from "@/lib/i18n";
import { visuals } from "@/lib/visuals";
import { cn } from "@/lib/utils";

interface CinematicHeroProps {
  locale: Locale;
  content: SiteContent;
}

const badgeMeta = {
  en: [
    { Icon: IconSolar, eyebrow: "Energy", accent: "solar-amber" as const },
    { Icon: IconEthiopia, eyebrow: "Origin", accent: "drop-cyan" as const },
  ],
  am: [
    { Icon: IconSolar, eyebrow: "ኃይል", accent: "solar-amber" as const },
    { Icon: IconEthiopia, eyebrow: "ታዕማዝ", accent: "drop-cyan" as const },
  ],
};

function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CinematicHero({ locale, content }: CinematicHeroProps) {
  const { home, ui } = content;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.68, 1], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.68, 1], [0, 0, 48]);
  const badges = badgeMeta[locale];

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0 min-h-[100svh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { scale: imageScale }}
        >
          <Image
            src={visuals.hero}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-deep-navy/60 via-deep-navy/35 to-deep-navy/75" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,_rgba(24,182,199,0.2),_transparent_50%)]" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-24 pt-24 will-change-[opacity,transform] sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-32"
        style={reduce ? { opacity: contentOpacity } : { opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <p className="mb-3 max-w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-drop-cyan backdrop-blur">
            {content.meta.tagline}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {home.headline}
          </h1>

          <div className="mt-6 w-full max-w-xl sm:mt-8">
            <div className="flex flex-col gap-2 rounded-2xl border border-white/12 bg-white/[0.06] p-1.5 shadow-2xl shadow-black/25 backdrop-blur-md sm:flex-row sm:rounded-full">
              <Link
                href={localePath(locale, "/contact")}
                className="group flex min-h-11 flex-1 items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-xinix-teal to-deep-teal px-5 py-3.5 text-sm font-semibold text-white transition hover:shadow-lg sm:justify-center sm:rounded-full"
              >
                <span>{ui.requestQuote}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href={localePath(locale, "/products")}
                className="group flex min-h-11 flex-1 items-center justify-between gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 sm:justify-center sm:rounded-full"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80">
                  <GridIcon className="h-3.5 w-3.5" />
                </span>
                <span>{ui.browseRange}</span>
              </Link>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg lg:text-xl">
            {home.body}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:max-w-lg sm:gap-3">
            {home.heroBadges.map((badge, index) => {
              const meta = badges[index % badges.length];
              const { Icon, eyebrow, accent } = meta;
              return (
                <div
                  key={badge}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] px-3 py-3 backdrop-blur-sm sm:gap-3.5 sm:rounded-2xl sm:px-4 sm:py-3.5"
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 sm:h-11 sm:w-11 sm:rounded-xl",
                      accent === "solar-amber"
                        ? "bg-solar-amber/15 text-solar-amber ring-solar-amber/25"
                        : "bg-drop-cyan/15 text-drop-cyan ring-drop-cyan/25",
                    )}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px] sm:tracking-[0.2em]",
                        accent === "solar-amber" ? "text-solar-amber/90" : "text-drop-cyan/90",
                      )}
                    >
                      {eyebrow}
                    </p>
                    <p className="text-xs font-medium leading-snug text-white sm:text-sm">{badge}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <HeroTrustMarquee items={content.trustBar} />

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-16 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="block h-8 w-px bg-white/40"
          />
        </motion.div>
      )}
    </section>
  );
}
