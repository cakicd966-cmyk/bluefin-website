"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown, Shield, Star, Zap } from "lucide-react";
import type { SiteSettings } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const BADGE_ICONS: Record<string, typeof Shield> = {
  "Licensed & Insured": Shield,
  "5-Star Rated": Star,
  "Same-Day Response": Zap,
};

export default function Hero({ settings }: { settings?: SiteSettings }) {
  const phone = settings?.phone || "0428 631 931";
  const badge = settings?.heroBadge || "Wollongong & Illawarra — Licensed & Insured";
  const headline = settings?.heroHeadline || "Wollongong's Local Air-Con & Electrical Experts";
  const subtext = settings?.heroSubtext || "Trusted by Wollongong, Illawarra and Sydney homeowners for over a decade. From air con installation to full electrical fitouts — we show up on time and get the job done right.";
  const trustBadges = settings?.trustBadges || ["Licensed & Insured", "5-Star Rated", "Same-Day Response"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient pt-20 md:pt-[120px]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,102,204,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,102,204,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-electric/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 bg-electric/10 border border-electric/25 text-electric text-xs font-outfit font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
              {badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.05] text-gray-900 mb-6"
            >
              {headline}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="font-rubik text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 btn-glow cursor-pointer shadow-lg"
              >
                Get a Free Quote
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-electric/40 text-gray-900 font-outfit font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
              >
                <Phone className="w-5 h-5 text-electric" />
                {phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap gap-5"
            >
              {trustBadges.map((label) => {
                const Icon = BADGE_ICONS[label] || Shield;
                return (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-500 font-rubik">
                    <Icon className="w-4 h-4 text-gold-dark shrink-0" />
                    <span>{label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right — logo visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
            style={{ background: "transparent" }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0, background: "transparent" }}>
              {/* Logo with blue glow */}
              <img
                src="/bluefin-logo.png"
                alt="Bluefin Air-Conditioning & Electrical"
                style={{
                  width: 480,
                  height: "auto",
                  display: "block",
                  background: "transparent",
                  filter:
                    "drop-shadow(0 0 25px rgba(30, 111, 217, 0.9)) drop-shadow(0 0 50px rgba(30, 111, 217, 0.6)) drop-shadow(0 0 80px rgba(30, 111, 217, 0.3))",
                }}
              />

              {/* Stars */}
              <div className="flex items-center gap-1" style={{ marginTop: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#F5C518", fontSize: 22 }}>★</span>
                ))}
              </div>

              {/* Location */}
              <p style={{ color: "#888", fontSize: 13, marginTop: 2 }} className="font-rubik">
                Wollongong &amp; Illawarra
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs font-rubik tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-gray-300 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
