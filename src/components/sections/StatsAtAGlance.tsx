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
    <section data-header-tone="light" className="relative overflow-hidden bg-sky-wash py-16 sm:py-24 lg:py-28">
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

        <ol className="mt-8 overflow-hidden rounded-2xl border border-line bg-white lg:hidden">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className="flex items-center gap-4 border-b border-line px-4 py-4 last:border-b-0 sm:gap-5 sm:px-5"
            >
              <CountUp
                value={stat.value}
                className="w-14 shrink-0 font-mono text-3xl font-bold leading-none tracking-tight text-xinix-blue sm:w-16 sm:text-4xl"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug text-deep-navy sm:text-base">
                  {stat.label}
                </p>
                <span className="mt-2 block h-1 overflow-hidden rounded-full bg-mist">
                  <span
                    className="block h-full rounded-full bg-xinix-blue"
                    style={{ width: barWidth(stat.value, max) }}
                  />
                </span>
              </div>
              <span className="hidden font-mono text-[11px] text-stone/50 sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 hidden overflow-hidden rounded-[1.75rem] border border-xinix-blue/15 bg-white shadow-[0_20px_50px_-28px_rgba(23,105,168,0.45)] lg:block">
          <div className="h-1.5 bg-gradient-to-r from-xinix-blue via-xinix-blue-deep to-deep-navy" />
          <ol className="grid lg:grid-cols-4">
            {stats.map((stat, index) => {
              const featured = index === 0;
              return (
                <li
                  key={stat.label}
                  className={cn(
                    "relative overflow-hidden border-l border-line px-8 py-10 first:border-l-0",
                    featured ? "bg-xinix-blue text-white" : "bg-white",
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute -right-2 -top-6 font-mono text-[7.5rem] font-bold leading-none",
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
                      "relative mt-5 block font-mono text-7xl font-bold leading-none tracking-tight",
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
                      "relative mt-5 max-w-[12rem] text-base leading-snug",
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
