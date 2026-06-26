import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 32, text: "text-lg" },
  md: { icon: 40, text: "text-xl sm:text-2xl" },
  lg: { icon: 56, text: "text-2xl sm:text-3xl" },
};

export function Logo({
  className,
  showWordmark = true,
  variant = "default",
  size = "md",
}: LogoProps) {
  const { icon, text } = sizes[size];
  const wordmarkClass =
    variant === "light" ? "text-white" : "text-deep-navy";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="xinix-droplet" x1="24" y1="4" x2="24" y2="44">
            <stop offset="0%" stopColor="#18B6C7" />
            <stop offset="50%" stopColor="#137C87" />
            <stop offset="100%" stopColor="#0C4A54" />
          </linearGradient>
        </defs>
        <path
          d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z"
          fill="url(#xinix-droplet)"
        />
        <ellipse cx="18" cy="28" rx="4" ry="6" fill="white" fillOpacity="0.25" />
      </svg>
      {showWordmark && (
        <span className={cn("font-bold tracking-tight", text, wordmarkClass)}>
          Xinix
        </span>
      )}
    </span>
  );
}
