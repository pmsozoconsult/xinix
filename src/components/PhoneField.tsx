"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/types/content";
import {
  callingCode,
  countryName,
  listedCountries,
  type CountryCode,
} from "@/lib/phone";
import { cn } from "@/lib/utils";

function CountryFlag({ country }: { country: CountryCode }) {
  const code = country.toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width={20}
      height={15}
      alt=""
      className="h-[15px] w-5 shrink-0 rounded-[2px] object-cover ring-1 ring-black/10"
    />
  );
}

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
      <div className="mt-1.5 flex flex-col gap-2 min-[480px]:flex-row min-[480px]:items-start">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "box-border flex h-12 w-full shrink-0 items-center justify-between gap-2 rounded-xl border border-line bg-white px-3 py-0 text-sm leading-none shadow-sm min-[480px]:w-auto min-[480px]:min-w-[7.5rem]",
            error && "border-red-400",
          )}
        >
          <span className="flex items-center gap-2">
            <CountryFlag country={country} />
            <span className="font-mono text-xs leading-none">+{callingCode(country)}</span>
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
          className={cn(
            inputClass.replace(/\b(m[trblxy]?|p[trblxy]?|h)-\S+/g, ""),
            "box-border m-0 h-12 w-full min-w-0 flex-1 py-0 leading-none",
            error && "border-red-400",
          )}
          aria-invalid={Boolean(error)}
        />
      </div>
      {open ? (
        <div className="relative z-20">
          <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-line bg-white shadow-xl min-[480px]:w-80">
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
                    <CountryFlag country={code} />
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
