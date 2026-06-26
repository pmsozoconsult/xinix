"use client";

import { useState } from "react";
import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";

interface EnquiryFormProps {
  locale: Locale;
  ui: SiteContent["ui"];
  formType?: "quote" | "distributor";
  productName?: string;
}

export function EnquiryForm({
  locale,
  ui,
  formType = "quote",
  productName,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          locale,
          formType,
          productName,
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
      <div className="rounded-lg border border-leaf-green/30 bg-paper p-6 text-deep-navy">
        {ui.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-stone">{ui.formIntro}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.name}
          <input
            required
            name="name"
            className="mt-1 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none focus:border-teal-text"
          />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.organisation}
          <input
            name="organisation"
            className="mt-1 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none focus:border-teal-text"
          />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.contact}
          <input
            required
            name="contact"
            className="mt-1 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none focus:border-teal-text"
          />
        </label>
        <label className="block text-sm font-medium text-deep-navy">
          {ui.formFields.country}
          <input
            required
            name="country"
            className="mt-1 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none focus:border-teal-text"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-deep-navy">
        {ui.formFields.need}
        <textarea
          required
          name="need"
          rows={4}
          defaultValue={productName ? `${productName}: ` : ""}
          className="mt-1 w-full rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none focus:border-teal-text"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {ui.errorMessage}
        </p>
      )}

      <p className="text-xs text-stone">{ui.privacyLine}</p>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "…" : ui.sendEnquiry}
      </Button>
    </form>
  );
}
