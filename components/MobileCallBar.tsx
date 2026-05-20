"use client";

import { Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/constants";

export default function MobileCallBar({ phone }: { phone?: string }) {
  const displayPhone = phone || PHONE_NUMBER;
  const telHref = phone ? `tel:${phone.replace(/\s/g, "")}` : PHONE_TEL;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "#fff",
        borderTop: "1px solid rgba(0,0,0,.1)",
        boxShadow: "0 -4px 20px rgba(0,0,0,.1)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div style={{ display: "flex", gap: ".5rem", padding: ".75rem 1rem" }}>
        <a
          href={telHref}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5rem",
            background: "#f5c518",
            color: "#060e1a",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: ".9rem",
            padding: ".75rem",
            borderRadius: ".75rem",
            textDecoration: "none",
          }}
        >
          <Phone style={{ width: 16, height: 16, flexShrink: 0 }} />
          Call Now
        </a>
        <a
          href="/#contact"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5rem",
            background: "#1e90ff",
            color: "#fff",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: ".9rem",
            padding: ".75rem",
            borderRadius: ".75rem",
            textDecoration: "none",
          }}
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
