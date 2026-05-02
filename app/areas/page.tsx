import type { Metadata } from "next";
import { Phone, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { areas } from "@/app/areas/areas-data";
import AreasGrid from "./AreasGrid";

export const metadata: Metadata = {
  title: "Service Areas — Wollongong, Illawarra & Surrounds | Bluefin",
  description: "Bluefin Air-Conditioning & Electrical services Wollongong, Shellharbour, Kiama, Dapto, Fairy Meadow, Thirroul, and surrounding Illawarra suburbs. Licensed, local, free quotes.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  const base = "https://www.bluefinaircon.com.au";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${base}/areas` },
        ],
      },
      {
        "@type": "LocalBusiness",
        "name": "Bluefin Air-Conditioning & Electrical",
        "url": base,
        "telephone": "+61428631931",
        "areaServed": areas.map((a) => ({ "@type": "City", "name": a.name })),
      },
    ],
  };

  const grouped = areas.reduce<Record<string, typeof areas>>((acc, area) => {
    acc[area.region] = [...(acc[area.region] || []), area];
    return acc;
  }, {});

  return (
    <div style={{ background: "#f8faff", minHeight: "100vh", color: "#111" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      {/* Hero */}
      <section style={{
        minHeight: "38vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg, #060e1a 0%, #0a1628 55%, #0f2040 100%)",
        position: "relative", overflow: "hidden", paddingTop: "5rem",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: "linear-gradient(rgba(30,144,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginBottom: "1.25rem" }}>
            <a href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Home</a>
            <ChevronRight size={12} color="rgba(255,255,255,.2)" />
            <span style={{ color: "#1e90ff", fontSize: ".8rem", fontFamily: "'Rubik',sans-serif" }}>Service Areas</span>
          </div>
          <h1 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.05, color: "#fff", marginBottom: "1rem" }}>
            Where We Work
          </h1>
          <p className="font-rubik" style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "34rem" }}>
            We cover Wollongong, the Illawarra, and surrounding regions. Local tradespeople who know your area.
          </p>
        </div>
      </section>

      {/* Areas grid */}
      <section style={{ padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AreasGrid grouped={grouped} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", background: "#fff", borderTop: "1px solid rgba(0,0,0,.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#111", marginBottom: ".75rem" }}>
            Don&apos;t see your suburb?
          </h2>
          <p className="font-rubik" style={{ color: "#555", fontSize: ".95rem", marginBottom: "2rem" }}>
            Call us — if we can get there, we will. We regularly travel outside our listed areas for the right job.
          </p>
          <a href="tel:0428631931" style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            background: "#f5c518", color: "#060e1a",
            fontFamily: "'Outfit',sans-serif", fontWeight: 700,
            padding: ".875rem 2rem", borderRadius: ".75rem",
            textDecoration: "none", fontSize: "1rem",
          }}>
            <Phone size={18} />
            0428 631 931
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
