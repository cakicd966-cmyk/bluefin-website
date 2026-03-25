import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Our Work | Air Con & Electrical Installations Wollongong",
  description:
    "See Bluefin's completed air-conditioning and electrical jobs across Wollongong, Illawarra and Sydney. Split systems, ducted units, switchboards and more. Locally owned and operated.",
  keywords:
    "air conditioning installation photos Wollongong, electrician work gallery Illawarra, split system installation Wollongong, ducted air con photos NSW",
  openGraph: {
    title: "Our Work | Air Con & Electrical Installations Wollongong",
    description:
      "Completed air-conditioning and electrical jobs across Wollongong, Illawarra and Sydney by Bluefin.",
    url: "https://bluefinnairandelec.netlify.app/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
