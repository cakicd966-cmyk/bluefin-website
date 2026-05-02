"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FilterCat = "all" | "aircon" | "electrical" | "pricing" | "service";

interface FAQItem {
  id: number;
  cats: string;
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    cats: "aircon pricing",
    question: "How much does air conditioning installation cost?",
    answer: (
      <div>
        <p>Installation cost depends on the type and size of system, and your home&apos;s layout. As a rough guide:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          <li style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
            <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
            <strong style={{ color: "#111", fontWeight: 600 }}>Split system (supply &amp; install):</strong> from $1,200–$2,500+ depending on the kW rating and brand
          </li>
          <li style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
            <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
            <strong style={{ color: "#111", fontWeight: 600 }}>Multi-head systems:</strong> from $3,500+ for a 3-zone setup
          </li>
          <li style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
            <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
            <strong style={{ color: "#111", fontWeight: 600 }}>Ducted systems:</strong> from $6,000–$15,000+ depending on home size and zones
          </li>
        </ul>
        <p style={{ marginTop: ".75rem" }}>Every job is different. The best way to get an accurate number is to <a href="/#contact" style={{ color: "#1e90ff", textDecoration: "none" }}>request a free quote</a> — we&apos;ll give you a fixed price upfront with no surprises.</p>
      </div>
    ),
  },
  {
    id: 2,
    cats: "aircon",
    question: "What air conditioning brands do you stock and install?",
    answer: (
      <div>
        <p>We work with all major air conditioning brands including:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            ["Mitsubishi Electric", "our most popular choice for residential"],
            ["Daikin", "excellent for ducted systems"],
            ["Fujitsu", "reliable, great value"],
            ["LG", "strong multi-head range"],
            ["Samsung, Panasonic, Carrier, Actron Air", "and more"],
          ].map(([brand, desc]) => (
            <li key={brand} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              <strong style={{ color: "#111", fontWeight: 600 }}>{brand}</strong> — {desc}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>We&apos;ll recommend the right brand and model for your situation — not just the most expensive one. If you already have a brand preference, we&apos;re happy to work with it.</p>
      </div>
    ),
  },
  {
    id: 3,
    cats: "service aircon",
    question: "Do you service my area?",
    answer: (
      <div>
        <p>We operate across the <strong style={{ color: "#111", fontWeight: 600 }}>Illawarra and Wollongong regions</strong>, including:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            "Wollongong (all suburbs)",
            "Shellharbour, Albion Park, Oak Flats",
            "Kiama, Gerringong, Berry",
            "Dapto, Horsley, Kanahooka",
            "Fairy Meadow, Corrimal, Thirroul, Bulli",
            "Helensburgh and northern Illawarra",
            "Nowra / Shoalhaven",
          ].map((area) => (
            <li key={area} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              {area}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>See our full <a href="/areas" style={{ color: "#1e90ff", textDecoration: "none" }}>service areas page</a>, or call us on <a href="tel:0428631931" style={{ color: "#1e90ff", textDecoration: "none" }}>0428 631 931</a> — if we can get there, we will.</p>
      </div>
    ),
  },
  {
    id: 4,
    cats: "aircon",
    question: "What size air conditioner do I need for my room?",
    answer: (
      <div>
        <p>Sizing depends on the room area, ceiling height, insulation, sun exposure, and whether it&apos;s a bedroom or living area. As a starting guide:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            ["Up to 20m²", "small bedroom", "2.5kW"],
            ["20–35m²", "main bedroom, study", "3.5kW"],
            ["35–60m²", "open-plan lounge", "6–7kW"],
            ["60–80m²+", "large living area", "8–9kW+"],
          ].map(([size, room, kw]) => (
            <li key={size} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              <strong style={{ color: "#111", fontWeight: 600 }}>{size}</strong> ({room}): {kw}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>We always assess the space before recommending a unit — an undersized system will struggle in summer, and an oversized one wastes electricity. We&apos;ll get it right.</p>
      </div>
    ),
  },
  {
    id: 5,
    cats: "aircon pricing",
    question: "How often should I service my air conditioner?",
    answer: (
      <div>
        <p>We recommend servicing your air conditioner <strong style={{ color: "#111", fontWeight: 600 }}>at least once a year</strong>, ideally before summer. Regular servicing:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            "Extends the life of your unit",
            "Keeps it running at peak efficiency (lower power bills)",
            "Catches small issues before they become expensive repairs",
            "Keeps the air quality clean (dirty filters can cause respiratory problems)",
          ].map((item) => (
            <li key={item} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>Service visits start from around <strong style={{ color: "#111", fontWeight: 600 }}>$150–$250</strong> for a standard split system. Commercial systems with multiple heads will vary. Ask us about a service package if you have multiple units.</p>
      </div>
    ),
  },
  {
    id: 6,
    cats: "electrical pricing",
    question: "How much does a switchboard upgrade cost?",
    answer: (
      <div>
        <p>Switchboard upgrade costs vary depending on the size of your home and the current condition of your board. Typical pricing:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            ["Single-phase upgrade (standard home)", "$1,500–$2,500"],
            ["Three-phase upgrade", "$2,500–$4,000+"],
            ["Adding safety switches/RCDs", "from $300"],
          ].map(([type, price]) => (
            <li key={type} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              <strong style={{ color: "#111", fontWeight: 600 }}>{type}:</strong> {price}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>If your switchboard is more than 25 years old, has ceramic fuses, or keeps tripping, it&apos;s worth getting it assessed. We offer free quotes and can usually diagnose issues on the first visit.</p>
      </div>
    ),
  },
  {
    id: 7,
    cats: "service",
    question: "Are you licensed and insured?",
    answer: (
      <div>
        <p>Yes — fully licensed and insured. Our licence details:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          <li style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
            <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
            <strong style={{ color: "#111", fontWeight: 600 }}>Contractor Licence:</strong> 982390C (air conditioning &amp; refrigeration)
          </li>
          <li style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
            <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
            <strong style={{ color: "#111", fontWeight: 600 }}>Electrical Contractor Licence:</strong> L191263 (A-grade electricians)
          </li>
        </ul>
        <p style={{ marginTop: ".75rem" }}>We carry full public liability insurance on every job. You can ask to see our licence details at any time — we&apos;re proud to show them. Always make sure any tradie you hire is properly licensed; it protects you if something goes wrong.</p>
      </div>
    ),
  },
  {
    id: 8,
    cats: "service",
    question: "Do you offer emergency or after-hours call-outs?",
    answer: (
      <div>
        <p>Yes. We offer <strong style={{ color: "#111", fontWeight: 600 }}>24/7 emergency callouts</strong> for urgent electrical faults and air con failures. If you have a safety issue — sparking outlets, tripped boards that won&apos;t reset, or your system has died in the middle of a heatwave — call us immediately on <a href="tel:0428631931" style={{ color: "#1e90ff", textDecoration: "none" }}>0428 631 931</a>.</p>
        <p style={{ marginTop: ".75rem" }}>Emergency call-out rates do apply outside of normal business hours. We&apos;ll always tell you the cost upfront before we come out so there are no surprises.</p>
      </div>
    ),
  },
  {
    id: 9,
    cats: "aircon",
    question: "My air conditioner isn't cooling properly. What could be wrong?",
    answer: (
      <div>
        <p>The most common reasons an air conditioner stops cooling well:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            ["Dirty filters", "restricts airflow, the most common fix (clean them monthly)"],
            ["Low refrigerant gas", "the unit has a slow leak and needs a top-up"],
            ["Dirty condenser coils (outdoor unit)", "reduces heat exchange efficiency"],
            ["The unit is undersized", "for the space"],
            ["Faulty compressor or sensor", "requires professional diagnosis"],
          ].map(([cause, desc]) => (
            <li key={cause} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              <strong style={{ color: "#111", fontWeight: 600 }}>{cause}</strong> — {desc}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>Before calling us, check that: the filter is clean, the outdoor unit isn&apos;t blocked, and all vents are open. If it&apos;s still not right, call us — most issues are diagnosed and fixed in a single visit.</p>
      </div>
    ),
  },
  {
    id: 10,
    cats: "electrical",
    question: "Can I do my own electrical work in NSW?",
    answer: (
      <div>
        <p><strong style={{ color: "#111", fontWeight: 600 }}>No — not in NSW.</strong> All electrical work beyond very minor tasks (like replacing a lightbulb or resetting a safety switch) must be carried out by a licensed electrician. This is a legal requirement under Australian law.</p>
        <p style={{ marginTop: ".75rem" }}>Unlicensed electrical work is dangerous and can void your home insurance. It can also cause fires, electrocution, and may result in significant fines. If you&apos;re in doubt, call us — we can often quote over the phone for straightforward jobs.</p>
      </div>
    ),
  },
  {
    id: 11,
    cats: "service pricing",
    question: "Do you provide written quotes before starting work?",
    answer: (
      <div>
        <p>Always. We provide <strong style={{ color: "#111", fontWeight: 600 }}>clear, written quotes</strong> before any work begins. The quote includes:</p>
        <ul style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
          {[
            "Itemised labour and material costs",
            "The scope of work — exactly what will and won't be included",
            "Any conditions or assumptions",
          ].map((item) => (
            <li key={item} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
              <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: ".75rem" }}>We never start work without your approval. And once you accept a quote, that&apos;s the price — no hidden extras. If we find something unexpected during the job, we stop and talk to you before proceeding.</p>
      </div>
    ),
  },
  {
    id: 12,
    cats: "service",
    question: "Do you offer a warranty on your work?",
    answer: (
      <div>
        <p>Yes. All workmanship is covered by our <strong style={{ color: "#111", fontWeight: 600 }}>labour warranty</strong> — if something we installed or repaired fails due to our workmanship, we&apos;ll come back and fix it at no charge.</p>
        <p style={{ marginTop: ".75rem" }}>Equipment and product warranties are provided by the manufacturer and typically cover 5 years for air conditioning units and 1–2 years for electrical components. We&apos;ll walk you through any warranties that apply to your job before we finish up.</p>
      </div>
    ),
  },
];

const filterLabels: { key: FilterCat; label: string }[] = [
  { key: "all", label: "All Questions" },
  { key: "aircon", label: "Air Con" },
  { key: "electrical", label: "Electrical" },
  { key: "pricing", label: "Pricing" },
  { key: "service", label: "Our Service" },
];

export default function FAQPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCat>("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const visibleItems = faqItems.filter(
    (item) => activeFilter === "all" || item.cats.includes(activeFilter)
  );

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
        <div style={{ position: "absolute", width: "20rem", height: "20rem", borderRadius: "50%", background: "rgba(30,144,255,.08)", top: "10%", right: "-4rem", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "14rem", height: "14rem", borderRadius: "50%", background: "rgba(245,197,24,.05)", bottom: "5%", left: "-2rem", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div style={{ maxWidth: "36rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1.25rem" }}>
              <a href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Home</a>
              <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".8rem" }}>/</span>
              <span style={{ color: "#1e90ff", fontSize: ".8rem", fontFamily: "'Rubik',sans-serif" }}>FAQ</span>
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
                background: "rgba(30,144,255,.1)",
                border: "1px solid rgba(30,144,255,.25)",
                color: "#1e90ff",
              }}
            >
              Common Questions
            </span>
            <h1
              className="font-outfit"
              style={{ fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#fff" }}
            >
              Questions? <span style={{ color: "#f5c518" }}>We&apos;ve Got</span>
              <br />Straight Answers.
            </h1>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "34rem" }}>
              Everything you need to know about air con, electrical work, costs, and how we operate. Can&apos;t find your answer? Just call us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-16 md:py-24 relative" style={{ background: "#f8faff" }}>
        <div style={{ position: "absolute", width: "28rem", height: "18rem", borderRadius: "50%", background: "rgba(30,144,255,.04)", top: "20%", right: "-6rem", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "22rem", height: "16rem", borderRadius: "50%", background: "rgba(245,197,24,.04)", bottom: "10%", left: "-4rem", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2.5rem" }}>
            {filterLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setActiveFilter(key); setOpenId(null); }}
                style={{
                  padding: ".45rem 1.1rem",
                  borderRadius: ".5rem",
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: ".03em",
                  border: activeFilter === key ? "1px solid rgba(30,144,255,.4)" : "1px solid rgba(0,0,0,.12)",
                  background: activeFilter === key ? "rgba(30,144,255,.1)" : "transparent",
                  color: activeFilter === key ? "#1e90ff" : "#555",
                  transition: "all .2s",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div>
            {visibleItems.length === 0 && (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <p className="font-rubik" style={{ color: "#888", fontSize: ".9rem" }}>No questions in this category yet.</p>
              </div>
            )}
            {visibleItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    border: isOpen ? "1px solid rgba(30,144,255,.3)" : "1px solid rgba(0,0,0,.09)",
                    borderRadius: ".875rem",
                    overflow: "hidden",
                    marginBottom: ".75rem",
                    transition: "border-color .25s",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.1rem 1.25rem",
                      background: isOpen ? "rgba(30,144,255,.05)" : "#fff",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background .2s",
                    }}
                  >
                    <span
                      className="font-outfit"
                      style={{ fontWeight: 600, fontSize: ".95rem", color: "#111", lineHeight: 1.35, flex: 1 }}
                    >
                      {item.question}
                    </span>
                    <div
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        background: isOpen ? "rgba(30,144,255,.2)" : "rgba(30,144,255,.1)",
                        border: "1px solid rgba(30,144,255,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform .3s, background .2s",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#1e90ff" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "600px" : "0",
                      overflow: "hidden",
                      padding: isOpen ? "0 1.25rem 1.25rem" : "0 1.25rem",
                      transition: "max-height .35s ease, padding .25s",
                    }}
                  >
                    <div
                      className="font-rubik"
                      style={{
                        fontSize: ".9rem",
                        color: "#444",
                        lineHeight: 1.75,
                        paddingTop: ".75rem",
                        borderTop: "1px solid rgba(0,0,0,.07)",
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have a question */}
          <div
            style={{
              marginTop: "3rem",
              background: "linear-gradient(135deg,rgba(30,144,255,.06),rgba(240,246,255,1))",
              border: "1px solid rgba(30,144,255,.2)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h3 className="font-outfit" style={{ fontWeight: 700, color: "#111", fontSize: "1.1rem", marginBottom: ".4rem" }}>Still have a question?</h3>
              <p className="font-rubik" style={{ color: "#555", fontSize: ".875rem", lineHeight: 1.6 }}>Can&apos;t find what you&apos;re looking for? Call us or send a message and we&apos;ll get back to you straight away.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
              <a
                href="tel:0428631931"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                  background: "#f5c518",
                  color: "#060e1a",
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 700,
                  padding: ".625rem 1.25rem",
                  borderRadius: ".75rem",
                  textDecoration: "none",
                  fontSize: ".875rem",
                }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.22 6.22l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us
              </a>
              <a
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".75rem",
                  background: "#f0f4ff",
                  color: "#111",
                  border: "1px solid rgba(30,144,255,.2)",
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 600,
                  padding: ".625rem 1.25rem",
                  borderRadius: ".75rem",
                  textDecoration: "none",
                  fontSize: ".875rem",
                }}
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative" style={{ background: "#ffffff" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(30,144,255,.2),transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: "#111", marginBottom: ".75rem" }}>
            Ready to get the job done?
          </h2>
          <p className="font-rubik" style={{ color: "#555", fontSize: ".95rem", marginBottom: "2rem" }}>
            Free quotes, upfront pricing, local NSW tradies. Call or request a quote online.
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
                background: "#f0f4ff",
                color: "#111",
                border: "1px solid rgba(30,144,255,.2)",
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
    </div>
  );
}
