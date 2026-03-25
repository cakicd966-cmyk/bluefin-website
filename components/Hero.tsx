"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown, Shield, Star, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient pt-16"
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
              Wollongong & Illawarra — Licensed & Insured
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.05] text-gray-900 mb-6"
            >
              Wollongong&apos;s Local{" "}
              <span className="text-electric">Air-Con</span> &{" "}
              <span className="text-gold">Electrical</span>{" "}
              Experts
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="font-rubik text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Trusted by Wollongong, Illawarra and Sydney homeowners for over a decade. From air con installation to full electrical fitouts — we show up on time and get the job done right.
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
                href="tel:0428631931"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-electric/40 text-gray-900 font-outfit font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
              >
                <Phone className="w-5 h-5 text-electric" />
                0428 631 931
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
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Star, label: "5-Star Rated" },
                { icon: Zap, label: "Same-Day Response" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-500 font-rubik">
                  <Icon className="w-4 h-4 text-gold-dark shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — logo visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative flex justify-center">
              {/* Blue glow behind logo */}
              <div className="absolute inset-0 rounded-3xl bg-electric/15 blur-3xl scale-110 pointer-events-none" />

              {/* Logo card */}
              <div className="relative bg-white border border-electric/20 rounded-3xl p-14 shadow-2xl shadow-electric/10 flex flex-col items-center justify-center text-center w-full">
                {/* Icon */}
                <div className="w-24 h-24 rounded-2xl bg-electric flex items-center justify-center mb-6 shadow-xl shadow-electric/30">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white fill-current">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* Wordmark */}
                <h2 className="font-outfit font-black text-5xl text-gray-900 tracking-tight leading-none mb-1">
                  BLUEFIN
                </h2>
                <p className="font-outfit font-bold text-electric text-sm uppercase tracking-[0.25em] mt-2">
                  Air-Con & Electrical
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-electric/20 my-5" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-rubik text-gray-400 text-xs">Wollongong & Illawarra</p>
              </div>

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-gold text-gray-900 rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="font-outfit font-black text-2xl leading-none">500+</p>
                <p className="font-rubik text-xs font-semibold opacity-80 mt-0.5">Jobs Completed</p>
              </motion.div>

              {/* Floating phone card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white border border-electric/30 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-electric/15 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-electric" />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-rubik">Call us anytime</p>
                  <p className="text-gray-900 font-outfit font-bold text-sm">0428 631 931</p>
                </div>
              </motion.div>
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
