"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Zap } from "lucide-react";

const footerLinks = {
  Services: [
    "Air Con Installation",
    "Air Con Servicing",
    "Electrical Work",
    "Emergency Callouts",
  ],
  Company: ["About Us", "Service Areas", "Contact", "Get a Quote"],
  More: ["Fin Facts Blog", "Fin Apparel Store"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Top CTA strip */}
      <div className="bg-electric/10 border-b border-electric/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-center sm:text-left">
              <p className="font-outfit font-bold text-white text-base">
                Ready for a free quote?
              </p>
              <p className="font-rubik text-white/60 text-sm">
                Call us or fill in the form — we respond fast.
              </p>
            </div>
            <a
              href="tel:0428631931"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 btn-glow cursor-pointer text-sm shrink-0"
            >
              <Phone className="w-4 h-4" />
              0428 631 931
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-electric flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm font-outfit tracking-wide">BLUEFIN</span>
                <span className="block text-gold text-[10px] font-outfit font-semibold tracking-widest uppercase">Air-Con & Electrical</span>
              </div>
            </div>

            <p className="font-rubik text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              Your trusted local air-conditioning and electrical specialists in NSW. Licensed, insured, and committed to quality work on every job.
            </p>

            {/* Service area */}
            <p className="font-rubik text-white/30 text-xs">
              Servicing Greater Sydney, Western Suburbs, Blue Mountains & surrounding NSW regions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-outfit font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Fin Facts Blog"
                          ? "/blog"
                          : link === "Fin Apparel Store"
                          ? "/store"
                          : "#"
                      }
                      className="font-rubik text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-rubik text-white/35 text-xs text-center md:text-left">
              © {year} Bluefin Air-Conditioning & Electrical. All rights reserved.
            </p>

            {/* License numbers */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                <span className="font-rubik text-white/35 text-xs">
                  Contractor Lic: <span className="text-white/55 font-medium">982390C</span>
                </span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-white/15" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                <span className="font-rubik text-white/35 text-xs">
                  Electrical Lic: <span className="text-white/55 font-medium">L191263</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
