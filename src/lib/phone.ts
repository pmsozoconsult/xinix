import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";

export type { CountryCode };

const PRIORITY: CountryCode[] = [
  "ET",
  "KE",
  "UG",
  "TZ",
  "RW",
  "SO",
  "DJ",
  "SD",
  "SS",
  "ZA",
  "NG",
  "GH",
  "AE",
  "SA",
  "US",
  "GB",
  "DE",
  "FR",
  "IT",
  "NL",
  "IN",
  "CN",
  "TR",
];

export function flagEmoji(country: CountryCode): string {
  return country
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

export function countryName(country: CountryCode, locale: string): string {
  try {
    return new Intl.DisplayNames([locale === "am" ? "am" : "en"], { type: "region" }).of(country) ?? country;
  } catch {
    return country;
  }
}

export function callingCode(country: CountryCode): string {
  return getCountryCallingCode(country);
}

export function listedCountries(): CountryCode[] {
  const all = getCountries();
  const rest = all.filter((code) => !PRIORITY.includes(code)).sort();
  return [...PRIORITY.filter((code) => all.includes(code)), ...rest];
}

export function isValidNationalNumber(country: CountryCode, national: string): boolean {
  const digits = national.replace(/[^\d]/g, "");
  if (digits.length < 4) return false;
  const e164 = `+${callingCode(country)}${digits}`;
  return isValidPhoneNumber(e164, country);
}

export function toE164(country: CountryCode, national: string): string | null {
  const parsed = parsePhoneNumberFromString(national, country);
  if (parsed?.isValid()) return parsed.number;
  const digits = national.replace(/[^\d]/g, "");
  const fallback = parsePhoneNumberFromString(`+${callingCode(country)}${digits}`);
  return fallback?.isValid() ? fallback.number : null;
}
