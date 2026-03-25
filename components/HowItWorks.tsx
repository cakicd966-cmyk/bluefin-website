"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call Us",
    description:
      "Give us a ring on 0428 631 931 or fill in the contact form. Tell us what you need and where you are — we'll listen and ask the right questions.",
  },
  {
    number: "02",
    icon: FileText,
    title: "We Quote",
    description:
      "We'll provide a clear, upfront quote with no hidden costs. For most jobs we can quote over the phone or via a quick site visit.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Job Done",
    description:
      "Our licensed technicians arrive on time, complete the work to the highest standard, and clean up before they leave. Simple as that.",
  },
];

export default function HowItWorks() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-electric/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-electric text-xs font-outfit font-semibold uppercase tracking-widest mb-4">
            Simple Process
          </span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="font-rubik text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Getting the job done shouldn't be complicated. Here's exactly what to expect when you work with Bluefin.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px">
            <div className="h-full bg-gradient-to-r from-electric/30 via-gold/30 to-electric/30" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-electric/25 group-hover:border-electric/60 flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-electric/20">
                    <Icon className="w-9 h-9 text-electric" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold text-gray-900 font-outfit font-black text-xs flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-outfit font-bold text-gray-900 text-xl mb-3">
                  {step.title}
                </h3>
                <p className="font-rubik text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-electric/20 rounded-2xl px-8 py-6 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="font-outfit font-bold text-gray-900 text-lg">Ready to get started?</p>
              <p className="font-rubik text-gray-500 text-sm">Call now for a free, no-obligation quote.</p>
            </div>
            <a
              href="tel:0428631931"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 btn-glow cursor-pointer whitespace-nowrap text-sm shrink-0"
            >
              <Phone className="w-4 h-4" />
              0428 631 931
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
