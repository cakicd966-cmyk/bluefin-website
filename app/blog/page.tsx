import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Con & Electrical Tips for Illawarra Homeowners | Fin Facts",
  description:
    "Expert air-conditioning and electrical advice from Bluefin's Wollongong-based team. How-to guides, maintenance tips and energy-saving advice for Illawarra and Sydney homeowners.",
  keywords:
    "air conditioning tips Wollongong, electrician advice Illawarra, air con maintenance Wollongong, energy saving air con, electrical safety tips NSW",
  openGraph: {
    title: "Air Con & Electrical Tips for Illawarra Homeowners | Fin Facts",
    description:
      "Expert advice from Bluefin's Wollongong-based team. Tips for Illawarra and Sydney homeowners.",
    url: "https://bluefinnairandelec.netlify.app/blog",
  },
};

const posts = [
  {
    slug: "5-signs-aircon-needs-servicing",
    category: "Air Conditioning",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "5 Signs Your Air Con Needs Servicing Right Now",
    excerpt:
      "Ignoring your air conditioner's warning signs can turn a cheap service call into an expensive repair. Learn the five telltale signs that your system needs professional attention before summer hits.",
    date: "March 18, 2026",
    readTime: "4 min read",
    icon: "❄️",
  },
  {
    slug: "ducted-vs-split-system",
    category: "Air Conditioning",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "Ducted vs Split System: Which Is Right for Your Home?",
    excerpt:
      "Choosing between a ducted and split system can be confusing. We break down the pros, cons, and costs of each option so you can make the smartest choice for your home and budget.",
    date: "March 10, 2026",
    readTime: "6 min read",
    icon: "🌡️",
  },
  {
    slug: "reduce-aircon-running-costs",
    category: "Energy Saving",
    categoryColor: "bg-green-50 text-green-700",
    title: "How to Cut Your Air Con Running Costs This Summer",
    excerpt:
      "Your air conditioner doesn't have to send your power bill through the roof. These practical tips from our techs can reduce your cooling costs by up to 30% — without sacrificing comfort.",
    date: "February 28, 2026",
    readTime: "5 min read",
    icon: "💰",
  },
  {
    slug: "electrical-warning-signs",
    category: "Electrical Safety",
    categoryColor: "bg-red-50 text-red-700",
    title: "Warning Signs of Electrical Problems You Shouldn't Ignore",
    excerpt:
      "Faulty wiring is one of the leading causes of house fires in Australia. Know the warning signs — flickering lights, tripping breakers, burning smells — and when to call a licensed electrician immediately.",
    date: "February 14, 2026",
    readTime: "5 min read",
    icon: "⚡",
  },
  {
    slug: "switchboard-upgrade-benefits",
    category: "Electrical",
    categoryColor: "bg-yellow-50 text-yellow-700",
    title: "Why You Should Upgrade Your Switchboard in 2026",
    excerpt:
      "Old switchboards with ceramic fuses aren't just outdated — they're a safety hazard. A modern switchboard upgrade protects your family, improves reliability, and can actually lower your insurance premiums.",
    date: "January 30, 2026",
    readTime: "4 min read",
    icon: "🔌",
  },
  {
    slug: "how-often-service-aircon",
    category: "Maintenance",
    categoryColor: "bg-purple-50 text-purple-700",
    title: "How Often Should You Service Your Air Conditioner?",
    excerpt:
      "Most manufacturers recommend an annual service, but the honest answer depends on how much you use it, where you live, and what type of system you have. Here's our complete guide.",
    date: "January 15, 2026",
    readTime: "3 min read",
    icon: "🔧",
  },
];

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
                {/* Icon header */}
                <div className="bg-gradient-to-br from-navy-deep to-gray-100 px-6 py-8 flex items-center justify-between">
                  <span className="text-4xl">{post.icon}</span>
                  <span className={`text-xs font-rubik font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
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
