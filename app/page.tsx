import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Air Conditioning & Electrician Wollongong",
  description:
    "Wollongong's trusted air con & electrical specialists. Split systems, ducted AC, switchboard upgrades & 24/7 emergency callouts across Illawarra and Sydney. Call 0428 631 931.",
  keywords:
    "air conditioning Wollongong, electrician Wollongong, split system installation Wollongong, ducted air con Illawarra, emergency electrician Wollongong, switchboard upgrade Wollongong",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Air Conditioning & Electrician Wollongong | Bluefin",
    description:
      "Wollongong's trusted air con & electrical specialists. Split systems, ducted AC, switchboard upgrades & 24/7 emergency callouts. Call 0428 631 931.",
    url: "https://bluefinnairandelec.netlify.app",
    images: [{ url: "/blog/aircon-service.jpg", width: 1200, height: 630, alt: "Bluefin Air-Conditioning & Electrical — Wollongong & Illawarra" }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
