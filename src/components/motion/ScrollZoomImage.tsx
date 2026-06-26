"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type UseScrollOptions,
} from "framer-motion";
import { useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";

type ScrollOffset = NonNullable<UseScrollOptions["offset"]>;

interface ScrollZoomImageProps {
  src: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  maxScale?: number;
  offset?: ScrollOffset;
  /** Optional external element to track scroll against (e.g. a parent section). */
  scrollRef?: RefObject<HTMLElement | null>;
}

const defaultOffset: ScrollOffset = ["start end", "end start"];

export function ScrollZoomImage({
  src,
  alt = "",
  sizes = "100vw",
  priority,
  className,
  containerClassName,
  maxScale = 1.12,
  offset = defaultOffset,
  scrollRef,
}: ScrollZoomImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollRef ?? containerRef,
    offset,
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, maxScale, 1]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName ?? "h-full w-full")}
    >
      <motion.div
        className="absolute inset-0 origin-center will-change-transform"
        style={reduce ? undefined : { scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", className)}
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
