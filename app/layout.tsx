import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bluefin Air-Conditioning & Electrical | NSW Local Tradies",
  description:
    "Licensed & insured air-conditioning and electrical specialists in NSW. Air con installation, servicing, repairs and electrical work. Call 0428 631 931 for a free quote.",
  keywords:
    "air conditioning NSW, electrician NSW, air con installation, aircon servicing, electrical work, emergency callout, local tradies",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
