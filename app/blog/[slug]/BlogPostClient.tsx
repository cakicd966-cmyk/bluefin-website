"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost, ContentBlock } from "@/app/blog/posts-data";

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="font-rubik text-gray-600 text-base leading-relaxed">
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2 key={index} className="font-outfit font-black text-2xl sm:text-3xl text-gray-900 mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 key={index} className="font-outfit font-bold text-xl text-gray-900 mt-6 mb-3">
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul key={index} className="space-y-2 my-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-rubik text-gray-600 text-base">
              <span className="mt-2 w-2 h-2 rounded-full bg-electric shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol key={index} className="space-y-2 my-4 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-rubik text-gray-600 text-base">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-electric/10 text-electric font-outfit font-bold text-xs flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const calloutStyles = {
        blue: "bg-electric/8 border-electric/25 text-electric",
        gold: "bg-yellow-50 border-yellow-200 text-yellow-800",
        red: "bg-red-50 border-red-200 text-red-800",
        green: "bg-green-50 border-green-200 text-green-800",
      };
      const iconStyles = {
        blue: "💡",
        gold: "⭐",
        red: "⚠️",
        green: "✅",
      };
      return (
        <div
          key={index}
          className={`border rounded-xl px-5 py-4 my-6 flex items-start gap-3 ${calloutStyles[block.colour]}`}
        >
          <span className="text-lg shrink-0 mt-0.5">{iconStyles[block.colour]}</span>
          <p className="font-rubik text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    }

    case "table":
      return (
        <div key={index} className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-electric text-white">
                {block.headers.map((h, i) => (
                  <th key={i} className="font-outfit font-semibold px-4 py-3 text-left whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`font-rubik px-4 py-3 text-gray-600 ${ci === 0 ? "font-semibold text-gray-900" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostClient({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ── Hero image ── */}
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] mt-16 md:mt-20 overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
        {/* Category badge over image */}
        <div className="absolute bottom-6 left-6">
          <span className={`text-xs font-rubik font-semibold px-3 py-1.5 rounded-full ${post.categoryColor}`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* ── Article ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Back link */}
        <motion.a
          href="/blog"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 text-electric font-rubik text-sm font-medium hover:gap-3 transition-all duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fin Facts
        </motion.a>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200 mb-8"
        >
          <div className="flex items-center gap-1.5 font-rubik text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1.5 font-rubik text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
          <span className="font-rubik text-gray-400 text-sm">By {post.author}</span>
        </motion.div>

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5"
        >
          {post.content.map((block, i) => renderBlock(block, i))}
        </motion.div>

        {/* CTA box */}
        <div className="mt-14 bg-electric/8 border border-electric/20 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-outfit font-bold text-gray-900 text-xl mb-1">
              Need help in Wollongong or Illawarra?
            </h3>
            <p className="font-rubik text-gray-500 text-sm">
              Bluefin&apos;s licensed technicians are ready. Call for a free quote — we respond fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:0428631931"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              0428 631 931
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 border border-electric/30 text-electric hover:bg-electric/5 font-outfit font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-outfit font-bold text-gray-900 text-2xl mb-6">
              More from Fin Facts
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((rp) => (
                <a
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white border border-gray-200 hover:border-electric/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className={`text-xs font-rubik font-semibold px-2.5 py-1 rounded-full ${rp.categoryColor} mb-3 inline-block`}>
                    {rp.category}
                  </span>
                  <h3 className="font-outfit font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-electric transition-colors duration-200">
                    {rp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-rubik">
                    <span>{rp.date}</span>
                    <span>·</span>
                    <span>{rp.readTime}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
