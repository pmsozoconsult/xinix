"use client";

import { useMemo, useState } from "react";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { EnquiryGuardFields, useEnquiryTicket } from "@/components/EnquiryGuardFields";
import { FormProgress } from "@/components/FormProgress";
import { PhoneField } from "@/components/PhoneField";
import { ProductSelectGrid } from "@/components/ProductSelectGrid";
import { contactProductOptions } from "@/lib/contactProducts";
import { isLikelyEmail } from "@/lib/email";
import { focusField, guardPayload, postEnquiry } from "@/lib/enquiryClient";
import { isValidNationalNumber, toE164, type CountryCode } from "@/lib/phone";
import { cn } from "@/lib/utils";

interface DistributorEnquiryFormProps {
  locale: Locale;
  ui: SiteContent["ui"];
  inputClass: string;
}

const copy = {
  en: {
    name: "Full name",
    company: "Company name",
    email: "Email",
    phone: "Phone or WhatsApp",
    region: "City or region you cover",
    businessType: "Type of business",
    businessOptions: [
      "Wholesaler",
      "Distributor",
      "Importer",
      "Retail chain",
      "Institutional supplier",
      "Other",
    ],
    sectors: "Sectors you serve",
    sectorOptions: [
      "Retail",
      "Healthcare",
      "Hospitality",
      "Agriculture",
      "Food and beverage",
      "Industry",
      "Water",
      "Aviation",
    ],
    products: "Products you are interested in",
    selected: "Selected",
    noneSelected: "Choose at least one product.",
    capacity: "Storage and delivery capacity",
    capacityHint: "At least 20 characters.",
    notes: "Anything else we should know",
    privacy:
      "We use your details to assess and respond to your distributor application. We do not sell your details or share them for unrelated marketing.",
    submit: "Send application",
    progress: "Form progress",
    errors: {
      name: "Enter your full name.",
      company: "Enter your company name.",
      email: "Enter a valid email address.",
      phone: "Enter a valid phone number for the selected country.",
      region: "Enter the city or region you cover.",
      type: "Choose a business type.",
      sectors: "Select at least one sector.",
      products: "Select at least one product.",
      capacity: "Describe capacity in at least 20 characters.",
    },
    steps: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      region: "Territory",
      type: "Business",
      sectors: "Sectors",
      products: "Products",
      capacity: "Capacity",
    },
  },
  am: {
    name: "ሙሉ ስም",
    company: "የኩባንያ ስም",
    email: "ኢሜይል",
    phone: "ስልክ ወይም ዋትስአፕ",
    region: "የሚሸፍኑት ከተማ ወይም ክልል",
    businessType: "የንግድ ዓይነት",
    businessOptions: [
      "ጅምላ ነጋዴ",
      "አከፋፋይ",
      "አስመጪ",
      "የችርቻሮ ሰንሰለት",
      "የተቋም አቅራቢ",
      "ሌላ",
    ],
    sectors: "የሚያገለግሏቸው ዘርፎች",
    sectorOptions: [
      "ችርቻሮ",
      "ጤና",
      "እንግዳ መቀበል",
      "ግብርና",
      "ምግብና መጠጥ",
      "ኢንዱስትሪ",
      "ውሃ",
      "አቪዬሽን",
    ],
    products: "የሚፈልጓቸው ምርቶች",
    selected: "የተመረጡ",
    noneSelected: "ቢያንስ አንድ ምርት ይምረጡ።",
    capacity: "የማከማቻና የመላኪያ አቅም",
    capacityHint: "ቢያንስ 20 ፊደላት።",
    notes: "ሌላ ማወቅ ያለብን",
    privacy:
      "ዝርዝርዎን የምንጠቀመው የአከፋፋይ ማመልከቻዎን ለመገምገምና ለመመለስ ነው። ለሌላ ግብይት አንሸጥም፣ አናጋራም።",
    submit: "ማመልከቻውን ይላኩ",
    progress: "የቅጽ ሂደት",
    errors: {
      name: "ሙሉ ስምዎን ያስገቡ።",
      company: "የኩባንያ ስም ያስገቡ።",
      email: "ትክክለኛ ኢሜይል ያስገቡ።",
      phone: "ለተመረጠው ሀገር ትክክለኛ ስልክ ቁጥር ያስገቡ።",
      region: "የሚሸፍኑትን ከተማ ወይም ክልል ያስገቡ።",
      type: "የንግድ ዓይነት ይምረጡ።",
      sectors: "ቢያንስ አንድ ዘርፍ ይምረጡ።",
      products: "ቢያንስ አንድ ምርት ይምረጡ።",
      capacity: "አቅምዎን በቢያንስ 20 ፊደል ይግለጹ።",
    },
    steps: {
      name: "ስም",
      company: "ኩባንያ",
      email: "ኢሜይል",
      phone: "ስልክ",
      region: "ግዛት",
      type: "ንግድ",
      sectors: "ዘርፎች",
      products: "ምርቶች",
      capacity: "አቅም",
    },
  },
} as const;

type FieldErrors = Partial<
  Record<
    "name" | "company" | "email" | "phone" | "region" | "type" | "sectors" | "products" | "capacity",
    string
  >
>;

export function DistributorEnquiryForm({ locale, ui, inputClass }: DistributorEnquiryFormProps) {
  const t = copy[locale];
  const products = useMemo(() => contactProductOptions(locale), [locale]);
  const ticket = useEnquiryTicket();

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState<CountryCode>("ET");
  const [national, setNational] = useState("");
  const [region, setRegion] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [sectors, setSectors] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [capacity, setCapacity] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const phoneOk = isValidNationalNumber(country, national);
  const emailOk = isLikelyEmail(email);
  const capacityOk = capacity.trim().length >= 20;

  const steps = [
    { id: "dist-name", label: t.steps.name, done: name.trim().length > 1 },
    { id: "dist-company", label: t.steps.company, done: organisation.trim().length > 1 },
    { id: "dist-email", label: t.steps.email, done: emailOk },
    { id: "dist-phone", label: t.steps.phone, done: phoneOk },
    { id: "dist-region", label: t.steps.region, done: region.trim().length > 1 },
    { id: "dist-type", label: t.steps.type, done: businessType.length > 0 },
    { id: "dist-sectors", label: t.steps.sectors, done: sectors.length > 0 },
    { id: "dist-products", label: t.steps.products, done: selected.length > 0 },
    { id: "dist-capacity", label: t.steps.capacity, done: capacityOk },
  ];

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = t.errors.name;
    if (organisation.trim().length < 2) next.company = t.errors.company;
    if (!emailOk) next.email = t.errors.email;
    if (!phoneOk) next.phone = t.errors.phone;
    if (region.trim().length < 2) next.region = t.errors.region;
    if (!businessType) next.type = t.errors.type;
    if (sectors.length === 0) next.sectors = t.errors.sectors;
    if (selected.length === 0) next.products = t.errors.products;
    if (!capacityOk) next.capacity = t.errors.capacity;
    return next;
  }

  function toggleSector(option: string) {
    setSectors((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const map: Record<string, string> = {
        name: "dist-name",
        company: "dist-company",
        email: "dist-email",
        phone: "dist-phone",
        region: "dist-region",
        type: "dist-type",
        sectors: "dist-sectors",
        products: "dist-products",
        capacity: "dist-capacity",
      };
      focusField(map[Object.keys(nextErrors)[0]] ?? "dist-name");
      return;
    }

    const phone = toE164(country, national);
    if (!phone) {
      setErrors({ phone: t.errors.phone });
      return;
    }

    setStatus("loading");
    try {
      await postEnquiry({
        locale,
        formType: "distributor",
        name: name.trim(),
        organisation: organisation.trim(),
        email: email.trim(),
        contact: email.trim(),
        phone,
        country,
        region: region.trim(),
        businessType,
        sectors,
        products: selected,
        capacity: capacity.trim(),
        notes: notes.trim(),
        need: capacity.trim(),
        ...guardPayload(event.currentTarget),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-leaf-green/30 bg-leaf-green/5 p-6 text-deep-navy">
        {ui.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
      <EnquiryGuardFields ticket={ticket} />
      <FormProgress steps={steps} onStepClick={focusField} label={t.progress} />

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm font-medium text-deep-navy">
          {t.name}
          <input
            id="dist-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={cn(inputClass, errors.name && "border-red-400")}
            autoComplete="name"
          />
          {errors.name ? <p className="mt-1.5 text-xs text-red-700">{errors.name}</p> : null}
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {t.company}
          <input
            id="dist-company"
            value={organisation}
            onChange={(event) => setOrganisation(event.target.value)}
            className={cn(inputClass, errors.company && "border-red-400")}
            autoComplete="organization"
          />
          {errors.company ? <p className="mt-1.5 text-xs text-red-700">{errors.company}</p> : null}
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {t.email}
          <input
            id="dist-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={cn(inputClass, errors.email && "border-red-400")}
            autoComplete="email"
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-700">{errors.email}</p> : null}
        </label>
        <div id="dist-phone">
          <PhoneField
            locale={locale}
            country={country}
            national={national}
            onCountryChange={setCountry}
            onNationalChange={setNational}
            error={errors.phone}
            inputClass={inputClass}
            label={t.phone}
          />
        </div>
      </div>

      <label className="block text-sm font-medium text-deep-navy">
        {t.region}
        <input
          id="dist-region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          className={cn(inputClass, errors.region && "border-red-400")}
        />
        {errors.region ? <p className="mt-1.5 text-xs text-red-700">{errors.region}</p> : null}
      </label>

      <label className="block text-sm font-medium text-deep-navy">
        {t.businessType}
        <select
          id="dist-type"
          value={businessType}
          onChange={(event) => setBusinessType(event.target.value)}
          className={cn(inputClass, errors.type && "border-red-400")}
        >
          <option value="">—</option>
          {t.businessOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.type ? <p className="mt-1.5 text-xs text-red-700">{errors.type}</p> : null}
      </label>

      <fieldset id="dist-sectors">
        <legend className="text-sm font-medium text-deep-navy">{t.sectors}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {t.sectorOptions.map((option) => {
            const checked = sectors.includes(option);
            return (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm",
                  checked ? "border-xinix-blue bg-sky-wash" : "border-line bg-white",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleSector(option)}
                  className="rounded border-line"
                />
                {option}
              </label>
            );
          })}
        </div>
        {errors.sectors ? <p className="mt-1.5 text-xs text-red-700">{errors.sectors}</p> : null}
      </fieldset>

      <ProductSelectGrid
        id="dist-products"
        legend={t.products}
        products={products}
        selected={selected}
        onToggle={(slug) =>
          setSelected((current) =>
            current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
          )
        }
        selectedLabel={t.selected}
        noneLabel={t.noneSelected}
        error={errors.products}
      />

      <label className="block text-sm font-medium text-deep-navy">
        {t.capacity}
        <textarea
          id="dist-capacity"
          rows={4}
          value={capacity}
          onChange={(event) => setCapacity(event.target.value)}
          className={cn(inputClass, errors.capacity && "border-red-400")}
        />
        <p className="mt-1.5 flex justify-between text-xs text-stone">
          <span>{t.capacityHint}</span>
          <span className={capacityOk ? "text-xinix-blue" : undefined}>{capacity.trim().length}/20</span>
        </p>
        {errors.capacity ? <p className="text-xs text-red-700">{errors.capacity}</p> : null}
      </label>

      <label className="block text-sm font-medium text-deep-navy">
        {t.notes}
        <textarea rows={3} value={notes} onChange={(event) => setNotes(event.target.value)} className={inputClass} />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {ui.errorMessage}
        </p>
      )}
      <p className="text-xs text-stone">{t.privacy}</p>
      <Button type="submit" disabled={status === "loading" || !ticket} className="w-full sm:w-auto">
        {status === "loading" ? "…" : t.submit}
      </Button>
    </form>
  );
}
