export interface AreaData {
  slug: string;
  name: string;
  region: string;
  headline: string;
  intro: string;
  localDetail: string;
  services: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  nearbyAreas: string[];
}

export const areas: AreaData[] = [
  {
    slug: "wollongong",
    name: "Wollongong",
    region: "Illawarra",
    headline: "Air Conditioning & Electrical Services in Wollongong",
    intro: "Bluefin Air-Conditioning & Electrical is Wollongong's trusted local specialist for split system installation, ducted air con, and all electrical work. We're based in the Illawarra and know the local conditions — from coastal humidity to summer heat — better than anyone.",
    localDetail: "Wollongong's coastal climate means your air con works harder than in most places. Salt air accelerates wear on outdoor units, and the humidity makes cooling efficiency critical. We install and service systems specifically suited to coastal conditions, and we're only ever a short drive away when you need us.",
    services: [
      { title: "Split System Installation", desc: "Supply and install of all major brands including Mitsubishi Electric, Daikin, Fujitsu and LG. Fixed price, fully licensed." },
      { title: "Ducted Air Conditioning", desc: "Full ducted system design and installation for Wollongong homes. Zone control, energy efficiency, and clean ceiling aesthetics." },
      { title: "Air Con Servicing & Repairs", desc: "Annual service, gas top-ups, filter cleans, fault diagnosis. Most repairs completed same day." },
      { title: "Electrical Work", desc: "Switchboard upgrades, power points, safety switches, lighting, and EV charger installation throughout Wollongong." },
      { title: "Emergency Callouts", desc: "24/7 emergency response for electrical faults and air con failures across Wollongong and surrounds." },
    ],
    faqs: [
      { q: "How much does air con installation cost in Wollongong?", a: "Split system supply and install in Wollongong typically costs $1,200–$2,500 depending on the unit size and brand. We provide fixed-price quotes upfront with no hidden charges." },
      { q: "Do you service air conditioners in Wollongong?", a: "Yes — we service all brands of air conditioning throughout Wollongong and the Illawarra. Annual service visits start from $150–$250 for a standard split system." },
      { q: "Are you a licensed electrician in Wollongong?", a: "Yes. We hold Electrical Contractor Licence L191263 and Contractor Licence 982390C. All electrical work is carried out by fully licensed A-grade electricians." },
    ],
    nearbyAreas: ["Shellharbour", "Dapto", "Fairy Meadow", "Corrimal", "Thirroul"],
  },
  {
    slug: "shellharbour",
    name: "Shellharbour",
    region: "Illawarra",
    headline: "Air Conditioning & Electrical Services in Shellharbour",
    intro: "Bluefin Air-Conditioning & Electrical provides reliable air con installation, servicing, and electrical work throughout Shellharbour and the surrounding suburbs. Local, licensed, and always upfront on price.",
    localDetail: "Shellharbour's mix of new estates and established homes means we work across a wide range of installations — from first-time split systems in newer builds to full ducted upgrades in larger family homes. We know the area well and can usually get to you fast.",
    services: [
      { title: "Split System Installation", desc: "Supply and install of Mitsubishi Electric, Daikin, Fujitsu, LG and more. All brands, all budgets." },
      { title: "Ducted Air Conditioning", desc: "Full design and installation of ducted systems for Shellharbour homes. We handle everything from design to handover." },
      { title: "Air Con Servicing", desc: "Keep your system running at peak efficiency. Annual service visits, filter cleans, and full diagnostics." },
      { title: "Electrical Work", desc: "Power points, switchboard upgrades, safety switches, lighting, and more throughout Shellharbour." },
      { title: "Emergency Callouts", desc: "24/7 emergency availability for urgent electrical or air con faults in Shellharbour." },
    ],
    faqs: [
      { q: "Do you install air conditioning in Shellharbour?", a: "Yes — we install split systems, multi-head systems, and ducted air conditioning throughout Shellharbour and nearby suburbs including Albion Park, Oak Flats, and Warilla." },
      { q: "How quickly can you get to Shellharbour?", a: "We're based in the Illawarra so response times are fast. For non-emergency bookings we're usually available within a day or two. Emergency callouts are available 24/7." },
      { q: "Do you do electrical work in Shellharbour?", a: "Yes — we're fully licensed electricians operating throughout Shellharbour for switchboard upgrades, power points, lighting, safety switches and more." },
    ],
    nearbyAreas: ["Wollongong", "Dapto", "Kiama", "Albion Park", "Oak Flats"],
  },
  {
    slug: "kiama",
    name: "Kiama",
    region: "Illawarra",
    headline: "Air Conditioning & Electrical Services in Kiama",
    intro: "Bluefin Air-Conditioning & Electrical services Kiama and the surrounding south coast with expert air con installation, repairs, and electrical work. Fully licensed, locally based, free quotes.",
    localDetail: "Kiama's sea breezes are lovely — but come summer, a reliable air conditioning system makes a real difference. We install coastal-grade systems designed to handle the salt air environment, and service them regularly to extend their lifespan in these conditions.",
    services: [
      { title: "Split System Installation", desc: "Expert supply and install for Kiama homes and businesses. We recommend units suited to coastal conditions." },
      { title: "Ducted Air Conditioning", desc: "Full ducted system installation in Kiama. Ideal for larger homes wanting whole-home climate control." },
      { title: "Air Con Servicing", desc: "Coastal air is tough on outdoor units. Regular servicing extends the life of your system significantly." },
      { title: "Electrical Work", desc: "Licensed electrical work throughout Kiama — switchboards, power points, safety switches, and more." },
      { title: "Emergency Callouts", desc: "24/7 emergency callout service covering Kiama and surrounds." },
    ],
    faqs: [
      { q: "Do you install air conditioning in Kiama?", a: "Yes — we regularly install split systems and ducted air conditioning in Kiama. We recommend coastal-rated units where appropriate to handle the salt air environment." },
      { q: "How often should I service my air con in a coastal area like Kiama?", a: "We recommend servicing coastal air conditioners every 6–12 months. Salt air accelerates corrosion on outdoor units and reduces efficiency faster than inland areas." },
      { q: "Can you do electrical work in Kiama?", a: "Yes — we cover Kiama for all electrical work including switchboard upgrades, power points, lighting, and safety switch installation." },
    ],
    nearbyAreas: ["Shellharbour", "Wollongong", "Gerringong", "Nowra", "Berry"],
  },
  {
    slug: "dapto",
    name: "Dapto",
    region: "Illawarra",
    headline: "Air Conditioning & Electrical Services in Dapto",
    intro: "Bluefin Air-Conditioning & Electrical covers Dapto and surrounding areas for all air conditioning and electrical needs. Local tradespeople, licensed and insured, with fast response times.",
    localDetail: "Dapto is one of the fastest-growing areas in the Illawarra, with plenty of new builds and established homes needing quality air con and electrical work. We work across the full range — new installs, upgrades, servicing, and emergency callouts.",
    services: [
      { title: "Split System Installation", desc: "New split system supply and install throughout Dapto. All major brands available." },
      { title: "Multi-Head Systems", desc: "Cool multiple rooms from a single outdoor unit. Ideal for Dapto homes with multiple bedrooms." },
      { title: "Air Con Servicing", desc: "Annual service, gas top-ups, fault diagnosis. Keep your system running efficiently year-round." },
      { title: "Electrical Work", desc: "Licensed electricians covering Dapto for switchboard upgrades, power points, safety switches and more." },
      { title: "Emergency Callouts", desc: "Available 24/7 for urgent electrical faults and air con breakdowns in Dapto." },
    ],
    faqs: [
      { q: "Do you service air conditioners in Dapto?", a: "Yes — we regularly service air conditioners throughout Dapto and nearby suburbs. Annual service visits start from $150 for a standard split system." },
      { q: "Can you install a multi-head air con system in Dapto?", a: "Yes — multi-head systems are popular in Dapto homes. We design and install systems to suit your home layout, typically from around $3,500 for a 3-zone setup." },
    ],
    nearbyAreas: ["Wollongong", "Shellharbour", "Albion Park", "Horsley", "Kanahooka"],
  },
  {
    slug: "fairy-meadow",
    name: "Fairy Meadow",
    region: "Wollongong",
    headline: "Air Conditioning & Electrical Services in Fairy Meadow",
    intro: "Bluefin Air-Conditioning & Electrical provides expert air con installation and electrical services in Fairy Meadow and the northern suburbs of Wollongong. Fast response, fixed prices, fully licensed.",
    localDetail: "Fairy Meadow sits right between Wollongong and the coastal escarpment — a beautiful area with a mix of older homes and newer renovations. We're experienced with the full range of installation types in this area, from compact split systems to full electrical upgrades.",
    services: [
      { title: "Split System Installation", desc: "Supply and install of all major brands in Fairy Meadow homes. Usually completed in half a day." },
      { title: "Air Con Servicing & Repairs", desc: "Annual service and fault repairs. We stock common spare parts to fix most issues on the first visit." },
      { title: "Electrical Work", desc: "Switchboard upgrades, power points, safety switches, and lighting throughout Fairy Meadow." },
      { title: "Emergency Callouts", desc: "24/7 emergency availability for Fairy Meadow and the northern Wollongong suburbs." },
    ],
    faqs: [
      { q: "Do you install air conditioning in Fairy Meadow?", a: "Yes — we install split systems and other air conditioning types throughout Fairy Meadow. Most residential installations are completed in half a day." },
      { q: "Do you cover Thirroul and Bulli as well?", a: "Yes — we cover all northern Wollongong suburbs including Thirroul, Bulli, Austinmer, Corrimal, and Towradgi." },
    ],
    nearbyAreas: ["Wollongong", "Corrimal", "Thirroul", "Bulli", "Towradgi"],
  },
  {
    slug: "thirroul",
    name: "Thirroul",
    region: "Wollongong",
    headline: "Air Conditioning & Electrical Services in Thirroul",
    intro: "Bluefin Air-Conditioning & Electrical services Thirroul and the northern Illawarra for air conditioning installation, servicing, and licensed electrical work. Local, fast, and upfront on price.",
    localDetail: "Thirroul is a sought-after coastal suburb with many character homes that benefit from a carefully planned air conditioning install. We take care with routing pipework and conduit to keep the aesthetic clean, and recommend units appropriate for the coastal environment.",
    services: [
      { title: "Split System Installation", desc: "Neat, professional installs in Thirroul homes. We take care to minimise visible pipework and protect the look of your home." },
      { title: "Air Con Servicing", desc: "Coastal servicing specialist. Regular maintenance keeps your system efficient and extends its life." },
      { title: "Electrical Work", desc: "Licensed electrical services for Thirroul homes — from safety switch upgrades to full switchboard replacements." },
    ],
    faqs: [
      { q: "Do you install air con in Thirroul?", a: "Yes — we install air conditioning throughout Thirroul and the northern Illawarra coast. We're experienced with the older-style homes common in this area." },
    ],
    nearbyAreas: ["Wollongong", "Fairy Meadow", "Bulli", "Austinmer", "Helensburgh"],
  },
  {
    slug: "corrimal",
    name: "Corrimal",
    region: "Wollongong",
    headline: "Air Conditioning & Electrical Services in Corrimal",
    intro: "Bluefin Air-Conditioning & Electrical covers Corrimal and surrounding suburbs for air conditioning and electrical services. Licensed, insured, free quotes.",
    localDetail: "Corrimal's mix of established family homes and newer units means we handle a wide variety of installation types here — from straightforward split system installs to more complex electrical upgrades on older properties.",
    services: [
      { title: "Split System Installation", desc: "All brands, all sizes. Corrimal and surrounding suburb installs completed fast." },
      { title: "Air Con Servicing", desc: "Annual service, filter cleans, fault diagnosis. Starting from $150 for a split system." },
      { title: "Electrical Work", desc: "Switchboard upgrades, safety switches, power points throughout Corrimal." },
    ],
    faqs: [
      { q: "Do you cover Corrimal for electrical work?", a: "Yes — we're licensed electricians covering Corrimal for all electrical work including switchboard upgrades, power points, safety switches, and lighting." },
    ],
    nearbyAreas: ["Wollongong", "Fairy Meadow", "Balgownie", "Towradgi", "Bellambi"],
  },
  {
    slug: "albion-park",
    name: "Albion Park",
    region: "Shellharbour",
    headline: "Air Conditioning & Electrical Services in Albion Park",
    intro: "Bluefin Air-Conditioning & Electrical provides air conditioning and electrical services throughout Albion Park and the Shellharbour LGA. Fast response, fixed prices, fully licensed.",
    localDetail: "Albion Park and Albion Park Rail have seen significant residential growth in recent years. We work across both established homes and new builds, handling everything from first-time split system installs to complete electrical service upgrades.",
    services: [
      { title: "Split System Installation", desc: "New split system supply and install in Albion Park. All major brands, upfront pricing." },
      { title: "Ducted Air Conditioning", desc: "Full ducted installation for larger Albion Park homes and new builds." },
      { title: "Air Con Servicing", desc: "Annual maintenance and repairs across Albion Park and surrounds." },
      { title: "Electrical Work", desc: "Licensed electrical services — power points, switchboards, safety switches throughout Albion Park." },
    ],
    faqs: [
      { q: "Do you install air conditioning in Albion Park?", a: "Yes — we regularly work in Albion Park and Albion Park Rail. Split systems, multi-head, and ducted installations all available." },
    ],
    nearbyAreas: ["Shellharbour", "Dapto", "Oak Flats", "Warilla", "Kiama"],
  },
  {
    slug: "nowra",
    name: "Nowra",
    region: "Shoalhaven",
    headline: "Air Conditioning & Electrical Services in Nowra",
    intro: "Bluefin Air-Conditioning & Electrical extends its services south to Nowra and the Shoalhaven. Fully licensed for air conditioning installation, servicing, and electrical work throughout the region.",
    localDetail: "Nowra's inland location means hotter summers and cooler winters than the coast — making a quality air conditioning system even more important. We travel to Nowra for larger jobs and installs, and can often combine multiple jobs in one trip to keep costs competitive.",
    services: [
      { title: "Split System Installation", desc: "Supply and install throughout Nowra and Shoalhaven. All major brands." },
      { title: "Ducted Air Conditioning", desc: "Full ducted system design and installation for Nowra homes." },
      { title: "Air Con Servicing", desc: "Annual service and fault repairs for Nowra properties." },
      { title: "Electrical Work", desc: "Licensed electrical services for Nowra homes and businesses." },
    ],
    faqs: [
      { q: "Do you travel to Nowra for air con installation?", a: "Yes — we service Nowra and the Shoalhaven region. Travel fees may apply depending on the job. Call us on 0428 631 931 for a quote." },
    ],
    nearbyAreas: ["Kiama", "Shellharbour", "Berry", "Bomaderry", "Kangaroo Valley"],
  },
  {
    slug: "helensburgh",
    name: "Helensburgh",
    region: "Wollongong",
    headline: "Air Conditioning & Electrical Services in Helensburgh",
    intro: "Bluefin Air-Conditioning & Electrical covers Helensburgh and the northern Illawarra escarpment for air conditioning and electrical services. Locally based, fully licensed, fast response.",
    localDetail: "Helensburgh sits at the gateway between Sydney and the Illawarra. It's a unique microclimate — cooler in winter and shaded in parts — which influences the type of system we recommend. We know the area well and can advise on the right solution for your specific home.",
    services: [
      { title: "Split System Installation", desc: "Air con installation in Helensburgh and surrounds. Brands and sizes suited to the local climate." },
      { title: "Air Con Servicing", desc: "Annual service and repairs for Helensburgh properties." },
      { title: "Electrical Work", desc: "Licensed electrical services throughout Helensburgh." },
    ],
    faqs: [
      { q: "Do you install air conditioning in Helensburgh?", a: "Yes — we cover Helensburgh for air conditioning installation and servicing. It's a quick trip for us from the Illawarra." },
    ],
    nearbyAreas: ["Thirroul", "Fairy Meadow", "Wollongong", "Otford", "Stanwell Park"],
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}
