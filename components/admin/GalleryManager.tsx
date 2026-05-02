"use client";

import { useState, useRef } from "react";
import { Plus, Trash2, Upload, Save, Check, X, Loader2 } from "lucide-react";
import type { GalleryItem } from "@/lib/content";

const CAT_OPTIONS = [
  { value: "aircon", label: "Air Con" },
  { value: "electrical", label: "Electrical" },
  { value: "commercial", label: "Commercial" },
];

export default function GalleryManager({ initialItems }: { initialItems: GalleryItem[] }) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingId, setUploadingId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeUploadId = useRef<number | null>(null);

  const save = async () => {
    setSaving(true);
    try {
      await fetch("/api/admin/gallery", {
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
      { id: newId, cat: "aircon", catLabel: "Air Con", title: "New Job", subtitle: "Location, NSW", image: null },
    ]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const updateItem = (id: number, patch: Partial<GalleryItem>) => {
    setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i)));
  };

  const triggerUpload = (id: number) => {
    activeUploadId.current = id;
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const id = activeUploadId.current;
    if (!file || id === null) return;
    e.target.value = "";

    setUploadingId(id);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      if (res.ok) {
        const { url } = await res.json();
        updateItem(id, { image: url });
      } else {
        const { error } = await res.json();
        alert(error || "Upload failed");
      }
    } finally {
      setUploadingId(null);
      activeUploadId.current = null;
    }
  };

  const inputStyle = {
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
      <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleFileChange} />

      {/* Action bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
        <button
          onClick={addItem}
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: "#1e293b", color: "#94a3b8", border: "1px solid #334155", borderRadius: ".6rem", padding: ".5rem 1rem", fontSize: ".8rem", cursor: "pointer" }}
        >
          <Plus size={14} /> Add Gallery Item
        </button>
        <button
          onClick={save}
          disabled={saving}
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: saved ? "#065f46" : "#0066CC", color: "#fff", borderRadius: ".6rem", padding: ".5rem 1.25rem", fontSize: ".85rem", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          {saving ? <Loader2 size={14} className="animate-spin" /> : saved ? <Check size={14} /> : <Save size={14} />}
          {saving ? "Saving…" : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.25rem", display: "grid", gridTemplateColumns: "100px 1fr auto", gap: "1rem", alignItems: "start" }}
          >
            {/* Photo */}
            <div>
              <div
                onClick={() => triggerUpload(item.id)}
                style={{
                  width: "100px",
                  height: "75px",
                  borderRadius: ".6rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#1e293b",
                  border: "2px dashed #334155",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : uploadingId === item.id ? (
                  <Loader2 size={20} color="#0066CC" className="animate-spin" />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <Upload size={18} color="#475569" style={{ margin: "0 auto 4px" }} />
                    <span style={{ color: "#475569", fontSize: ".65rem" }}>Upload</span>
                  </div>
                )}
              </div>
              {item.image && (
                <button
                  onClick={() => updateItem(item.id, { image: null })}
                  style={{ marginTop: ".35rem", fontSize: ".65rem", color: "#ef4444", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  Remove photo
                </button>
              )}
            </div>

            {/* Fields */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6rem" }}>
              <div>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Category</label>
                <select
                  value={item.cat}
                  onChange={(e) => {
                    const opt = CAT_OPTIONS.find((o) => o.value === e.target.value);
                    updateItem(item.id, { cat: e.target.value, catLabel: opt?.label || e.target.value });
                  }}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  {CAT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Job Title</label>
                <input
                  value={item.title}
                  onChange={(e) => updateItem(item.id, { title: e.target.value })}
                  placeholder="e.g. Split System Install"
                  style={inputStyle}
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ color: "#64748b", fontSize: ".7rem", display: "block", marginBottom: ".3rem" }}>Subtitle / Location</label>
                <input
                  value={item.subtitle}
                  onChange={(e) => updateItem(item.id, { subtitle: e.target.value })}
                  placeholder="e.g. Wollongong, NSW · Mitsubishi 7kW"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Delete */}
            <button
              onClick={() => removeItem(item.id)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#475569", padding: ".25rem" }}
              title="Remove"
            >
              <X size={16} />
            </button>
          </div>
        ))}

        {items.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "#475569", fontSize: ".9rem" }}>
            No gallery items yet. Click &quot;Add Gallery Item&quot; to get started.
          </div>
        )}
      </div>
    </div>
  );
}
