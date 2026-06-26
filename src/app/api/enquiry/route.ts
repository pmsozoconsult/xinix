import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

interface EnquiryPayload {
  name: string;
  organisation?: string;
  contact: string;
  country: string;
  need: string;
  locale?: string;
  formType?: string;
  productName?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    if (!body.name || !body.contact || !body.country || !body.need) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const entry = {
      ...body,
      receivedAt: new Date().toISOString(),
    };

    const dir = path.join(process.cwd(), "data", "enquiries");
    await mkdir(dir, { recursive: true });
    const filename = `${Date.now()}-${body.formType ?? "quote"}.json`;
    await writeFile(
      path.join(dir, filename),
      JSON.stringify(entry, null, 2),
      "utf8",
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
