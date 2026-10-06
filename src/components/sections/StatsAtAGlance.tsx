"use client";

import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface StatsAtAGlanceProps {
  eyebrow: string;
  headline: string;
  stats: { value: string; label: string }[];
}

function barWidth(value: string, max: number): string {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || max <= 0) return "28%";
  return `${Math.max(12, Math.round((n / max) * 100))}%`;
}

export function StatsAtAGlance({ eyebrow, headline, stats }: StatsAtAGlanceProps) {
  const max = Math.max(
    ...stats.map((stat) => Number.parseInt(stat.value, 10) || 0),
    1,
  );

  return (
    <section data-header-tone="light" className="relative overflow-hidden bg-sky-wash py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-xinix-blue/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-xinix-blue">
            {eyebrow}
          </p>
          {headline ? (
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
          ) : null}
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-xinix-blue/15 bg-white shadow-[0_20px_50px_-28px_rgba(23,105,168,0.45)]">
          <div className="h-1.5 bg-gradient-to-r from-xinix-blue via-xinix-blue-deep to-deep-navy" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const featured = index === 0;
              return (
                <li
                  key={stat.label}
                    className={cn(
                      "relative overflow-hidden border-t border-line px-6 py-8 first:border-t-0 sm:px-8 sm:py-10",
                      "sm:border-l sm:odd:border-l-0 sm:[&:nth-child(2)]:border-t-0",
                      "lg:border-t-0 lg:border-l lg:odd:border-l lg:first:border-l-0",
                      featured ? "bg-xinix-blue text-white" : "bg-white",
                    )}
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute -right-2 -top-6 hidden font-mono text-[7.5rem] font-bold leading-none sm:block",
                      featured ? "text-white/10" : "text-xinix-blue/[0.07]",
                    )}
                    aria-hidden
                  >
                    {stat.value}
                  </span>
                  <p
                    className={cn(
                      "font-mono text-[11px] font-bold uppercase tracking-[0.22em]",
                      featured ? "text-white/70" : "text-xinix-blue",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <CountUp
                    value={stat.value}
                    className={cn(
                      "relative mt-5 block font-mono text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl",
                      featured ? "text-white" : "text-deep-navy",
                    )}
                  />
                  <span
                    className={cn(
                      "relative mt-5 block h-1 rounded-full",
                      featured ? "bg-white/35" : "bg-mist",
                    )}
                  >
                    <span
                      className={cn(
                        "block h-full rounded-full",
                        featured ? "bg-white" : "bg-xinix-blue",
                      )}
                      style={{ width: barWidth(stat.value, max) }}
                    />
                  </span>
                  <p
                    className={cn(
                      "relative mt-5 max-w-[12rem] text-sm leading-snug sm:text-base",
                      featured ? "text-white/85" : "text-stone",
                    )}
                  >
                    {stat.label}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
