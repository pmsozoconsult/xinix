"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  IconBiodegradable,
  IconEthiopia,
  IconSolar,
  IconZeroDischarge,
} from "@/components/Icons";
import { cn } from "@/lib/utils";

const statIcons = [IconSolar, IconZeroDischarge, IconEthiopia, IconBiodegradable] as const;

interface CountUpProps {
  value: string;
  className?: string;
}

function parseValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return { num: Number(match[2]), prefix: match[1], suffix: match[3] };
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const { num, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(reduce ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(num * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, num, prefix, suffix, value, reduce]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {display}
    </motion.span>
  );
}

interface StatGridProps {
  stats: { value: string; label: string }[];
  variant?: "light" | "dark";
}

const cardStyles = {
  dark: {
    card: "border-white/10 bg-deep-teal/70",
    glow: "bg-drop-cyan/10 group-hover:bg-drop-cyan/20",
    icon: "bg-white/10 text-drop-cyan",
    value: "text-white",
    label: "text-white/80",
  },
  light: {
    card: "border-line bg-white shadow-lg shadow-deep-navy/5 ring-1 ring-line",
    glow: "bg-xinix-teal/10 group-hover:bg-xinix-teal/15",
    icon: "bg-mist text-xinix-teal",
    value: "text-deep-navy",
    label: "text-stone",
  },
} as const;

export function AnimatedStatGrid({ stats, variant = "dark" }: StatGridProps) {
  const styles = cardStyles[variant];

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
      {stats.map((stat, i) => {
        const Icon = statIcons[i % statIcons.length];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border p-5 sm:p-6",
              styles.card,
            )}
          >
            <div
              className={cn(
                "absolute -right-4 -top-4 h-24 w-24 rounded-full blur-2xl transition-opacity",
                styles.glow,
              )}
            />
            <div
              className={cn(
                "mb-4 flex h-9 w-9 items-center justify-center rounded-lg",
                styles.icon,
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <CountUp
              value={stat.value}
              className={cn(
                "block text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
                styles.value,
              )}
            />
            <p className={cn("mt-3 text-sm leading-snug", styles.label)}>{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
