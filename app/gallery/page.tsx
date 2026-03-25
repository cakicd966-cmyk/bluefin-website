"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FilterCat = "all" | "aircon" | "electrical" | "commercial";

interface GalleryItem {
  id: number;
  cat: string;
  catLabel: string;
  catColor: string;
  catBg: string;
  title: string;
  subtitle: string;
  bgStyle: React.CSSProperties;
  svgContent: React.ReactNode;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    cat: "aircon",
    catLabel: "Air Con",
    catColor: "#1e90ff",
    catBg: "rgba(30,144,255,.2)",
    title: "Split System Install",
    subtitle: "Penrith, NSW · Mitsubishi 7kW",
    bgStyle: { background: "linear-gradient(135deg,#0d2a4a 0%,#0a1f38 40%,#1a3a5c 100%)" },
    svgContent: (
      <svg viewBox="0 0 120 80" width="120" height="80" fill="none" stroke="#1e90ff" strokeWidth="1.5">
        <rect x="10" y="20" width="100" height="40" rx="6"/>
        <rect x="25" y="30" width="70" height="20" rx="3"/>
        <line x1="35" y1="35" x2="85" y2="35"/>
        <line x1="35" y1="42" x2="85" y2="42"/>
        <circle cx="90" cy="37" r="4"/>
      </svg>
    ),
  },
  {
    id: 2,
    cat: "electrical",
    catLabel: "Electrical",
    catColor: "#f5c518",
    catBg: "rgba(245,197,24,.15)",
    title: "Switchboard Upgrade",
    subtitle: "Blacktown, NSW · 3-phase upgrade",
    bgStyle: { background: "linear-gradient(135deg,#1a2a15 0%,#0f2010 40%,#243318 100%)" },
    svgContent: (
      <svg viewBox="0 0 100 80" width="100" height="80" fill="none" stroke="#f5c518" strokeWidth="1.5">
        <rect x="15" y="10" width="70" height="60" rx="4"/>
        <rect x="25" y="20" width="22" height="14" rx="2"/>
        <rect x="53" y="20" width="22" height="14" rx="2"/>
        <rect x="25" y="42" width="22" height="14" rx="2"/>
        <rect x="53" y="42" width="22" height="14" rx="2"/>
        <line x1="36" y1="10" x2="36" y2="4"/>
        <line x1="64" y1="10" x2="64" y2="4"/>
      </svg>
    ),
  },
  {
    id: 3,
    cat: "aircon",
    catLabel: "Air Con",
    catColor: "#1e90ff",
    catBg: "rgba(30,144,255,.2)",
    title: "Ducted System — 4 Bedroom Home",
    subtitle: "Parramatta, NSW · Daikin 14kW",
    bgStyle: { background: "linear-gradient(135deg,#0a2035 0%,#152d45 50%,#0d3255 100%)" },
    svgContent: (
      <svg viewBox="0 0 140 100" width="140" height="100" fill="none" stroke="#4da6ff" strokeWidth="1.5">
        <rect x="5" y="15" width="130" height="50" rx="4"/>
        <rect x="15" y="25" width="110" height="30" rx="2"/>
        <line x1="25" y1="32" x2="125" y2="32"/>
        <line x1="25" y1="40" x2="125" y2="40"/>
        <line x1="25" y1="48" x2="125" y2="48"/>
        <rect x="20" y="65" width="100" height="12" rx="2"/>
        <circle cx="115" cy="42" r="6"/>
      </svg>
    ),
  },
  {
    id: 4,
    cat: "commercial aircon",
    catLabel: "Commercial",
    catColor: "#a78bfa",
    catBg: "rgba(167,139,250,.15)",
    title: "Office Cassette Units",
    subtitle: "North Parramatta · 3x Samsung cassettes",
    bgStyle: { background: "linear-gradient(135deg,#1f1a2e 0%,#2a1f3d 50%,#1a1528 100%)" },
    svgContent: (
      <svg viewBox="0 0 120 90" width="120" height="90" fill="none" stroke="#a78bfa" strokeWidth="1.5">
        <rect x="10" y="5" width="100" height="55" rx="4"/>
        <rect x="20" y="15" width="80" height="35" rx="2"/>
        <rect x="30" y="70" width="60" height="15" rx="2"/>
        <line x1="50" y1="60" x2="50" y2="70"/>
        <line x1="70" y1="60" x2="70" y2="70"/>
        <circle cx="105" cy="25" r="4"/>
        <circle cx="105" cy="40" r="4"/>
      </svg>
    ),
  },
  {
    id: 5,
    cat: "electrical",
    catLabel: "Electrical",
    catColor: "#f5c518",
    catBg: "rgba(245,197,24,.15)",
    title: "LED Downlight Fitout",
    subtitle: "Castle Hill, NSW · 24x LED downlights",
    bgStyle: { background: "linear-gradient(135deg,#1a1a0a 0%,#2a2a10 50%,#353510 100%)" },
    svgContent: (
      <svg viewBox="0 0 100 80" width="100" height="80" fill="none" stroke="#f5c518" strokeWidth="1.5">
        <circle cx="50" cy="35" r="20"/>
        <circle cx="50" cy="35" r="12"/>
        <line x1="50" y1="5" x2="50" y2="15"/>
        <line x1="50" y1="55" x2="50" y2="65"/>
        <line x1="20" y1="35" x2="30" y2="35"/>
        <line x1="70" y1="35" x2="80" y2="35"/>
        <line x1="29" y1="14" x2="36" y2="21"/>
        <line x1="71" y1="14" x2="64" y2="21"/>
        <rect x="40" y="65" width="20" height="10" rx="2"/>
      </svg>
    ),
  },
  {
    id: 6,
    cat: "aircon",
    catLabel: "Air Con",
    catColor: "#1e90ff",
    catBg: "rgba(30,144,255,.2)",
    title: "Multi-Head Split System",
    subtitle: "Kellyville, NSW · LG 3-zone system",
    bgStyle: { background: "linear-gradient(135deg,#0a1e30 0%,#082035 50%,#0c2540 100%)" },
    svgContent: (
      <svg viewBox="0 0 110 80" width="110" height="80" fill="none" stroke="#1e90ff" strokeWidth="1.5">
        <rect x="5" y="20" width="55" height="30" rx="4"/>
        <rect x="70" y="5" width="35" height="70" rx="4"/>
        <path d="M60 35 L70 35"/>
        <rect x="10" y="27" width="45" height="16" rx="2"/>
        <line x1="18" y1="32" x2="48" y2="32"/>
        <line x1="18" y1="38" x2="48" y2="38"/>
      </svg>
    ),
  },
  {
    id: 7,
    cat: "electrical commercial",
    catLabel: "Commercial",
    catColor: "#a78bfa",
    catBg: "rgba(167,139,250,.15)",
    title: "Retail Electrical Fitout",
    subtitle: "Westmead, NSW · Full shop fitout",
    bgStyle: { background: "linear-gradient(135deg,#0f1f10 0%,#182818 50%,#1f3020 100%)" },
    svgContent: (
      <svg viewBox="0 0 110 80" width="110" height="80" fill="none" stroke="#4ade80" strokeWidth="1.5">
        <rect x="10" y="10" width="90" height="60" rx="3"/>
        <rect x="20" y="20" width="70" height="10" rx="2"/>
        <rect x="20" y="38" width="30" height="20" rx="2"/>
        <rect x="58" y="38" width="32" height="20" rx="2"/>
        <line x1="25" y1="48" x2="45" y2="48"/>
        <line x1="25" y1="53" x2="45" y2="53"/>
      </svg>
    ),
  },
  {
    id: 8,
    cat: "electrical",
    catLabel: "Electrical",
    catColor: "#f5c518",
    catBg: "rgba(245,197,24,.15)",
    title: "Smoke Alarm Compliance",
    subtitle: "Merrylands, NSW · Full residential upgrade",
    bgStyle: { background: "linear-gradient(135deg,#200f0f 0%,#2e1515 50%,#1a1010 100%)" },
    svgContent: (
      <svg viewBox="0 0 100 80" width="100" height="80" fill="none" stroke="#f87171" strokeWidth="1.5">
        <path d="M15 60 L50 10 L85 60 Z"/>
        <line x1="50" y1="30" x2="50" y2="48"/>
        <circle cx="50" cy="52" r="3"/>
        <path d="M30 60 L70 60"/>
        <path d="M20 68 L80 68"/>
      </svg>
    ),
  },
  {
    id: 9,
    cat: "aircon",
    catLabel: "Air Con",
    catColor: "#1e90ff",
    catBg: "rgba(30,144,255,.2)",
    title: "Ceiling Cassette Install",
    subtitle: "Rouse Hill, NSW · Fujitsu cassette",
    bgStyle: { background: "linear-gradient(135deg,#051525 0%,#0a2035 50%,#102840 100%)" },
    svgContent: (
      <svg viewBox="0 0 120 90" width="120" height="90" fill="none" stroke="#60a5fa" strokeWidth="1.5">
        <ellipse cx="60" cy="45" rx="40" ry="30"/>
        <ellipse cx="60" cy="45" rx="28" ry="20"/>
        <circle cx="60" cy="45" r="8"/>
        <line x1="60" y1="15" x2="60" y2="25"/>
        <line x1="60" y1="65" x2="60" y2="75"/>
        <line x1="20" y1="45" x2="32" y2="45"/>
        <line x1="88" y1="45" x2="100" y2="45"/>
      </svg>
    ),
  },
  {
    id: 10,
    cat: "electrical",
    catLabel: "Electrical",
    catColor: "#f5c518",
    catBg: "rgba(245,197,24,.15)",
    title: "Power Point Installation",
    subtitle: "Seven Hills, NSW · Kitchen renovation",
    bgStyle: { background: "linear-gradient(135deg,#15100a 0%,#201810 50%,#2a2015 100%)" },
    svgContent: (
      <svg viewBox="0 0 100 80" width="100" height="80" fill="none" stroke="#fb923c" strokeWidth="1.5">
        <rect x="15" y="10" width="70" height="55" rx="4"/>
        <rect x="25" y="20" width="22" height="12" rx="2"/>
        <rect x="53" y="20" width="22" height="12" rx="2"/>
        <rect x="25" y="40" width="22" height="12" rx="2"/>
        <rect x="53" y="40" width="22" height="12" rx="2"/>
        <line x1="50" y1="65" x2="50" y2="75"/>
        <rect x="35" y="75" width="30" height="5" rx="2"/>
      </svg>
    ),
  },
  {
    id: 11,
    cat: "commercial aircon",
    catLabel: "Commercial",
    catColor: "#a78bfa",
    catBg: "rgba(167,139,250,.15)",
    title: "School HVAC — 4 Classrooms",
    subtitle: "Penrith region · Mitsubishi ducted",
    bgStyle: { background: "linear-gradient(135deg,#0a1520 0%,#0f2030 50%,#152535 100%)" },
    svgContent: (
      <svg viewBox="0 0 140 90" width="140" height="90" fill="none" stroke="#38bdf8" strokeWidth="1.5">
        <rect x="5" y="10" width="60" height="35" rx="3"/>
        <rect x="75" y="10" width="60" height="35" rx="3"/>
        <rect x="5" y="55" width="60" height="25" rx="3"/>
        <rect x="75" y="55" width="60" height="25" rx="3"/>
        <line x1="65" y1="27" x2="75" y2="27"/>
        <line x1="65" y1="67" x2="75" y2="67"/>
      </svg>
    ),
  },
  {
    id: 12,
    cat: "aircon",
    catLabel: "Air Con",
    catColor: "#1e90ff",
    catBg: "rgba(30,144,255,.2)",
    title: "A/C Service & Gas Recharge",
    subtitle: "Toongabbie, NSW · Annual service",
    bgStyle: { background: "linear-gradient(135deg,#060e20 0%,#0a1628 50%,#0d1f35 100%)" },
    svgContent: (
      <svg viewBox="0 0 100 80" width="100" height="80" fill="none" stroke="#1e90ff" strokeWidth="1.5">
        <path d="M10 60 Q50 10 90 60"/>
        <path d="M20 65 Q50 25 80 65"/>
        <circle cx="50" cy="40" r="8"/>
        <line x1="50" y1="65" x2="50" y2="75"/>
        <rect x="35" y="75" width="30" height="5" rx="2"/>
        <line x1="30" y1="40" x2="10" y2="35"/>
        <line x1="70" y1="40" x2="90" y2="35"/>
      </svg>
    ),
  },
];

const filterLabels: { key: FilterCat; label: string }[] = [
  { key: "all", label: "All Jobs" },
  { key: "aircon", label: "Air Conditioning" },
  { key: "electrical", label: "Electrical" },
  { key: "commercial", label: "Commercial" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCat>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const visibleItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.cat.includes(activeFilter)
  );

  return (
    <div style={{ background: "#0a1628", minHeight: "100vh", color: "#fff" }}>
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(rgba(30,144,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div style={{ position: "absolute", width: "22rem", height: "22rem", borderRadius: "50%", background: "rgba(30,144,255,.07)", top: "10%", right: "-4rem", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "16rem", height: "16rem", borderRadius: "50%", background: "rgba(245,197,24,.05)", bottom: "5%", left: "-3rem", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div style={{ maxWidth: "36rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1.25rem" }}>
              <a href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Home</a>
              <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".8rem" }}>/</span>
              <span style={{ color: "#1e90ff", fontSize: ".8rem", fontFamily: "'Rubik',sans-serif" }}>Gallery</span>
            </div>
            <span
              style={{
                display: "inline-block",
                fontFamily: "'Outfit',sans-serif",
                fontSize: ".7rem",
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: ".35rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                background: "rgba(245,197,24,.1)",
                border: "1px solid rgba(245,197,24,.25)",
                color: "#f5c518",
              }}
            >
              Our Work
            </span>
            <h1
              className="font-outfit"
              style={{ fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#fff" }}
            >
              Completed <span style={{ color: "#1e90ff" }}>Jobs</span> Across{" "}
              <span style={{ color: "#f5c518" }}>NSW</span>
            </h1>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "34rem" }}>
              Every photo here is a real job done by our team. Browse air con installs, electrical fitouts, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-24 relative" style={{ background: "#0a1628" }}>
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
                  border: activeFilter === key ? "1px solid #1e90ff" : "1px solid rgba(255,255,255,.1)",
                  background: activeFilter === key ? "#1e90ff" : "transparent",
                  color: activeFilter === key ? "#fff" : "rgba(255,255,255,.55)",
                  transition: "all .2s",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="font-rubik" style={{ color: "rgba(255,255,255,.35)", fontSize: ".8rem", marginBottom: "1.5rem" }}>
            Showing {visibleItems.length} job{visibleItems.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {visibleItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,.06)",
                  transition: "transform .3s ease, box-shadow .3s ease, border-color .3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,0,0,.5)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(30,144,255,.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.06)";
                }}
              >
                {/* Photo bg */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    ...item.bgStyle,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ opacity: 0.18 }}>
                    {item.svgContent}
                  </div>
                </div>
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(6,14,26,.95) 0%, rgba(6,14,26,.3) 50%, transparent 100%)",
                  }}
                />
                {/* Info */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.1rem", zIndex: 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: ".65rem",
                      fontFamily: "'Outfit',sans-serif",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: ".2rem .6rem",
                      borderRadius: "9999px",
                      marginBottom: ".4rem",
                      background: item.catBg,
                      color: item.catColor,
                    }}
                  >
                    {item.catLabel}
                  </span>
                  <p className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: ".95rem", lineHeight: 1.3 }}>{item.title}</p>
                  <p className="font-rubik" style={{ color: "rgba(255,255,255,.5)", fontSize: ".75rem", marginTop: ".2rem" }}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div style={{ marginTop: "2.5rem", textAlign: "center", padding: "1.25rem", background: "rgba(30,144,255,.05)", border: "1px solid rgba(30,144,255,.12)", borderRadius: ".75rem" }}>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.45)", fontSize: ".85rem" }}>
              Job photos will be added by the Bluefin team. Each card above represents a real completed job type.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative" style={{ background: "#060e1a" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(245,197,24,.15),transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: "#fff", marginBottom: ".75rem" }}>
            Want a job like these?
          </h2>
          <p className="font-rubik" style={{ color: "rgba(255,255,255,.55)", fontSize: ".95rem", marginBottom: "2rem" }}>
            Call us or get a free quote — we&apos;ll have it done and looking great.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                background: "#f5c518",
                color: "#060e1a",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 700,
                padding: ".875rem 2rem",
                borderRadius: ".75rem",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="tel:0428631931"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".75rem",
                background: "rgba(255,255,255,.05)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.15)",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 600,
                padding: ".875rem 2rem",
                borderRadius: ".75rem",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1e90ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.22 6.22l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              0428 631 931
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(6,14,26,.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backdropFilter: "blur(8px)",
          }}
        >
          <button
            onClick={() => setLightboxItem(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.15)",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
            }}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "700px",
              width: "100%",
              background: "#0f2040",
              border: "1px solid rgba(30,144,255,.25)",
              borderRadius: "1.25rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...lightboxItem.bgStyle,
              }}
            >
              <div style={{ opacity: 0.3 }}>
                {lightboxItem.svgContent}
              </div>
            </div>
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <p
                className="font-outfit"
                style={{ fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".35rem", color: lightboxItem.catColor }}
              >
                {lightboxItem.catLabel}
              </p>
              <h3 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1.15rem", marginBottom: ".25rem" }}>
                {lightboxItem.title}
              </h3>
              <p className="font-rubik" style={{ color: "rgba(255,255,255,.5)", fontSize: ".85rem" }}>
                {lightboxItem.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
