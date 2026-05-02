"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import type { SiteSettings } from "@/lib/content";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
  { label: "Fin Facts", href: "/blog" },
  { label: "Fin Apparel", href: "/store" },
];

export default function Navbar({ settings }: { settings?: SiteSettings }) {
  const phone = settings?.phone || "{phone}";
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
          ? "bg-white shadow-lg shadow-gray-200/80 border-b border-electric/10"
          : "bg-white border-b border-gray-100"
      }`}
      style={{ minHeight: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-[120px] w-full overflow-hidden box-border">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer flex-shrink-0 mr-5">
            <Image
              src="/bluefin-header-logo-cropped.png"
              alt="Bluefin Air-Conditioning & Electrical"
              width={1300}
              height={547}
              style={{ height: 70, width: "auto", display: "block", background: "transparent", mixBlendMode: "normal" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center flex-1 justify-around" style={{ minWidth: 400 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-rubik font-medium transition-colors duration-200 relative group px-[15px] ${
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
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-bold font-outfit px-4 py-2.5 rounded-lg transition-all duration-200 btn-glow cursor-pointer text-sm"
            >
              <Phone className="w-4 h-4" />
              {phone}
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
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 bg-gold text-gray-900 font-bold font-outfit px-4 py-3 rounded-lg mt-3 w-full justify-center cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
