import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSettings } from "@/lib/content";
import type { Metadata } from "next";
import {
  Clock, ShieldCheck, BarChart2, Users,
  Star, ThumbsUp, Award, Home, DollarSign,
  CheckCircle, Heart, Truck, Calendar, Eye, Lock,
  RefreshCw, MessageCircle, Lightbulb, Thermometer,
  Wifi, Hammer, Gauge, Settings, Sparkles, Phone,
  Zap, Wrench, Globe, Target, TrendingUp, MapPin, BadgeCheck,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us | Wollongong Air Con & Electrical Specialists",
  description:
    "Family-owned air con & electrical business proudly serving Wollongong, Illawarra and Sydney. Licensed, insured and local. Contractor Licence 982390C.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bluefin | Wollongong Air Con & Electrical",
    description:
      "Family-owned Wollongong trades business serving Illawarra and Sydney. Licensed & insured. Contractor Licence 982390C.",
    url: "https://www.bluefinairandelc.com.au/about",
    images: [{ url: "/blog/aircon-service.jpg", width: 1200, height: 630, alt: "Bluefin Air-Conditioning & Electrical — Wollongong" }],
  },
};

const VALUES_ICON_MAP: Record<string, React.ElementType> = {
  clock: Clock, shield: ShieldCheck, chart: BarChart2, users: Users,
  star: Star, thumbsup: ThumbsUp, award: Award, home: Home,
  dollar: DollarSign, check: CheckCircle, heart: Heart, truck: Truck,
  calendar: Calendar, eye: Eye, lock: Lock, refresh: RefreshCw,
  message: MessageCircle, lightbulb: Lightbulb, thermometer: Thermometer,
  wifi: Wifi, hammer: Hammer, gauge: Gauge, settings: Settings,
  sparkles: Sparkles, phone: Phone, zap: Zap, wrench: Wrench,
  globe: Globe, target: Target, trending: TrendingUp,
  map: MapPin, badge: BadgeCheck,
};

function ValueIcon({ icon, color }: { icon: string; color: string }) {
  const Icon = VALUES_ICON_MAP[icon] ?? Clock;
  return <Icon width={20} height={20} stroke={color} strokeWidth={2} fill="none" />;
}

const TEAM_COLORS = [
  { bg: "linear-gradient(135deg,#1e90ff,#0070e0)", color: "#fff" },
  { bg: "linear-gradient(135deg,#f5c518,#d4a800)", color: "#060e1a" },
  { bg: "linear-gradient(135deg,#1e90ff,#f5c518)", color: "#fff" },
];

// Alternate blue / gold for value icon backgrounds based on index
const VALUE_ICON_COLORS = ["#1e90ff", "#f5c518", "#1e90ff", "#f5c518", "#1e90ff", "#f5c518"];
const VALUE_ICON_BG_COLORS = [
  "rgba(30,144,255,.15)", "rgba(245,197,24,.15)",
  "rgba(30,144,255,.15)", "rgba(245,197,24,.15)",
  "rgba(30,144,255,.15)", "rgba(245,197,24,.15)",
];

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  blue: { bg: "rgba(30,144,255,.1)", color: "#1e90ff" },
  yellow: { bg: "rgba(245,197,24,.1)", color: "#f5c518" },
};

export default function AboutPage() {
  const { about, phone } = getSettings();

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
        <div
          style={{
            position: "absolute",
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
            background: "rgba(30,144,255,.08)",
            top: "20%",
            left: "-6rem",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
            background: "rgba(245,197,24,.05)",
            bottom: "10%",
            right: "-4rem",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div style={{ maxWidth: "36rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1.25rem" }}>
              <a href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Home</a>
              <span style={{ color: "rgba(255,255,255,.2)", fontSize: ".8rem" }}>/</span>
              <span style={{ color: "#1e90ff", fontSize: ".8rem", fontFamily: "'Rubik',sans-serif" }}>About Us</span>
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
              {about.heroBadge}
            </span>
            <h1
              className="font-outfit"
              style={{ fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#fff" }}
            >
              {about.heroHeadlineMain}<br />
              <span style={{ color: "#f5c518" }}>{about.heroHeadlineHighlight}</span>
            </h1>
            <p
              className="font-rubik"
              style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "36rem" }}
            >
              {about.heroSubtext}
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,.07)", borderBottom: "1px solid rgba(0,0,0,.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {about.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-outfit" style={{ color: "#f5c518", fontSize: "2.5rem", lineHeight: 1, fontWeight: 900 }}>{stat.value}</p>
                <p className="font-rubik" style={{ color: "#666", fontSize: ".8rem", marginTop: ".25rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="py-20 md:py-28 relative" style={{ background: "#f8faff" }}>
        <div
          style={{
            position: "absolute",
            width: "22rem",
            height: "22rem",
            borderRadius: "50%",
            background: "rgba(30,144,255,.05)",
            right: "-4rem",
            top: "10%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Story text */}
            <div>
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
                How It Started
              </span>
              <h2
                className="font-outfit"
                style={{ fontWeight: 900, fontSize: "clamp(1.7rem,3.5vw,2.5rem)", color: "#111", marginBottom: "1.5rem" }}
              >
                {about.storyHeadlineMain}{" "}
                <span style={{ color: "#1e90ff" }}>{about.storyHeadlineHighlight}</span>
              </h2>
              <div
                className="font-rubik"
                style={{ color: "#444", fontSize: ".95rem", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                {about.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
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
                Our Milestones
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: ".5rem" }}>
                {about.milestones.map((item) => (
                  <div key={item.year} style={{ position: "relative", paddingLeft: "2.5rem" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: ".35rem",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        background: "#1e90ff",
                        border: "3px solid #f8faff",
                        boxShadow: "0 0 0 3px rgba(30,144,255,.3)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: ".45rem",
                        top: "1.4rem",
                        width: "2px",
                        bottom: "-1rem",
                        background: "linear-gradient(to bottom, rgba(30,144,255,.4), transparent)",
                      }}
                    />
                    <p className="font-outfit" style={{ color: "#f5c518", fontSize: ".8rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: ".25rem" }}>{item.year}</p>
                    <h4 className="font-outfit" style={{ fontWeight: 700, color: "#111", fontSize: "1rem", marginBottom: ".3rem" }}>{item.title}</h4>
                    <p className="font-rubik" style={{ color: "#555", fontSize: ".875rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-20 md:py-28 relative" style={{ background: "#ffffff" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg,transparent,rgba(30,144,255,.2),transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
            background: "rgba(245,197,24,.04)",
            left: "-4rem",
            bottom: "10%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
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
              The People Behind the Work
            </span>
            <h2
              className="font-outfit"
              style={{ fontWeight: 900, fontSize: "clamp(1.8rem,4vw,3rem)", color: "#111", marginBottom: ".75rem" }}
            >
              {about.teamHeadlineMain} <span style={{ color: "#1e90ff" }}>{about.teamHeadlineHighlight}</span>
            </h2>
            <p className="font-rubik" style={{ color: "#555", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
              {about.teamSubtext}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.teamMembers.map((member, i) => {
              const colors = TEAM_COLORS[i % TEAM_COLORS.length];
              const tagStyle = i === 1 ? TAG_STYLES.yellow : TAG_STYLES.blue;
              return (
                <div
                  key={member.name}
                  style={{
                    background: "#f0f6ff",
                    border: "1px solid rgba(30,144,255,.15)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Outfit',sans-serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      margin: "0 auto 1.25rem",
                      border: "3px solid rgba(30,144,255,.3)",
                      background: member.image ? "transparent" : colors.bg,
                      color: colors.color,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    {member.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      member.initials
                    )}
                  </div>
                  <h3 className="font-outfit" style={{ fontWeight: 700, color: "#111", fontSize: "1.15rem", marginBottom: ".25rem" }}>{member.name}</h3>
                  <p className="font-outfit" style={{ color: "#f5c518", fontSize: ".75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".75rem" }}>
                    {member.role}
                  </p>
                  <p className="font-rubik" style={{ color: "#444", fontSize: ".875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {member.bio}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".4rem" }}>
                    {member.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: tagStyle.bg, color: tagStyle.color, fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <p className="font-rubik" style={{ color: "#888", fontSize: ".85rem" }}>
              {about.teamHiringText}{" "}
              <a href="/#contact" style={{ color: "#1e90ff", textDecoration: "none", fontWeight: 500 }}>Get in touch →</a>
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 md:py-28 relative" style={{ background: "#f8faff" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg,transparent,rgba(245,197,24,.15),transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "28rem",
            height: "16rem",
            borderRadius: "50%",
            background: "rgba(30,144,255,.05)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
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
              {about.valuesSectionLabel}
            </span>
            <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.8rem,4vw,3rem)", color: "#111", marginBottom: ".75rem" }}>
              {about.valuesHeadlineMain} <span style={{ color: "#d4a800" }}>{about.valuesHeadlineHighlight}</span>
            </h2>
            <p className="font-rubik" style={{ color: "#555", maxWidth: "34rem", margin: "0 auto", lineHeight: 1.7 }}>
              {about.valuesSubtext}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {about.values.map((value, vi) => (
              <div
                key={value.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(30,144,255,.15)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: ".75rem",
                    background: VALUE_ICON_BG_COLORS[vi % VALUE_ICON_BG_COLORS.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.1rem",
                  }}
                >
                  <ValueIcon icon={value.icon} color={VALUE_ICON_COLORS[vi % VALUE_ICON_COLORS.length]} />
                </div>
                <h3 className="font-outfit" style={{ fontWeight: 700, color: "#111", fontSize: "1.05rem", marginBottom: ".5rem" }}>{value.title}</h3>
                <p className="font-rubik" style={{ color: "#555", fontSize: ".875rem", lineHeight: 1.65 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative" style={{ background: "#ffffff" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg,transparent,rgba(30,144,255,.2),transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: "#111", marginBottom: "1rem" }}>
            {about.ctaHeadline}
          </h2>
          <p className="font-rubik" style={{ color: "#555", fontSize: ".95rem", marginBottom: "2rem" }}>
            {about.ctaSubtext}
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
              href={`tel:${phone.replace(/\s/g, "")}`}
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
              {phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
