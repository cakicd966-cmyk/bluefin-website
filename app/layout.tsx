import type { Metadata } from "next";
import "./globals.css";
import { getSettings } from "@/lib/content";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import MobileCallBar from "@/components/MobileCallBar";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "Bluefin Air-Conditioning & Electrical | Wollongong & Sydney",
    template: "%s | Bluefin",
  },
  description:
    "Licensed air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Split systems, ducted air con, switchboard upgrades & emergency callouts. Call 0428 631 931.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE_URL),
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
  const settings = getSettings();
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "Electrician"],
    "@id": SITE_URL,
    "name": "Bluefin Air-Conditioning & Electrical",
    "image": `${SITE_URL}/bluefin-logo.png`,
    "description": "Licensed air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Split systems, ducted air con, switchboard upgrades and 24/7 emergency callouts.",
    "url": SITE_URL,
    "telephone": "+61428631931",
    "email": "info@bluefinairandelec.com.au",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coalcliff",
      "addressRegion": "NSW",
      "postalCode": "2508",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.2543,
      "longitude": 150.9489
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Air Conditioning Contractor Licence",
        "credentialCategory": "licence",
        "identifier": "982390C"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Electrical Contractor Licence",
        "credentialCategory": "licence",
        "identifier": "L191263"
      }
    ],
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
      <body>
        <AnnouncementBanner banner={settings.announcementBanner} />
        {children}
        <MobileCallBar phone={settings.phone} />
      </body>
    </html>
  );
}
