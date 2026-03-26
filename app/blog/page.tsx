import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { posts } from "@/app/blog/posts-data";

export const metadata: Metadata = {
  title: "Fin Facts — Air Con & Electrical Tips | Illawarra",
  description:
    "Expert air-conditioning and electrical advice from Bluefin's Wollongong-based team. How-to guides, maintenance tips and energy-saving advice for Illawarra and Sydney homeowners.",
  keywords:
    "air conditioning tips Wollongong, electrician advice Illawarra, air con maintenance Wollongong, energy saving air con, electrical safety tips NSW",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Fin Facts — Air Con & Electrical Tips | Illawarra",
    description:
      "Expert advice from Bluefin's Wollongong-based team. Tips for Illawarra and Sydney homeowners.",
    url: "https://bluefinnairandelec.netlify.app/blog",
    images: [{ url: "/blog/aircon-service.jpg", width: 1200, height: 630, alt: "Fin Facts — Air Con & Electrical Tips from Bluefin" }],
  },
};


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,102,204,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,102,204,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-electric/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 text-electric text-xs font-outfit font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            <span>🐟</span> Bluefin Blog
          </span>
          <h1 className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Fin <span className="text-electric">Facts</span>
          </h1>
          <p className="font-rubik text-gray-500 text-lg max-w-xl mx-auto">
            Expert tips, how-to guides, and industry insights from the Bluefin team — straight from the tools.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-electric/30 transition-all duration-300 group flex flex-col"
              >
                {/* Hero image — 16:9 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className={`text-xs font-rubik font-semibold px-3 py-1 rounded-full ${post.categoryColor} mb-3 self-start`}>
                    {post.category}
                  </span>
                  <h2 className="font-outfit font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-electric transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-rubik text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="font-rubik text-gray-400 text-xs">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="font-rubik text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <span className="font-outfit font-semibold text-electric text-xs group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white border border-electric/20 rounded-2xl px-8 py-10 shadow-sm">
            <h3 className="font-outfit font-bold text-gray-900 text-2xl mb-2">Have a question not covered here?</h3>
            <p className="font-rubik text-gray-500 text-sm mb-6">
              Our team is happy to answer any air-con or electrical question — no obligation.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 btn-glow"
            >
              Ask Bluefin →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
