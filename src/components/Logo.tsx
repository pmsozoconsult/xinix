import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

const sizes = {
  sm: "h-11 w-auto",
  md: "h-14 w-auto sm:h-16",
  lg: "h-32 w-auto sm:h-36",
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
        className={cn("max-w-none", sizes[size])}
      />
    </span>
  );
}
