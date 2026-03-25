"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
  { label: "Fin Facts", href: "/blog" },
  { label: "Fin Apparel", href: "/store" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/80 border-b border-electric/10"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-electric flex items-center justify-center shadow-lg group-hover:shadow-electric/40 transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gold border-2 border-white animate-pulse-slow" />
            </div>
            <div className="leading-tight">
              <span className="block text-gray-900 font-bold text-sm font-outfit tracking-wide">
                BLUEFIN
              </span>
              <span className="block text-gold-dark text-[10px] font-outfit font-semibold tracking-widest uppercase">
                Air-Con & Electrical
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-rubik font-medium transition-colors duration-200 relative group ${
                  link.label === "Fin Apparel"
                    ? "text-electric font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0428631931"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-bold font-outfit px-4 py-2.5 rounded-lg transition-all duration-200 btn-glow cursor-pointer text-sm"
            >
              <Phone className="w-4 h-4" />
              0428 631 931
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-electric transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg font-rubik text-sm transition-colors cursor-pointer ${
                    link.label === "Fin Apparel"
                      ? "text-electric font-semibold hover:bg-electric/5"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0428631931"
                className="flex items-center gap-2 bg-gold text-gray-900 font-bold font-outfit px-4 py-3 rounded-lg mt-3 w-full justify-center cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                0428 631 931
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
