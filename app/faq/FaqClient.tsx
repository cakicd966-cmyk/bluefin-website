"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { FaqItem } from "@/lib/content";

type FilterCat = "all" | "aircon" | "electrical" | "pricing" | "service";

function renderAnswer(answer: string) {
  const lines = answer.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  lines.forEach((line, i) => {
    if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
    } else {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${i}`} style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
            {listItems.map((item, j) => (
              <li key={j} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
                <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
                {item}
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
      if (line.trim()) {
        elements.push(<p key={`p-${i}`} style={{ marginTop: elements.length > 0 ? ".75rem" : 0 }}>{line}</p>);
      }
    }
  });

  // flush remaining list items
  if (listItems.length > 0) {
    elements.push(
      <ul key="ul-final" style={{ paddingLeft: "1.2rem", marginTop: ".5rem", display: "flex", flexDirection: "column", gap: ".35rem" }}>
        {listItems.map((item, j) => (
          <li key={j} style={{ listStyle: "none", position: "relative", paddingLeft: ".75rem" }}>
            <span style={{ position: "absolute", left: 0, color: "#1e90ff" }}>–</span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return elements;
}

const filterLabels: { key: FilterCat; label: string }[] = [
  { key: "all", label: "All Questions" },
  { key: "aircon", label: "Air Con" },
  { key: "electrical", label: "Electrical" },
  { key: "pricing", label: "Pricing" },
  { key: "service", label: "Our Service" },
];

export default function FAQPage({ faqs }: { faqs: FaqItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterCat>("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const visibleItems = faqs.filter(
    (item) => activeFilter === "all" || item.category.includes(activeFilter)
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
                      {renderAnswer(item.answer)}
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
