import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

const sizes = {
  sm: "h-9 w-auto max-w-[6.5rem]",
  md: "h-11 w-auto max-w-[7.75rem] sm:h-14 sm:max-w-[9.5rem] lg:h-16 lg:max-w-none",
  lg: "h-24 w-auto max-w-[11rem] sm:h-36 sm:max-w-none",
} as const;

export function Logo({
  className,
  variant = "default",
  size = "md",
  priority = false,
}: LogoProps) {
  const src =
    variant === "light" ? "/brand/xinix-logo-light.png" : "/brand/xinix-logo.png";

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Xinix — Innovation in every drop"
        width={874}
        height={946}
        priority={priority}
        className={cn("object-contain", sizes[size])}
      />
    </span>
  );
}
