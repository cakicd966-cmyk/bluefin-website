import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Air Con & Electrical Services | Wollongong & Illawarra",
  description:
    "Split system & ducted air conditioning installation, servicing and repairs. Licensed electrical work, switchboard upgrades and 24/7 emergency callouts across Wollongong, Illawarra and Sydney. Call 0428 631 931.",
  keywords:
    "air conditioning installation Wollongong, ducted air con Illawarra, split system installation Wollongong, electrician Wollongong, switchboard upgrade Illawarra, air con servicing Wollongong, emergency electrician Wollongong, electrical work Shellharbour",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Air Con & Electrical Services | Wollongong & Illawarra",
    description:
      "Split system & ducted installation, servicing, electrical work and 24/7 emergency callouts across Wollongong and Illawarra. Licensed & insured.",
    url: "https://www.bluefinaircon.com.au/services",
    images: [{ url: "/blog/aircon-service.jpg", width: 1200, height: 630, alt: "Air Con & Electrical Services — Wollongong & Illawarra" }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
