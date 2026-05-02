import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Air Con & Electrical FAQs | Wollongong",
  description:
    "Answers to your air-conditioning and electrical questions. Pricing, installation, servicing and emergency callouts for Wollongong, Illawarra and Sydney. Call Bluefin on 0428 631 931.",
  keywords:
    "air conditioning FAQ Wollongong, electrician FAQ Illawarra, air con installation cost Wollongong, switchboard upgrade cost NSW, emergency electrician Illawarra",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Air Con & Electrical FAQs | Wollongong",
    description:
      "Common questions about air conditioning and electrical services in Wollongong and the Illawarra region.",
    url: "https://www.bluefinaircon.com.au/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does air conditioning installation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Split system supply and install from $1,200–$2,500+ depending on kW rating and brand. Multi-head systems from $3,500+ for a 3-zone setup. Ducted systems from $6,000–$15,000+ depending on home size. Contact Bluefin for a free fixed-price quote.",
      },
    },
    {
      "@type": "Question",
      name: "What air conditioning brands do you stock and install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install all major air conditioning brands including Mitsubishi Electric, Daikin, Fujitsu, LG, Samsung, Panasonic, Carrier and Actron Air. We'll recommend the best brand and model for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you service my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate across Wollongong, Illawarra, Shellharbour, Kiama, Dapto and Greater Sydney. Call us on 0428 631 931 to confirm we cover your area.",
      },
    },
    {
      "@type": "Question",
      name: "What size air conditioner do I need for my room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rough guide: up to 20m² needs 2.5kW, 20–35m² needs 3.5kW, 35–60m² needs 6–7kW, and 60–80m²+ needs 8–9kW+. We always assess your space before recommending a unit to ensure correct sizing.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I service my air conditioner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend servicing your air conditioner at least once a year, ideally before summer. Regular servicing extends the life of your unit, keeps it running efficiently, and catches small issues before they become expensive repairs. Service visits start from around $150–$250 for a standard split system.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a switchboard upgrade cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single-phase upgrade for a standard home costs $1,500–$2,500. Three-phase upgrade costs $2,500–$4,000+. Adding safety switches/RCDs from $300. We provide free quotes and can usually diagnose issues on the first visit.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — fully licensed and insured. Contractor Licence: 982390C (air conditioning & refrigeration). Electrical Contractor Licence: L191263 (A-grade electricians). We carry full public liability insurance on every job.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency or after-hours call-outs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer 24/7 emergency callouts for urgent electrical faults and air con failures. Call us immediately on 0428 631 931. Emergency call-out rates apply outside normal business hours and will always be communicated upfront.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do my own electrical work in NSW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All electrical work beyond very minor tasks must be carried out by a licensed electrician in NSW. This is a legal requirement under Australian law. Unlicensed electrical work can void your home insurance and cause fires or electrocution.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide written quotes before starting work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always. We provide clear, written quotes before any work begins, including itemised labour and material costs, scope of work, and any conditions. We never start work without your approval and the agreed price won't change.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
