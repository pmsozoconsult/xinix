import Image from "next/image";
import { CategoryIcon } from "@/components/Icons";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { categoryColor } from "@/lib/productMeta";
import { getProductImage } from "@/lib/productImages";
import { cn } from "@/lib/utils";

export type PackStage = "color" | "dark" | "shelf";

interface ProductPackVisualProps {
  slug: string;
  name: string;
  packSize?: string;
  categorySlug: string;
  size?: "sm" | "lg";
  variant?: PackStage;
  className?: string;
}

export function ProductPackVisual({
  slug,
  name,
  packSize,
  categorySlug,
  size = "lg",
  variant = "color",
  className,
}: ProductPackVisualProps) {
  const cat = categorySlug as CategorySlug;
  const theme = categoryTheme[cat];
  const color = categoryColor[cat];
  const iconName = theme?.icon as "water" | "hygiene" | "agriculture" | "industrial";
  const isLg = size === "lg";
  const src = getProductImage(slug);

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        variant === "shelf" ? "items-end justify-center" : "items-center justify-center",
        className,
      )}
    >
      {variant === "color" && (
        <>
          <div className={cn("absolute inset-0 bg-gradient-to-br", color?.gradient)} />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </>
      )}

      {variant === "dark" && (
        <>
          <div className="absolute inset-0 bg-deep-navy" />
          <div
            className={cn(
              "absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
              color?.softBg,
            )}
          />
          <div
            className={cn(
              "absolute inset-x-8 bottom-6 h-24 rounded-[100%] blur-2xl opacity-70",
              color?.bg,
            )}
          />
        </>
      )}

      {variant === "shelf" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-mist to-paper" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-line/80 to-transparent" />
        </>
      )}

      {src ? (
        <div
          className={cn(
            "relative z-10",
            isLg
              ? "h-[88%] w-[72%] max-w-sm"
              : variant === "shelf"
                ? "h-[92%] w-[70%]"
                : "h-[90%] w-[75%]",
          )}
        >
          <Image
            src={src}
            alt={name}
            fill
            className={cn(
              "object-contain drop-shadow-2xl",
              variant === "shelf" ? "object-bottom" : "object-contain",
            )}
            sizes={isLg ? "(max-width: 1024px) 80vw, 28vw" : "(max-width: 640px) 50vw, 220px"}
          />
        </div>
      ) : (
        <IllustratedPack
          name={name}
          packSize={packSize}
          color={color}
          iconName={iconName}
          isLg={isLg}
        />
      )}
    </div>
  );
}

function IllustratedPack({
  name,
  packSize,
  color,
  iconName,
  isLg,
}: {
  name: string;
  packSize?: string;
  color: (typeof categoryColor)[CategorySlug] | undefined;
  iconName: "water" | "hygiene" | "agriculture" | "industrial";
  isLg: boolean;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <span className={cn("rounded-t-md", color?.bg, isLg ? "h-4 w-9" : "h-3 w-7")} />
      <span
        className={cn(
          "rounded-sm opacity-80",
          color?.bg,
          isLg ? "h-2 w-12" : "h-1.5 w-9",
        )}
      />
      <div
        className={cn(
          "flex flex-col items-center justify-between rounded-b-3xl rounded-t-lg border border-white/60 bg-gradient-to-b from-white to-mist shadow-2xl shadow-black/25",
          isLg ? "h-64 w-44 p-4" : "h-44 w-32 p-3",
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center rounded-xl ring-1",
            color?.softBg,
            color?.text,
            color?.ring,
            isLg ? "mt-2 h-12 w-12" : "h-9 w-9",
          )}
        >
          <CategoryIcon name={iconName} className={isLg ? "h-6 w-6" : "h-5 w-5"} />
        </span>
        <div
          className={cn(
            "w-full rounded-lg border-t-4 bg-white px-2 py-2.5 text-center shadow-sm",
            color?.border,
          )}
        >
          <p
            className={cn(
              "font-bold leading-tight text-xinix-blue",
              isLg ? "text-base" : "text-sm",
            )}
          >
            {name}
          </p>
          {packSize && (
            <p className="mt-0.5 text-[10px] leading-snug text-stone">{packSize}</p>
          )}
        </div>
      </div>
    </div>
  );
}
