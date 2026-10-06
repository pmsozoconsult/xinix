"use client";

import { useState } from "react";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";
import { DistributorEnquiryForm } from "@/components/DistributorEnquiryForm";
import { EnquiryGuardFields, useEnquiryTicket } from "@/components/EnquiryGuardFields";

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
    "mt-1.5 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none transition focus:border-xinix-blue focus:ring-2 focus:ring-xinix-blue/20",
  product:
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-xinix-blue focus:ring-2 focus:ring-xinix-blue/15",
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
  const ticket = useEnquiryTicket();

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
    return <ContactEnquiryForm locale={locale} ui={ui} inputClass={inputClass} />;
  }

  if (formType === "distributor") {
    return <DistributorEnquiryForm locale={locale} ui={ui} inputClass={inputClass} />;
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      <EnquiryGuardFields ticket={ticket} />
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
