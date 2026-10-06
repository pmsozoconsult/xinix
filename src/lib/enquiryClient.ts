export async function postEnquiry(payload: Record<string, unknown>): Promise<void> {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Failed");
}

export function guardPayload(form: HTMLFormElement): Record<string, FormDataEntryValue | null> {
  const formData = new FormData(form);
  return {
    company_website: formData.get("company_website"),
    fax_number: formData.get("fax_number"),
    formIssuedAt: formData.get("formIssuedAt"),
    formNonce: formData.get("formNonce"),
    formSig: formData.get("formSig"),
    jsCheck: formData.get("jsCheck"),
  };
}

export function focusField(id: string) {
  const node = document.getElementById(id);
  node?.scrollIntoView({ behavior: "smooth", block: "center" });
  if (
    node instanceof HTMLInputElement ||
    node instanceof HTMLTextAreaElement ||
    node instanceof HTMLSelectElement
  ) {
    node.focus();
  } else {
    node?.querySelector<HTMLElement>("input, textarea, select, button")?.focus();
  }
}
