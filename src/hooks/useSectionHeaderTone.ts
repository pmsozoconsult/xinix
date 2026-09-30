"use client";

import { useEffect, useState } from "react";

export type HeaderTone = "dark" | "light";

/**
 * Reads the section under the header. `dark` means a navy/teal band;
 * `light` means paper/white. The header then uses the opposite chrome.
 */
export function useSectionHeaderTone(enabled: boolean, pathname: string): HeaderTone {
  const [tone, setTone] = useState<HeaderTone>("dark");

  useEffect(() => {
    if (!enabled) return;

    const read = () => {
      const header = document.querySelector("[data-site-header]");
      if (header instanceof HTMLElement) {
        header.style.pointerEvents = "none";
      }

      const sampleY = Math.min(56, Math.floor(window.innerHeight * 0.08));
      const sampleX = Math.min(Math.floor(window.innerWidth / 2), window.innerWidth - 12);
      const hit = document.elementFromPoint(sampleX, sampleY);
      const section = hit?.closest("[data-header-tone]");
      const next = section?.getAttribute("data-header-tone") === "dark" ? "dark" : "light";

      if (header instanceof HTMLElement) {
        header.style.pointerEvents = "";
      }

      setTone(next);
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [enabled, pathname]);

  return tone;
}
