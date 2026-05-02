"use client";

import { motion } from "framer-motion";
import { Wind, Wrench, Zap, AlertTriangle, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "air-con-installation",
    icon: Wind,
    color: "electric",
    label: "Air Conditioning",
    title: "Air Conditioning Installation",
    subtitle: "Supply & install across Wollongong, Illawarra & Sydney",
    description:
      "Whether you need a single split system for a bedroom or a full ducted solution for your whole home or business, Bluefin handles it all. We supply and install all major brands and tailor every job to your space, budget, and energy goals.",
    features: [
      "Split system installation (all room sizes)",
      "Ducted air conditioning systems",
      "Multi-head / multi-split systems",
      "Commercial installations",
      "All major brands — Daikin, Fujitsu, Mitsubishi, LG, Samsung",
      "New builds and existing homes",
      "Ceiling cassette systems",
      "Energy-efficient inverter systems",
    ],
    areas: "Wollongong, Shellharbour, Kiama, Dapto, Illawarra, Sydney",
    cta: "Get an installation quote",
    accentBg: "bg-electric/8",
    accentBorder: "border-electric/20",
    accentText: "text-electric",
    iconBg: "bg-electric/10",
    tagBg: "bg-electric/10 text-electric",
    badgeBg: "bg-electric",
  },
  {
    id: "air-con-servicing",
    icon: Wrench,
    color: "gold",
    label: "Servicing & Repairs",
    title: "Air Con Servicing & Repairs",
    subtitle: "Keep your system running at peak efficiency year-round",
    description:
      "Regular servicing extends the life of your unit, improves efficiency, and keeps your air quality clean. Our techs carry common parts on the van so most repairs are done in a single visit. We service all brands and all ages of equipment.",
    features: [
      "Annual service & safety check",
      "Filter cleaning and replacement",
      "Gas recharge (refrigerant top-up)",
      "Fault diagnosis and error code reading",
      "Coil cleaning (indoor and outdoor unit)",
      "Drainage check and clear",
      "Thermostat and control board testing",
      "Post-repair test run and report",
    ],
    areas: "Wollongong, Illawarra, Shellharbour, Kiama, Sydney",
    cta: "Book a service",
    accentBg: "bg-yellow-50",
    accentBorder: "border-yellow-200",
    accentText: "text-yellow-700",
    iconBg: "bg-yellow-50",
    tagBg: "bg-yellow-100 text-yellow-700",
    badgeBg: "bg-gold",
  },
  {
    id: "electrical",
    icon: Zap,
    color: "electric",
    label: "Electrical",
    title: "Electrical Work",
    subtitle: "Licensed electricians for homes and businesses",
    description:
      "Our fully licensed electricians handle everything from a single power point to a full switchboard upgrade. All work is completed to Australian standards (AS/NZS 3000), with a Certificate of Compliance issued on every job.",
    features: [
      "Switchboard upgrades (ceramic to circuit breaker)",
      "RCD / safety switch installation",
      "Power point installation and relocation",
      "Lighting installation and LED upgrades",
      "Ceiling fan installation",
      "Smoke alarm installation and testing",
      "Electrical safety inspections",
      "Residential and commercial fit-outs",
    ],
    areas: "Wollongong, Illawarra, Shellharbour, Kiama, Dapto, Sydney",
    cta: "Get an electrical quote",
    accentBg: "bg-electric/8",
    accentBorder: "border-electric/20",
    accentText: "text-electric",
    iconBg: "bg-electric/10",
    tagBg: "bg-electric/10 text-electric",
    badgeBg: "bg-electric",
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    color: "emergency",
    label: "Emergency",
    title: "Emergency Callouts",
    subtitle: "24/7 emergency response across Illawarra & Sydney",
    description:
      "Electrical faults and air con failures don't wait for business hours. Bluefin offers 24/7 emergency callouts for urgent electrical faults, total system breakdowns, and any situation where waiting isn't an option.",
    features: [
      "24/7 availability — including weekends and public holidays",
      "Fast response to Wollongong & Illawarra",
      "Emergency electrical fault diagnosis",
      "Total air con system breakdown repair",
      "Tripped circuit breaker and blown fuse response",
      "No power / partial power situations",
      "Storm damage and emergency safety isolation",
      "Commercial emergency response",
    ],
    areas: "Wollongong, Illawarra & Sydney — 24/7",
    cta: "Call now for emergencies",
    accentBg: "bg-red-50",
    accentBorder: "border-red-200",
    accentText: "text-red-700",
    iconBg: "bg-red-50",
    tagBg: "bg-red-100 text-red-700",
    badgeBg: "bg-emergency",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-white to-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-electric text-xs font-outfit font-semibold uppercase tracking-widest mb-4"
          >
            Wollongong & Illawarra
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-5 leading-tight"
          >
            Air Con & Electrical{" "}
            <span className="text-electric">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-rubik text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Licensed and insured specialists serving Wollongong, Illawarra and Sydney.
            Fixed pricing, same-day response, and quality guaranteed on every job.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:0428631931"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 btn-glow text-sm"
            >
              <Phone className="w-4 h-4" />
              Call 0428 631 931
            </a>
            <a
              href="/#contact"
              className="flex items-center gap-2 border border-electric/30 text-electric hover:bg-electric/5 font-outfit font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-rubik font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 shrink-0"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isReversed = index % 2 !== 0;
          return (
            <motion.section
              key={service.id}
              id={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className={`scroll-mt-36 rounded-3xl border ${service.accentBorder} ${service.accentBg} p-8 md:p-12`}
            >
              <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-start`}>

                {/* Text side */}
                <div className="flex-1 min-w-0">
                  {/* Label */}
                  <span className={`inline-block text-xs font-outfit font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${service.tagBg}`}>
                    {service.label}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${service.accentText}`} />
                    </div>
                    <h2 className="font-outfit font-black text-2xl sm:text-3xl text-gray-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className={`font-rubik text-sm font-medium mb-4 ${service.accentText}`}>
                    {service.subtitle}
                  </p>

                  <p className="font-rubik text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service areas */}
                  <p className="font-rubik text-gray-400 text-sm mb-6">
                    <span className="font-semibold text-gray-500">Service areas: </span>
                    {service.areas}
                  </p>

                  {/* CTA */}
                  {service.id === "emergency" ? (
                    <a
                      href="tel:0428631931"
                      className="inline-flex items-center gap-2 bg-emergency hover:bg-red-700 text-white font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {service.cta}
                    </a>
                  ) : (
                    <a
                      href="/#contact"
                      className={`inline-flex items-center gap-2 ${service.badgeBg} hover:opacity-90 ${service.id === "air-con-servicing" ? "text-gray-900" : "text-white"} font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm`}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Features side */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-outfit font-bold text-gray-900 text-base mb-5">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${service.accentText}`} />
                          <span className="font-rubik text-gray-600 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.section>
          );
        })}
      </div>

      {/* ── Why Bluefin strip ── */}
      <section className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-outfit font-black text-2xl sm:text-3xl text-gray-900">
              Why Illawarra chooses <span className="text-electric">Bluefin</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed & Insured", body: "Contractor Lic 982390C · Electrical Lic L191263. Full public liability on every job." },
              { title: "Fixed Pricing", body: "You get a clear quote before we start. No surprise bills, no hourly rates." },
              { title: "Same-Day Response", body: "Most Wollongong and Illawarra jobs booked and attended same or next day." },
              { title: "Quality Guaranteed", body: "We stand behind every installation and repair. If it's not right, we fix it." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="font-outfit font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="font-rubik text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-outfit font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="font-rubik text-gray-500 text-base mb-8">
              Call us for a free quote or fill in the form and we&apos;ll get back to you within 2 business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0428631931"
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-8 py-3.5 rounded-xl transition-all duration-200 btn-glow text-sm"
              >
                <Phone className="w-4 h-4" />
                Call 0428 631 931
              </a>
              <a
                href="/#contact"
                className="flex items-center gap-2 border border-electric/30 text-electric hover:bg-electric/5 font-outfit font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                Free Quote Form
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
