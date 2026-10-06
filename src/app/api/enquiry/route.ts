import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { isValidPhoneNumber } from "libphonenumber-js";
import { CONTACT_PRODUCT_SLUGS } from "@/lib/contactProducts";
import { isLikelyEmail } from "@/lib/email";
import {
  honeypotFilled,
  isRateLimited,
  issueFormTicket,
  looksLikeSpamContent,
  originAllowed,
  requestIp,
  verifyFormTicket,
} from "@/lib/enquiryGuard";

function silentOk() {
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(issueFormTicket());
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return silentOk();
  }

  const ip = requestIp(request);
  if (isRateLimited(ip)) {
    console.warn("[enquiry] drop rate_limit");
    return silentOk();
  }

  if (!originAllowed(request)) {
    console.warn("[enquiry] drop origin");
    return silentOk();
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (honeypotFilled(body)) {
      console.warn("[enquiry] drop honeypot");
      return silentOk();
    }

    if (body.jsCheck !== "1") {
      console.warn("[enquiry] drop js_check");
      return silentOk();
    }

    const issuedAt = String(body.formIssuedAt ?? "");
    const nonce = String(body.formNonce ?? "");
    const sig = String(body.formSig ?? "");
    if (!verifyFormTicket(issuedAt, nonce, sig)) {
      console.warn("[enquiry] drop ticket");
      return silentOk();
    }

    const formType = String(body.formType ?? "quote");
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? body.contact ?? "").trim();
    const message = String(body.message ?? body.need ?? body.notes ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (looksLikeSpamContent(name, message)) {
      console.warn("[enquiry] drop content");
      return silentOk();
    }

    if (formType === "contact") {
      const phone = String(body.phone ?? "");
      const region = String(body.region ?? "").trim();
      const enquiryType = String(body.enquiryType ?? "");
      const products = Array.isArray(body.products)
        ? body.products.map(String)
        : [];
      const quantities = Number(body.quantities);

      if (!isLikelyEmail(email)) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
      }
      if (!isValidPhoneNumber(phone)) {
        return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
      }
      if (region.length < 2) {
        return NextResponse.json({ error: "Invalid region" }, { status: 400 });
      }
      if (!enquiryType) {
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
      }
      if (
        products.length === 0 ||
        products.some((slug) => !CONTACT_PRODUCT_SLUGS.includes(slug))
      ) {
        return NextResponse.json({ error: "Invalid products" }, { status: 400 });
      }
      if (!Number.isInteger(quantities) || quantities < 1 || quantities > 1_000_000) {
        return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
      }
      if (message.length < 20 || message.length > 5000) {
        return NextResponse.json({ error: "Invalid message" }, { status: 400 });
      }
    } else if (formType === "distributor") {
      const phone = String(body.phone ?? "");
      const region = String(body.region ?? "").trim();
      const organisation = String(body.organisation ?? "").trim();
      const businessType = String(body.businessType ?? "");
      const sectors = Array.isArray(body.sectors) ? body.sectors.map(String) : [];
      const products = Array.isArray(body.products) ? body.products.map(String) : [];
      const capacity = String(body.capacity ?? "").trim();

      if (organisation.length < 2) {
        return NextResponse.json({ error: "Invalid company" }, { status: 400 });
      }
      if (!isLikelyEmail(email)) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
      }
      if (!isValidPhoneNumber(phone)) {
        return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
      }
      if (region.length < 2) {
        return NextResponse.json({ error: "Invalid region" }, { status: 400 });
      }
      if (!businessType) {
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
      }
      if (sectors.length === 0) {
        return NextResponse.json({ error: "Invalid sectors" }, { status: 400 });
      }
      if (
        products.length === 0 ||
        products.some((slug) => !CONTACT_PRODUCT_SLUGS.includes(slug))
      ) {
        return NextResponse.json({ error: "Invalid products" }, { status: 400 });
      }
      if (capacity.length < 20 || capacity.length > 5000) {
        return NextResponse.json({ error: "Invalid capacity" }, { status: 400 });
      }
    } else if (formType !== "contact") {
      const contact = String(body.contact ?? email).trim();
      const country = String(body.country ?? body.region ?? "").trim();
      if (!contact || !country) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
      }
      if (formType !== "distributor" && !message && !body.need) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
      }
    }

    const entry = {
      ...body,
      company_website: undefined,
      fax_number: undefined,
      formIssuedAt: undefined,
      formNonce: undefined,
      formSig: undefined,
      jsCheck: undefined,
      receivedAt: new Date().toISOString(),
      ip,
    };

    const dir = path.join(process.cwd(), "data", "enquiries");
    await mkdir(dir, { recursive: true });
    const filename = `${Date.now()}-${formType}.json`;
    await writeFile(path.join(dir, filename), JSON.stringify(entry, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
