"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Wrench, Zap, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Air Conditioning Installation",
    description:
      "Supply and install split systems, ducted units, and multi-head systems for homes and commercial spaces. All major brands stocked.",
    highlights: ["Split Systems", "Ducted Units", "Multi-Head Systems", "All Brands"],
    color: "electric",
  },
  {
    icon: Wrench,
    title: "Air Con Servicing & Repairs",
    description:
      "Regular maintenance, gas top-ups, filter cleans, and fault diagnosis to keep your system running at peak efficiency year-round.",
    highlights: ["Annual Servicing", "Gas Recharges", "Fault Diagnosis", "Filter Cleans"],
    color: "gold",
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description:
      "Licensed electricians for residential and commercial fit-outs, switchboard upgrades, power points, lighting, and safety inspections.",
    highlights: ["Switchboard Upgrades", "Power Points", "Lighting", "Safety Checks"],
    color: "electric",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Callouts",
    description:
      "Electrical faults and air con breakdowns don't wait — neither do we. Fast response emergency service across NSW when you need it most.",
    highlights: ["24/7 Availability", "Fast Response", "All NSW", "No Call-Out Delays"],
    color: "emergency",
  },
];

const colorMap = {
  electric: {
    iconBg: "bg-electric/10",
    iconColor: "text-electric",
    border: "border-electric/20 hover:border-electric/50",
    highlight: "bg-electric/10 text-electric",
    glow: "hover:shadow-blue-200/60",
  },
  gold: {
    iconBg: "bg-gold/15",
    iconColor: "text-gold-dark",
    border: "border-yellow-200 hover:border-yellow-300",
    highlight: "bg-yellow-50 text-yellow-700",
    glow: "hover:shadow-yellow-100",
  },
  emergency: {
    iconBg: "bg-red-50",
    iconColor: "text-emergency",
    border: "border-red-100 hover:border-red-300",
    highlight: "bg-red-50 text-emergency",
    glow: "hover:shadow-red-100",
  },
};

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const colors = colorMap[service.color as keyof typeof colorMap];
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`relative bg-white border ${colors.border} rounded-2xl p-6 card-hover cursor-default group shadow-sm hover:shadow-xl ${colors.glow} transition-all duration-300`}
    >
      {/* Icon */}
      <div className={`inline-flex w-12 h-12 rounded-xl ${colors.iconBg} items-center justify-center mb-5`}>
        <Icon className={`w-6 h-6 ${colors.iconColor}`} />
      </div>

      {/* Content */}
      <h3 className="font-outfit font-bold text-gray-900 text-xl mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="font-rubik text-gray-500 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2">
        {service.highlights.map((h) => (
          <span
            key={h}
            className={`text-xs font-rubik font-medium px-2.5 py-1 rounded-full ${colors.highlight}`}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${
        service.color === "electric"
          ? "from-transparent via-electric to-transparent"
          : service.color === "emergency"
          ? "from-transparent via-emergency to-transparent"
          : "from-transparent via-gold to-transparent"
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-navy relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 25 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-electric text-xs font-outfit font-semibold uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="font-rubik text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            From installation to emergency repairs, Bluefin covers everything air-con and electrical for homes and businesses across NSW.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-electric hover:text-electric-dark font-outfit font-semibold text-sm transition-colors duration-200 cursor-pointer group"
          >
            Get a quote for any service
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
