import type { Metadata } from "next";
import StoreClient from "./StoreClient";

export const metadata: Metadata = {
  title: "Fin Apparel | Official Air-Con & Electrical Merch",
  description:
    "Grab some Bluefin gear. Official merchandise from Wollongong's favourite air-conditioning and electrical team.",
  alternates: {
    canonical: "/store",
  },
  openGraph: {
    title: "Fin Apparel | Official Bluefin Merch",
    description: "Official merchandise from Wollongong's favourite air-con and electrical team.",
    url: "https://www.bluefinaircon.com.au/store",
    images: [{ url: "/blog/aircon-service.jpg", width: 1200, height: 630, alt: "Bluefin Air-Conditioning & Electrical Merch" }],
  },
};

export default function StorePage() {
  return <StoreClient />;
}
