"use client";

import { useState, useRef, useEffect } from "react";
import {
  Save, Check, Loader2, Plus, Trash2, ChevronDown, ChevronUp, Upload, X,
  ArrowUp, ArrowDown, Facebook, Instagram, Linkedin, Youtube, Bell, BellOff,
  // Icon picker icons — Why Choose Us & About Values
  ShieldCheck, MapPin, Clock, BadgeCheck, Star, ThumbsUp, Award, Users,
  Home, DollarSign, CheckCircle, Heart, Truck, Calendar, Eye, Lock,
  RefreshCw, MessageCircle, Lightbulb, Thermometer, Wifi, Hammer, Gauge,
  Settings, Sparkles, Phone, Zap, Wrench, Globe, Target, TrendingUp,
  // Icon picker icons — Services
  Wind, AlertTriangle, Cpu, Plug, Fan, Sun, Snowflake, Package, BarChart2,
  // Icon picker icons — How It Works
  FileText, Mail, Send, Search, Info,
} from "lucide-react";
import type { SiteSettings, AboutPageContent, AboutStat, AboutMilestone, AboutTeamMember, AboutValue, ServiceItem, WhyChooseFeature, HowItWorksStep, FooterContent, FaqItem, Testimonial, AnnouncementBanner, SocialLinks } from "@/lib/content";

// ── Visual Icon Picker ──────────────────────────────────────────────────────

// Use React.ElementType so Lucide's ForwardRefExoticComponent is accepted
interface IconOption { key: string; Icon: React.ElementType; label: string }

function IconPicker({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: IconOption[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", paddingTop: ".4rem" }}>
      {options.map(({ key, Icon, label }) => {
        const selected = value === key;
        return (
          <button
            key={key}
            type="button"
            title={label}
            onClick={() => onChange(key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: ".18rem",
              background: selected ? "rgba(59,130,246,.18)" : "#0f172a",
              border: selected ? "1.5px solid #3b82f6" : "1px solid #1e293b",
              borderRadius: ".45rem",
              padding: ".4rem .45rem",
              cursor: "pointer",
              color: selected ? "#60a5fa" : "#475569",
              minWidth: "3.2rem",
              transition: "all .15s",
            }}
          >
            <Icon size={17} />
            <span style={{ fontSize: ".5rem", textTransform: "uppercase", letterSpacing: ".04em", lineHeight: 1, whiteSpace: "nowrap" }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Icon option lists

const WHY_CHOOSE_ICONS: IconOption[] = [
  { key: "shield", Icon: ShieldCheck, label: "Shield" },
  { key: "badge", Icon: BadgeCheck, label: "Badge" },
  { key: "star", Icon: Star, label: "Star" },
  { key: "award", Icon: Award, label: "Award" },
  { key: "thumbsup", Icon: ThumbsUp, label: "Thumbs Up" },
  { key: "check", Icon: CheckCircle, label: "Check" },
  { key: "map", Icon: MapPin, label: "Location" },
  { key: "home", Icon: Home, label: "Home" },
  { key: "globe", Icon: Globe, label: "Globe" },
  { key: "clock", Icon: Clock, label: "Clock" },
  { key: "calendar", Icon: Calendar, label: "Calendar" },
  { key: "phone", Icon: Phone, label: "Phone" },
  { key: "message", Icon: MessageCircle, label: "Message" },
  { key: "heart", Icon: Heart, label: "Heart" },
  { key: "users", Icon: Users, label: "Team" },
  { key: "truck", Icon: Truck, label: "Truck" },
  { key: "dollar", Icon: DollarSign, label: "Price" },
  { key: "lock", Icon: Lock, label: "Lock" },
  { key: "eye", Icon: Eye, label: "Eye" },
  { key: "refresh", Icon: RefreshCw, label: "Warranty" },
  { key: "lightbulb", Icon: Lightbulb, label: "Idea" },
  { key: "thermometer", Icon: Thermometer, label: "Temp" },
  { key: "wifi", Icon: Wifi, label: "Wifi" },
  { key: "hammer", Icon: Hammer, label: "Hammer" },
  { key: "wrench", Icon: Wrench, label: "Wrench" },
  { key: "gauge", Icon: Gauge, label: "Speed" },
  { key: "settings", Icon: Settings, label: "Settings" },
  { key: "sparkles", Icon: Sparkles, label: "Quality" },
  { key: "zap", Icon: Zap, label: "Electric" },
  { key: "target", Icon: Target, label: "Target" },
  { key: "trending", Icon: TrendingUp, label: "Growth" },
];

const SERVICES_ICONS: IconOption[] = [
  { key: "wind", Icon: Wind, label: "Wind" },
  { key: "wrench", Icon: Wrench, label: "Wrench" },
  { key: "zap", Icon: Zap, label: "Electric" },
  { key: "alert", Icon: AlertTriangle, label: "Alert" },
  { key: "thermometer", Icon: Thermometer, label: "Temp" },
  { key: "fan", Icon: Fan, label: "Fan" },
  { key: "snowflake", Icon: Snowflake, label: "Cooling" },
  { key: "sun", Icon: Sun, label: "Heating" },
  { key: "plug", Icon: Plug, label: "Plug" },
  { key: "cpu", Icon: Cpu, label: "System" },
  { key: "lightbulb", Icon: Lightbulb, label: "Lighting" },
  { key: "hammer", Icon: Hammer, label: "Install" },
  { key: "settings", Icon: Settings, label: "Service" },
  { key: "gauge", Icon: Gauge, label: "Efficiency" },
  { key: "shield", Icon: ShieldCheck, label: "Safety" },
  { key: "home", Icon: Home, label: "Home" },
  { key: "package", Icon: Package, label: "Supply" },
  { key: "truck", Icon: Truck, label: "Delivery" },
  { key: "phone", Icon: Phone, label: "Support" },
  { key: "star", Icon: Star, label: "Premium" },
  { key: "check", Icon: CheckCircle, label: "Done" },
  { key: "calendar", Icon: Calendar, label: "Book" },
  { key: "globe", Icon: Globe, label: "Commercial" },
  { key: "chart", Icon: BarChart2, label: "Reports" },
];

const HOW_IT_WORKS_ICONS: IconOption[] = [
  { key: "phone", Icon: Phone, label: "Call" },
  { key: "file", Icon: FileText, label: "Quote" },
  { key: "check", Icon: CheckCircle, label: "Done" },
  { key: "calendar", Icon: Calendar, label: "Book" },
  { key: "mail", Icon: Mail, label: "Email" },
  { key: "send", Icon: Send, label: "Send" },
  { key: "search", Icon: Search, label: "Assess" },
  { key: "info", Icon: Info, label: "Info" },
  { key: "clock", Icon: Clock, label: "Time" },
  { key: "home", Icon: Home, label: "Onsite" },
  { key: "users", Icon: Users, label: "Team" },
  { key: "star", Icon: Star, label: "Rate" },
  { key: "thumbsup", Icon: ThumbsUp, label: "Approve" },
  { key: "award", Icon: Award, label: "Guarantee" },
  { key: "message", Icon: MessageCircle, label: "Chat" },
  { key: "heart", Icon: Heart, label: "Care" },
  { key: "wrench", Icon: Wrench, label: "Fix" },
  { key: "hammer", Icon: Hammer, label: "Build" },
  { key: "shield", Icon: ShieldCheck, label: "Safety" },
  { key: "map", Icon: MapPin, label: "Location" },
  { key: "gauge", Icon: Gauge, label: "Quality" },
];

const VALUES_ICONS: IconOption[] = [
  { key: "clock", Icon: Clock, label: "Punctuality" },
  { key: "shield", Icon: ShieldCheck, label: "Integrity" },
  { key: "chart", Icon: BarChart2, label: "Quality" },
  { key: "users", Icon: Users, label: "Community" },
  { key: "heart", Icon: Heart, label: "Care" },
  { key: "star", Icon: Star, label: "Excellence" },
  { key: "thumbsup", Icon: ThumbsUp, label: "Positive" },
  { key: "check", Icon: CheckCircle, label: "Reliability" },
  { key: "award", Icon: Award, label: "Achievement" },
  { key: "lightbulb", Icon: Lightbulb, label: "Innovation" },
  { key: "target", Icon: Target, label: "Focus" },
  { key: "trending", Icon: TrendingUp, label: "Growth" },
  { key: "globe", Icon: Globe, label: "Community" },
  { key: "message", Icon: MessageCircle, label: "Communication" },
  { key: "home", Icon: Home, label: "Local" },
  { key: "sparkles", Icon: Sparkles, label: "Quality" },
  { key: "dollar", Icon: DollarSign, label: "Value" },
  { key: "lock", Icon: Lock, label: "Trust" },
  { key: "refresh", Icon: RefreshCw, label: "Consistency" },
  { key: "hammer", Icon: Hammer, label: "Craftsmanship" },
];

// ── Move helpers ────────────────────────────────────────────────────────────
function moveUp<T>(arr: T[], i: number): T[] {
  if (i === 0) return arr;
  const next = [...arr];
  [next[i - 1], next[i]] = [next[i], next[i - 1]];
  return next;
}
function moveDown<T>(arr: T[], i: number): T[] {
  if (i === arr.length - 1) return arr;
  const next = [...arr];
  [next[i], next[i + 1]] = [next[i + 1], next[i]];
  return next;
}

export default function SettingsManager({ initialSettings }: { initialSettings: SiteSettings }) {
  const [s, setS] = useState<SiteSettings>(initialSettings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [uploadingIdx, setUploadingIdx] = useState<number | null>(null);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    contact: true,
    hours: true,
    serviceArea: true,
    hero: true,
    banner: false,
    social: false,
    aboutHero: false,
    aboutStats: false,
    aboutStory: false,
    aboutMilestones: false,
    aboutTeam: false,
    aboutValues: false,
    aboutCta: false,
    services: false,
    whyChooseUs: false,
    howItWorks: false,
    footer: false,
    testimonials: false,
    faqs: false,
  });

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);

  const toggleSection = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const save = async () => {
    setSaving(true);
    try {
      await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(s),
      });
      setSaved(true);
      setIsDirty(false);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  const set = (patch: Partial<SiteSettings>) => { setIsDirty(true); setS((prev) => ({ ...prev, ...patch })); };
  const setHours = (patch: Partial<SiteSettings["hours"]>) => {
    setIsDirty(true);
    setS((prev) => ({ ...prev, hours: { ...prev.hours, ...patch } }));
  };
  const setAbout = (patch: Partial<AboutPageContent>) => {
    setIsDirty(true);
    setS((prev) => ({ ...prev, about: { ...prev.about, ...patch } }));
  };
  const setBanner = (patch: Partial<AnnouncementBanner>) => {
    setIsDirty(true);
    setS((prev) => ({ ...prev, announcementBanner: { ...prev.announcementBanner, ...patch } }));
  };
  const setSocial = (patch: Partial<SocialLinks>) => {
    setIsDirty(true);
    setS((prev) => ({ ...prev, social: { ...prev.social, ...patch } }));
  };

  // ── Array helpers (all mark dirty) ──────────────────────────────────────
  const d = () => setIsDirty(true); // shorthand

  const setStat = (i: number, patch: Partial<AboutStat>) =>
    setAbout({ stats: s.about.stats.map((x, idx) => (idx === i ? { ...x, ...patch } : x)) });
  const addStat = () => setAbout({ stats: [...s.about.stats, { value: "", label: "" }] });
  const removeStat = (i: number) => setAbout({ stats: s.about.stats.filter((_, idx) => idx !== i) });
  const moveStat = (i: number, dir: "up" | "down") => setAbout({ stats: dir === "up" ? moveUp(s.about.stats, i) : moveDown(s.about.stats, i) });

  const setMilestone = (i: number, patch: Partial<AboutMilestone>) =>
    setAbout({ milestones: s.about.milestones.map((x, idx) => (idx === i ? { ...x, ...patch } : x)) });
  const addMilestone = () => setAbout({ milestones: [...s.about.milestones, { year: "", title: "", desc: "" }] });
  const removeMilestone = (i: number) => setAbout({ milestones: s.about.milestones.filter((_, idx) => idx !== i) });
  const moveMilestone = (i: number, dir: "up" | "down") => setAbout({ milestones: dir === "up" ? moveUp(s.about.milestones, i) : moveDown(s.about.milestones, i) });

  const setMember = (i: number, patch: Partial<AboutTeamMember>) =>
    setAbout({ teamMembers: s.about.teamMembers.map((x, idx) => (idx === i ? { ...x, ...patch } : x)) });
  const addMember = () => setAbout({ teamMembers: [...s.about.teamMembers, { initials: "", name: "", role: "", bio: "", tags: [] }] });
  const removeMember = (i: number) => setAbout({ teamMembers: s.about.teamMembers.filter((_, idx) => idx !== i) });
  const moveMember = (i: number, dir: "up" | "down") => setAbout({ teamMembers: dir === "up" ? moveUp(s.about.teamMembers, i) : moveDown(s.about.teamMembers, i) });

  const setValue = (i: number, patch: Partial<AboutValue>) =>
    setAbout({ values: s.about.values.map((x, idx) => (idx === i ? { ...x, ...patch } : x)) });
  const addValue = () => setAbout({ values: [...s.about.values, { icon: "clock" as string, title: "", desc: "" }] });
  const removeValue = (i: number) => setAbout({ values: s.about.values.filter((_, idx) => idx !== i) });
  const moveValue = (i: number, dir: "up" | "down") => setAbout({ values: dir === "up" ? moveUp(s.about.values, i) : moveDown(s.about.values, i) });

  const setService = (i: number, patch: Partial<ServiceItem>) => {
    d(); setS((prev) => ({ ...prev, services: prev.services.map((x, idx) => idx === i ? { ...x, ...patch } : x) }));
  };
  const addService = () => { d(); setS((prev) => ({ ...prev, services: [...prev.services, { icon: "wind", title: "", description: "", highlights: [], color: "electric" as const }] })); };
  const removeService = (i: number) => { d(); setS((prev) => ({ ...prev, services: prev.services.filter((_, idx) => idx !== i) })); };
  const moveService = (i: number, dir: "up" | "down") => { d(); setS((prev) => ({ ...prev, services: dir === "up" ? moveUp(prev.services, i) : moveDown(prev.services, i) })); };

  const setFeature = (i: number, patch: Partial<WhyChooseFeature>) => {
    d(); setS((prev) => ({ ...prev, whyChooseUs: prev.whyChooseUs.map((x, idx) => idx === i ? { ...x, ...patch } : x) }));
  };
  const addFeature = () => { d(); setS((prev) => ({ ...prev, whyChooseUs: [...prev.whyChooseUs, { icon: "shield", title: "", description: "", stat: "", statLabel: "" }] })); };
  const removeFeature = (i: number) => { d(); setS((prev) => ({ ...prev, whyChooseUs: prev.whyChooseUs.filter((_, idx) => idx !== i) })); };
  const moveFeature = (i: number, dir: "up" | "down") => { d(); setS((prev) => ({ ...prev, whyChooseUs: dir === "up" ? moveUp(prev.whyChooseUs, i) : moveDown(prev.whyChooseUs, i) })); };

  const setStep = (i: number, patch: Partial<HowItWorksStep>) => {
    d(); setS((prev) => ({ ...prev, howItWorks: prev.howItWorks.map((x, idx) => idx === i ? { ...x, ...patch } : x) }));
  };
  const addStep = () => { d(); setS((prev) => ({ ...prev, howItWorks: [...prev.howItWorks, { number: String(prev.howItWorks.length + 1).padStart(2, "0"), icon: "phone", title: "", description: "" }] })); };
  const removeStep = (i: number) => { d(); setS((prev) => ({ ...prev, howItWorks: prev.howItWorks.filter((_, idx) => idx !== i) })); };
  const moveStep = (i: number, dir: "up" | "down") => { d(); setS((prev) => ({ ...prev, howItWorks: dir === "up" ? moveUp(prev.howItWorks, i) : moveDown(prev.howItWorks, i) })); };

  const setFooter = (patch: Partial<FooterContent>) => {
    d(); setS((prev) => ({ ...prev, footer: { ...prev.footer, ...patch } }));
  };

  const setTestimonial = (i: number, patch: Partial<Testimonial>) => {
    d(); setS((prev) => ({ ...prev, testimonials: prev.testimonials.map((x, idx) => idx === i ? { ...x, ...patch } : x) }));
  };
  const addTestimonial = () => { d(); setS((prev) => ({ ...prev, testimonials: [...prev.testimonials, { id: Date.now(), name: "", location: "", rating: 5, text: "", service: "", initials: "" }] })); };
  const removeTestimonial = (i: number) => { d(); setS((prev) => ({ ...prev, testimonials: prev.testimonials.filter((_, idx) => idx !== i) })); };
  const moveTestimonial = (i: number, dir: "up" | "down") => { d(); setS((prev) => ({ ...prev, testimonials: dir === "up" ? moveUp(prev.testimonials, i) : moveDown(prev.testimonials, i) })); };

  const setFaq = (i: number, patch: Partial<FaqItem>) => {
    d(); setS((prev) => ({ ...prev, faqs: prev.faqs.map((x, idx) => idx === i ? { ...x, ...patch } : x) }));
  };
  const addFaq = () => { d(); setS((prev) => ({ ...prev, faqs: [...prev.faqs, { id: Date.now(), question: "", answer: "", category: "service" }] })); };
  const removeFaq = (i: number) => { d(); setS((prev) => ({ ...prev, faqs: prev.faqs.filter((_, idx) => idx !== i) })); };
  const moveFaq = (i: number, dir: "up" | "down") => { d(); setS((prev) => ({ ...prev, faqs: dir === "up" ? moveUp(prev.faqs, i) : moveDown(prev.faqs, i) })); };

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
    marginBottom: "1rem",
    overflow: "hidden",
  };

  const sectionHeader = (key: string, title: string, color?: string): React.ReactNode => (
    <button
      onClick={() => toggleSection(key)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.25rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: color ?? "#94a3b8",
        fontSize: ".75rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: ".1em",
      }}
    >
      {title}
      {openSections[key] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
    </button>
  );

  const sectionBody = (key: string, children: React.ReactNode) =>
    openSections[key] ? (
      <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #1e293b" }}>{children}</div>
    ) : null;

  const rowStyle: React.CSSProperties = {
    background: "#162032",
    border: "1px solid #1e293b",
    borderRadius: ".75rem",
    padding: "1rem",
    marginTop: ".75rem",
    position: "relative",
  };

  const removeBtn = (onClick: () => void) => (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: ".75rem",
        right: ".75rem",
        background: "rgba(239,68,68,.1)",
        border: "1px solid rgba(239,68,68,.2)",
        borderRadius: ".4rem",
        padding: ".3rem .5rem",
        cursor: "pointer",
        color: "#ef4444",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Trash2 size={12} />
    </button>
  );

  const uploadPhoto = async (i: number, file: File) => {
    setUploadingIdx(i);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) setMember(i, { image: data.url });
    } finally {
      setUploadingIdx(null);
    }
  };

  const addBtn = (onClick: () => void, label: string) => (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: ".4rem",
        marginTop: ".75rem",
        background: "rgba(30,144,255,.1)",
        border: "1px solid rgba(30,144,255,.2)",
        borderRadius: ".5rem",
        padding: ".4rem .9rem",
        color: "#60a5fa",
        fontSize: ".8rem",
        cursor: "pointer",
      }}
    >
      <Plus size={12} /> {label}
    </button>
  );

  // Move buttons helper
  const moveButtons = (i: number, len: number, onMove: (dir: "up" | "down") => void) => (
    <div style={{ display: "flex", flexDirection: "column", gap: ".2rem" }}>
      <button
        onClick={() => onMove("up")}
        disabled={i === 0}
        title="Move up"
        style={{ background: i === 0 ? "transparent" : "rgba(100,116,139,.15)", border: "1px solid #1e293b", borderRadius: ".3rem", padding: ".2rem .3rem", cursor: i === 0 ? "default" : "pointer", color: i === 0 ? "#1e293b" : "#64748b", display: "flex" }}
      ><ArrowUp size={11} /></button>
      <button
        onClick={() => onMove("down")}
        disabled={i === len - 1}
        title="Move down"
        style={{ background: i === len - 1 ? "transparent" : "rgba(100,116,139,.15)", border: "1px solid #1e293b", borderRadius: ".3rem", padding: ".2rem .3rem", cursor: i === len - 1 ? "default" : "pointer", color: i === len - 1 ? "#1e293b" : "#64748b", display: "flex" }}
      ><ArrowDown size={11} /></button>
    </div>
  );

  return (
    <div>
      {/* Unsaved changes banner */}
      {isDirty && (
        <div style={{ background: "rgba(245,197,24,.12)", border: "1px solid rgba(245,197,24,.3)", borderRadius: ".6rem", padding: ".6rem 1rem", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ color: "#f5c518", fontSize: ".8rem", fontWeight: 600 }}>⚠ You have unsaved changes — don&apos;t forget to save!</p>
          <button onClick={save} disabled={saving} style={{ background: "#f5c518", color: "#1a0e00", borderRadius: ".5rem", padding: ".3rem .85rem", fontSize: ".78rem", fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: ".3rem" }}>
            {saving ? <Loader2 size={12} /> : <Save size={12} />} Save Now
          </button>
        </div>
      )}

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

      {/* ── SITE-WIDE SETTINGS ── */}
      <p style={{ color: "#475569", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".6rem" }}>
        Site-Wide
      </p>

      {/* Contact */}
      <div style={sectionStyle}>
        {sectionHeader("contact", "Contact Details")}
        {sectionBody("contact", (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem", paddingTop: "1rem" }}>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input value={s.phone} onChange={(e) => set({ phone: e.target.value })} placeholder="0428 631 931" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input value={s.email} onChange={(e) => set({ email: e.target.value })} placeholder="info@bluefinaircon.com.au" style={inputStyle} />
            </div>
          </div>
        ))}
      </div>

      {/* Hours */}
      <div style={sectionStyle}>
        {sectionHeader("hours", "Business Hours")}
        {sectionBody("hours", (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem", paddingTop: "1rem" }}>
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
        ))}
      </div>

      {/* Service area */}
      <div style={sectionStyle}>
        {sectionHeader("serviceArea", "Service Area")}
        {sectionBody("serviceArea", (
          <div style={{ paddingTop: "1rem" }}>
            <label style={labelStyle}>Service Area Text</label>
            <input value={s.serviceArea} onChange={(e) => set({ serviceArea: e.target.value })} placeholder="Wollongong, Shellharbour, Kiama..." style={inputStyle} />
          </div>
        ))}
      </div>

      {/* Homepage Hero */}
      <div style={sectionStyle}>
        {sectionHeader("hero", "Homepage Hero")}
        {sectionBody("hero", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
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
              <textarea value={s.heroSubtext} onChange={(e) => set({ heroSubtext: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
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
        ))}
      </div>

      {/* Announcement Banner */}
      <div style={sectionStyle}>
        {sectionHeader("banner", "Announcement Banner", "#f5c518")}
        {sectionBody("banner", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
              <button
                onClick={() => setBanner({ enabled: !s.announcementBanner.enabled })}
                style={{
                  display: "inline-flex", alignItems: "center", gap: ".4rem",
                  background: s.announcementBanner.enabled ? "rgba(34,197,94,.15)" : "rgba(100,116,139,.1)",
                  border: `1px solid ${s.announcementBanner.enabled ? "rgba(34,197,94,.3)" : "#334155"}`,
                  borderRadius: ".5rem", padding: ".4rem .85rem", cursor: "pointer",
                  color: s.announcementBanner.enabled ? "#22c55e" : "#64748b", fontSize: ".8rem", fontWeight: 600,
                }}
              >
                {s.announcementBanner.enabled ? <Bell size={13} /> : <BellOff size={13} />}
                {s.announcementBanner.enabled ? "Banner is ON" : "Banner is OFF"}
              </button>
              <p style={{ color: "#475569", fontSize: ".72rem" }}>Toggle to show or hide the top banner on every page.</p>
            </div>
            <div>
              <label style={labelStyle}>Banner Message</label>
              <input value={s.announcementBanner.message} onChange={(e) => setBanner({ message: e.target.value })} placeholder="🔥 Book your pre-summer AC service now!" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Colour</label>
              <div style={{ display: "flex", gap: ".5rem", paddingTop: ".25rem" }}>
                {(["gold", "electric", "red", "green"] as const).map((c) => {
                  const colors = { gold: "#f5c518", electric: "#1e90ff", red: "#ef4444", green: "#22c55e" };
                  const labels = { gold: "Gold", electric: "Blue", red: "Red", green: "Green" };
                  const selected = s.announcementBanner.bgColor === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setBanner({ bgColor: c })}
                      style={{
                        display: "flex", alignItems: "center", gap: ".35rem",
                        background: selected ? `${colors[c]}22` : "#0f172a",
                        border: selected ? `2px solid ${colors[c]}` : "1px solid #1e293b",
                        borderRadius: ".45rem", padding: ".35rem .65rem",
                        cursor: "pointer", color: selected ? colors[c] : "#475569", fontSize: ".75rem", fontWeight: 600,
                      }}
                    >
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: colors[c], display: "inline-block" }} />
                      {labels[c]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div style={sectionStyle}>
        {sectionHeader("social", "Social Media Links", "#f5c518")}
        {sectionBody("social", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <p style={{ color: "#475569", fontSize: ".72rem" }}>Leave blank to hide the icon in the footer. Paste the full URL including https://</p>
            {([
              { key: "facebook" as const, Icon: Facebook, label: "Facebook URL", placeholder: "https://facebook.com/bluefinaircon" },
              { key: "instagram" as const, Icon: Instagram, label: "Instagram URL", placeholder: "https://instagram.com/bluefinaircon" },
              { key: "linkedin" as const, Icon: Linkedin, label: "LinkedIn URL", placeholder: "https://linkedin.com/company/bluefinaircon" },
              { key: "youtube" as const, Icon: Youtube, label: "YouTube URL", placeholder: "https://youtube.com/@bluefinaircon" },
            ]).map(({ key, Icon, label, placeholder }) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
                <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: ".4rem", background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={14} color="#64748b" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>{label}</label>
                  <input value={s.social[key]} onChange={(e) => setSocial({ [key]: e.target.value })} placeholder={placeholder} style={inputStyle} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── ABOUT PAGE ── */}
      <p style={{ color: "#475569", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", margin: "1.75rem 0 .6rem" }}>
        About Page
      </p>

      {/* About — Hero */}
      <div style={sectionStyle}>
        {sectionHeader("aboutHero", "About Page Hero", "#818cf8")}
        {sectionBody("aboutHero", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div>
              <label style={labelStyle}>Badge Text</label>
              <input value={s.about.heroBadge} onChange={(e) => setAbout({ heroBadge: e.target.value })} style={inputStyle} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
              <div>
                <label style={labelStyle}>Headline — Main Text</label>
                <input value={s.about.heroHeadlineMain} onChange={(e) => setAbout({ heroHeadlineMain: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Headline — Highlighted Text</label>
                <input value={s.about.heroHeadlineHighlight} onChange={(e) => setAbout({ heroHeadlineHighlight: e.target.value })} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Hero Subtext</label>
              <textarea value={s.about.heroSubtext} onChange={(e) => setAbout({ heroSubtext: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
          </div>
        ))}
      </div>

      {/* About — Stats */}
      <div style={sectionStyle}>
        {sectionHeader("aboutStats", "Stats Bar", "#818cf8")}
        {sectionBody("aboutStats", (
          <div style={{ paddingTop: ".5rem" }}>
            {s.about.stats.map((stat, i) => (
              <div key={i} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.about.stats.length, (dir) => moveStat(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                  {removeBtn(() => removeStat(i))}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: ".75rem" }}>
                    <div>
                      <label style={labelStyle}>Value</label>
                      <input value={stat.value} onChange={(e) => setStat(i, { value: e.target.value })} placeholder="12+" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Label</label>
                      <input value={stat.label} onChange={(e) => setStat(i, { label: e.target.value })} placeholder="Years in Business" style={inputStyle} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {addBtn(addStat, "Add Stat")}
          </div>
        ))}
      </div>

      {/* About — Our Story */}
      <div style={sectionStyle}>
        {sectionHeader("aboutStory", "Our Story Section", "#818cf8")}
        {sectionBody("aboutStory", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
              <div>
                <label style={labelStyle}>Heading — Main Text</label>
                <input value={s.about.storyHeadlineMain} onChange={(e) => setAbout({ storyHeadlineMain: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Heading — Highlighted Text</label>
                <input value={s.about.storyHeadlineHighlight} onChange={(e) => setAbout({ storyHeadlineHighlight: e.target.value })} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Story Paragraphs (one per line = one paragraph)</label>
              <textarea
                value={s.about.storyParagraphs.join("\n")}
                onChange={(e) =>
                  setAbout({
                    storyParagraphs: e.target.value
                      .split("\n")
                      .map((l) => l.trim())
                      .filter(Boolean),
                  })
                }
                rows={8}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <p style={{ color: "#475569", fontSize: ".7rem", marginTop: ".3rem" }}>Each line becomes a separate paragraph on the page.</p>
            </div>
          </div>
        ))}
      </div>

      {/* About — Milestones */}
      <div style={sectionStyle}>
        {sectionHeader("aboutMilestones", "Timeline / Milestones", "#818cf8")}
        {sectionBody("aboutMilestones", (
          <div style={{ paddingTop: ".5rem" }}>
            {s.about.milestones.map((m, i) => (
              <div key={i} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.about.milestones.length, (dir) => moveMilestone(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                  {removeBtn(() => removeMilestone(i))}
                  <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: ".75rem" }}>
                      <div>
                        <label style={labelStyle}>Year / Label</label>
                        <input value={m.year} onChange={(e) => setMilestone(i, { year: e.target.value })} placeholder="2012" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Title</label>
                        <input value={m.title} onChange={(e) => setMilestone(i, { title: e.target.value })} placeholder="Bluefin Founded" style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Description</label>
                      <textarea value={m.desc} onChange={(e) => setMilestone(i, { desc: e.target.value })} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {addBtn(addMilestone, "Add Milestone")}
          </div>
        ))}
      </div>

      {/* About — Team */}
      <div style={sectionStyle}>
        {sectionHeader("aboutTeam", "Meet the Team", "#818cf8")}
        {sectionBody("aboutTeam", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
              <div>
                <label style={labelStyle}>Heading — Main Text</label>
                <input value={s.about.teamHeadlineMain} onChange={(e) => setAbout({ teamHeadlineMain: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Heading — Highlighted Text</label>
                <input value={s.about.teamHeadlineHighlight} onChange={(e) => setAbout({ teamHeadlineHighlight: e.target.value })} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Section Subtext</label>
              <textarea value={s.about.teamSubtext} onChange={(e) => setAbout({ teamSubtext: e.target.value })} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            <div>
              <label style={labelStyle}>Hiring Note Text</label>
              <input value={s.about.teamHiringText} onChange={(e) => setAbout({ teamHiringText: e.target.value })} style={inputStyle} />
            </div>

            {s.about.teamMembers.map((member, i) => (
              <div key={i} style={{ ...rowStyle, marginTop: ".25rem", display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.about.teamMembers.length, (dir) => moveMember(i, dir))}
                <div style={{ flex: 1, position: "relative" }}>
                {removeBtn(() => removeMember(i))}
                <p style={{ color: "#60a5fa", fontSize: ".7rem", fontWeight: 600, marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  Team Member {i + 1}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", paddingRight: "2.5rem" }}>
                  {/* Photo upload */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "50%",
                        border: "2px solid #334155",
                        overflow: "hidden",
                        flexShrink: 0,
                        background: "#1e293b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#475569",
                        fontSize: ".7rem",
                        fontWeight: 700,
                      }}
                    >
                      {member.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <span>{member.initials || "?"}</span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                      <input
                        ref={(el) => { fileInputRefs.current[i] = el; }}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) uploadPhoto(i, file);
                          e.target.value = "";
                        }}
                      />
                      <button
                        onClick={() => fileInputRefs.current[i]?.click()}
                        disabled={uploadingIdx === i}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: ".35rem",
                          background: "rgba(30,144,255,.1)",
                          border: "1px solid rgba(30,144,255,.2)",
                          borderRadius: ".5rem",
                          padding: ".35rem .8rem",
                          color: "#60a5fa",
                          fontSize: ".75rem",
                          cursor: "pointer",
                        }}
                      >
                        {uploadingIdx === i ? <Loader2 size={12} /> : <Upload size={12} />}
                        {uploadingIdx === i ? "Uploading…" : "Upload Photo"}
                      </button>
                      {member.image && (
                        <button
                          onClick={() => setMember(i, { image: "" })}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: ".35rem",
                            background: "rgba(239,68,68,.1)",
                            border: "1px solid rgba(239,68,68,.2)",
                            borderRadius: ".5rem",
                            padding: ".35rem .8rem",
                            color: "#ef4444",
                            fontSize: ".75rem",
                            cursor: "pointer",
                          }}
                        >
                          <X size={12} /> Remove
                        </button>
                      )}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: ".75rem" }}>
                    <div>
                      <label style={labelStyle}>Initials</label>
                      <input value={member.initials} onChange={(e) => setMember(i, { initials: e.target.value })} placeholder="MT" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input value={member.name} onChange={(e) => setMember(i, { name: e.target.value })} placeholder="Matt T." style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Role / Title</label>
                      <input value={member.role} onChange={(e) => setMember(i, { role: e.target.value })} placeholder="Founder & Lead Electrician" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Bio</label>
                    <textarea value={member.bio} onChange={(e) => setMember(i, { bio: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Tags (comma-separated)</label>
                    <input
                      value={member.tags.join(", ")}
                      onChange={(e) => setMember(i, { tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
                      placeholder="A-Grade Electrician, Lic. L191263"
                      style={inputStyle}
                    />
                  </div>
                </div>
                </div>
              </div>
            ))}
            {addBtn(addMember, "Add Team Member")}
          </div>
        ))}
      </div>

      {/* About — Values */}
      <div style={sectionStyle}>
        {sectionHeader("aboutValues", "Our Values", "#818cf8")}
        {sectionBody("aboutValues", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem" }}>
              <div>
                <label style={labelStyle}>Section Badge Label</label>
                <input value={s.about.valuesSectionLabel} onChange={(e) => setAbout({ valuesSectionLabel: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Heading — Main Text</label>
                <input value={s.about.valuesHeadlineMain} onChange={(e) => setAbout({ valuesHeadlineMain: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Heading — Highlighted Text</label>
                <input value={s.about.valuesHeadlineHighlight} onChange={(e) => setAbout({ valuesHeadlineHighlight: e.target.value })} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Section Subtext</label>
              <textarea value={s.about.valuesSubtext} onChange={(e) => setAbout({ valuesSubtext: e.target.value })} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
            </div>

            {s.about.values.map((val, i) => (
              <div key={i} style={{ ...rowStyle, marginTop: ".25rem", display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.about.values.length, (dir) => moveValue(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                {removeBtn(() => removeValue(i))}
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                  <div>
                    <label style={labelStyle}>Icon</label>
                    <IconPicker value={val.icon} onChange={(v) => setValue(i, { icon: v })} options={VALUES_ICONS} />
                  </div>
                  <div>
                    <label style={labelStyle}>Title</label>
                    <input value={val.title} onChange={(e) => setValue(i, { title: e.target.value })} placeholder="Punctuality" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Description</label>
                    <textarea value={val.desc} onChange={(e) => setValue(i, { desc: e.target.value })} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                </div>
                </div>
              </div>
            ))}
            {addBtn(addValue, "Add Value")}
          </div>
        ))}
      </div>

      {/* About — CTA */}
      <div style={sectionStyle}>
        {sectionHeader("aboutCta", "About Page CTA", "#818cf8")}
        {sectionBody("aboutCta", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div>
              <label style={labelStyle}>CTA Headline</label>
              <input value={s.about.ctaHeadline} onChange={(e) => setAbout({ ctaHeadline: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>CTA Subtext</label>
              <textarea value={s.about.ctaSubtext} onChange={(e) => setAbout({ ctaSubtext: e.target.value })} rows={2} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── HOMEPAGE SECTIONS ── */}
      <p style={{ color: "#475569", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", margin: "1.75rem 0 .6rem" }}>
        Homepage Sections
      </p>

      {/* Services */}
      <div style={sectionStyle}>
        {sectionHeader("services", "Services", "#34d399")}
        {sectionBody("services", (
          <div style={{ paddingTop: ".5rem" }}>
            {s.services.map((service, i) => (
              <div key={i} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.services.length, (dir) => moveService(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                {removeBtn(() => removeService(i))}
                <p style={{ color: "#34d399", fontSize: ".7rem", fontWeight: 600, marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  Service {i + 1}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                  <div>
                    <label style={labelStyle}>Icon</label>
                    <IconPicker value={service.icon} onChange={(v) => setService(i, { icon: v })} options={SERVICES_ICONS} />
                  </div>
                  <div>
                    <label style={labelStyle}>Colour</label>
                    <select value={service.color} onChange={(e) => setService(i, { color: e.target.value as ServiceItem["color"] })} style={inputStyle}>
                      <option value="electric">Electric (Blue)</option>
                      <option value="gold">Gold (Yellow)</option>
                      <option value="emergency">Emergency (Red)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Title</label>
                    <input value={service.title} onChange={(e) => setService(i, { title: e.target.value })} placeholder="Air Conditioning Installation" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Description</label>
                    <textarea value={service.description} onChange={(e) => setService(i, { description: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Highlights (comma-separated)</label>
                    <input
                      value={service.highlights.join(", ")}
                      onChange={(e) => setService(i, { highlights: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
                      placeholder="Split Systems, Ducted Units, All Brands"
                      style={inputStyle}
                    />
                  </div>
                </div>
                </div>
              </div>
            ))}
            {addBtn(addService, "Add Service")}
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div style={sectionStyle}>
        {sectionHeader("whyChooseUs", "Why Choose Us", "#34d399")}
        {sectionBody("whyChooseUs", (
          <div style={{ paddingTop: ".5rem" }}>
            {s.whyChooseUs.map((feature, i) => (
              <div key={i} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.whyChooseUs.length, (dir) => moveFeature(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                {removeBtn(() => removeFeature(i))}
                <p style={{ color: "#34d399", fontSize: ".7rem", fontWeight: 600, marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  Feature {i + 1}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                  <div>
                    <label style={labelStyle}>Icon</label>
                    <IconPicker value={feature.icon} onChange={(v) => setFeature(i, { icon: v })} options={WHY_CHOOSE_ICONS} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
                    <div>
                      <label style={labelStyle}>Stat Value</label>
                      <input value={feature.stat} onChange={(e) => setFeature(i, { stat: e.target.value })} placeholder="100%" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Stat Label</label>
                      <input value={feature.statLabel} onChange={(e) => setFeature(i, { statLabel: e.target.value })} placeholder="Fully Covered" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Title</label>
                    <input value={feature.title} onChange={(e) => setFeature(i, { title: e.target.value })} placeholder="Licensed & Insured" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Description</label>
                    <textarea value={feature.description} onChange={(e) => setFeature(i, { description: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                </div>
                </div>
              </div>
            ))}
            {addBtn(addFeature, "Add Feature")}
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div style={sectionStyle}>
        {sectionHeader("howItWorks", "How It Works", "#34d399")}
        {sectionBody("howItWorks", (
          <div style={{ paddingTop: ".5rem" }}>
            {s.howItWorks.map((step, i) => (
              <div key={i} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.howItWorks.length, (dir) => moveStep(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                {removeBtn(() => removeStep(i))}
                <p style={{ color: "#34d399", fontSize: ".7rem", fontWeight: 600, marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  Step {i + 1}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: ".75rem" }}>
                    <div>
                      <label style={labelStyle}>Number</label>
                      <input value={step.number} onChange={(e) => setStep(i, { number: e.target.value })} placeholder="01" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Title</label>
                      <input value={step.title} onChange={(e) => setStep(i, { title: e.target.value })} placeholder="Call Us" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Icon</label>
                    <IconPicker value={step.icon} onChange={(v) => setStep(i, { icon: v })} options={HOW_IT_WORKS_ICONS} />
                  </div>
                  <div>
                    <label style={labelStyle}>Description</label>
                    <textarea value={step.description} onChange={(e) => setStep(i, { description: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                </div>
                </div>
              </div>
            ))}
            {addBtn(addStep, "Add Step")}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={sectionStyle}>
        {sectionHeader("footer", "Footer Content", "#34d399")}
        {sectionBody("footer", (
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", paddingTop: "1rem" }}>
            <div>
              <label style={labelStyle}>Tagline</label>
              <textarea value={s.footer.tagline} onChange={(e) => setFooter({ tagline: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
              <div>
                <label style={labelStyle}>Contractor Licence Number</label>
                <input value={s.footer.contractorLicence} onChange={(e) => setFooter({ contractorLicence: e.target.value })} placeholder="982390C" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Electrical Licence Number</label>
                <input value={s.footer.electricalLicence} onChange={(e) => setFooter({ electricalLicence: e.target.value })} placeholder="L191263" style={inputStyle} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div style={sectionStyle}>
        {sectionHeader("testimonials", "Customer Testimonials", "#34d399")}
        {sectionBody("testimonials", (
          <div style={{ paddingTop: ".5rem" }}>
            <p style={{ color: "#475569", fontSize: ".72rem", paddingTop: ".5rem", paddingBottom: ".25rem" }}>These reviews appear on the homepage. Add real quotes from happy customers.</p>
            {s.testimonials.map((t, i) => (
              <div key={t.id} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.testimonials.length, (dir) => moveTestimonial(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                  {removeBtn(() => removeTestimonial(i))}
                  <p style={{ color: "#34d399", fontSize: ".7rem", fontWeight: 600, marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".06em" }}>Review {i + 1}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem" }}>
                      <div>
                        <label style={labelStyle}>Name</label>
                        <input value={t.name} onChange={(e) => setTestimonial(i, { name: e.target.value })} placeholder="Sarah M." style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Location</label>
                        <input value={t.location} onChange={(e) => setTestimonial(i, { location: e.target.value })} placeholder="Wollongong, NSW" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Service Type</label>
                        <input value={t.service} onChange={(e) => setTestimonial(i, { service: e.target.value })} placeholder="Ducted A/C Installation" style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: ".75rem" }}>
                      <div>
                        <label style={labelStyle}>Initials (shown in avatar)</label>
                        <input value={t.initials} onChange={(e) => setTestimonial(i, { initials: e.target.value })} placeholder="SM" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Star Rating (1–5)</label>
                        <select value={t.rating} onChange={(e) => setTestimonial(i, { rating: Number(e.target.value) })} style={inputStyle}>
                          {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ★</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Review Text</label>
                      <textarea value={t.text} onChange={(e) => setTestimonial(i, { text: e.target.value })} rows={3} placeholder="Write the customer's review here…" style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {addBtn(addTestimonial, "Add Testimonial")}
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div style={sectionStyle}>
        {sectionHeader("faqs", "FAQs", "#34d399")}
        {sectionBody("faqs", (
          <div style={{ paddingTop: ".5rem" }}>
            {s.faqs.map((faq, i) => (
              <div key={faq.id} style={{ ...rowStyle, display: "flex", gap: ".6rem" }}>
                {moveButtons(i, s.faqs.length, (dir) => moveFaq(i, dir))}
                <div style={{ flex: 1, position: "relative", paddingRight: "2.5rem" }}>
                {removeBtn(() => removeFaq(i))}
                <p style={{ color: "#34d399", fontSize: ".7rem", fontWeight: 600, marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  FAQ {i + 1}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                  <div>
                    <label style={labelStyle}>Category</label>
                    <select value={faq.category} onChange={(e) => setFaq(i, { category: e.target.value })} style={inputStyle}>
                      <option value="aircon">Air Con</option>
                      <option value="electrical">Electrical</option>
                      <option value="pricing">Pricing</option>
                      <option value="service">Service</option>
                      <option value="aircon pricing">Air Con + Pricing</option>
                      <option value="electrical pricing">Electrical + Pricing</option>
                      <option value="service aircon">Service + Air Con</option>
                      <option value="service pricing">Service + Pricing</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Question</label>
                    <input value={faq.question} onChange={(e) => setFaq(i, { question: e.target.value })} placeholder="How much does installation cost?" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Answer</label>
                    <textarea value={faq.answer} onChange={(e) => setFaq(i, { answer: e.target.value })} rows={6} style={{ ...inputStyle, resize: "vertical" }} />
                    <p style={{ color: "#475569", fontSize: ".7rem", marginTop: ".3rem" }}>Use &quot;- item&quot; at the start of a line to create bullet points.</p>
                  </div>
                </div>
                </div>
              </div>
            ))}
            {addBtn(addFaq, "Add FAQ")}
          </div>
        ))}
      </div>

      {/* Sticky save at bottom */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #1e293b" }}>
        <button
          onClick={save}
          disabled={saving}
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", background: saved ? "#065f46" : "#0066CC", color: "#fff", borderRadius: ".6rem", padding: ".5rem 1.25rem", fontSize: ".85rem", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          {saving ? <Loader2 size={14} /> : saved ? <Check size={14} /> : <Save size={14} />}
          {saving ? "Saving…" : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
