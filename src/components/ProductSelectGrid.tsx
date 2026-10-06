"use client";

import { cn } from "@/lib/utils";

interface ProductSelectGridProps {
  id?: string;
  legend: string;
  products: { slug: string; name: string }[];
  selected: string[];
  onToggle: (slug: string) => void;
  selectedLabel: string;
  noneLabel: string;
  error?: string;
}

export function ProductSelectGrid({
  id,
  legend,
  products,
  selected,
  onToggle,
  selectedLabel,
  noneLabel,
  error,
}: ProductSelectGridProps) {
  const selectedNames = products.filter((product) => selected.includes(product.slug));

  return (
    <fieldset id={id}>
      <legend className="text-sm font-medium text-deep-navy">{legend}</legend>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {products.map((product) => {
          const checked = selected.includes(product.slug);
          return (
            <label
              key={product.slug}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition",
                checked
                  ? "border-xinix-blue bg-sky-wash text-deep-navy"
                  : "border-line bg-white text-deep-navy hover:border-xinix-blue/40",
              )}
            >
              <input
                type="checkbox"
                className="rounded border-line text-xinix-blue"
                checked={checked}
                onChange={() => onToggle(product.slug)}
              />
              {product.name}
            </label>
          );
        })}
      </div>
      {selectedNames.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex h-7 items-center text-xs font-semibold uppercase tracking-wider text-stone">
            {selectedLabel}
          </span>
          {selectedNames.map((product) => (
            <button
              key={product.slug}
              type="button"
              onClick={() => onToggle(product.slug)}
              className="inline-flex h-7 items-center rounded-full bg-xinix-blue/10 px-3 text-xs font-semibold text-xinix-blue-deep"
            >
              {product.name} ×
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-xs text-stone">{noneLabel}</p>
      )}
      {error ? <p className="mt-1.5 text-xs text-red-700">{error}</p> : null}
    </fieldset>
  );
}
