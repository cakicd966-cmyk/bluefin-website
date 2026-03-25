import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bluefin Air-Conditioning & Electrical | Wollongong & Sydney",
    template: "%s | Bluefin Air-Con & Electrical",
  },
  description:
    "Licensed air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Split systems, ducted air con, switchboard upgrades & emergency callouts. Call 0428 631 931.",
  keywords:
    "air conditioning Wollongong, electrician Wollongong, air con Illawarra, emergency electrician Wollongong, ducted air conditioning Wollongong, split system installation Illawarra, electrician Sydney, air con servicing Wollongong",
  metadataBase: new URL("https://bluefinnairandelec.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Bluefin Air-Conditioning & Electrical",
  },
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
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bluefinnairandelec.netlify.app",
    "name": "Bluefin Air-Conditioning & Electrical",
    "image": "https://bluefinnairandelec.netlify.app/favicon.svg",
    "description": "Licensed air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Split systems, ducted air con, switchboard upgrades and 24/7 emergency callouts.",
    "url": "https://bluefinnairandelec.netlify.app",
    "telephone": "+61428631931",
    "email": "info@bluefinairandelec.com.au",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wollongong",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.4248,
      "longitude": 150.8931
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Wollongong" },
      { "@type": "AdministrativeArea", "name": "Illawarra" },
      { "@type": "City", "name": "Shellharbour" },
      { "@type": "City", "name": "Kiama" },
      { "@type": "City", "name": "Sydney" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Air Conditioning & Electrical Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Conditioning Installation Wollongong" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Con Servicing & Repairs Illawarra" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Work Wollongong" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Electrician Wollongong" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Switchboard Upgrades Wollongong" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    },
    "sameAs": []
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
