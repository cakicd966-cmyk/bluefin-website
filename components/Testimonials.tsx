"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Penrith, NSW",
    rating: 5,
    text: "Bluefin installed a new ducted system in our home and the whole process was seamless. They arrived on time, the install was super clean, and the team were friendly and professional. Highly recommend to anyone in the area!",
    service: "Ducted A/C Installation",
    initials: "SM",
  },
  {
    name: "Jason R.",
    location: "Parramatta, NSW",
    rating: 5,
    text: "Called them on a Friday afternoon when my split system stopped working in 38-degree heat. They were at my house within a couple of hours and had it fixed before dinner. Brilliant service, fair price. Will definitely use again.",
    service: "Emergency A/C Repair",
    initials: "JR",
  },
  {
    name: "The Hendersons",
    location: "Blacktown, NSW",
    rating: 5,
    text: "We had them do a full switchboard upgrade and install new power points throughout the house. The work was neat, tidy, and passed inspection first go. Very knowledgeable team who explained everything clearly. Top tradies.",
    service: "Electrical & Switchboard",
    initials: "TH",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-navy-deep relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-electric/5 blur-3xl" />
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
            Customer Reviews
          </span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            What Our Customers <span className="text-electric">Say</span>
          </h2>
          <p className="font-rubik text-gray-500 text-base max-w-lg mx-auto">
            Don't take our word for it — here's what local NSW homeowners and businesses have to say about Bluefin.
          </p>

          {/* Overall rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-full px-5 py-2.5 mt-6"
          >
            <StarRating count={5} />
            <span className="font-outfit font-bold text-yellow-700 text-sm">5.0 Average Rating</span>
            <span className="text-gray-400 text-xs font-rubik">· Google Reviews</span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative bg-white border border-gray-200 hover:border-electric/25 rounded-2xl p-6 card-hover cursor-default group flex flex-col shadow-sm hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-electric/20 mb-4 shrink-0" />

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="font-rubik text-gray-600 text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center shrink-0">
                    <span className="font-outfit font-bold text-electric text-xs">{t.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-outfit font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="font-rubik text-gray-400 text-xs truncate">{t.location}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] font-rubik text-yellow-700 bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {t.service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
