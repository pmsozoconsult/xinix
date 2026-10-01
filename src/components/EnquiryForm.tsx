"use client";

import { useState } from "react";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";

interface EnquiryFormProps {
  locale: Locale;
  ui: SiteContent["ui"];
  formType?: "quote" | "distributor" | "contact";
  productName?: string;
  hideIntro?: boolean;
  variant?: "default" | "product";
}

const fieldClass = {
  default:
    "mt-1.5 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none transition focus:border-teal-text focus:ring-2 focus:ring-teal-text/20",
  product:
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-xinix-teal focus:ring-2 focus:ring-xinix-teal/15",
} as const;

const distributorCopy = {
  en: {
    name: "Full name",
    company: "Company name",
    country: "Country",
    region: "City or region you cover",
    email: "Email",
    phone: "Phone or WhatsApp",
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
    capacity: "Storage and delivery capacity",
    notes: "Anything else we should know",
    privacy:
      "We use your details to assess and respond to your distributor application. We do not sell your details or share them for unrelated marketing.",
    submit: "Send application",
  },
  am: {
    name: "ሙሉ ስም",
    company: "የኩባንያ ስም",
    country: "ሀገር",
    region: "የሚሸፍኑት ከተማ ወይም ክልል",
    email: "ኢሜይል",
    phone: "ስልክ ወይም ዋትስአፕ",
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
    capacity: "የማከማቻና የመላኪያ አቅም",
    notes: "ሌላ ማወቅ ያለብን",
    privacy:
      "ዝርዝርዎን የምንጠቀመው የአከፋፋይ ማመልከቻዎን ለመገምገምና ለመመለስ ነው። ለሌላ ግብይት አንሸጥም፣ አናጋራም።",
    submit: "ማመልከቻውን ይላኩ",
  },
} as const;

const contactCopy = {
  en: {
    name: "Full name",
    company: "Company or organisation",
    email: "Email",
    phone: "Phone or WhatsApp",
    region: "Delivery location: city or region",
    enquiryType: "Enquiry type",
    types: ["Quote", "Distributor enquiry", "Technical question", "Other"],
    products: "Products you need",
    quantities: "Quantities",
    message: "Message",
    privacy:
      "We use your details to respond to your enquiry and do not sell them or share them for unrelated marketing.",
    submit: "Send enquiry",
  },
  am: {
    name: "ሙሉ ስም",
    company: "ኩባንያ ወይም ድርጅት",
    email: "ኢሜይል",
    phone: "ስልክ ወይም ዋትስአፕ",
    region: "የመላኪያ ቦታ፦ ከተማ ወይም ክልል",
    enquiryType: "የጥያቄ ዓይነት",
    types: ["ዋጋ", "የአከፋፋይ ጥያቄ", "ቴክኒካዊ ጥያቄ", "ሌላ"],
    products: "የሚፈልጓቸው ምርቶች",
    quantities: "መጠኖች",
    message: "መልዕክት",
    privacy:
      "ዝርዝርዎን የምንጠቀመው ጥያቄዎን ለመመለስ ነው። ለሌላ ግብይት አንሸጥም፣ አናጋራም።",
    submit: "ጥያቄውን ይላኩ",
  },
} as const;

export function EnquiryForm({
  locale,
  ui,
  formType = "quote",
  productName,
  hideIntro = false,
  variant = "default",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const inputClass = fieldClass[variant];
  const d = distributorCopy[locale];
  const c = contactCopy[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const sectors = formData.getAll("sectors").map(String);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          sectors,
          locale,
          formType,
          productName,
          contact: payload.email ?? payload.contact,
          country: payload.country ?? payload.region,
          need: payload.need ?? payload.message ?? payload.products,
        }),
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      event.currentTarget.reset();
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

  if (formType === "contact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-deep-navy">
            {c.name}
            <input required name="name" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {c.company}
            <input name="organisation" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {c.email}
            <input required type="email" name="email" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {c.phone}
            <input required name="phone" className={inputClass} />
          </label>
        </div>
        <label className="block text-sm font-medium text-deep-navy">
          {c.region}
          <input required name="region" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {c.enquiryType}
          <select required name="enquiryType" className={inputClass} defaultValue="">
            <option value="" disabled>
              —
            </option>
            {c.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {c.products}
          <textarea required name="products" rows={3} className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {c.quantities}
          <input required name="quantities" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {c.message}
          <textarea name="message" rows={4} className={inputClass} />
        </label>
        {status === "error" && (
          <p className="text-sm text-red-700" role="alert">
            {ui.errorMessage}
          </p>
        )}
        <p className="text-xs text-stone">{c.privacy}</p>
        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? "…" : c.submit}
        </Button>
      </form>
    );
  }

  if (formType === "distributor") {
    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-deep-navy">
            {d.name}
            <input required name="name" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {d.company}
            <input required name="organisation" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {d.country}
            <input required name="country" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {d.region}
            <input required name="region" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {d.email}
            <input required type="email" name="email" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-deep-navy">
            {d.phone}
            <input required name="phone" className={inputClass} />
          </label>
        </div>

        <label className="block text-sm font-medium text-deep-navy">
          {d.businessType}
          <select required name="businessType" className={inputClass} defaultValue="">
            <option value="" disabled>
              —
            </option>
            {d.businessOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="text-sm font-medium text-deep-navy">{d.sectors}</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {d.sectorOptions.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-deep-navy">
                <input type="checkbox" name="sectors" value={option} className="rounded border-line" />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm font-medium text-deep-navy">
          {d.products}
          <textarea required name="products" rows={3} className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {d.capacity}
          <textarea required name="capacity" rows={3} className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {d.notes}
          <textarea name="notes" rows={3} className={inputClass} />
        </label>

        {status === "error" && (
          <p className="text-sm text-red-700" role="alert">
            {ui.errorMessage}
          </p>
        )}

        <p className="text-xs text-stone">{d.privacy}</p>

        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? "…" : d.submit}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!hideIntro && <p className="text-stone">{ui.formIntro}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.name}
          <input required name="name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.organisation}
          <input name="organisation" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.contact}
          <input required name="contact" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.country}
          <input required name="country" className={inputClass} />
        </label>
      </div>

      <label className="block text-sm font-medium text-deep-navy">
        {ui.formFields.need}
        <textarea
          required
          name="need"
          rows={4}
          defaultValue={productName ? `${productName}: ` : ""}
          className={inputClass}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {ui.errorMessage}
        </p>
      )}

      <p className="text-xs text-stone">{ui.privacyLine}</p>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "…" : ui.sendEnquiry}
      </Button>
    </form>
  );
}
