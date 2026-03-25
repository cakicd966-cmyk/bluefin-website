import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bluefin Air-Conditioning & Electrical",
  description:
    "Learn about Bluefin Air-Conditioning & Electrical — a family-owned NSW trades business with over a decade of experience. Meet the team behind the work.",
};

export default function AboutPage() {
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
        {/* Grid bg */}
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
        {/* Orbs */}
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

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full"
        >
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
              Our Story
            </span>
            <h1
              className="font-outfit"
              style={{ fontWeight: 900, fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#fff" }}
            >
              Built on Hard Work &amp;<br />
              <span style={{ color: "#f5c518" }}>Honest Tradiemanship</span>
            </h1>
            <p
              className="font-rubik"
              style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "36rem" }}
            >
              Bluefin Air-Conditioning &amp; Electrical started with a toolbox, a ute, and a commitment to doing things properly. Over a decade later, that hasn&apos;t changed.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#060e1a", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "12+", label: "Years in Business" },
              { value: "500+", label: "Jobs Completed" },
              { value: "5.0", label: "Star Google Rating" },
              { value: "100%", label: "Satisfaction Guaranteed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-outfit" style={{ color: "#f5c518", fontSize: "2.5rem", lineHeight: 1, fontWeight: 900 }}>{stat.value}</p>
                <p className="font-rubik" style={{ color: "rgba(255,255,255,.5)", fontSize: ".8rem", marginTop: ".25rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="py-20 md:py-28 relative" style={{ background: "#0a1628" }}>
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
                style={{ fontWeight: 900, fontSize: "clamp(1.7rem,3.5vw,2.5rem)", color: "#fff", marginBottom: "1.5rem" }}
              >
                From One Van to a Trusted{" "}
                <span style={{ color: "#1e90ff" }}>NSW Team</span>
              </h2>
              <div
                className="font-rubik"
                style={{ color: "rgba(255,255,255,.65)", fontSize: ".95rem", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <p>Bluefin was founded in 2012 by a qualified electrician who&apos;d spent years watching customers get burned by dodgy quotes, no-show tradies, and shoddy workmanship. He&apos;d had enough. So he went out on his own.</p>
                <p>Starting with residential air con installs around Western Sydney, the business grew fast — not through ads, but through referrals. Neighbours telling neighbours. That&apos;s still how most of our work comes in today.</p>
                <p>As demand grew, the team expanded. We brought on a dedicated air-con crew and added more licensed electricians. Today, Bluefin handles everything from a simple split system install to full commercial electrical fitouts — always with the same attention to detail that built our reputation in the first place.</p>
                <p>We&apos;re still locally owned and operated. No franchises, no call centres. When you ring us, you&apos;re talking to someone who&apos;s actually going to show up at your door.</p>
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
                {[
                  {
                    year: "2012",
                    title: "Bluefin Founded",
                    desc: "Started as a one-man operation in Western Sydney, focused on residential air con installs and small electrical jobs.",
                  },
                  {
                    year: "2015",
                    title: "Expanded to Full Electrical",
                    desc: "Added a dedicated electrical division with licensed A-grade electricians, covering switchboards, fit-outs, and safety inspections.",
                  },
                  {
                    year: "2018",
                    title: "100th 5-Star Review",
                    desc: "Hit our 100th 5-star Google review — a milestone that meant more to us than any award. Pure word of mouth.",
                  },
                  {
                    year: "2021",
                    title: "Commercial Contracts",
                    desc: "Landed our first major commercial contracts — schools, strata buildings, and retail fitouts across Greater Sydney.",
                  },
                  {
                    year: "Today",
                    title: "Still Going Strong",
                    desc: "500+ jobs completed, a tight-knit team of licensed tradies, and the same commitment to quality we started with.",
                  },
                ].map((item) => (
                  <div
                    key={item.year}
                    style={{ position: "relative", paddingLeft: "2.5rem" }}
                  >
                    {/* dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: ".35rem",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        background: "#1e90ff",
                        border: "3px solid #0a1628",
                        boxShadow: "0 0 0 3px rgba(30,144,255,.3)",
                      }}
                    />
                    {/* line */}
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
                    <h4 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: ".3rem" }}>{item.title}</h4>
                    <p className="font-rubik" style={{ color: "rgba(255,255,255,.55)", fontSize: ".875rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-20 md:py-28 relative" style={{ background: "#060e1a" }}>
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
              style={{ fontWeight: 900, fontSize: "clamp(1.8rem,4vw,3rem)", color: "#fff", marginBottom: ".75rem" }}
            >
              Meet the <span style={{ color: "#1e90ff" }}>Team</span>
            </h2>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.6)", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
              Every job is done by a real, licensed tradie — not a sub-contractor you&apos;ve never met. Here&apos;s who&apos;s behind the Bluefin name.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Matt T */}
            <div
              style={{
                background: "#0f2040",
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
                  background: "linear-gradient(135deg,#1e90ff,#0070e0)",
                  color: "#fff",
                }}
              >
                MT
              </div>
              <h3 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1.15rem", marginBottom: ".25rem" }}>Matt T.</h3>
              <p className="font-outfit" style={{ color: "#f5c518", fontSize: ".75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".75rem" }}>
                Founder &amp; Lead Electrician
              </p>
              <p className="font-rubik" style={{ color: "rgba(255,255,255,.6)", fontSize: ".875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                A-grade electrician with 15+ years in the field. Matt started Bluefin after years of seeing customers get let down by other tradies. He still gets on the tools every day.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".4rem" }}>
                <span style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: "rgba(30,144,255,.1)", color: "#1e90ff", fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>A-Grade Electrician</span>
                <span style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: "rgba(30,144,255,.1)", color: "#1e90ff", fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>Lic. L191263</span>
              </div>
            </div>

            {/* Jake W */}
            <div
              style={{
                background: "#0f2040",
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
                  background: "linear-gradient(135deg,#f5c518,#d4a800)",
                  color: "#060e1a",
                }}
              >
                JW
              </div>
              <h3 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1.15rem", marginBottom: ".25rem" }}>Jake W.</h3>
              <p className="font-outfit" style={{ color: "#f5c518", fontSize: ".75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".75rem" }}>
                Senior A/C Technician
              </p>
              <p className="font-rubik" style={{ color: "rgba(255,255,255,.6)", fontSize: ".875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Jake is our go-to for complex ducted systems and commercial installs. With a background across all major brands, there&apos;s very little he hasn&apos;t seen — or fixed.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".4rem" }}>
                <span style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: "rgba(245,197,24,.1)", color: "#f5c518", fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>RAC Licence</span>
                <span style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: "rgba(245,197,24,.1)", color: "#f5c518", fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>Ducted Specialist</span>
              </div>
            </div>

            {/* Sam R */}
            <div
              style={{
                background: "#0f2040",
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
                  background: "linear-gradient(135deg,#1e90ff,#f5c518)",
                  color: "#fff",
                }}
              >
                SR
              </div>
              <h3 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1.15rem", marginBottom: ".25rem" }}>Sam R.</h3>
              <p className="font-outfit" style={{ color: "#f5c518", fontSize: ".75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".75rem" }}>
                Electrician &amp; Service Tech
              </p>
              <p className="font-rubik" style={{ color: "rgba(255,255,255,.6)", fontSize: ".875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Sam handles residential installs, service calls, and emergency callouts. Fast, friendly, and leaves every job site cleaner than he found it — customers always comment on it.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".4rem" }}>
                <span style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: "rgba(30,144,255,.1)", color: "#1e90ff", fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>Licensed Electrician</span>
                <span style={{ fontSize: ".7rem", padding: ".2rem .6rem", borderRadius: "9999px", background: "rgba(30,144,255,.1)", color: "#1e90ff", fontFamily: "'Rubik',sans-serif", fontWeight: 500 }}>Emergency Response</span>
              </div>
            </div>
          </div>

          {/* Hiring note */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.4)", fontSize: ".85rem" }}>
              Interested in joining the Bluefin crew?{" "}
              <a href="/#contact" style={{ color: "#1e90ff", textDecoration: "none", fontWeight: 500 }}>Get in touch →</a>
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 md:py-28 relative" style={{ background: "#0a1628" }}>
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
              What We Stand For
            </span>
            <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.8rem,4vw,3rem)", color: "#fff", marginBottom: ".75rem" }}>
              Our <span style={{ color: "#f5c518" }}>Values</span>
            </h2>
            <p className="font-rubik" style={{ color: "rgba(255,255,255,.6)", maxWidth: "34rem", margin: "0 auto", lineHeight: 1.7 }}>
              These aren&apos;t buzzwords on a wall. They&apos;re the standards every Bluefin job is held to, every single time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1e90ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                iconBg: "rgba(30,144,255,.15)",
                title: "Punctuality",
                desc: "We show up when we say we will. If something changes, we call you first. Your time is as valuable as ours.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
                  </svg>
                ),
                iconBg: "rgba(245,197,24,.15)",
                title: "Integrity",
                desc: "We quote honestly and bill exactly what we quote. No surprise charges, no upselling you on things you don't need.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1e90ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
                iconBg: "rgba(30,144,255,.15)",
                title: "Quality",
                desc: "We don't cut corners. Every install is done to code, every repair is done to last. We take pride in work that passes inspection first go.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                iconBg: "rgba(245,197,24,.15)",
                title: "Community",
                desc: "We're locals. We sponsor local footy clubs, support local suppliers, and give back to the communities that have supported us.",
              },
            ].map((value) => (
              <div
                key={value.title}
                style={{
                  background: "linear-gradient(135deg,rgba(30,144,255,.07),#060e1a)",
                  border: "1px solid rgba(30,144,255,.12)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: ".75rem",
                    background: value.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.1rem",
                  }}
                >
                  {value.icon}
                </div>
                <h3 className="font-outfit" style={{ fontWeight: 700, color: "#fff", fontSize: "1.05rem", marginBottom: ".5rem" }}>{value.title}</h3>
                <p className="font-rubik" style={{ color: "rgba(255,255,255,.55)", fontSize: ".875rem", lineHeight: 1.65 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative" style={{ background: "#060e1a" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg,transparent,rgba(30,144,255,.15),transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: "#fff", marginBottom: "1rem" }}>
            Ready to work with a team you can trust?
          </h2>
          <p className="font-rubik" style={{ color: "rgba(255,255,255,.55)", fontSize: ".95rem", marginBottom: "2rem" }}>
            Get a free, no-obligation quote. We&apos;ll get back to you fast.
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
    </div>
  );
}
