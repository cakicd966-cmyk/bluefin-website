import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { areas, getAreaBySlug } from "@/app/areas/areas-data";

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = getAreaBySlug(params.area);
  if (!area) return {};
  return {
    title: `Air Conditioning & Electrician ${area.name} | Bluefin`,
    description: `Licensed air conditioning installation, servicing & electrical work in ${area.name}, ${area.region}. Free quotes, upfront pricing. Call 0428 631 931.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = getAreaBySlug(params.area);
  if (!area) notFound();

  const base = "https://www.bluefinaircon.com.au";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${base}/areas/${area.slug}`,
        "name": "Bluefin Air-Conditioning & Electrical",
        "description": area.intro,
        "url": `${base}/areas/${area.slug}`,
        "telephone": "+61428631931",
        "areaServed": { "@type": "City", "name": area.name },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wollongong",
          "addressRegion": "NSW",
          "addressCountry": "AU",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Air Conditioning & Electrical Services ${area.name}`,
          "itemListElement": area.services.map((s) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": `${s.title} ${area.name}` },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${base}/areas` },
          { "@type": "ListItem", "position": 3, "name": area.name, "item": `${base}/areas/${area.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": area.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      },
    ],
  };

  return (
    <div style={{ background: "#f8faff", minHeight: "100vh", color: "#111" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      {/* Hero */}
      <section style={{
        minHeight: "42vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #060e1a 0%, #0a1628 55%, #0f2040 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: "linear-gradient(rgba(30,144,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", width: "20rem", height: "20rem", borderRadius: "50%", background: "rgba(30,144,255,.08)", top: "10%", right: "-4rem", filter: "blur(80px)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: ".4rem", marginBottom: "1.25rem" }}>
            <a href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Home</a>
            <ChevronRight size={12} color="rgba(255,255,255,.2)" />
            <a href="/areas" style={{ color: "rgba(255,255,255,.4)", fontSize: ".8rem", textDecoration: "none", fontFamily: "'Rubik',sans-serif" }}>Service Areas</a>
            <ChevronRight size={12} color="rgba(255,255,255,.2)" />
            <span style={{ color: "#1e90ff", fontSize: ".8rem", fontFamily: "'Rubik',sans-serif" }}>{area.name}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
            <MapPin size={14} color="#f5c518" />
            <span style={{ color: "#f5c518", fontFamily: "'Rubik',sans-serif", fontSize: ".8rem", fontWeight: 600 }}>{area.region} Region</span>
          </div>

          <h1 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#fff", maxWidth: "36rem" }}>
            {area.headline}
          </h1>
          <p className="font-rubik" style={{ color: "rgba(255,255,255,.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "34rem", marginBottom: "2rem" }}>
            {area.intro}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/#contact" style={{
              display: "inline-flex", alignItems: "center", gap: ".5rem",
              background: "#f5c518", color: "#060e1a",
              fontFamily: "'Outfit',sans-serif", fontWeight: 700,
              padding: ".875rem 1.75rem", borderRadius: ".75rem",
              textDecoration: "none", fontSize: ".9rem",
            }}>
              Get a Free Quote
            </a>
            <a href="tel:0428631931" style={{
              display: "inline-flex", alignItems: "center", gap: ".5rem",
              background: "rgba(255,255,255,.08)", color: "#fff",
              border: "1px solid rgba(255,255,255,.15)",
              fontFamily: "'Outfit',sans-serif", fontWeight: 600,
              padding: ".875rem 1.75rem", borderRadius: ".75rem",
              textDecoration: "none", fontSize: ".9rem",
            }}>
              <Phone size={16} />
              0428 631 931
            </a>
          </div>
        </div>
      </section>

      {/* Local detail */}
      <section style={{ background: "#fff", padding: "3rem 0", borderBottom: "1px solid rgba(0,0,0,.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ maxWidth: "48rem" }}>
            <p className="font-rubik" style={{ color: "#444", fontSize: "1.05rem", lineHeight: 1.85 }}>
              {area.localDetail}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "4rem 0", background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit" style={{ fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#111", marginBottom: ".5rem" }}>
            Services in {area.name}
          </h2>
          <p className="font-rubik" style={{ color: "#666", marginBottom: "2.5rem", fontSize: ".95rem" }}>
            Everything you need from one licensed, local team.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {area.services.map((service) => (
              <div key={service.title} style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,.08)",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,.04)",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: ".75rem" }}>
                  <CheckCircle size={18} color="#1e90ff" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h3 className="font-outfit" style={{ fontWeight: 700, fontSize: "1rem", color: "#111", marginBottom: ".4rem" }}>
                      {service.title}
                    </h3>
                    <p className="font-rubik" style={{ color: "#555", fontSize: ".875rem", lineHeight: 1.65 }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {area.faqs.length > 0 && (
        <section style={{ padding: "4rem 0", background: "#fff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-outfit" style={{ fontWeight: 800, fontSize: "clamp(1.4rem,3vw,2rem)", color: "#111", marginBottom: "2rem" }}>
              Frequently Asked Questions — {area.name}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {area.faqs.map((faq) => (
                <div key={faq.q} style={{
                  border: "1px solid rgba(0,0,0,.09)",
                  borderRadius: ".875rem",
                  padding: "1.25rem 1.5rem",
                  background: "#fafbff",
                }}>
                  <h3 className="font-outfit" style={{ fontWeight: 700, fontSize: ".95rem", color: "#111", marginBottom: ".5rem" }}>
                    {faq.q}
                  </h3>
                  <p className="font-rubik" style={{ color: "#555", fontSize: ".875rem", lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-rubik" style={{ marginTop: "1.5rem", color: "#666", fontSize: ".875rem" }}>
              More questions? Visit our <a href="/faq" style={{ color: "#1e90ff", textDecoration: "none" }}>full FAQ page</a> or call us on{" "}
              <a href="tel:0428631931" style={{ color: "#1e90ff", textDecoration: "none" }}>0428 631 931</a>.
            </p>
          </div>
        </section>
      )}

      {/* Nearby areas */}
      <section style={{ padding: "3rem 0", background: "#f8faff", borderTop: "1px solid rgba(0,0,0,.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-rubik" style={{ color: "#888", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "1rem" }}>
            We also cover
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
            {area.nearbyAreas.map((nearby) => {
              const nearbyArea = areas.find((a) => a.name === nearby);
              return nearbyArea ? (
                <Link key={nearby} href={`/areas/${nearbyArea.slug}`} style={{
                  display: "inline-flex", alignItems: "center", gap: ".3rem",
                  background: "#fff", border: "1px solid rgba(30,144,255,.2)",
                  color: "#1e90ff", fontFamily: "'Rubik',sans-serif", fontSize: ".8rem",
                  padding: ".4rem .9rem", borderRadius: ".5rem", textDecoration: "none",
                }}>
                  <MapPin size={11} />
                  {nearby}
                </Link>
              ) : (
                <span key={nearby} style={{
                  display: "inline-flex", alignItems: "center", gap: ".3rem",
                  background: "#fff", border: "1px solid rgba(0,0,0,.1)",
                  color: "#666", fontFamily: "'Rubik',sans-serif", fontSize: ".8rem",
                  padding: ".4rem .9rem", borderRadius: ".5rem",
                }}>
                  <MapPin size={11} />
                  {nearby}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0", background: "linear-gradient(135deg, #060e1a 0%, #0a1628 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-outfit" style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.4rem)", color: "#fff", marginBottom: ".75rem" }}>
            Need a tradie in {area.name}?
          </h2>
          <p className="font-rubik" style={{ color: "rgba(255,255,255,.6)", fontSize: ".95rem", marginBottom: "2rem" }}>
            Free quotes, upfront pricing, licensed and insured. We&apos;ll get back to you fast.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href="/#contact" style={{
              display: "inline-flex", alignItems: "center", gap: ".5rem",
              background: "#f5c518", color: "#060e1a",
              fontFamily: "'Outfit',sans-serif", fontWeight: 700,
              padding: ".875rem 2rem", borderRadius: ".75rem",
              textDecoration: "none", fontSize: "1rem",
            }}>
              Get a Free Quote
            </a>
            <a href="tel:0428631931" style={{
              display: "inline-flex", alignItems: "center", gap: ".5rem",
              background: "rgba(255,255,255,.08)", color: "#fff",
              border: "1px solid rgba(255,255,255,.15)",
              fontFamily: "'Outfit',sans-serif", fontWeight: 600,
              padding: ".875rem 2rem", borderRadius: ".75rem",
              textDecoration: "none", fontSize: "1rem",
            }}>
              <Phone size={18} />
              0428 631 931
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
