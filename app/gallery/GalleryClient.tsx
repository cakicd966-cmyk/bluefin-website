"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { GalleryItem } from "@/lib/content";

type FilterCat = "all" | "aircon" | "electrical" | "commercial";

const CAT_COLORS: Record<string, { color: string; bg: string }> = {
  aircon:     { color: "#1e90ff", bg: "rgba(30,144,255,.2)" },
  electrical: { color: "#f5c518", bg: "rgba(245,197,24,.15)" },
  commercial: { color: "#a78bfa", bg: "rgba(167,139,250,.15)" },
};

const filterLabels: { key: FilterCat; label: string }[] = [
  { key: "all", label: "All Jobs" },
  { key: "aircon", label: "Air Conditioning" },
  { key: "electrical", label: "Electrical" },
  { key: "commercial", label: "Commercial" },
];

export default function GalleryPage({ items }: { items: GalleryItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterCat>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const visibleItems = items.filter(
    (item) => activeFilter === "all" || item.cat.includes(activeFilter)
  );

  return (
    <div style={{ background: "#f8faff", minHeight: "100vh", color: "#111" }}>
      <Navbar />

      {/* PAGE HERO */}
      <section
        style={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #060e1a 0%, #0a1628 55%, #0f2040 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.4, backgroundImage: "linear-gradient(rgba(30,144,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", width: "22rem", height: "22rem", borderRadius: "50%", background: "rgba(30,144,255,.07)", top: "10%", right: "-4rem", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "16rem", height: "16rem", borderRadius: "50%", background: "rgba(245,197,24,.05)", bottom: "5%", left: "-3rem", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div style={{ maxWidth: "36rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1.25rem" }}>
              <a href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Home</a>
              <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".8rem" }}>/</span>
              <span style={{ color: "#1e90ff", fontSize: ".8rem", fontFamily: "'Rubik',sans-serif" }}>Gallery</span>
            </div>
            <span style={{ display: "inline-block", fontFamily: "'Outfit',sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", padding: ".35rem 1rem", borderRadius: "9999px", marginBottom: "1rem", background: "rgba(245,197,24,.1)", border: "1px solid rgba(245,197,24,.25)", color: "#f5c518" }}>
              Our Work
            </span>
            <h1 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#fff" }}>
              Completed <span style={{ color: "#1e90ff" }}>Jobs</span> Across{" "}
              <span style={{ color: "#f5c518" }}>Illawarra</span>
            </h1>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "34rem" }}>
              Every photo here is a real job done by our team. Browse air con installs, electrical fitouts, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-24 relative" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2.5rem" }}>
            {filterLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                style={{
                  padding: ".5rem 1.25rem",
                  borderRadius: ".6rem",
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: activeFilter === key ? "1px solid #1e90ff" : "1px solid rgba(0,0,0,.12)",
                  background: activeFilter === key ? "#1e90ff" : "transparent",
                  color: activeFilter === key ? "#fff" : "#555",
                  transition: "all .2s",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="font-rubik" style={{ color: "#888", fontSize: ".8rem", marginBottom: "1.5rem" }}>
            Showing {visibleItems.length} job{visibleItems.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          {visibleItems.some((i) => i.image) ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {visibleItems.filter((item) => item.image).map((item) => {
                const colors = CAT_COLORS[item.cat.split(" ")[0]] ?? CAT_COLORS.aircon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxItem(item)}
                    style={{
                      position: "relative",
                      borderRadius: "1rem",
                      overflow: "hidden",
                      aspectRatio: "4/3",
                      cursor: "pointer",
                      border: "1px solid rgba(0,0,0,.08)",
                      transition: "transform .3s ease, box-shadow .3s ease",
                      background: "#dde8f5",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,0,0,.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image!}
                      alt={item.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    {/* Overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,14,26,.9) 0%, rgba(6,14,26,.2) 50%, transparent 100%)" }} />
                    {/* Info */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.1rem", zIndex: 2 }}>
                      <span style={{ display: "inline-block", fontSize: ".65rem", fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", padding: ".2rem .6rem", borderRadius: "9999px", marginBottom: ".4rem", background: colors.bg, color: colors.color }}>
                        {item.catLabel}
                      </span>
                      <p className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: ".95rem", lineHeight: 1.3 }}>{item.title}</p>
                      <p className="font-rubik" style={{ color: "rgba(255,255,255,.5)", fontSize: ".75rem", marginTop: ".2rem" }}>{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── Empty state ── */
            <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
              <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", maxWidth: "28rem" }}>
                <div style={{ width: "5rem", height: "5rem", borderRadius: "1.25rem", background: "linear-gradient(135deg,rgba(30,144,255,.12),rgba(245,197,24,.08))", border: "2px dashed rgba(30,144,255,.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="rgba(30,144,255,.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-outfit" style={{ fontWeight: 800, fontSize: "1.3rem", color: "#111", marginBottom: ".5rem" }}>
                    Photos coming soon
                  </h3>
                  <p className="font-rubik" style={{ color: "#666", fontSize: ".9rem", lineHeight: 1.65 }}>
                    We&apos;re building out our job gallery. Check back soon — or get in touch and we&apos;ll show you examples of our work directly.
                  </p>
                </div>
                <a
                  href="/#contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "#1e90ff", color: "#fff", fontFamily: "'Outfit',sans-serif", fontWeight: 700, padding: ".75rem 1.75rem", borderRadius: ".75rem", textDecoration: "none", fontSize: ".9rem" }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}

          {visibleItems.some((i) => i.image) && visibleItems.filter((i) => i.image).length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "#888", fontFamily: "'Rubik',sans-serif" }}>
              No jobs in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative" style={{ background: "#ffffff" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(245,197,24,.3),transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: "#111", marginBottom: ".75rem" }}>
            Want a job like these?
          </h2>
          <p className="font-rubik" style={{ color: "#555", fontSize: ".95rem", marginBottom: "2rem" }}>
            Call us or get a free quote — we&apos;ll have it done and looking great.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href="/#contact" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "#f5c518", color: "#060e1a", fontFamily: "'Outfit',sans-serif", fontWeight: 700, padding: ".875rem 2rem", borderRadius: ".75rem", textDecoration: "none", fontSize: "1rem" }}>
              Get a Free Quote
            </a>
            <a href="tel:0428631931" style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", background: "#f0f4ff", color: "#111", border: "1px solid rgba(30,144,255,.2)", fontFamily: "'Outfit',sans-serif", fontWeight: 600, padding: ".875rem 2rem", borderRadius: ".75rem", textDecoration: "none", fontSize: "1rem" }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1e90ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.22 6.22l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              0428 631 931
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      {lightboxItem && lightboxItem.image && (
        <div
          onClick={() => setLightboxItem(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(6,14,26,.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backdropFilter: "blur(8px)" }}
        >
          <button
            onClick={() => setLightboxItem(null)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "50%", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "700px", width: "100%", background: "#0f2040", border: "1px solid rgba(30,144,255,.25)", borderRadius: "1.25rem", overflow: "hidden" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightboxItem.image} alt={lightboxItem.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <p className="font-outfit" style={{ fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".35rem", color: CAT_COLORS[lightboxItem.cat]?.color || "#1e90ff" }}>
                {lightboxItem.catLabel}
              </p>
              <h3 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1.15rem", marginBottom: ".25rem" }}>{lightboxItem.title}</h3>
              <p className="font-rubik" style={{ color: "rgba(255,255,255,.5)", fontSize: ".85rem" }}>{lightboxItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
