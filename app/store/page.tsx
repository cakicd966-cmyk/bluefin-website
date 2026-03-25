import type { Metadata } from "next";
import StoreClient from "./StoreClient";

export const metadata: Metadata = {
  title: "Fin Apparel | Bluefin Air-Con & Electrical Merch",
  description:
    "Grab some Bluefin gear. Official merchandise from Wollongong's favourite air-conditioning and electrical team.",
  openGraph: {
    title: "Fin Apparel | Bluefin Merch",
    description: "Official merchandise from Wollongong's favourite air-con and electrical team.",
    url: "https://bluefinnairandelec.netlify.app/store",
  },
};

export default function StorePage() {
  return <StoreClient />;
}
