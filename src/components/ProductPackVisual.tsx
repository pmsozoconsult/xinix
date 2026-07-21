import { CategoryIcon } from "@/components/Icons";
import { categoryTheme, type CategorySlug } from "@/lib/categories";
import { categoryColor } from "@/lib/productMeta";
import { cn } from "@/lib/utils";

interface ProductPackVisualProps {
  name: string;
  packSize?: string;
  categorySlug: string;
  size?: "sm" | "lg";
  className?: string;
}

/**
 * Designed stand-in for real product packaging: a stylised container with a
 * category-tinted backdrop and a clean label band. Consistent identity per SKU
 * without needing twelve individual photos.
 */
export function ProductPackVisual({
  name,
  packSize,
  categorySlug,
  size = "lg",
  className,
}: ProductPackVisualProps) {
  const slug = categorySlug as CategorySlug;
  const theme = categoryTheme[slug];
  const color = categoryColor[slug];
  const iconName = theme?.icon as "water" | "hygiene" | "agriculture" | "industrial";
  const isLg = size === "lg";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", color?.gradient)} />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative flex flex-col items-center">
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
            <CategoryIcon
              name={iconName}
              className={isLg ? "h-6 w-6" : "h-5 w-5"}
            />
          </span>

          <div
            className={cn(
              "w-full rounded-lg border-t-4 bg-white px-2 py-2.5 text-center shadow-sm",
              color?.border,
            )}
          >
            <p
              className={cn(
                "font-bold leading-tight text-deep-navy",
                isLg ? "text-base" : "text-sm",
              )}
            >
              {name}
            </p>
            {packSize && (
              <p className="mt-0.5 text-[10px] leading-snug text-stone">
                {packSize}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
