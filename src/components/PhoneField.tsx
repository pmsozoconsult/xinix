"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/types/content";
import {
  callingCode,
  countryName,
  flagEmoji,
  listedCountries,
  type CountryCode,
} from "@/lib/phone";
import { cn } from "@/lib/utils";

interface PhoneFieldProps {
  locale: Locale;
  country: CountryCode;
  national: string;
  onCountryChange: (country: CountryCode) => void;
  onNationalChange: (value: string) => void;
  error?: string;
  inputClass: string;
  label: string;
}

export function PhoneField({
  locale,
  country,
  national,
  onCountryChange,
  onNationalChange,
  error,
  inputClass,
  label,
}: PhoneFieldProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const countries = useMemo(() => listedCountries(), []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const filtered = countries.filter((code) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      code.toLowerCase().includes(q) ||
      countryName(code, locale).toLowerCase().includes(q) ||
      callingCode(code).includes(q.replace("+", ""))
    );
  });

  return (
    <div ref={root} className="block text-sm font-medium text-deep-navy">
      {label}
      <div className="mt-1.5 flex gap-2">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex min-w-[7.5rem] items-center justify-between gap-2 rounded-xl border border-line bg-white px-3 py-3 text-sm shadow-sm",
            error && "border-red-400",
          )}
        >
          <span className="flex items-center gap-2">
            <span aria-hidden className="text-base leading-none">
              {flagEmoji(country)}
            </span>
            <span className="font-mono text-xs">+{callingCode(country)}</span>
          </span>
          <span aria-hidden className="text-stone">
            ▾
          </span>
        </button>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          value={national}
          onChange={(event) => onNationalChange(event.target.value.replace(/[^\d\s-]/g, ""))}
          className={cn(inputClass, "mt-0", error && "border-red-400")}
          aria-invalid={Boolean(error)}
        />
      </div>
      {open ? (
        <div className="relative z-20">
          <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-line bg-white shadow-xl sm:w-80">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={locale === "en" ? "Search country" : "ሀገር ይፈልጉ"}
              className="w-full border-b border-line px-3 py-2 text-sm outline-none"
            />
            <ul role="listbox" className="max-h-56 overflow-y-auto py-1">
              {filtered.slice(0, 80).map((code) => (
                <li key={code}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-sky-wash",
                      code === country && "bg-sky-wash font-semibold",
                    )}
                    onClick={() => {
                      onCountryChange(code);
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    <span aria-hidden>{flagEmoji(code)}</span>
                    <span className="flex-1">{countryName(code, locale)}</span>
                    <span className="font-mono text-xs text-stone">+{callingCode(code)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {error ? (
        <p className="mt-1.5 text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
