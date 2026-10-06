"use client";

import { useEffect, useState } from "react";

export interface EnquiryTicket {
  issuedAt: string;
  nonce: string;
  sig: string;
}

export function EnquiryGuardFields({ ticket }: { ticket: EnquiryTicket | null }) {
  return (
    <>
      <label className="enquiry-hp">
        Company website
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="enquiry-hp">
        Fax
        <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" />
      </label>
      {ticket ? (
        <>
          <input type="hidden" name="formIssuedAt" value={ticket.issuedAt} />
          <input type="hidden" name="formNonce" value={ticket.nonce} />
          <input type="hidden" name="formSig" value={ticket.sig} />
        </>
      ) : null}
      <input type="hidden" name="jsCheck" value="1" />
    </>
  );
}

export function useEnquiryTicket(): EnquiryTicket | null {
  const [ticket, setTicket] = useState<EnquiryTicket | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/enquiry")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: EnquiryTicket | null) => {
        if (!cancelled && data?.sig) setTicket(data);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return ticket;
}
