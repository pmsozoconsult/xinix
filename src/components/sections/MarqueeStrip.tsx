"use client";

import { motion, useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeProps) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-deep-teal py-4">
      <motion.div
        className="flex w-max gap-12"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={reduce ? undefined : { repeat: Infinity, duration: 28, ease: "linear" }}
      >
        {(reduce ? items : doubled).map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 text-sm font-medium uppercase tracking-[0.2em] text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-solar-amber" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
