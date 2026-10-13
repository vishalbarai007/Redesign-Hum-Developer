export interface RealEstateUnit {
  id: string;
  projectId: string;
  projectName: string;
  name: string;
  category: "1BHK" | "2BHK" | "3BHK" | "Duplex" | "Penthouse";
  areaSqFt: number;
  carpetAreaSqFt: number;
  carpetAreaSqM: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  ceilingHeight: string;
  facing: string;
  priceRange: string;
  priceRaw: string;
  possession: string;
  reraRegistration: string;
  tower: string;
  status: "Available" | "Few Units Left" | "Sold Out";
  floorPlanUrl: string;
  galleryImages: string[];
  features: string[];
  description: string;
}

export const unitsData: RealEstateUnit[] = [
  {
    id: "emerald-1bhk-smart",
    projectId: "hum-emerald-heights",
    projectName: "HUM Emerald Heights",
    name: "The Smart Luxe Suite",
    category: "1BHK",
    areaSqFt: 620,
    carpetAreaSqFt: 465,
    carpetAreaSqM: 43.2,
    bedrooms: 1,
    bathrooms: 2,
    balconies: 1,
    ceilingHeight: "10.5 ft",
    facing: "East Facing — Sunrise & City Greens",
    priceRange: "₹89 Lakhs — ₹98 Lakhs",
    priceRaw: "₹89 Lakhs*",
    possession: "Dec 2026",
    reraRegistration: "PM1180002502952",
    tower: "Tower A — Kandivali West",
    status: "Available",
    floorPlanUrl: "/floorplan.jpg",
    galleryImages: [
      "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
      "https://cdn.sanity.io/images/3wmbb6cw/production/3e1294592a087152bcccb6ae5861fe9cce85c1c0-900x400.jpg"
    ],
    features: [
      "Optimized zero-wastage carpet floor plate",
      "Full-height anodized French soundproof windows",
      "Premium vitrified Italian-style tile flooring",
      "Granite kitchen platform with dry service balcony"
    ],
    description: "An expertly engineered 1BHK home maximizing every square foot for contemporary urban living in the prime heart of Kandivali West."
  },
  {
    id: "emerald-2bhk-grand",
    projectId: "hum-emerald-heights",
    projectName: "HUM Emerald Heights",
    name: "The Grand Horizon Suite",
    category: "2BHK",
    areaSqFt: 980,
    carpetAreaSqFt: 745,
    carpetAreaSqM: 69.2,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    ceilingHeight: "10.8 ft",
    facing: "Cross-Ventilated Open Garden View",
    priceRange: "₹1.45 Cr — ₹1.65 Cr",
    priceRaw: "₹1.45 Cr*",
    possession: "Dec 2026",
    reraRegistration: "PM1180002502952",
    tower: "Wings A & B — Kandivali West",
    status: "Few Units Left",
    floorPlanUrl: "/floorplan.jpg",
    galleryImages: [
      "https://cdn.sanity.io/images/3wmbb6cw/production/cffe754409c8cee80dd0bafbc1acebf73a314fbd-1440x517.jpg",
      "https://cdn.sanity.io/images/3wmbb6cw/production/78b671926f9f490fab0b5a1730fa753696667c2a-2000x732.jpg"
    ],
    features: [
      "Expansive master bedroom with en-suite luxury washroom",
      "Dedicated dining alcove adjoining expansive living deck",
      "Concealed copper wiring with home automation readiness",
      "Anti-skid designer ceramic balcony decks"
    ],
    description: "Designed for discerning families, this 2BHK residence combines sunlit morning orientation with seamless access to podium amenities."
  },
  {
    id: "emerald-3bhk-regal",
    projectId: "hum-emerald-heights",
    projectName: "HUM Emerald Heights",
    name: "The Imperial Sky Suite",
    category: "3BHK",
    areaSqFt: 1420,
    carpetAreaSqFt: 1085,
    carpetAreaSqM: 100.8,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    ceilingHeight: "11.2 ft",
    facing: "Panoramic Skyline & Sunset Horizon",
    priceRange: "₹2.25 Cr — ₹2.55 Cr",
    priceRaw: "₹2.25 Cr*",
    possession: "Dec 2026",
    reraRegistration: "PM1180002502952",
    tower: "Exclusive Upper Floors",
    status: "Available",
    floorPlanUrl: "/floorplan.jpg",
    galleryImages: [
      "https://cdn.sanity.io/images/3wmbb6cw/production/98cb2c2d4f9a75bfb71f3458d5036e9fc0b98c47-2000x1125.jpg",
      "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg"
    ],
    features: [
      "Triple-aspect living area with wraparound viewing deck",
      "Double master suites with premium Kohler / Grohe fittings",
      "Private staff bath / utility annex room",
      "Intercom, video door security, and biometric lock entry"
    ],
    description: "The crown jewel of HUM Emerald Heights, delivering palatial room dimensions, cross-breeze corridors, and breathtaking views of Mumbai."
  },
  {
    id: "solaris-2bhk-designer",
    projectId: "hum-solaris",
    projectName: "HUM Solaris",
    name: "The Solar Luxe Haven",
    category: "2BHK",
    areaSqFt: 960,
    carpetAreaSqFt: 720,
    carpetAreaSqM: 66.9,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    ceilingHeight: "10.6 ft",
    facing: "East-West Sunlight Corridor — Borivali",
    priceRange: "₹1.38 Cr — ₹1.52 Cr",
    priceRaw: "₹1.38 Cr*",
    possession: "Mid 2027",
    reraRegistration: "P51800048123",
    tower: "Solaris Tower — Borivali",
    status: "Few Units Left",
    floorPlanUrl: "/floorplan.jpg",
    galleryImages: [
      "https://cdn.sanity.io/images/3wmbb6cw/production/86f7d0b78a4030c0e90c74c209c15485c29f4676-1440x517.png",
      "https://cdn.sanity.io/images/3wmbb6cw/production/3389b12891977e718ac7bf619b35fad3e5732f28-5166x1892.png"
    ],
    features: [
      "Engineered sun-path orientation for natural daylight all day",
      "Acoustic noise-reducing insulated glazing",
      "Designer false ceiling provision with LED cove conduits",
      "Dedicated split AC outdoor unit shafts"
    ],
    description: "A brighter way of living in Borivali. Soaring high-rise engineering combined with state-of-the-art rooftop leisure."
  },
  {
    id: "gsheights-3bhk-twin",
    projectId: "gs-heights",
    projectName: "HUM GS Heights",
    name: "The Twin Horizon Residence",
    category: "3BHK",
    areaSqFt: 1380,
    carpetAreaSqFt: 1040,
    carpetAreaSqM: 96.6,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    ceilingHeight: "11.0 ft",
    facing: "Unobstructed Suburban Skyline — Kandivali",
    priceRange: "₹2.10 Cr — ₹2.35 Cr",
    priceRaw: "₹2.10 Cr*",
    possession: "Ready / Near Possession",
    reraRegistration: "P51800031940",
    tower: "Twin Tower East Wing",
    status: "Available",
    floorPlanUrl: "/floorplan.jpg",
    galleryImages: [
      "https://cdn.sanity.io/images/3wmbb6cw/production/dc5c3a6c0549738a8293add4be371768a4164ea4-1440x517.jpg",
      "https://cdn.sanity.io/images/3wmbb6cw/production/840cb4cd78c5366588214b2a5763a6feef82a9f7-900x440.jpg"
    ],
    features: [
      "Twin tower architectural configuration with high-speed elevators",
      "Grand air-conditioned entrance lobby with marble cladding",
      "Spacious living room opening to sunrise terrace deck",
      "Automated multi-level stilt car parking"
    ],
    description: "Twin-tower architectural prestige in prime Kandivali West, offering seamless commute access and upscale family amenities."
  },
  {
    id: "gagansagar-duplex-sky",
    projectId: "hum-gagansagar",
    projectName: "HUM Gagansagar",
    name: "The Presidential Sky Duplex",
    category: "Duplex",
    areaSqFt: 2250,
    carpetAreaSqFt: 1840,
    carpetAreaSqM: 170.9,
    bedrooms: 4,
    bathrooms: 4.5,
    balconies: 4,
    ceilingHeight: "20.0 ft Double-Height Living",
    facing: "360° Open Borivali West Skyline",
    priceRange: "₹3.80 Cr — ₹4.20 Cr",
    priceRaw: "₹3.80 Cr*",
    possession: "Dec 2026",
    reraRegistration: "P51800037889",
    tower: "Crown Levels (Floors 21 & 22)",
    status: "Available",
    floorPlanUrl: "/floorplan.jpg",
    galleryImages: [
      "https://cdn.sanity.io/images/3wmbb6cw/production/f8bb282180b282fd18d71937719b9927b39dad1e-1440x517.png",
      "https://cdn.sanity.io/images/3wmbb6cw/production/0042d671da9480e1ad94106302743842af7e0c36-920x540.png"
    ],
    features: [
      "Double-height cathedral glass living salon",
      "Private internal staircase linking entertainment and bedroom tiers",
      "Wrap-around open-air sky terrace with outdoor seating nook",
      "Two reserved covered podium parking slots included"
    ],
    description: "The pinnacle of high-rise aristocratic living in Borivali West. A trophy sky duplex crafted for multigenerational comfort."
  }
];

export interface AmenityItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Wellness & Fitness" | "Leisure & Rooftop" | "Family & Community" | "Security & Smart Living";
  image: string;
  description: string;
  stat?: string;
}

export const luxuryAmenitiesData: AmenityItem[] = [
  {
    id: "amenity-skydeck",
    title: "Rooftop Sky Lounge & Deck",
    subtitle: "Panoramic City Vistas & Sunset Seating",
    category: "Leisure & Rooftop",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/5305d4bb79173938d201b9cfaa7b0f86a6662a59-900x440.jpg",
    description: "An exclusive rooftop observatory deck perched high above the urban bustle, featuring stargazing cabanas and evening contemplation lounges.",
    stat: "High Floor"
  },
  {
    id: "amenity-gym",
    title: "State-of-the-Art Fitness Center",
    subtitle: "Commercial-Grade Cardio & Strength Equipment",
    category: "Wellness & Fitness",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/3e1294592a087152bcccb6ae5861fe9cce85c1c0-900x400.jpg",
    description: "Fully air-conditioned fitness club equipped with LifeFitness machinery, free-weights zone, yoga studio, and dedicated personal training slots.",
    stat: "3,000 sq.ft."
  },
  {
    id: "amenity-pool",
    title: "Temperature-Controlled Swimming Pool",
    subtitle: "Infinity-Edge Pool with Sun Loungers & Kids Pool",
    category: "Wellness & Fitness",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/639529aff18041a10989bfef301c6b671bfa9236-920x540.png",
    description: "Pristine azure waters surrounded by natural stone sun decks, changing suites, and a dedicated shallow splash zone for toddlers.",
    stat: "All Season"
  },
  {
    id: "amenity-lobby",
    title: "Grand Air-Conditioned Lobby",
    subtitle: "Double-Height Designer Marble Reception",
    category: "Security & Smart Living",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/840cb4cd78c5366588214b2a5763a6feef82a9f7-900x440.jpg",
    description: "An imposing hotel-grade arrival foyer adorned with Italian marble cladding, custom chandelier lighting, and a concierge check-in desk.",
    stat: "24/7 Concierge"
  },
  {
    id: "amenity-kids",
    title: "Children's Creative Play Arena",
    subtitle: "Safe Rubberized Flooring & Interactive Equipment",
    category: "Family & Community",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/9dd9dd6946fe88022585a40633f0b3d2ee556828-900x440.jpg",
    description: "A secure, CCTV-monitored playground designed with eco-friendly non-toxic play gear, slides, sandpits, and parent seating pavilions.",
    stat: "Dedicated Zone"
  },
  {
    id: "amenity-clubhouse",
    title: "Multipurpose Banquet & Society Club",
    subtitle: "Private Celebrations & Indoor Board Games",
    category: "Family & Community",
    image: "https://cdn.sanity.io/images/3wmbb6cw/production/0042d671da9480e1ad94106302743842af7e0c36-920x540.png",
    description: "Spacious community hall for festivals, private birthday parties, yoga workshops, and society assemblies with catering pantry support.",
    stat: "200+ Guests"
  }
];

export interface ConnectivityPoint {
  destination: string;
  timeMins: string;
  category: "Transit & Railway" | "Expressways & Metro" | "Shopping & Leisure" | "Healthcare & Schools";
  distanceKm: string;
}

export const connectivityData: ConnectivityPoint[] = [
  { destination: "Kandivali Railway Station (Western Line)", timeMins: "4 mins", category: "Transit & Railway", distanceKm: "1.2 km" },
  { destination: "Borivali Railway Station & Outstation Terminus", timeMins: "8 mins", category: "Transit & Railway", distanceKm: "2.8 km" },
  { destination: "Metro Line 2A & Line 7 (Dahanukarwadi / Poisar)", timeMins: "5 mins", category: "Expressways & Metro", distanceKm: "1.5 km" },
  { destination: "Western Express Highway (WEH)", timeMins: "9 mins", category: "Expressways & Metro", distanceKm: "3.4 km" },
  { destination: "Upcoming Coastal Road Extension", timeMins: "10 mins", category: "Expressways & Metro", distanceKm: "4.1 km" },
  { destination: "Inorbit Mall Malad & Oberoi Mall", timeMins: "14 mins", category: "Shopping & Leisure", distanceKm: "5.5 km" },
  { destination: "Ryan International & Cambridge School", timeMins: "6 mins", category: "Healthcare & Schools", distanceKm: "1.8 km" },
  { destination: "Shatabdi Hospital & Apex Multispecialty Hospital", timeMins: "7 mins", category: "Healthcare & Schools", distanceKm: "2.1 km" }
];
