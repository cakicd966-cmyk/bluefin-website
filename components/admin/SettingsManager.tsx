"use client";

import { useState } from "react";
import { Save, Check, Loader2 } from "lucide-react";
import type { SiteSettings } from "@/lib/content";

export default function SettingsManager({ initialSettings }: { initialSettings: SiteSettings }) {
  const [s, setS] = useState<SiteSettings>(initialSettings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(s),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  const set = (patch: Partial<SiteSettings>) => setS((prev) => ({ ...prev, ...patch }));
  const setHours = (patch: Partial<SiteSettings["hours"]>) =>
    setS((prev) => ({ ...prev, hours: { ...prev.hours, ...patch } }));

  const inputStyle: React.CSSProperties = {
    background: "#0f172a",
    border: "1px solid #334155",
    borderRadius: ".5rem",
    color: "#f1f5f9",
    padding: ".5rem .75rem",
    fontSize: ".85rem",
    outline: "none",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    color: "#64748b",
    fontSize: ".7rem",
    display: "block",
    marginBottom: ".35rem",
    textTransform: "uppercase",
    letterSpacing: ".06em",
  };

  const sectionStyle: React.CSSProperties = {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "1rem",
    padding: "1.25rem",
    marginBottom: "1rem",
  };

  const sectionTitle: React.CSSProperties = {
    color: "#94a3b8",
    fontSize: ".75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: ".1em",
    marginBottom: "1rem",
    paddingBottom: ".6rem",
    borderBottom: "1px solid #1e293b",
  };

  return (
    <div>
      {/* Save button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.25rem" }}>
        <button
          onClick={save}
          disabled={saving}
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: saved ? "#065f46" : "#0066CC", color: "#fff", borderRadius: ".6rem", padding: ".5rem 1.25rem", fontSize: ".85rem", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          {saving ? <Loader2 size={14} /> : saved ? <Check size={14} /> : <Save size={14} />}
          {saving ? "Saving…" : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Contact */}
      <div style={sectionStyle}>
        <p style={sectionTitle}>Contact Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input value={s.phone} onChange={(e) => set({ phone: e.target.value })} placeholder="0428 631 931" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input value={s.email} onChange={(e) => set({ email: e.target.value })} placeholder="info@bluefinaircon.com.au" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Hours */}
      <div style={sectionStyle}>
        <p style={sectionTitle}>Business Hours</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem" }}>
          <div>
            <label style={labelStyle}>Mon – Fri</label>
            <input value={s.hours.weekdays} onChange={(e) => setHours({ weekdays: e.target.value })} placeholder="7:00am – 5:30pm" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Saturday</label>
            <input value={s.hours.saturday} onChange={(e) => setHours({ saturday: e.target.value })} placeholder="8:00am – 2:00pm" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Emergency</label>
            <input value={s.hours.emergency} onChange={(e) => setHours({ emergency: e.target.value })} placeholder="24/7 Available" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Service area */}
      <div style={sectionStyle}>
        <p style={sectionTitle}>Service Area</p>
        <div>
          <label style={labelStyle}>Service Area Text</label>
          <input
            value={s.serviceArea}
            onChange={(e) => set({ serviceArea: e.target.value })}
            placeholder="Wollongong, Shellharbour, Kiama..."
            style={inputStyle}
          />
        </div>
      </div>

      {/* Hero section */}
      <div style={sectionStyle}>
        <p style={sectionTitle}>Homepage Hero</p>
        <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
          <div>
            <label style={labelStyle}>Badge Text</label>
            <input value={s.heroBadge} onChange={(e) => set({ heroBadge: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Main Headline</label>
            <input value={s.heroHeadline} onChange={(e) => set({ heroHeadline: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Subtext</label>
            <textarea
              value={s.heroSubtext}
              onChange={(e) => set({ heroSubtext: e.target.value })}
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
          <div>
            <label style={labelStyle}>Trust Badges (one per line)</label>
            <textarea
              value={s.trustBadges.join("\n")}
              onChange={(e) => set({ trustBadges: e.target.value.split("\n").map((l) => l.trim()).filter(Boolean) })}
              rows={3}
              placeholder={"Licensed & Insured\n5-Star Rated\nSame-Day Response"}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
