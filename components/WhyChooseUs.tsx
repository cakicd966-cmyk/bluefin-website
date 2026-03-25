"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, MapPin, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed electricians and air-con techs. Work covered by full public liability insurance for your complete peace of mind.",
    stat: "100%",
    statLabel: "Fully Covered",
  },
  {
    icon: MapPin,
    title: "Local NSW Tradies",
    description:
      "We live and work right here in NSW. No call centres, no sub-contractors — just your local team who know the area.",
    stat: "Local",
    statLabel: "NSW Based",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Same-day bookings available. For emergencies, we aim to be on-site within hours — not days. Your comfort can't wait.",
    stat: "Same",
    statLabel: "Day Response",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guaranteed",
    description:
      "We stand behind every job with a workmanship guarantee. If something's not right, we come back and fix it. No arguments.",
    stat: "100%",
    statLabel: "Satisfaction",
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative bg-white border border-electric/15 hover:border-electric/35 rounded-2xl p-6 card-hover cursor-default group shadow-sm hover:shadow-lg"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-electric" />
        </div>
        <div className="text-right">
          <p className="font-outfit font-black text-2xl text-gold-dark leading-none">{feature.stat}</p>
          <p className="font-rubik text-gray-400 text-[10px] uppercase tracking-wider mt-0.5">{feature.statLabel}</p>
        </div>
      </div>

      <h3 className="font-outfit font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
      <p className="font-rubik text-gray-500 text-sm leading-relaxed">{feature.description}</p>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gold/8 rounded-full" />
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-navy-deep relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-electric/5 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold-dark text-xs font-outfit font-semibold uppercase tracking-widest mb-4">
            The Bluefin Difference
          </span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Why Choose <span className="text-electric">Us?</span>
          </h2>
          <p className="font-rubik text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            We're not just another tradie business. Here's what sets Bluefin apart from the competition.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* License numbers strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
            <span className="font-rubik text-gray-500 text-sm">
              Contractor Licence:{" "}
              <span className="text-gray-900 font-semibold">982390C</span>
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
            <span className="font-rubik text-gray-500 text-sm">
              Electrical Licence:{" "}
              <span className="text-gray-900 font-semibold">L191263</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
