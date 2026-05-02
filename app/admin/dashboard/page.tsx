import { getGallery, getTestimonials, getSettings } from "@/lib/content";
import AdminNav from "@/components/admin/AdminNav";
import DashboardCards from "@/components/admin/DashboardCards";
import { ExternalLink } from "lucide-react";

export default function AdminDashboard() {
  const gallery = getGallery();
  const testimonials = getTestimonials();
  const settings = getSettings();

  const cards = [
    {
      iconName: "Images" as const,
      label: "Gallery",
      description: "Upload photos and manage job listings",
      stat: `${gallery.filter((g) => g.image).length} / ${gallery.length} photos uploaded`,
      href: "/admin/gallery",
      color: "#0066CC",
    },
    {
      iconName: "Star" as const,
      label: "Testimonials",
      description: "Add and edit customer reviews",
      stat: `${testimonials.length} review${testimonials.length !== 1 ? "s" : ""}`,
      href: "/admin/testimonials",
      color: "#FFD700",
    },
    {
      iconName: "Settings" as const,
      label: "Site Settings",
      description: "Phone number, hours, service area, hero text",
      stat: `Phone: ${settings.phone}`,
      href: "/admin/settings",
      color: "#10b981",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#030712" }}>
      <AdminNav current="dashboard" />

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontWeight: 800, fontSize: "1.75rem", color: "#fff", marginBottom: ".35rem" }}>
            Dashboard
          </h1>
          <p style={{ color: "#9ca3af", fontSize: ".9rem" }}>
            Manage your website content. Changes take effect immediately.
          </p>
        </div>

        <DashboardCards cards={cards} />

        {/* Quick links */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.25rem" }}>
          <p style={{ color: "#9ca3af", fontSize: ".8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: ".75rem" }}>
            Quick Links
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
            {[
              { label: "View Website", href: "/", external: true },
              { label: "Gallery Page", href: "/gallery", external: true },
              { label: "Services Page", href: "/services", external: true },
              { label: "Contact Section", href: "/#contact", external: true },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".3rem",
                  background: "#1e293b",
                  color: "#94a3b8",
                  padding: ".4rem .9rem",
                  borderRadius: ".5rem",
                  fontSize: ".8rem",
                  textDecoration: "none",
                }}
              >
                {link.label}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
