import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function IconSolar({ className }: IconProps) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconZeroDischarge({ className }: IconProps) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBiodegradable({ className }: IconProps) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21c-4-3-8-7-8-11a8 8 0 0 1 16 0c0 4-4 8-8 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 10v6M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconEthiopia({ className }: IconProps) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 3 4 6 4 9s-1.5 6-4 9M12 3c-2.5 3-4 6-4 9s1.5 6 4 9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function IconWater({ className }: IconProps) {
  return (
    <svg className={cn("h-7 w-7", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3S6 10 6 15a6 6 0 0 0 12 0c0-5-6-12-6-12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHygiene({ className }: IconProps) {
  return (
    <svg className={cn("h-7 w-7", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 11V7a4 4 0 0 1 8 0v4M6 11h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconAgriculture({ className }: IconProps) {
  return (
    <svg className={cn("h-7 w-7", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21V11M12 11C12 6 7 3 4 3c0 4 2 8 8 8ZM12 11c0-5 5-8 8-8 0 4-2 8-8 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconIndustrial({ className }: IconProps) {
  return (
    <svg className={cn("h-7 w-7", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 21h18M6 21V9l4-2v14M14 21V5l4-2v18M10 13h.01M18 9h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const categoryIcons = {
  water: IconWater,
  hygiene: IconHygiene,
  agriculture: IconAgriculture,
  industrial: IconIndustrial,
} as const;

export function CategoryIcon({
  name,
  className,
}: {
  name: keyof typeof categoryIcons;
  className?: string;
}) {
  const Icon = categoryIcons[name];
  return <Icon className={className} />;
}

const trustIcons = [
  IconSolar,
  IconEthiopia,
  IconZeroDischarge,
  IconBiodegradable,
] as const;

export function TrustIcon({ index, className }: { index: number; className?: string }) {
  const Icon = trustIcons[index % trustIcons.length];
  return <Icon className={className} />;
}
