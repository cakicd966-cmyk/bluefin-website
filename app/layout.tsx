import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bluefin Air-Conditioning & Electrical | Wollongong & Sydney",
    template: "%s | Bluefin",
  },
  description:
    "Licensed air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Split systems, ducted air con, switchboard upgrades & emergency callouts. Call 0428 631 931.",
  keywords:
    "air conditioning Wollongong, electrician Wollongong, air con Illawarra, emergency electrician Wollongong, ducted air conditioning Wollongong, split system installation Illawarra, electrician Sydney, air con servicing Wollongong",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.bluefinaircon.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Bluefin Air-Conditioning & Electrical",
    images: [
      {
        url: "/blog/aircon-service.jpg",
        width: 1200,
        height: 630,
        alt: "Bluefin Air-Conditioning & Electrical — Wollongong & Illawarra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/blog/aircon-service.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  verification: {
    google: "HXqS-FY2vnX2ft7YRyIZf9Ce8s-uBihYSRCuyasn2C0",
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
    "@id": "https://www.bluefinaircon.com.au",
    "name": "Bluefin Air-Conditioning & Electrical",
    "image": "https://www.bluefinaircon.com.au/bluefin-logo.png",
    "description": "Licensed air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Split systems, ducted air con, switchboard upgrades and 24/7 emergency callouts.",
    "url": "https://www.bluefinaircon.com.au",
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
        <meta name="google-site-verification" content="HXqS-FY2vnX2ft7YRyIZf9Ce8s-uBihYSRCuyasn2C0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H64J9WE1D5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-H64J9WE1D5');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
