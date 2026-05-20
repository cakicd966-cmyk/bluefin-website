import type { Metadata } from "next";
import { getGallery } from "@/lib/content";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Our Work | Air Con & Electrical Installations Wollongong",
  description:
    "Photos of completed air con and electrical jobs by Bluefin across Wollongong, Illawarra and Sydney. Split systems, ducted units, switchboards and more.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Our Work | Air Con & Electrical Installations Wollongong",
    description:
      "Completed air-conditioning and electrical jobs across Wollongong, Illawarra and Sydney by Bluefin.",
    url: "https://www.bluefinairandelc.com.au/gallery",
    images: [{ url: "/blog/aircon-service.jpg", width: 1200, height: 630, alt: "Bluefin Air-Conditioning & Electrical — completed jobs Wollongong" }],
  },
};

export const revalidate = 0;

export default function GalleryPage() {
  const galleryItems = getGallery();
  return <GalleryClient items={galleryItems} />;
}
