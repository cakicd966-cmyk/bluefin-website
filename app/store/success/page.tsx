import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed | Fin Apparel — Bluefin",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />

      <section className="pt-40 pb-24 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="font-outfit font-black text-3xl text-gray-900 mb-3">Order Confirmed!</h1>
          <p className="font-rubik text-gray-500 text-base mb-8 leading-relaxed">
            Thanks for your purchase! Your Bluefin merch is on its way. You'll receive a confirmation email shortly with your order details.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 text-left shadow-sm">
            <h3 className="font-outfit font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">What's next?</h3>
            <ul className="space-y-2">
              {[
                "Check your email for an order confirmation",
                "Your order will be dispatched within 2–3 business days",
                "Delivery typically 3–7 business days Australia-wide",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-rubik text-gray-600 text-sm">
                  <span className="w-5 h-5 rounded-full bg-electric/10 text-electric text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/store"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold px-6 py-3 rounded-xl transition-all duration-200 btn-glow"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop More
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-gray-900 font-outfit font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
