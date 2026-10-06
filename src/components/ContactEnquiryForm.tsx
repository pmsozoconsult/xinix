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

interface ContactEnquiryFormProps {
  locale: Locale;
  ui: SiteContent["ui"];
  inputClass: string;
}

const copy = {
  en: {
    name: "Full name",
    company: "Company or organisation",
    email: "Email",
    phone: "Phone or WhatsApp",
    region: "Delivery location: city or region",
    enquiryType: "Enquiry type",
    types: ["Quote", "Distributor enquiry", "Technical question", "Other"],
    products: "Products you need",
    selected: "Selected",
    noneSelected: "Choose at least one product.",
    quantities: "Quantities",
    message: "Message",
    messageHint: "At least 20 characters.",
    privacy:
      "We use your details to respond to your enquiry and do not sell them or share them for unrelated marketing.",
    submit: "Send enquiry",
    progress: "Form progress",
    errors: {
      name: "Enter your full name.",
      email: "Enter a valid email address.",
      phone: "Enter a valid phone number for the selected country.",
      region: "Enter a city or region.",
      type: "Choose an enquiry type.",
      products: "Select at least one product.",
      quantities: "Enter a quantity as a number.",
      message: "Write a message of at least 20 characters.",
    },
    steps: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      region: "Location",
      type: "Type",
      products: "Products",
      quantities: "Quantity",
      message: "Message",
    },
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
    selected: "የተመረጡ",
    noneSelected: "ቢያንስ አንድ ምርት ይምረጡ።",
    quantities: "መጠኖች",
    message: "መልዕክት",
    messageHint: "ቢያንስ 20 ፊደላት።",
    privacy:
      "ዝርዝርዎን የምንጠቀመው ጥያቄዎን ለመመለስ ነው። ለሌላ ግብይት አንሸጥም፣ አናጋራም።",
    submit: "ጥያቄውን ይላኩ",
    progress: "የቅጽ ሂደት",
    errors: {
      name: "ሙሉ ስምዎን ያስገቡ።",
      email: "ትክክለኛ ኢሜይል ያስገቡ።",
      phone: "ለተመረጠው ሀገር ትክክለኛ ስልክ ቁጥር ያስገቡ።",
      region: "ከተማ ወይም ክልል ያስገቡ።",
      type: "የጥያቄ ዓይነት ይምረጡ።",
      products: "ቢያንስ አንድ ምርት ይምረጡ።",
      quantities: "መጠኑን በቁጥር ያስገቡ።",
      message: "ቢያንስ 20 ፊደል ያለ መልዕክት ይጻፉ።",
    },
    steps: {
      name: "ስም",
      email: "ኢሜይል",
      phone: "ስልክ",
      region: "ቦታ",
      type: "ዓይነት",
      products: "ምርቶች",
      quantities: "መጠን",
      message: "መልዕክት",
    },
  },
} as const;

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "region" | "type" | "products" | "quantities" | "message", string>>;

export function ContactEnquiryForm({ locale, ui, inputClass }: ContactEnquiryFormProps) {
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
  const [enquiryType, setEnquiryType] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [quantities, setQuantities] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const qtyNumber = Number(quantities);
  const qtyOk = Number.isInteger(qtyNumber) && qtyNumber > 0;
  const phoneOk = isValidNationalNumber(country, national);
  const emailOk = isLikelyEmail(email);
  const messageOk = message.trim().length >= 20;

  const steps = [
    { id: "field-name", label: t.steps.name, done: name.trim().length > 1 },
    { id: "field-email", label: t.steps.email, done: emailOk },
    { id: "field-phone", label: t.steps.phone, done: phoneOk },
    { id: "field-region", label: t.steps.region, done: region.trim().length > 1 },
    { id: "field-type", label: t.steps.type, done: enquiryType.length > 0 },
    { id: "field-products", label: t.steps.products, done: selected.length > 0 },
    { id: "field-quantities", label: t.steps.quantities, done: qtyOk },
    { id: "field-message", label: t.steps.message, done: messageOk },
  ];

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = t.errors.name;
    if (!emailOk) next.email = t.errors.email;
    if (!phoneOk) next.phone = t.errors.phone;
    if (region.trim().length < 2) next.region = t.errors.region;
    if (!enquiryType) next.type = t.errors.type;
    if (selected.length === 0) next.products = t.errors.products;
    if (!qtyOk) next.quantities = t.errors.quantities;
    if (!messageOk) next.message = t.errors.message;
    return next;
  }

  function toggleProduct(slug: string) {
    setSelected((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const map: Record<string, string> = {
        name: "field-name",
        email: "field-email",
        phone: "field-phone",
        region: "field-region",
        type: "field-type",
        products: "field-products",
        quantities: "field-quantities",
        message: "field-message",
      };
      focusField(map[first] ?? "field-name");
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
        formType: "contact",
        name: name.trim(),
        organisation: organisation.trim(),
        email: email.trim(),
        contact: email.trim(),
        phone,
        country,
        region: region.trim(),
        enquiryType,
        products: selected,
        quantities: qtyNumber,
        message: message.trim(),
        need: message.trim(),
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
            id="field-name"
            name="name"
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
            name="organisation"
            value={organisation}
            onChange={(event) => setOrganisation(event.target.value)}
            className={inputClass}
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {t.email}
          <input
            id="field-email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={cn(inputClass, errors.email && "border-red-400")}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-700">{errors.email}</p> : null}
        </label>
        <div id="field-phone">
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
          id="field-region"
          name="region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          className={cn(inputClass, errors.region && "border-red-400")}
        />
        {errors.region ? <p className="mt-1.5 text-xs text-red-700">{errors.region}</p> : null}
      </label>

      <label className="block text-sm font-medium text-deep-navy">
        {t.enquiryType}
        <select
          id="field-type"
          name="enquiryType"
          value={enquiryType}
          onChange={(event) => setEnquiryType(event.target.value)}
          className={cn(inputClass, errors.type && "border-red-400")}
        >
          <option value="">—</option>
          {t.types.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.type ? <p className="mt-1.5 text-xs text-red-700">{errors.type}</p> : null}
      </label>

      <ProductSelectGrid
        id="field-products"
        legend={t.products}
        products={products}
        selected={selected}
        onToggle={toggleProduct}
        selectedLabel={t.selected}
        noneLabel={t.noneSelected}
        error={errors.products}
      />

      <label className="block text-sm font-medium text-deep-navy">
        {t.quantities}
        <input
          id="field-quantities"
          type="number"
          name="quantities"
          min={1}
          step={1}
          inputMode="numeric"
          value={quantities}
          onChange={(event) => setQuantities(event.target.value)}
          className={cn(inputClass, errors.quantities && "border-red-400")}
        />
        {errors.quantities ? (
          <p className="mt-1.5 text-xs text-red-700">{errors.quantities}</p>
        ) : null}
      </label>

      <label className="block text-sm font-medium text-deep-navy">
        {t.message}
        <textarea
          id="field-message"
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={cn(inputClass, errors.message && "border-red-400")}
        />
        <p className="mt-1.5 flex justify-between text-xs text-stone">
          <span>{t.messageHint}</span>
          <span className={messageOk ? "text-xinix-blue" : undefined}>{message.trim().length}/20</span>
        </p>
        {errors.message ? <p className="text-xs text-red-700">{errors.message}</p> : null}
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
