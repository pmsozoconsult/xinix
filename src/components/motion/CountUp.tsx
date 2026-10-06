"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
