import Link from "next/link";
import type { Locale } from "@/types/content";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonTone = "default" | "onDark";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-[15px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]";

const variants: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    default:
      "bg-gradient-to-b from-xinix-teal to-deep-teal text-white shadow-md shadow-deep-teal/30 ring-1 ring-white/10 hover:-translate-y-0.5 hover:from-[#1596a3] hover:to-deep-navy hover:shadow-lg hover:shadow-xinix-teal/25 focus-visible:ring-xinix-teal",
    onDark:
      "bg-gradient-to-b from-white to-paper text-deep-teal shadow-md shadow-black/20 ring-1 ring-white/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 focus-visible:ring-white",
  },
  secondary: {
    default:
      "border border-deep-teal/40 bg-white/60 text-deep-teal shadow-sm ring-1 ring-deep-teal/10 hover:-translate-y-0.5 hover:border-deep-teal hover:bg-mist/90 hover:shadow-md focus-visible:ring-deep-teal",
    onDark:
      "border border-white/30 bg-white/10 text-white shadow-sm ring-1 ring-white/10 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 hover:shadow-md focus-visible:ring-white/50",
  },
  tertiary: {
    default:
      "bg-transparent px-4 text-teal-text ring-1 ring-transparent hover:bg-mist/80 hover:text-deep-teal focus-visible:ring-teal-text",
    onDark:
      "bg-transparent px-4 text-white/85 ring-1 ring-transparent hover:bg-white/10 hover:text-white focus-visible:ring-white/40",
  },
};

export function Button({
  href,
  variant = "primary",
  tone = "default",
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant][tone], className);

  const content = (
    <>
      {variant === "primary" && (
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-70"
          aria-hidden
        />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}

/** @deprecated Use variant="tertiary" */
export type { ButtonVariant };

export function localeButton(
  locale: Locale,
  path: string,
  label: string,
  variant: ButtonVariant = "primary",
) {
  return (
    <Button href={localePath(locale, path)} variant={variant}>
      {label}
    </Button>
  );
}
