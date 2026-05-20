"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wind, Wrench, Zap, AlertTriangle,
  Thermometer, Settings, Cpu, Plug, Lightbulb,
  Home, Star, CheckCircle, Calendar, Gauge,
  ShieldCheck, Hammer, Package, Fan, Sun,
  Snowflake, Truck, Globe, Phone, BarChart2,
} from "lucide-react";
import type { ServiceItem } from "@/lib/content";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  wind: Wind,
  wrench: Wrench,
  zap: Zap,
  alert: AlertTriangle,
  thermometer: Thermometer,
  settings: Settings,
  cpu: Cpu,
  plug: Plug,
  lightbulb: Lightbulb,
  home: Home,
  star: Star,
  check: CheckCircle,
  calendar: Calendar,
  gauge: Gauge,
  shield: ShieldCheck,
  hammer: Hammer,
  package: Package,
  fan: Fan,
  sun: Sun,
  snowflake: Snowflake,
  truck: Truck,
  globe: Globe,
  phone: Phone,
  chart: BarChart2,
};

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

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const colors = colorMap[service.color as keyof typeof colorMap];
  const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];

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
        {Icon && <Icon className={`w-6 h-6 ${colors.iconColor}`} />}
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

export default function Services({ services }: { services: ServiceItem[] }) {
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
