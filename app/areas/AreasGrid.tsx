"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import type { AreaData } from "./areas-data";

export default function AreasGrid({ grouped }: { grouped: Record<string, AreaData[]> }) {
  return (
    <>
      {Object.entries(grouped).map(([region, regionAreas]) => (
        <div key={region} style={{ marginBottom: "3rem" }}>
          <h2 className="font-outfit" style={{ fontWeight: 800, fontSize: "1.3rem", color: "#111", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
            <MapPin size={16} color="#1e90ff" />
            {region}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
            {regionAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                style={{
                  display: "block", background: "#fff",
                  border: "1px solid rgba(0,0,0,.08)", borderRadius: "1rem",
                  padding: "1.25rem 1.5rem", textDecoration: "none",
                  transition: "border-color .2s, box-shadow .2s",
                  boxShadow: "0 1px 3px rgba(0,0,0,.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(30,144,255,.4)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(30,144,255,.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,.08)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,.04)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
                  <MapPin size={14} color="#1e90ff" />
                  <span className="font-outfit" style={{ fontWeight: 700, fontSize: "1rem", color: "#111" }}>{area.name}</span>
                </div>
                <p className="font-rubik" style={{ color: "#666", fontSize: ".8rem", lineHeight: 1.5, marginBottom: ".75rem" }}>
                  {area.services.length} services available
                </p>
                <span style={{ color: "#1e90ff", fontFamily: "'Rubik',sans-serif", fontSize: ".8rem", fontWeight: 600 }}>
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
