import { getTestimonials } from "@/lib/content";
import AdminNav from "@/components/admin/AdminNav";
import TestimonialsManager from "@/components/admin/TestimonialsManager";

export default function AdminTestimonials() {
  const testimonials = getTestimonials();

  return (
    <div style={{ minHeight: "100vh", background: "#030712" }}>
      <AdminNav current="testimonials" />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "1.75rem" }}>
          <h1 style={{ fontWeight: 800, fontSize: "1.5rem", color: "#fff", marginBottom: ".35rem" }}>Testimonials</h1>
          <p style={{ color: "#9ca3af", fontSize: ".85rem" }}>
            Add, edit, or remove customer reviews shown on the homepage.
          </p>
        </div>
        <TestimonialsManager initialItems={testimonials} />
      </main>
    </div>
  );
}
