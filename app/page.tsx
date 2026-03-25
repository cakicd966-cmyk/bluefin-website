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
  title: "Air Conditioning & Electrician Wollongong | Bluefin",
  description:
    "Wollongong's trusted air-conditioning and electrical specialists. Split system & ducted installation, servicing, switchboard upgrades and 24/7 emergency callouts across Illawarra and Sydney. Call 0428 631 931.",
  keywords:
    "air conditioning Wollongong, electrician Wollongong, split system installation Wollongong, ducted air con Illawarra, emergency electrician Wollongong, switchboard upgrade Wollongong",
  openGraph: {
    title: "Air Conditioning & Electrician Wollongong | Bluefin",
    description:
      "Wollongong's trusted air-conditioning and electrical specialists. Serving Illawarra and Sydney. Call 0428 631 931.",
    url: "https://bluefinnairandelec.netlify.app",
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
