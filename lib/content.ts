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

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutMilestone {
  year: string;
  title: string;
  desc: string;
}

export interface AboutTeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  image?: string;
}

export interface AboutValue {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  color: "electric" | "gold" | "emergency";
}

export interface WhyChooseFeature {
  icon: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface HowItWorksStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface FooterContent {
  tagline: string;
  contractorLicence: string;
  electricalLicence: string;
}

export interface AnnouncementBanner {
  enabled: boolean;
  message: string;
  bgColor: "gold" | "electric" | "red" | "green";
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface AboutPageContent {
  heroBadge: string;
  heroHeadlineMain: string;
  heroHeadlineHighlight: string;
  heroSubtext: string;
  stats: AboutStat[];
  storyHeadlineMain: string;
  storyHeadlineHighlight: string;
  storyParagraphs: string[];
  milestones: AboutMilestone[];
  teamHeadlineMain: string;
  teamHeadlineHighlight: string;
  teamSubtext: string;
  teamMembers: AboutTeamMember[];
  teamHiringText: string;
  valuesSectionLabel: string;
  valuesHeadlineMain: string;
  valuesHeadlineHighlight: string;
  valuesSubtext: string;
  values: AboutValue[];
  ctaHeadline: string;
  ctaSubtext: string;
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
  about: AboutPageContent;
  services: ServiceItem[];
  whyChooseUs: WhyChooseFeature[];
  howItWorks: HowItWorksStep[];
  footer: FooterContent;
  faqs: FaqItem[];
  testimonials: Testimonial[];
  announcementBanner: AnnouncementBanner;
  social: SocialLinks;
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

const DEFAULT_ABOUT: AboutPageContent = {
  heroBadge: "Our Story",
  heroHeadlineMain: "Built on Hard Work &",
  heroHeadlineHighlight: "Honest Tradiemanship",
  heroSubtext: "Bluefin Air-Conditioning & Electrical started with a toolbox, a ute, and a commitment to doing things properly. Over a decade later, that hasn't changed.",
  stats: [
    { value: "12+", label: "Years in Business" },
    { value: "500+", label: "Jobs Completed" },
    { value: "5.0", label: "Star Google Rating" },
    { value: "100%", label: "Satisfaction Guaranteed" },
  ],
  storyHeadlineMain: "From One Van to a Trusted",
  storyHeadlineHighlight: "NSW Team",
  storyParagraphs: [
    "Bluefin was founded in 2012 by a qualified electrician who'd spent years watching customers get burned by dodgy quotes, no-show tradies, and shoddy workmanship. He'd had enough. So he went out on his own.",
    "Starting with residential air con installs around Western Sydney, the business grew fast — not through ads, but through referrals. Neighbours telling neighbours. That's still how most of our work comes in today.",
    "As demand grew, the team expanded. We brought on a dedicated air-con crew and added more licensed electricians. Today, Bluefin handles everything from a simple split system install to full commercial electrical fitouts — always with the same attention to detail that built our reputation in the first place.",
    "We're still locally owned and operated. No franchises, no call centres. When you ring us, you're talking to someone who's actually going to show up at your door.",
  ],
  milestones: [
    { year: "2012", title: "Bluefin Founded", desc: "Started as a one-man operation in Western Sydney, focused on residential air con installs and small electrical jobs." },
    { year: "2015", title: "Expanded to Full Electrical", desc: "Added a dedicated electrical division with licensed A-grade electricians, covering switchboards, fit-outs, and safety inspections." },
    { year: "2018", title: "100th 5-Star Review", desc: "Hit our 100th 5-star Google review — a milestone that meant more to us than any award. Pure word of mouth." },
    { year: "2021", title: "Commercial Contracts", desc: "Landed our first major commercial contracts — schools, strata buildings, and retail fitouts across Greater Sydney." },
    { year: "Today", title: "Still Going Strong", desc: "500+ jobs completed, a tight-knit team of licensed tradies, and the same commitment to quality we started with." },
  ],
  teamHeadlineMain: "Meet the",
  teamHeadlineHighlight: "Team",
  teamSubtext: "Every job is done by a real, licensed tradie — not a sub-contractor you've never met. Here's who's behind the Bluefin name.",
  teamMembers: [
    { initials: "MT", name: "Matt T.", role: "Founder & Lead Electrician", bio: "A-grade electrician with 15+ years in the field. Matt started Bluefin after years of seeing customers get let down by other tradies. He still gets on the tools every day.", tags: ["A-Grade Electrician", "Lic. L191263"] },
    { initials: "JW", name: "Jake W.", role: "Senior A/C Technician", bio: "Jake is our go-to for complex ducted systems and commercial installs. With a background across all major brands, there's very little he hasn't seen — or fixed.", tags: ["RAC Licence", "Ducted Specialist"] },
    { initials: "SR", name: "Sam R.", role: "Electrician & Service Tech", bio: "Sam handles residential installs, service calls, and emergency callouts. Fast, friendly, and leaves every job site cleaner than he found it — customers always comment on it.", tags: ["Licensed Electrician", "Emergency Response"] },
  ],
  teamHiringText: "Interested in joining the Bluefin crew?",
  valuesSectionLabel: "What We Stand For",
  valuesHeadlineMain: "Our",
  valuesHeadlineHighlight: "Values",
  valuesSubtext: "These aren't buzzwords on a wall. They're the standards every Bluefin job is held to, every single time.",
  values: [
    { icon: "clock", title: "Punctuality", desc: "We show up when we say we will. If something changes, we call you first. Your time is as valuable as ours." },
    { icon: "shield", title: "Integrity", desc: "We quote honestly and bill exactly what we quote. No surprise charges, no upselling you on things you don't need." },
    { icon: "chart", title: "Quality", desc: "We don't cut corners. Every install is done to code, every repair is done to last. We take pride in work that passes inspection first go." },
    { icon: "users", title: "Community", desc: "We're locals. We sponsor local footy clubs, support local suppliers, and give back to the communities that have supported us." },
  ],
  ctaHeadline: "Ready to work with a team you can trust?",
  ctaSubtext: "Get a free, no-obligation quote. We'll get back to you fast.",
};

const DEFAULT_SERVICES: ServiceItem[] = [
  { icon: "wind", title: "Air Conditioning Installation", description: "Supply and install split systems, ducted units, and multi-head systems for homes and commercial spaces. All major brands stocked.", highlights: ["Split Systems", "Ducted Units", "Multi-Head Systems", "All Brands"], color: "electric" },
  { icon: "wrench", title: "Air Con Servicing & Repairs", description: "Regular maintenance, gas top-ups, filter cleans, and fault diagnosis to keep your system running at peak efficiency year-round.", highlights: ["Annual Servicing", "Gas Recharges", "Fault Diagnosis", "Filter Cleans"], color: "gold" },
  { icon: "zap", title: "Electrical Work", description: "Licensed electricians for residential and commercial fit-outs, switchboard upgrades, power points, lighting, and safety inspections.", highlights: ["Switchboard Upgrades", "Power Points", "Lighting", "Safety Checks"], color: "electric" },
  { icon: "alert", title: "Emergency Callouts", description: "Electrical faults and air con breakdowns don't wait — neither do we. Fast response emergency service across NSW when you need it most.", highlights: ["24/7 Availability", "Fast Response", "All NSW", "No Call-Out Delays"], color: "emergency" },
];

const DEFAULT_WHY_CHOOSE_US: WhyChooseFeature[] = [
  { icon: "shield", title: "Licensed & Insured", description: "Fully licensed electricians and air-con techs. Work covered by full public liability insurance for your complete peace of mind.", stat: "100%", statLabel: "Fully Covered" },
  { icon: "map", title: "Local NSW Tradies", description: "We live and work right here in NSW. No call centres, no sub-contractors — just your local team who know the area.", stat: "Local", statLabel: "NSW Based" },
  { icon: "clock", title: "Fast Response", description: "Same-day bookings available. For emergencies, we aim to be on-site within hours — not days. Your comfort can't wait.", stat: "Same", statLabel: "Day Response" },
  { icon: "badge", title: "Quality Guaranteed", description: "We stand behind every job with a workmanship guarantee. If something's not right, we come back and fix it. No arguments.", stat: "100%", statLabel: "Satisfaction" },
];

const DEFAULT_HOW_IT_WORKS: HowItWorksStep[] = [
  { number: "01", icon: "phone", title: "Call Us", description: "Give us a ring or fill in the contact form. Tell us what you need and where you are — we'll listen and ask the right questions." },
  { number: "02", icon: "file", title: "We Quote", description: "We'll provide a clear, upfront quote with no hidden costs. For most jobs we can quote over the phone or via a quick site visit." },
  { number: "03", icon: "check", title: "Job Done", description: "Our licensed technicians arrive on time, complete the work to the highest standard, and clean up before they leave. Simple as that." },
];

const DEFAULT_FOOTER: FooterContent = {
  tagline: "Your trusted local air-conditioning and electrical specialists serving Wollongong, Illawarra and Sydney. Licensed, insured, and committed to quality work on every job.",
  contractorLicence: "982390C",
  electricalLicence: "L191263",
};

const DEFAULT_FAQS: FaqItem[] = [
  { id: 1, question: "How much does air conditioning installation cost?", category: "aircon pricing", answer: "Installation cost depends on the type and size of system, and your home's layout. As a rough guide:\n\n- Split system (supply & install): from $1,200–$2,500+ depending on the kW rating and brand\n- Multi-head systems: from $3,500+ for a 3-zone setup\n- Ducted systems: from $6,000–$15,000+ depending on home size and zones\n\nEvery job is different. Request a free quote — we'll give you a fixed price upfront with no surprises." },
  { id: 2, question: "What air conditioning brands do you stock and install?", category: "aircon", answer: "We work with all major air conditioning brands including:\n\n- Mitsubishi Electric — our most popular choice for residential\n- Daikin — excellent for ducted systems\n- Fujitsu — reliable, great value\n- LG — strong multi-head range\n- Samsung, Panasonic, Carrier, Actron Air — and more\n\nWe'll recommend the right brand and model for your situation." },
  { id: 3, question: "Do you service my area?", category: "service aircon", answer: "We operate across the Illawarra and Wollongong regions, including:\n\n- Wollongong (all suburbs)\n- Shellharbour, Albion Park, Oak Flats\n- Kiama, Gerringong, Berry\n- Dapto, Horsley, Kanahooka\n- Fairy Meadow, Corrimal, Thirroul, Bulli\n- Helensburgh and northern Illawarra\n- Nowra / Shoalhaven\n\nCall us on 0428 631 931 — if we can get there, we will." },
  { id: 4, question: "What size air conditioner do I need for my room?", category: "aircon", answer: "Sizing depends on room area, ceiling height, insulation, and sun exposure:\n\n- Up to 20m² (small bedroom): 2.5kW\n- 20–35m² (main bedroom, study): 3.5kW\n- 35–60m² (open-plan lounge): 6–7kW\n- 60–80m²+ (large living area): 8–9kW+\n\nWe always assess the space before recommending a unit — an undersized system will struggle in summer." },
  { id: 5, question: "How often should I service my air conditioner?", category: "aircon pricing", answer: "We recommend servicing at least once a year, ideally before summer. Regular servicing:\n\n- Extends the life of your unit\n- Keeps it running at peak efficiency (lower power bills)\n- Catches small issues before they become expensive repairs\n- Keeps the air quality clean\n\nService visits start from around $150–$250 for a standard split system." },
  { id: 6, question: "How much does a switchboard upgrade cost?", category: "electrical pricing", answer: "Switchboard upgrade costs vary depending on the size of your home and current board condition:\n\n- Single-phase upgrade (standard home): $1,500–$2,500\n- Three-phase upgrade: $2,500–$4,000+\n- Adding safety switches/RCDs: from $300\n\nIf your switchboard is more than 25 years old or has ceramic fuses, it's worth getting assessed. We offer free quotes." },
  { id: 7, question: "Are you licensed and insured?", category: "service", answer: "Yes — fully licensed and insured.\n\n- Contractor Licence: 982390C (air conditioning & refrigeration)\n- Electrical Contractor Licence: L191263 (A-grade electricians)\n\nWe carry full public liability insurance on every job. You can ask to see our licence details at any time." },
  { id: 8, question: "Do you offer emergency or after-hours call-outs?", category: "service", answer: "Yes. We offer 24/7 emergency callouts for urgent electrical faults and air con failures.\n\nIf you have a safety issue — sparking outlets, tripped boards that won't reset, or your system has died in a heatwave — call us immediately on 0428 631 931.\n\nEmergency call-out rates apply outside normal business hours. We'll always tell you the cost upfront." },
  { id: 9, question: "My air conditioner isn't cooling properly. What could be wrong?", category: "aircon", answer: "The most common reasons an air conditioner stops cooling:\n\n- Dirty filters — restricts airflow (the most common fix — clean them monthly)\n- Low refrigerant gas — the unit has a slow leak and needs a top-up\n- Dirty condenser coils (outdoor unit) — reduces heat exchange efficiency\n- The unit is undersized for the space\n- Faulty compressor or sensor — requires professional diagnosis\n\nBefore calling us, check the filter is clean and the outdoor unit isn't blocked. Most issues are diagnosed and fixed in a single visit." },
  { id: 10, question: "Can I do my own electrical work in NSW?", category: "electrical", answer: "No — not in NSW. All electrical work beyond very minor tasks must be carried out by a licensed electrician. This is a legal requirement under Australian law.\n\nUnlicensed electrical work is dangerous, can void your home insurance, and may result in significant fines. If you're in doubt, call us — we can often quote over the phone for straightforward jobs." },
  { id: 11, question: "Do you provide written quotes before starting work?", category: "service pricing", answer: "Always. We provide clear, written quotes before any work begins. The quote includes:\n\n- Itemised labour and material costs\n- The scope of work — exactly what will and won't be included\n- Any conditions or assumptions\n\nWe never start work without your approval. Once you accept a quote, that's the price — no hidden extras." },
  { id: 12, question: "Do you offer a warranty on your work?", category: "service", answer: "Yes. All workmanship is covered by our labour warranty — if something we installed or repaired fails due to our workmanship, we'll come back and fix it at no charge.\n\nEquipment and product warranties are provided by the manufacturer — typically 5 years for air conditioning units and 1–2 years for electrical components." },
];

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah M.", location: "Wollongong, NSW", rating: 5, text: "Bluefin installed a new ducted system in our home and the whole process was seamless. They arrived on time, the install was super clean, and the team were friendly and professional. Highly recommend to anyone in the area!", service: "Ducted A/C Installation", initials: "SM" },
  { id: 2, name: "Jason R.", location: "Shellharbour, NSW", rating: 5, text: "Called them on a Friday afternoon when my split system stopped working in 38-degree heat. They were at my house within a couple of hours and had it fixed before dinner. Brilliant service, fair price. Will definitely use again.", service: "Emergency A/C Repair", initials: "JR" },
  { id: 3, name: "The Hendersons", location: "Kiama, NSW", rating: 5, text: "We had them do a full switchboard upgrade and install new power points throughout the house. The work was neat, tidy, and passed inspection first go. Very knowledgeable team who explained everything clearly. Top tradies.", service: "Electrical & Switchboard", initials: "TH" },
];

const DEFAULT_ANNOUNCEMENT: AnnouncementBanner = {
  enabled: false,
  message: "🔥 Book your pre-summer AC service now — spots filling fast! Call 0428 631 931.",
  bgColor: "gold",
};

const DEFAULT_SOCIAL: SocialLinks = {
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
};

export function getSettings(): SiteSettings {
  const saved = readJson<Partial<SiteSettings>>("settings.json", {});
  return {
    phone: saved.phone ?? "0428 631 931",
    email: saved.email ?? "info@bluefinaircon.com.au",
    heroHeadline: saved.heroHeadline ?? "Wollongong's Local Air-Con & Electrical Experts",
    heroSubtext: saved.heroSubtext ?? "",
    heroBadge: saved.heroBadge ?? "Wollongong & Illawarra — Licensed & Insured",
    trustBadges: saved.trustBadges ?? ["Licensed & Insured", "5-Star Rated", "Same-Day Response"],
    serviceArea: saved.serviceArea ?? "Wollongong, Illawarra and Greater Sydney",
    hours: saved.hours ?? { weekdays: "7:00am – 5:30pm", saturday: "8:00am – 2:00pm", emergency: "24/7 Available" },
    about: saved.about ?? DEFAULT_ABOUT,
    services: saved.services ?? DEFAULT_SERVICES,
    whyChooseUs: saved.whyChooseUs ?? DEFAULT_WHY_CHOOSE_US,
    howItWorks: saved.howItWorks ?? DEFAULT_HOW_IT_WORKS,
    footer: saved.footer ?? DEFAULT_FOOTER,
    faqs: saved.faqs ?? DEFAULT_FAQS,
    testimonials: saved.testimonials ?? DEFAULT_TESTIMONIALS,
    announcementBanner: saved.announcementBanner ?? DEFAULT_ANNOUNCEMENT,
    social: saved.social ?? DEFAULT_SOCIAL,
  };
}

export function saveSettings(settings: SiteSettings): void {
  writeJson("settings.json", settings);
}
