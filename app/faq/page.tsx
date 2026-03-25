import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Air Con & Electrical FAQs | Wollongong & Illawarra",
  description:
    "Answers to your air-conditioning and electrical questions. Pricing, installation, servicing and emergency callouts for Wollongong, Illawarra and Sydney. Call Bluefin on 0428 631 931.",
  keywords:
    "air conditioning FAQ Wollongong, electrician FAQ Illawarra, air con installation cost Wollongong, switchboard upgrade cost NSW, emergency electrician Illawarra",
  openGraph: {
    title: "Air Con & Electrical FAQs | Bluefin Wollongong",
    description:
      "Common questions about air conditioning and electrical services in Wollongong and the Illawarra region.",
    url: "https://bluefinnairandelec.netlify.app/faq",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
