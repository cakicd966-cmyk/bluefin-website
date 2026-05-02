"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap, LayoutDashboard, Images, Star, Settings, LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Gallery", href: "/admin/gallery", icon: Images },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminNav({ current }: { current: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <nav style={{
      background: "#0a0f1e",
      borderBottom: "1px solid #1e293b",
      padding: "0 1rem",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", height: "56px", gap: "1rem" }}>
        {/* Brand */}
        <Link href="/admin/dashboard" style={{ display: "flex", alignItems: "center", gap: ".5rem", textDecoration: "none", marginRight: "1rem", flexShrink: 0 }}>
          <div style={{ width: "1.75rem", height: "1.75rem", background: "#0066CC", borderRadius: ".4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={14} color="#fff" />
          </div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: ".85rem" }}>Bluefin Admin</span>
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", gap: ".25rem", flex: 1 }}>
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = current === label.toLowerCase();
            return (
              <Link
                key={href}
                href={href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".35rem",
                  padding: ".35rem .7rem",
                  borderRadius: ".5rem",
                  fontSize: ".8rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#fff" : "#9ca3af",
                  background: isActive ? "#1e293b" : "transparent",
                  textDecoration: "none",
                  transition: "all .15s",
                }}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".35rem",
            padding: ".35rem .7rem",
            borderRadius: ".5rem",
            fontSize: ".8rem",
            color: "#9ca3af",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <LogOut size={14} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
}
