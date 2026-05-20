import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Bluefin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#030712", color: "#fff", fontFamily: "system-ui,sans-serif" }}>
      {children}
    </div>
  );
}
