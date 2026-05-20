import { getSettings } from "@/lib/content";
import AdminNav from "@/components/admin/AdminNav";
import SettingsManager from "@/components/admin/SettingsManager";

export default function AdminSettings() {
  const settings = getSettings();

  return (
    <div style={{ minHeight: "100vh", background: "#030712" }}>
      <AdminNav current="settings" />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <h1 style={{ fontWeight: 800, fontSize: "1.5rem", color: "#fff", marginBottom: ".35rem" }}>Site Settings</h1>
          <p style={{ color: "#9ca3af", fontSize: ".85rem" }}>
            Update contact details, business hours, homepage hero text, and all About page content.
          </p>
        </div>
        <SettingsManager initialSettings={settings} />
      </main>
    </div>
  );
}
