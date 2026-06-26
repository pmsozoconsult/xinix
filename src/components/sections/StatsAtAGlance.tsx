"use client";

import { AnimatedStatGrid } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

interface StatsAtAGlanceProps {
  eyebrow: string;
  headline: string;
  stats: { value: string; label: string }[];
}

export function StatsAtAGlance({ eyebrow, headline, stats }: StatsAtAGlanceProps) {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-paper to-mist/40" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--line) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-xinix-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
        </Reveal>
        <div className="mt-12">
          <AnimatedStatGrid stats={stats} variant="light" />
        </div>
      </div>
    </section>
  );
}
