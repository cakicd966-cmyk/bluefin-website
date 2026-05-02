import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

function readJson<T>(filename: string, fallback: T): T {
  try {
    const raw = fs.readFileSync(path.join(DATA_DIR, filename), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(filename: string, data: unknown): void {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), "utf-8");
}

export interface GalleryItem {
  id: number;
  cat: string;
  catLabel: string;
  title: string;
  subtitle: string;
  image: string | null;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  initials: string;
}

export interface SiteSettings {
  phone: string;
  email: string;
  heroHeadline: string;
  heroSubtext: string;
  heroBadge: string;
  trustBadges: string[];
  serviceArea: string;
  hours: { weekdays: string; saturday: string; emergency: string };
}

export function getGallery(): GalleryItem[] {
  return readJson<GalleryItem[]>("gallery.json", []);
}

export function saveGallery(items: GalleryItem[]): void {
  writeJson("gallery.json", items);
}

export function getTestimonials(): Testimonial[] {
  return readJson<Testimonial[]>("testimonials.json", []);
}

export function saveTestimonials(items: Testimonial[]): void {
  writeJson("testimonials.json", items);
}

export function getSettings(): SiteSettings {
  return readJson<SiteSettings>("settings.json", {
    phone: "0428 631 931",
    email: "info@bluefinaircon.com.au",
    heroHeadline: "Wollongong's Local Air-Con & Electrical Experts",
    heroSubtext: "",
    heroBadge: "Wollongong & Illawarra — Licensed & Insured",
    trustBadges: ["Licensed & Insured", "5-Star Rated", "Same-Day Response"],
    serviceArea: "Wollongong, Illawarra and Greater Sydney",
    hours: { weekdays: "7:00am – 5:30pm", saturday: "8:00am – 2:00pm", emergency: "24/7 Available" },
  });
}

export function saveSettings(settings: SiteSettings): void {
  writeJson("settings.json", settings);
}
