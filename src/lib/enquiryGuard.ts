import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const MIN_SUBMIT_MS = 4_000;
const MAX_SUBMIT_MS = 8 * 60 * 60 * 1_000;
const RATE_MAX = 5;
const RATE_WINDOW_MS = 60 * 60 * 1_000;

const hits = new Map<string, number[]>();

function secret(): string {
  return process.env.ENQUIRY_FORM_SECRET ?? "xinix-local-enquiry-secret";
}

export function issueFormTicket(): { issuedAt: string; nonce: string; sig: string } {
  const issuedAt = String(Date.now());
  const nonce = randomBytes(16).toString("hex");
  const sig = signTicket(issuedAt, nonce);
  return { issuedAt, nonce, sig };
}

export function signTicket(issuedAt: string, nonce: string): string {
  return createHmac("sha256", secret()).update(`${issuedAt}.${nonce}`).digest("hex");
}

export function verifyFormTicket(issuedAt: string, nonce: string, sig: string): boolean {
  if (!issuedAt || !nonce || !sig) return false;
  const expected = signTicket(issuedAt, nonce);
  const a = Buffer.from(expected);
  const b = Buffer.from(sig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  const issued = Number(issuedAt);
  if (!Number.isFinite(issued)) return false;
  const age = Date.now() - issued;
  return age >= MIN_SUBMIT_MS && age <= MAX_SUBMIT_MS;
}

export function honeypotFilled(body: Record<string, unknown>): boolean {
  const traps = ["company_website", "fax_number"];
  return traps.some((key) => {
    const value = body[key];
    return typeof value === "string" && value.trim().length > 0;
  });
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export function requestIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function looksLikeSpamContent(name: string, message: string): boolean {
  const blob = `${name}\n${message}`.toLowerCase();
  if (/(https?:\/\/|www\.)/i.test(name)) return true;
  const links = blob.match(/https?:\/\//g) ?? [];
  if (links.length > 3) return true;
  return false;
}
