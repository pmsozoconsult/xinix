"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HeroTrustMarqueeProps {
  items: string[];
}

export function HeroTrustMarquee({ items }: HeroTrustMarqueeProps) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div
      className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-deep-navy/55 backdrop-blur-md"
      aria-hidden
    >
      <div className="overflow-hidden py-3.5">
        <motion.div
          className="flex w-max items-center gap-10 sm:gap-14"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduce
              ? undefined
              : { repeat: Infinity, duration: 26, ease: "linear", repeatType: "loop" }
          }
        >
          {(reduce ? items : loop).map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-10 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 sm:gap-14 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-solar-amber" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
