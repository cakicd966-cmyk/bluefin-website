"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "tee",
    name: "Bluefin Classic Tee",
    price: 3500,
    displayPrice: "$35.00",
    description: "Premium cotton tee with the Bluefin logo. Comfortable, durable, and conversation-starting.",
    icon: "👕",
    bgColor: "from-blue-50 to-blue-100",
    badge: "Best Seller",
    badgeColor: "bg-electric text-white",
  },
  {
    id: "hoodie",
    name: "Bluefin Hoodie",
    price: 6500,
    displayPrice: "$65.00",
    description: "Heavyweight fleece hoodie perfect for those chilly early morning callouts. Bluefin logo on chest.",
    icon: "🧥",
    bgColor: "from-gray-50 to-gray-100",
    badge: null,
    badgeColor: "",
  },
  {
    id: "cap",
    name: "Bluefin Snapback Cap",
    price: 3000,
    displayPrice: "$30.00",
    description: "Structured snapback cap with embroidered Bluefin logo. One size fits all.",
    icon: "🧢",
    bgColor: "from-blue-50 to-indigo-100",
    badge: null,
    badgeColor: "",
  },
  {
    id: "workshirt",
    name: "Bluefin Work Shirt",
    price: 5500,
    displayPrice: "$55.00",
    description: "Hard-wearing work shirt with Bluefin branding. Looks professional on any job site.",
    icon: "🦺",
    bgColor: "from-yellow-50 to-yellow-100",
    badge: "New",
    badgeColor: "bg-gold text-gray-900",
  },
  {
    id: "mug",
    name: "Bluefin Ceramic Mug",
    price: 2200,
    displayPrice: "$22.00",
    description: "Start every morning right. Large 400ml ceramic mug with Bluefin branding. Dishwasher safe.",
    icon: "☕",
    bgColor: "from-amber-50 to-orange-100",
    badge: null,
    badgeColor: "",
  },
  {
    id: "stickers",
    name: "Bluefin Sticker Pack",
    price: 1200,
    displayPrice: "$12.00",
    description: "Pack of 5 premium vinyl stickers. Waterproof, UV-resistant, and stuck-for-good.",
    icon: "🏷️",
    bgColor: "from-green-50 to-emerald-100",
    badge: "Great Gift",
    badgeColor: "bg-green-600 text-white",
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: product.name,
          priceInCents: product.price,
          quantity: 1,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout unavailable — please contact us on 0428 631 931.");
      }
    } catch {
      alert("Checkout unavailable — please contact us on 0428 631 931.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-electric/30 transition-all duration-300 group flex flex-col"
    >
      {/* Product image area */}
      <div className={`relative bg-gradient-to-br ${product.bgColor} px-6 py-10 flex items-center justify-center`}>
        <span className="text-6xl">{product.icon}</span>
        {product.badge && (
          <span className={`absolute top-3 right-3 text-xs font-outfit font-bold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-outfit font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
        <p className="font-rubik text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-outfit font-black text-2xl text-gray-900">{product.displayPrice}</span>
          <span className="font-rubik text-gray-400 text-xs">AUD incl. GST</span>
        </div>

        <button
          onClick={handleBuy}
          disabled={loading}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-electric hover:bg-electric-dark text-white font-outfit font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 electric-glow cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Redirecting...
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function StorePage() {
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-gold/15 border border-yellow-200 text-yellow-700 text-xs font-outfit font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            <ShoppingCart className="w-3.5 h-3.5" /> Official Merch
          </span>
          <h1 className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Fin <span className="text-gold">Apparel</span>
          </h1>
          <p className="font-rubik text-gray-500 text-lg max-w-xl mx-auto">
            Rep the Bluefin brand. Premium gear for tradies, supporters, and anyone who appreciates quality.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { icon: Truck, text: "Free AU Shipping over $75" },
              { icon: Shield, text: "Secure Stripe Payments" },
              { icon: RotateCcw, text: "30-Day Returns" },
              { icon: Star, text: "5-Star Products" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-500 text-sm font-rubik">
                <Icon className="w-4 h-4 text-electric shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Stripe badge */}
          <div className="mt-12 text-center">
            <p className="font-rubik text-gray-400 text-sm">
              Payments processed securely by{" "}
              <span className="font-semibold text-gray-600">Stripe</span>.
              Your card details are never stored on our servers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
