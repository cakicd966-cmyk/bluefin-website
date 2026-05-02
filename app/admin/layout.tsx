import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Bluefin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, background: "#030712", color: "#fff", fontFamily: "system-ui,sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
