"use client";

import { useState } from "react";
import { Plus, X, Save, Check, Loader2, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content";

export default function TestimonialsManager({ initialItems }: { initialItems: Testimonial[] }) {
  const [items, setItems] = useState<Testimonial[]>(initialItems);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await fetch("/api/admin/testimonials", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(items),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  const addItem = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1;
    setItems([
      ...items,
      {
        id: newId,
        name: "",
        location: "",
        rating: 5,
        text: "",
        service: "",
        initials: "",
      },
    ]);
  };

  const removeItem = (id: number) => setItems(items.filter((i) => i.id !== id));

  const updateItem = (id: number, patch: Partial<Testimonial>) => {
    setItems(
      items.map((i) => {
        if (i.id !== id) return i;
        const updated = { ...i, ...patch };
        if (patch.name !== undefined) {
          const words = patch.name.trim().split(/\s+/);
          updated.initials = words.length >= 2
            ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
            : patch.name.slice(0, 2).toUpperCase();
        }
        return updated;
      })
    );
  };

  const inputStyle: React.CSSProperties = {
    background: "#0f172a",
    border: "1px solid #334155",
    borderRadius: ".5rem",
    color: "#f1f5f9",
    padding: ".45rem .75rem",
    fontSize: ".8rem",
    outline: "none",
    width: "100%",
  };

  return (
    <div>
      {/* Action bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
        <button
          onClick={addItem}
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: "#1e293b", color: "#94a3b8", border: "1px solid #334155", borderRadius: ".6rem", padding: ".5rem 1rem", fontSize: ".8rem", cursor: "pointer" }}
        >
          <Plus size={14} /> Add Review
        </button>
        <button
          onClick={save}
          disabled={saving}
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: saved ? "#065f46" : "#0066CC", color: "#fff", borderRadius: ".6rem", padding: ".5rem 1.25rem", fontSize: ".85rem", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          {saving ? <Loader2 size={14} /> : saved ? <Check size={14} /> : <Save size={14} />}
          {saving ? "Saving…" : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.25rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              {/* Avatar preview */}
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#0066CC22", border: "2px solid #0066CC44", display: "flex", alignItems: "center", justifyContent: "center", color: "#0066CC", fontSize: ".75rem", fontWeight: 700 }}>
                  {item.initials || "?"}
                </div>
                <div style={{ display: "flex", gap: ".2rem" }}>
                  {[1,2,3,4,5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={s <= item.rating ? "#FFD700" : "none"}
                      color={s <= item.rating ? "#FFD700" : "#475569"}
                      style={{ cursor: "pointer" }}
                      onClick={() => updateItem(item.id, { rating: s })}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#475569" }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6rem" }}>
              <div>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Customer Name *</label>
                <input
                  value={item.name}
                  onChange={(e) => updateItem(item.id, { name: e.target.value })}
                  placeholder="e.g. Sarah M."
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Location</label>
                <input
                  value={item.location}
                  onChange={(e) => updateItem(item.id, { location: e.target.value })}
                  placeholder="e.g. Wollongong, NSW"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Service</label>
                <input
                  value={item.service}
                  onChange={(e) => updateItem(item.id, { service: e.target.value })}
                  placeholder="e.g. Ducted A/C Installation"
                  style={inputStyle}
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Review Text *</label>
                <textarea
                  value={item.text}
                  onChange={(e) => updateItem(item.id, { text: e.target.value })}
                  rows={3}
                  placeholder="What did the customer say?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#475569", fontSize: ".9rem" }}>
            No testimonials yet. Click &quot;Add Review&quot; to add a customer review.
          </div>
        )}
      </div>
    </div>
  );
}
