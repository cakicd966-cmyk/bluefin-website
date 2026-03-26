export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string; colour: "blue" | "gold" | "red" | "green" }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: string;
  image: string;
  imageAlt: string;
  author: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  content: ContentBlock[];
}

export const posts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  // POST 1
  // ─────────────────────────────────────────────────────────────
  {
    slug: "5-signs-aircon-needs-servicing",
    category: "Air Conditioning",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "5 Signs Your Air Con Needs Servicing Right Now",
    excerpt:
      "Ignoring your air conditioner's warning signs can turn a cheap service call into an expensive repair. Learn the five telltale signs that your system needs professional attention before summer hits.",
    date: "March 18, 2026",
    readTime: "4 min read",
    icon: "❄️",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80&fit=crop",
    imageAlt: "HVAC technician servicing an air conditioning unit",
    author: "Bluefin Air-Conditioning & Electrical",
    seo: {
      title: "5 Signs Your Air Con Needs Servicing — Wollongong",
      description:
        "Is your air conditioner blowing warm air, making strange noises or leaking water? These 5 warning signs mean it's time to call a Wollongong air con technician. Bluefin serves Illawarra & Sydney.",
      keywords:
        "air con servicing Wollongong, air conditioner repair Illawarra, air con not cooling, air conditioner making noise Wollongong, air con leaking water Illawarra",
    },
    content: [
      {
        type: "p",
        text: "Your air conditioner works hard — especially through a Wollongong summer. Like any machine, it gives you warning signs before it breaks down completely. The problem is, most homeowners ignore these signs until the unit stops working entirely, turning what could have been a $180 service call into a $900 repair.",
      },
      {
        type: "p",
        text: "Here are the five most common signs we see across Illawarra homes that tell us a system needs professional attention — and why catching them early saves you money.",
      },
      {
        type: "h2",
        text: "1. Warm or Weak Airflow",
      },
      {
        type: "p",
        text: "If your air con is running but the air coming out feels warm or the airflow seems weaker than usual, something is wrong. The most common causes are low refrigerant (gas), a dirty filter blocking airflow, a failing compressor, or ice build-up on the evaporator coil.",
      },
      {
        type: "p",
        text: "A simple filter clean can sometimes fix this immediately. But if that doesn't help, it's likely a refrigerant issue or a component starting to fail. Either way, don't run the system hard in this state — you risk burning out the compressor, which is one of the most expensive parts to replace.",
      },
      {
        type: "callout",
        colour: "blue",
        text: "Quick test: Hold your hand in front of the indoor unit. The air should feel noticeably cool within 60 seconds of turning it on. If it doesn't, call a technician.",
      },
      {
        type: "h2",
        text: "2. Strange Noises — Rattling, Grinding or Squealing",
      },
      {
        type: "p",
        text: "A healthy air conditioner runs quietly. If you start hearing rattling, grinding, clicking, squealing or banging, your system is trying to tell you something is loose, worn out or broken inside.",
      },
      {
        type: "ul",
        items: [
          "Rattling — loose panels, screws or debris caught in the fan",
          "Grinding — worn motor bearings (act fast, this gets expensive quickly)",
          "Squealing — belt slipping or motor bearings failing",
          "Clicking on startup — normal, but continuous clicking means a control problem",
          "Banging or clanking — a loose or broken fan blade hitting the housing",
        ],
      },
      {
        type: "p",
        text: "Turn the unit off if you hear grinding or banging. Running it further can cause irreversible damage to the motor or fan assembly.",
      },
      {
        type: "h2",
        text: "3. Bad Smells — Musty, Burning or Chemical",
      },
      {
        type: "p",
        text: "Odours coming from your air con are always a red flag. The type of smell tells you what the problem is:",
      },
      {
        type: "ul",
        items: [
          "Musty or mouldy smell — mould growing inside the unit or ducts (common in humid Illawarra summers)",
          "Burning or electrical smell — overheating wiring or motor (turn the unit off immediately)",
          "Sweet or chemical smell — refrigerant leak (harmful to breathe, call us straight away)",
          "Rotten egg or sulphur smell — could indicate a gas issue nearby, not the AC itself",
        ],
      },
      {
        type: "callout",
        colour: "red",
        text: "If you smell burning or a sweet chemical odour, turn the unit off at the wall and call us immediately. These are safety issues, not just comfort issues.",
      },
      {
        type: "h2",
        text: "4. Water Leaking Around the Indoor Unit",
      },
      {
        type: "p",
        text: "A small amount of condensation is normal. But if you're seeing water dripping from the indoor unit, pooling on the floor below it, or water stains on the wall, the drainage system is blocked or the unit is icing up.",
      },
      {
        type: "p",
        text: "Left unattended, water leaks cause mould growth in the wall cavity and ceiling damage — which is far more expensive to fix than the original air con problem. We see this a lot in older Wollongong and Shellharbour homes where the drain lines haven't been cleared in years.",
      },
      {
        type: "h2",
        text: "5. Significantly Higher Power Bills",
      },
      {
        type: "p",
        text: "If your electricity bill has jumped but you haven't changed your usage habits, your air con may be working harder than it should to achieve the same result. A dirty coil, low refrigerant or failing components all reduce efficiency — the system uses more electricity to do less work.",
      },
      {
        type: "p",
        text: "An annual service typically restores efficiency to near-original levels and pays for itself within one or two electricity billing cycles.",
      },
      {
        type: "h2",
        text: "How Often Should You Service Your Air Con?",
      },
      {
        type: "p",
        text: "For most Illawarra homes, an annual service before summer (September–October) is the sweet spot. If you run your system year-round or have a large ducted system, twice a year is worth it. See our full guide on service frequency for more detail.",
      },
      {
        type: "callout",
        colour: "gold",
        text: "Bluefin services all major brands across Wollongong, Shellharbour, Kiama, Dapto and the wider Illawarra. Call 0428 631 931 or fill in our quote form to book a service.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────────────────────
  {
    slug: "ducted-vs-split-system",
    category: "Air Conditioning",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "Ducted vs Split System: Which Is Right for Your Home?",
    excerpt:
      "Choosing between a ducted and split system can be confusing. We break down the pros, cons, and costs of each option so you can make the smartest choice for your home and budget.",
    date: "March 10, 2026",
    readTime: "6 min read",
    icon: "🌡️",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80&fit=crop",
    imageAlt: "Modern home interior with clean living space",
    author: "Bluefin Air-Conditioning & Electrical",
    seo: {
      title: "Ducted vs Split System Air Con: Which Is Right for You?",
      description:
        "Not sure whether to install a ducted or split system air conditioner? Bluefin's Wollongong technicians break down the costs, pros and cons for Illawarra homes and businesses.",
      keywords:
        "ducted air conditioning Wollongong, split system installation Illawarra, ducted vs split system NSW, air conditioning cost Wollongong, best air con for home Illawarra",
    },
    content: [
      {
        type: "p",
        text: "It's one of the most common questions we get from Wollongong and Illawarra homeowners: should I go ducted or split system? Both do the same job — cool (and sometimes heat) your home — but they work very differently and suit different situations. Here's how to make the right call for your property.",
      },
      {
        type: "h2",
        text: "What Is a Split System?",
      },
      {
        type: "p",
        text: "A split system consists of two units — an indoor unit mounted on the wall and an outdoor compressor unit. They're connected by refrigerant lines and electrical cabling. Each split system cools one zone (usually one room or an open-plan area).",
      },
      {
        type: "p",
        text: "A multi-head split system uses one outdoor unit connected to multiple indoor units, letting you cool several rooms independently. This is a popular middle-ground option for Illawarra homes that don't want full ducted but need more than one room covered.",
      },
      {
        type: "h2",
        text: "What Is a Ducted System?",
      },
      {
        type: "p",
        text: "A ducted system uses a single large unit (usually in the roof space or under the floor) connected to a network of ducts and vents throughout the home. Every room with a vent can be cooled and heated from the one system, controlled centrally or by zone.",
      },
      {
        type: "p",
        text: "Ducted is the more discreet option — the only thing visible inside your home is small ceiling vents. It's also the most powerful option for whole-home climate control.",
      },
      {
        type: "h2",
        text: "Cost Comparison",
      },
      {
        type: "table",
        headers: ["", "Split System", "Multi-Head Split", "Ducted System"],
        rows: [
          ["Supply & Install (approx.)", "$1,200 – $3,500", "$3,500 – $8,000", "$8,000 – $18,000+"],
          ["Running costs", "Low (one zone)", "Medium", "Higher (whole home)"],
          ["Installation disruption", "Minimal", "Moderate", "Significant"],
          ["Whole-home coverage", "No", "Partial", "Yes"],
          ["Visible indoors", "Wall unit", "Wall units", "Ceiling vents only"],
          ["Best for", "1–3 rooms", "3–5 rooms", "Whole home"],
        ],
      },
      {
        type: "callout",
        colour: "blue",
        text: "All prices are approximate and depend on brand, home size and existing infrastructure. Contact Bluefin for a free quote tailored to your Wollongong or Illawarra property.",
      },
      {
        type: "h2",
        text: "When a Split System Makes Sense",
      },
      {
        type: "ul",
        items: [
          "You only need to cool one or two rooms (bedroom, living area)",
          "You're renting and can't do major work",
          "Budget is a priority right now",
          "Your home is older with no roof space for ducted",
          "You want fast installation with minimal disruption",
        ],
      },
      {
        type: "h2",
        text: "When Ducted Makes Sense",
      },
      {
        type: "ul",
        items: [
          "You want to cool the whole home from one system",
          "Aesthetics matter — you don't want wall units in every room",
          "You're building new or doing a major renovation (ideal time to install)",
          "You have a large open-plan home where split systems aren't practical",
          "You want zone control — cool bedrooms at night, living areas during the day",
        ],
      },
      {
        type: "h2",
        text: "What We Recommend for Most Illawarra Homes",
      },
      {
        type: "p",
        text: "For most existing homes in Wollongong, Shellharbour and Kiama, a multi-head split system gives the best balance of cost, coverage and performance. You get independent control over multiple rooms without the cost and disruption of a full ducted install.",
      },
      {
        type: "p",
        text: "For new builds or large homes doing a renovation, ducted is worth the investment — it adds property value and is much easier to install before the plasterboard goes up.",
      },
      {
        type: "callout",
        colour: "gold",
        text: "Not sure what suits your home? Bluefin offers free, no-obligation quotes across the Illawarra and Sydney. We'll inspect the space and recommend the right system for your needs and budget.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────────────────────
  {
    slug: "reduce-aircon-running-costs",
    category: "Energy Saving",
    categoryColor: "bg-green-50 text-green-700",
    title: "How to Cut Your Air Con Running Costs This Summer",
    excerpt:
      "Your air conditioner doesn't have to send your power bill through the roof. These practical tips from our techs can reduce your cooling costs by up to 30% — without sacrificing comfort.",
    date: "February 28, 2026",
    readTime: "5 min read",
    icon: "💰",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&fit=crop",
    imageAlt: "Energy efficient home cooling in summer",
    author: "Bluefin Air-Conditioning & Electrical",
    seo: {
      title: "How to Cut Air Con Running Costs This Summer | Illawarra",
      description:
        "Practical tips from Bluefin's Wollongong technicians to reduce your air conditioning electricity costs by up to 30%. Simple changes that make a real difference to your power bill.",
      keywords:
        "reduce air con running costs Wollongong, air conditioning electricity bill Illawarra, energy efficient air con NSW, cheap cooling tips Wollongong, lower power bill air con",
    },
    content: [
      {
        type: "p",
        text: "Wollongong summers are no joke — the humidity makes it worse than the temperature alone. Your air con ends up running for weeks at a time, and the electricity bill reflects it. The good news is that a few simple changes can cut your cooling costs significantly without making your home any less comfortable.",
      },
      {
        type: "p",
        text: "These are the tips our technicians give every customer when we're on site. They're based on what actually works in real Illawarra homes.",
      },
      {
        type: "h2",
        text: "1. Set the Temperature to 24–26°C, Not 18°C",
      },
      {
        type: "p",
        text: "Every degree lower you set your thermostat increases energy consumption by approximately 10%. Most people set the temperature way too cold — they come in from outside feeling hot and crank it down to 18°C, then get cold and grab a blanket. That's just wasted electricity.",
      },
      {
        type: "p",
        text: "24–26°C is comfortable for most people and uses significantly less power than 20°C. Give the room 20 minutes to cool down before deciding it's not cold enough.",
      },
      {
        type: "callout",
        colour: "green",
        text: "Tip: Setting your thermostat to 24°C instead of 20°C can reduce your cooling costs by up to 40%. It's the single biggest change you can make.",
      },
      {
        type: "h2",
        text: "2. Use the Timer to Pre-Cool Your Home",
      },
      {
        type: "p",
        text: "Running your air con before the heat peaks is more efficient than trying to cool a hot house. Set it to come on an hour before you get home, or before the afternoon heat builds up. A house at 28°C is much easier to cool than one at 35°C.",
      },
      {
        type: "p",
        text: "Most modern split systems have a timer function. If yours doesn't, or if you want to control it remotely, look at smart plugs or a system with Wi-Fi control — Daikin, Fujitsu and Mitsubishi all offer these.",
      },
      {
        type: "h2",
        text: "3. Keep the Filters Clean",
      },
      {
        type: "p",
        text: "A dirty filter is like trying to breathe through a cloth — the unit has to work much harder to pull air through it. This increases electricity use and puts stress on the compressor. A clean filter can improve efficiency by 5–15%.",
      },
      {
        type: "p",
        text: "Most split system filters should be cleaned every 4–6 weeks during heavy use. It takes 5 minutes — slide out the filter, rinse it under a tap, let it dry, and slide it back in.",
      },
      {
        type: "h2",
        text: "4. Use Ceiling Fans Alongside Your Air Con",
      },
      {
        type: "p",
        text: "A ceiling fan uses about as much electricity as a light bulb. When used with your air con, it circulates the cold air around the room much more effectively — allowing you to run the air con at a higher temperature setting for the same level of comfort.",
      },
      {
        type: "p",
        text: "This combination typically cuts air con runtime by 20–30%. Make sure your fan is set to run anti-clockwise in summer (pushing air down).",
      },
      {
        type: "h2",
        text: "5. Block the Heat Before It Gets In",
      },
      {
        type: "p",
        text: "Your air con is fighting against every bit of heat entering the home. Close blinds and curtains on north and west-facing windows before the sun hits them. External awnings and shade sails are even more effective. Keep doors and windows closed while the system is running.",
      },
      {
        type: "ul",
        items: [
          "Close west-facing blinds by early afternoon",
          "Use blockout curtains in bedrooms",
          "Seal gaps under doors and around windows",
          "Consider external roller blinds on windows that get direct afternoon sun",
        ],
      },
      {
        type: "h2",
        text: "6. Service Your System Annually",
      },
      {
        type: "p",
        text: "An air conditioner that hasn't been serviced in a few years can be running at 20–30% below its rated efficiency. Dirty coils, low refrigerant and worn components all contribute. An annual service by a licensed technician restores the system to peak performance — and typically pays for itself in energy savings within one or two billing cycles.",
      },
      {
        type: "callout",
        colour: "gold",
        text: "Book a pre-summer service with Bluefin before October and get your system running at full efficiency before the heat hits. We service all major brands across the Illawarra and Sydney.",
      },
      {
        type: "h2",
        text: "7. Consider Upgrading an Old, Inefficient Unit",
      },
      {
        type: "p",
        text: "If your air con is more than 10 years old, the efficiency gains from a new inverter unit can be dramatic. Modern inverter split systems use up to 50% less electricity than non-inverter units from a decade ago. If your current unit is struggling, do the maths — a new unit may pay for itself in 3–4 years of energy savings.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────────────────────
  {
    slug: "electrical-warning-signs",
    category: "Electrical Safety",
    categoryColor: "bg-red-50 text-red-700",
    title: "Warning Signs of Electrical Problems You Shouldn't Ignore",
    excerpt:
      "Faulty wiring is one of the leading causes of house fires in Australia. Know the warning signs — flickering lights, tripping breakers, burning smells — and when to call a licensed electrician immediately.",
    date: "February 14, 2026",
    readTime: "5 min read",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80&fit=crop",
    imageAlt: "Licensed electrician inspecting electrical wiring",
    author: "Bluefin Air-Conditioning & Electrical",
    seo: {
      title: "Electrical Warning Signs You Shouldn't Ignore | Wollongong",
      description:
        "Flickering lights, burning smells and tripping breakers are warning signs of serious electrical faults. Bluefin's licensed Wollongong electricians explain what to watch for and when to act.",
      keywords:
        "electrical warning signs Wollongong, electrician Wollongong, faulty wiring Illawarra, tripping circuit breaker NSW, flickering lights electrical problem, burning smell electrical Wollongong",
    },
    content: [
      {
        type: "p",
        text: "Faulty wiring is one of the leading causes of house fires in Australia. The scary thing is that many electrical faults develop slowly and quietly — they give you warning signs for months before something serious happens. Knowing what to look for could save your home, and potentially your family's lives.",
      },
      {
        type: "p",
        text: "As licensed electricians working across Wollongong and the Illawarra, these are the warning signs we see most often in homes — and the ones that absolutely should not be ignored.",
      },
      {
        type: "h2",
        text: "1. Flickering or Dimming Lights",
      },
      {
        type: "p",
        text: "Occasional flickering when a large appliance like a washing machine or air conditioner kicks on is relatively normal — it's a brief voltage drop. But lights that flicker continuously, dim randomly, or flicker in multiple rooms at once suggest a more serious problem.",
      },
      {
        type: "ul",
        items: [
          "Loose wiring connections at the switchboard or in the walls",
          "Overloaded circuits",
          "Failing neutral wire (can be very dangerous)",
          "Corroded or damaged connections",
        ],
      },
      {
        type: "p",
        text: "Don't assume it's just the bulb. If it keeps happening after you've replaced the globe, call a licensed electrician.",
      },
      {
        type: "h2",
        text: "2. Circuit Breakers That Keep Tripping",
      },
      {
        type: "p",
        text: "A circuit breaker trips to protect you — it's doing its job. But if a breaker trips repeatedly, especially on the same circuit, it means that circuit is consistently being overloaded or there's a fault somewhere on it.",
      },
      {
        type: "p",
        text: "Resetting the breaker and moving on is fine once. If it keeps happening, you need an electrician to investigate. Running a circuit that keeps tripping can cause wiring to overheat inside the walls — which is how fires start.",
      },
      {
        type: "callout",
        colour: "red",
        text: "Never bypass or replace a breaker with a higher-rated one to 'fix' tripping. This removes the protection and creates a serious fire risk.",
      },
      {
        type: "h2",
        text: "3. Burning Smell or Scorch Marks",
      },
      {
        type: "p",
        text: "A burning smell from a power point, light fitting or switchboard is a serious warning sign. It means wiring or insulation is overheating. You may also notice discolouration or scorch marks around power points or switches.",
      },
      {
        type: "p",
        text: "If you smell burning from anywhere in your electrical system, stop using that circuit immediately, turn it off at the switchboard, and call a licensed electrician the same day. This is not something to wait on.",
      },
      {
        type: "h2",
        text: "4. Buzzing or Crackling Sounds",
      },
      {
        type: "p",
        text: "Electricity should be silent. Buzzing, crackling or humming sounds from switches, power points or the switchboard indicate arcing — electricity jumping across a gap due to a loose or damaged connection. Arcing generates extreme heat and is one of the most common causes of electrical fires.",
      },
      {
        type: "h2",
        text: "5. Hot Power Points or Switch Plates",
      },
      {
        type: "p",
        text: "Power points and light switches should be room temperature to the touch. If they feel warm or hot, something is wrong — either overloading, a loose connection, or damaged wiring behind the plate. Turn off the circuit and call an electrician before using it again.",
      },
      {
        type: "h2",
        text: "6. Shocks When Touching Switches or Appliances",
      },
      {
        type: "p",
        text: "A small static shock is normal in dry conditions. But a genuine electric shock — even a mild tingle — when touching a switch, appliance or tap means there is an earthing fault in your home's electrical system. This needs to be investigated immediately by a licensed electrician.",
      },
      {
        type: "h2",
        text: "7. You Have an Old Ceramic Fuse Switchboard",
      },
      {
        type: "p",
        text: "If your home still has a ceramic fuse switchboard (the kind with screw-in ceramic fuses rather than circuit breakers), it's a significant safety risk. These systems were designed for the electrical loads of the 1960s and 70s — not modern homes with air con, dishwashers, EV chargers and multiple TVs. They also lack the safety switch (RCD) protection required by current standards.",
      },
      {
        type: "callout",
        colour: "gold",
        text: "Bluefin offers electrical safety inspections across Wollongong and the Illawarra. If your home has any of these warning signs, call us on 0428 631 931 or request a quote online.",
      },
      {
        type: "h2",
        text: "When to Call an Electrician Immediately",
      },
      {
        type: "ul",
        items: [
          "You smell burning from any switch, outlet or the switchboard",
          "You receive a shock from any switch or appliance",
          "A circuit breaker trips and won't reset",
          "You see sparks from any power point",
          "Lights or power go out in part of your home for no obvious reason",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 5
  // ─────────────────────────────────────────────────────────────
  {
    slug: "switchboard-upgrade-benefits",
    category: "Electrical",
    categoryColor: "bg-yellow-50 text-yellow-700",
    title: "Why You Should Upgrade Your Switchboard in 2026",
    excerpt:
      "Old switchboards with ceramic fuses aren't just outdated — they're a safety hazard. A modern switchboard upgrade protects your family, improves reliability, and can actually lower your insurance premiums.",
    date: "January 30, 2026",
    readTime: "4 min read",
    icon: "🔌",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&fit=crop",
    imageAlt: "Modern electrical switchboard with circuit breakers",
    author: "Bluefin Air-Conditioning & Electrical",
    seo: {
      title: "Switchboard Upgrade Wollongong: Benefits & Cost Guide",
      description:
        "Does your Wollongong home still have an old ceramic fuse switchboard? Bluefin's licensed electricians explain the safety risks, the benefits of upgrading, and what a modern switchboard costs in the Illawarra.",
      keywords:
        "switchboard upgrade Wollongong, switchboard replacement Illawarra, fuse box upgrade NSW, RCD safety switch Wollongong, electrician switchboard Illawarra, switchboard cost Wollongong",
    },
    content: [
      {
        type: "p",
        text: "Walk to your switchboard right now. If you see ceramic screw-in fuses instead of circuit breakers, your home has a problem — not just an inconvenience. Old ceramic fuse boards were standard in Australian homes built before the 1980s, but they were designed for a completely different era of electrical usage. They are not equipped to safely handle the loads we put on them today.",
      },
      {
        type: "h2",
        text: "What's the Difference Between Old and New?",
      },
      {
        type: "table",
        headers: ["Feature", "Old Ceramic Fuse Board", "Modern Switchboard"],
        rows: [
          ["Overcurrent protection", "Ceramic fuses (manual replacement)", "Circuit breakers (auto-trip & reset)"],
          ["RCD / safety switch", "Not included", "Included (legal requirement)"],
          ["Response to overload", "Fuse blows — no warning", "Breaker trips instantly"],
          ["Protection from electrocution", "None", "RCD trips in 30 milliseconds"],
          ["Handles modern loads", "No", "Yes"],
          ["Insurance implications", "May void or increase premium", "Lower risk profile"],
        ],
      },
      {
        type: "h2",
        text: "The Safety Switch (RCD) Issue",
      },
      {
        type: "p",
        text: "The most important thing a modern switchboard adds is an RCD — Residual Current Device, also called a safety switch. An RCD monitors the current flowing through a circuit and trips in 30 milliseconds if it detects a leak to earth (like when someone gets a shock). Old ceramic boards have no equivalent protection.",
      },
      {
        type: "p",
        text: "In New South Wales, RCD protection is required by law on all new installations and major upgrades. If your home was built before 1991 and hasn't had an electrical upgrade since, it almost certainly doesn't have RCDs on all circuits.",
      },
      {
        type: "callout",
        colour: "red",
        text: "An RCD can save your life by tripping in 0.03 seconds — faster than the human heart can go into fibrillation from an electric shock. Homes without RCDs are not safe by 2026 standards.",
      },
      {
        type: "h2",
        text: "Modern Homes Need More Circuits",
      },
      {
        type: "p",
        text: "The average Australian home in the 1970s had a 40-amp service with 4–6 circuits. Modern homes commonly need 100–200 amps with 12–20+ circuits to safely handle:",
      },
      {
        type: "ul",
        items: [
          "Air conditioning (often 2–3 dedicated circuits)",
          "Electric vehicle charger (dedicated high-current circuit)",
          "Induction cooktop and oven",
          "Solar inverter connection",
          "Multiple bathrooms, outdoor areas",
          "Home office equipment",
        ],
      },
      {
        type: "p",
        text: "Running all of this through an old 4-circuit ceramic board is not just inconvenient — it's genuinely dangerous. Circuits get overloaded, fuses blow, and in the worst case, wiring overheats inside the walls.",
      },
      {
        type: "h2",
        text: "How Much Does a Switchboard Upgrade Cost in Wollongong?",
      },
      {
        type: "p",
        text: "The cost of a switchboard upgrade in the Wollongong and Illawarra area typically ranges from $800 to $2,500 depending on the size of the new board, the number of circuits, and the condition of the existing wiring. Most residential upgrades fall in the $1,200–$1,800 range.",
      },
      {
        type: "p",
        text: "This is one of the best value electrical upgrades you can do — it improves safety immediately, often reduces home insurance premiums, and future-proofs your home for EV charging and solar.",
      },
      {
        type: "h2",
        text: "Signs You Need a Switchboard Upgrade Now",
      },
      {
        type: "ul",
        items: [
          "You have ceramic screw-in fuses (not circuit breakers)",
          "Your breakers trip frequently",
          "You're installing air conditioning, an EV charger or solar",
          "You're buying or selling a home and want to address safety issues",
          "Your insurance company has flagged your old switchboard",
          "You have fewer than 2 safety switches (RCDs) on your board",
        ],
      },
      {
        type: "callout",
        colour: "gold",
        text: "Bluefin installs modern switchboards across Wollongong, Shellharbour, Kiama and the wider Illawarra. All work is completed to AS/NZS 3000 with a Certificate of Compliance. Call 0428 631 931 for a free quote.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────────────────────
  {
    slug: "how-often-service-aircon",
    category: "Maintenance",
    categoryColor: "bg-purple-50 text-purple-700",
    title: "How Often Should You Service Your Air Conditioner?",
    excerpt:
      "Most manufacturers recommend an annual service, but the honest answer depends on how much you use it, where you live, and what type of system you have. Here's our complete guide.",
    date: "January 15, 2026",
    readTime: "3 min read",
    icon: "🔧",
    image:
      "/blog/aircon-service.jpg",
    imageAlt: "Wall-mounted split system air conditioner in a modern home",
    author: "Bluefin Air-Conditioning & Electrical",
    seo: {
      title: "How Often Should You Service Your Air Conditioner?",
      description:
        "Annual or twice a year? Bluefin's Wollongong technicians give you the honest answer on air con servicing frequency for Illawarra and Sydney homes, including what's included in a professional service.",
      keywords:
        "how often service air con Wollongong, air conditioner service frequency Illawarra, annual air con service NSW, air con maintenance Wollongong, air conditioner service cost Illawarra",
    },
    content: [
      {
        type: "p",
        text: "Ask most air con technicians how often you should service your unit and they'll say 'every year'. That's good general advice — but it's not the full picture. The right answer depends on how hard you run your system, where you live, and what type of unit you have.",
      },
      {
        type: "p",
        text: "Here's the honest guide from our Wollongong-based team.",
      },
      {
        type: "h2",
        text: "The Short Answer",
      },
      {
        type: "callout",
        colour: "blue",
        text: "For most Illawarra homes: service once a year, ideally in September–October before summer. If you run your system year-round or have a ducted system, twice a year is better.",
      },
      {
        type: "h2",
        text: "Factors That Affect How Often You Should Service",
      },
      {
        type: "h3",
        text: "How Much You Use It",
      },
      {
        type: "p",
        text: "A bedroom split system that runs for two months in summer accumulates far less wear than a living area unit that runs 8 hours a day year-round. More use means filters clog faster, coils get dirtier, and components wear more quickly.",
      },
      {
        type: "h3",
        text: "Where You Live",
      },
      {
        type: "p",
        text: "Wollongong's coastal location means salt air. Salt accelerates corrosion on the outdoor unit's coil fins and condenser. Homes within a few kilometres of the ocean should have their outdoor unit inspected and cleaned more frequently — at least annually, ideally every 6 months for units directly exposed to sea breeze.",
      },
      {
        type: "h3",
        text: "Whether You Have Pets",
      },
      {
        type: "p",
        text: "Pet hair clogs filters much faster than normal dust. If you have dogs or cats, clean your filters every 2–3 weeks during heavy use and have the coils professionally cleaned at least twice a year.",
      },
      {
        type: "h3",
        text: "Ducted vs Split System",
      },
      {
        type: "p",
        text: "Ducted systems are more complex and have more components that need checking — ducts for mould, zone dampers, the main unit's coils and drains. A ducted system service takes longer and should ideally be done twice a year for heavily used systems.",
      },
      {
        type: "h2",
        text: "What's Included in a Professional Air Con Service?",
      },
      {
        type: "p",
        text: "A proper service from a licensed technician should include:",
      },
      {
        type: "ul",
        items: [
          "Filter removal, clean and inspection",
          "Indoor coil (evaporator) clean",
          "Outdoor coil (condenser) clean",
          "Drainage system check and clear",
          "Refrigerant pressure check",
          "Electrical connections and controls inspection",
          "Fan motor inspection",
          "Test run and performance check",
          "Written report with any issues noted",
        ],
      },
      {
        type: "p",
        text: "A filter clean alone is not a full service. If a company offers a '15-minute service' for $60, they're not doing a proper job.",
      },
      {
        type: "h2",
        text: "What You Can Do Yourself Between Services",
      },
      {
        type: "ul",
        items: [
          "Clean the filters every 4–6 weeks during use (slide out, rinse under tap, dry and re-insert)",
          "Clear any debris around the outdoor unit (leaves, garden waste)",
          "Check the drainage tray for standing water or slime",
          "Wipe down the indoor unit housing with a damp cloth",
        ],
      },
      {
        type: "p",
        text: "These simple tasks take 10 minutes and make a real difference to efficiency and longevity.",
      },
      {
        type: "h2",
        text: "How Much Does an Air Con Service Cost in Wollongong?",
      },
      {
        type: "p",
        text: "A professional split system service in the Wollongong and Illawarra area typically costs $150–$250 depending on the system size and its condition. Ducted system services are usually $250–$450. These prices include all labour and any minor consumables.",
      },
      {
        type: "callout",
        colour: "gold",
        text: "Bluefin services all major brands across Wollongong, Shellharbour, Kiama, Dapto and surrounding Illawarra suburbs. Book your pre-summer service today — call 0428 631 931 or get a quote online.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
