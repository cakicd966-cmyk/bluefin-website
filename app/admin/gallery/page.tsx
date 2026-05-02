import { getGallery } from "@/lib/content";
import AdminNav from "@/components/admin/AdminNav";
import GalleryManager from "@/components/admin/GalleryManager";

export default function AdminGallery() {
  const gallery = getGallery();

  return (
    <div style={{ minHeight: "100vh", background: "#030712" }}>
      <AdminNav current="gallery" />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <h1 style={{ fontWeight: 800, fontSize: "1.5rem", color: "#fff", marginBottom: ".35rem" }}>Gallery</h1>
          <p style={{ color: "#9ca3af", fontSize: ".85rem" }}>
            Upload real job photos and edit gallery item details. Photos appear on the public gallery page.
          </p>
        </div>
        <GalleryManager initialItems={gallery} />
      </main>
    </div>
  );
}
