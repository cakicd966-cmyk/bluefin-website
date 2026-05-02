"use client";

import Link from "next/link";
import { Images, Star, Settings } from "lucide-react";

const ICON_MAP = { Images, Star, Settings };

interface Card {
  iconName: keyof typeof ICON_MAP;
  label: string;
  description: string;
  stat: string;
  href: string;
  color: string;
}

export default function DashboardCards({ cards }: { cards: Card[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
      {cards.map((card) => {
        const Icon = ICON_MAP[card.iconName];
        return (
          <Link
            key={card.label}
            href={card.href}
            style={{
              display: "block",
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "1rem",
              padding: "1.25rem",
              textDecoration: "none",
              transition: "border-color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = card.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".75rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: ".65rem", background: `${card.color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={card.color} />
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{card.label}</span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: ".8rem", marginBottom: ".5rem" }}>{card.description}</p>
            <p style={{ color: card.color, fontSize: ".75rem", fontWeight: 600 }}>{card.stat}</p>
          </Link>
        );
      })}
    </div>
  );
}
