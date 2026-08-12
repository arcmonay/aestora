import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "data"), { recursive: true });

const collections = [
  {
    handle: "body-lymphatic",
    title: "Body & Lymphatic",
    bay: "01",
    description: "Pressotherapy, drainage, and compression systems for spa and clinic floors.",
  },
  {
    handle: "facial",
    title: "Facial & Skincare",
    bay: "02",
    description: "Microdermabrasion, hydrodermabrasion, LED, RF, and analysis equipment.",
  },
  {
    handle: "body-contouring",
    title: "Body Contouring",
    bay: "03",
    description: "Cavitation, radiofrequency, vacuum, cryolipolysis, and EMS platforms.",
  },
  {
    handle: "massage-recovery",
    title: "Massage & Recovery",
    bay: "04",
    description: "Tables, chairs, percussion, compression recovery, and infrared.",
  },
  {
    handle: "tanning",
    title: "Tanning",
    bay: "05",
    description: "Commercial beds, booths, spray systems, and salon accessories.",
  },
  {
    handle: "spa-salon",
    title: "Spa & Salon",
    bay: "06",
    description: "Treatment beds, shampoo stations, lamps, carts, and sterilization.",
  },
  {
    handle: "nail-care",
    title: "Nail & Hand/Foot",
    bay: "07",
    description: "Nail tables, lamps, foot spas, dust collectors, and sterilizers.",
  },
  {
    handle: "accessories",
    title: "Parts & Consumables",
    bay: "08",
    description: "Heads, filters, hoses, disposables, and professional aftercare.",
  },
  {
    handle: "packages",
    title: "Business Packages",
    bay: "09",
    description: "Turnkey equipment sets for opening or expanding a room.",
  },
];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function monthly(price) {
  return Math.max(29, Math.round(price / 36));
}

const products = [];
let n = 1;

function add(partial) {
  const id = `ae-${String(n).padStart(3, "0")}`;
  const sku = `AE-${String(n).padStart(4, "0")}`;
  const handle = slug(`${partial.title}-${n}`);
  const quoteOnly = partial.price >= 10000;
  products.push({
    id,
    handle,
    currency: "USD",
    sku,
    brand: "Aestora",
    financing: true,
    quoteOnly,
    inStock: n % 19 !== 0,
    featured: n <= 8 || n % 11 === 0,
    monthly: monthly(partial.price),
    image: `/products/${handle}.webp`,
    warrantyYears: partial.warrantyYears ?? (partial.price > 4000 ? 2 : 1),
    leadTime: quoteOnly ? "3–6 weeks, freight quoted" : n % 7 === 0 ? "Built to order, 2–4 weeks" : "Ships in 3–7 business days",
    installation: quoteOnly
      ? "White-glove delivery and on-site setup available. Request a quote."
      : "Ships assembled or with a technician video. Floor delivery on machines over 80 lb.",
    training: "Remote protocol walkthrough included. On-site training available for clinic packages.",
    shipping: "Commercial freight in the contiguous U.S. Liftgate on request. Alaska/Hawaii quoted.",
    replacementParts: "Heads, filters, and hoses stocked for 7 years from purchase date.",
    faqs: [
      {
        q: "Is this rated for commercial use?",
        a: "Yes. Aestora equipment is specified for spa, salon, and clinic floors unless marked home-use.",
      },
      {
        q: "Can I finance it?",
        a: "Payment plans are offered through third-party lenders, subject to approval. See Financing for terms.",
      },
      {
        q: "What if a part fails?",
        a: `This unit includes a ${partial.warrantyYears ?? 2}-year limited warranty on the chassis and electronics. Wear parts are sold separately.`,
      },
    ],
    ...partial,
  });
  n += 1;
}

const lines = ["Linea", "Clinic", "Atelier", "Commercial", "Studio", "Floor"];

const lymph = [
  ["Pressotherapy Tower", 4890, "8-chamber sequential compression", "32 × 22 × 48 in", 86, "110V / 8A"],
  ["Lymphatic Drainage Desk", 3290, "Dual-mode pressotherapy", "28 × 18 × 42 in", 64, "110V / 6A"],
  ["Compression Therapy System", 5620, "12-chamber legs + abdomen", "36 × 24 × 50 in", 102, "110V / 10A"],
  ["Infrared Lymph Bed", 7410, "Far-IR + compression", "78 × 32 × 28 in", 210, "110V / 15A"],
  ["Portable Drainage Unit", 1890, "Clinic-ready travel case", "18 × 12 × 16 in", 22, "110V / 3A"],
  ["Full-Body Pressotherapy", 8940, "Arms, legs, abdomen, glutes", "40 × 26 × 54 in", 128, "110V / 12A"],
  ["Vacuum Lymphatic Column", 4150, "Cupping + drainage", "24 × 20 × 46 in", 71, "110V / 7A"],
  ["Recovery Compression Boots", 980, "Pair + pump", "16 × 10 × 12 in", 14, "110V / 2A"],
  ["Clinic Lymph Cart", 2740, "Mobile 6-chamber", "22 × 18 × 38 in", 48, "110V / 5A"],
  ["Abdomen Drainage Belt", 640, "Sequential belt", "14 × 10 × 8 in", 6, "110V / 1A"],
  ["Post-Op Lymph Station", 6280, "Quiet cycle for recovery rooms", "34 × 22 × 46 in", 94, "110V / 9A"],
  ["Dual-Client Pressotherapy", 11200, "Two seats, one console", "72 × 30 × 52 in", 186, "220V / 20A"],
];

for (let i = 0; i < lymph.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = lymph[i];
  const line = lines[i % lines.length];
  add({
    title: `Aestora ${line} ${kind}`,
    description: `A commercial ${kind.toLowerCase()} for lymphatic rooms. Sequential compression is charted by chamber, not guessed. Built for daily spa and clinic volume.`,
    collection: "body-lymphatic",
    price,
    compareAtPrice: Math.round(price * 1.08),
    equipmentType: "Lymphatic / compression",
    treatmentTypes: ["Lymphatic drainage", "Pressotherapy", "Compression therapy"],
    businessTypes: ["Med spa", "Spa", "Wellness clinic", "Esthetician practice"],
    useCase: price < 1200 ? "both" : "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Post-contour swelling", "Heavy legs", "Wellness drainage programs"],
    intendedUsers: ["Estheticians", "Lymphatic therapists", "Spa directors"],
    benefits: ["Frees a room from manual-only drainage", "Repeatable chamber maps", "Parts stocked in-house"],
    included: ["Console", "Garment set", "Protocol card", "Power cable"],
    tags: ["lymphatic", "pressotherapy", "compression", slug(kind)],
  });
}

const facial = [
  ["Microdermabrasion Console", 2140, "Diamond-tip, closed loop", "18 × 14 × 16 in", 28, "110V / 4A"],
  ["Hydrodermabrasion Tower", 4680, "Vortex + infusion", "22 × 18 × 44 in", 62, "110V / 8A"],
  ["Hydra Facial Platform", 8900, "Multi-step hydroderm", "24 × 20 × 48 in", 78, "110V / 10A"],
  ["Oxygen Facial System", 3120, "Pressurized O2 infusion", "16 × 14 × 18 in", 24, "110V / 3A"],
  ["LED Canopy", 1640, "Red / NIR / blue", "36 × 18 × 8 in", 19, "110V / 3A"],
  ["High-Frequency Wand Set", 420, "Neon + argon", "14 × 10 × 6 in", 5, "110V / 1A"],
  ["RF Facial Handpiece", 2780, "Bipolar facial RF", "16 × 12 × 14 in", 16, "110V / 4A"],
  ["Ultrasonic Spatula Station", 890, "Cavitation spatula", "12 × 10 × 8 in", 7, "110V / 2A"],
  ["Skin Analyzer", 1890, "UV + RGB capture", "14 × 12 × 18 in", 11, "110V / 2A"],
  ["Facial Steamer", 310, "Ozone optional", "12 × 12 × 32 in", 14, "110V / 6A"],
  ["Ozone Steamer Column", 540, "Timed ozone", "14 × 14 × 36 in", 18, "110V / 7A"],
  ["Electric Facial Bed", 1680, "3-motor", "73 × 28 × 24 in", 132, "110V / 3A"],
  ["Clinic Facial Tower", 6240, "Hydro + LED + RF", "26 × 20 × 50 in", 88, "110V / 12A"],
  ["Diamond Microderm Pro", 3360, "Nine tips, medical cart", "20 × 16 × 40 in", 44, "110V / 5A"],
  ["LED Panel Wall", 4210, "Full-face + décolleté", "48 × 8 × 28 in", 36, "110V / 8A"],
  ["Esthetician Combo Unit", 1980, "Magnifier, steamer, high-frequency", "22 × 18 × 42 in", 41, "110V / 8A"],
];

for (let i = 0; i < facial.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = facial[i];
  const line = lines[(i + 1) % lines.length];
  add({
    title: `Aestora ${line} ${kind}`,
    description: `Facial-room equipment specified for daily chair time. The ${kind.toLowerCase()} is built for estheticians who need a machine that still looks like furniture on the floor.`,
    collection: "facial",
    price,
    compareAtPrice: price > 800 ? Math.round(price * 1.1) : null,
    equipmentType: "Facial equipment",
    treatmentTypes: ["Microdermabrasion", "Hydrodermabrasion", "LED", "RF facial"],
    businessTypes: ["Med spa", "Beauty salon", "Esthetician practice"],
    useCase: price < 500 ? "both" : "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Texture", "Congestion", "Tone", "Pre-event skin"],
    intendedUsers: ["Estheticians", "Med-spa nurses", "Salon owners"],
    benefits: ["Protocol cards included", "Wear parts in stock", "Quiet enough for a consult room"],
    included: ["Device", "Starter tips or heads", "Manual", "Warranty card"],
    tags: ["facial", "skincare", slug(kind)],
  });
}

const contour = [
  ["Cavitation Column", 3890, "40 kHz body", "22 × 18 × 46 in", 58, "110V / 8A"],
  ["RF Body Platform", 5120, "Multipolar body RF", "24 × 20 × 48 in", 72, "110V / 10A"],
  ["Vacuum Therapy Desk", 2740, "Cellulite + drainage", "20 × 16 × 18 in", 26, "110V / 4A"],
  ["Cryolipolysis Station", 12800, "Dual applicator", "28 × 24 × 52 in", 164, "220V / 16A"],
  ["EMS Sculpt Frame", 7640, "Four paddles", "26 × 22 × 50 in", 96, "110V / 12A"],
  ["Muscle Stimulation Pack", 2140, "Clinic EMS", "16 × 12 × 10 in", 12, "110V / 2A"],
  ["Skin Tightening Handset", 3480, "Monopolar RF", "18 × 14 × 16 in", 18, "110V / 5A"],
  ["Cellulite Vacuum Tower", 4290, "Roller + suction", "22 × 18 × 44 in", 61, "110V / 7A"],
  ["Body Sculpt Combo", 9420, "Cavi + RF + vacuum", "28 × 22 × 52 in", 108, "110V / 14A"],
  ["Cryo Body Cooler", 6810, "Localized cooling", "24 × 20 × 46 in", 84, "110V / 11A"],
  ["Abdomen Cavitation Pro", 2560, "Focused transducer", "16 × 14 × 14 in", 15, "110V / 4A"],
  ["Four-Handpiece Contour", 15600, "Cavi, RF, vacuum, EMS", "32 × 24 × 54 in", 142, "220V / 18A"],
];

for (let i = 0; i < contour.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = contour[i];
  const line = lines[(i + 2) % lines.length];
  add({
    title: `Aestora ${line} ${kind}`,
    description: `A body-contouring ${kind.toLowerCase()} for rooms that sell packages, not one-off facials. Specs are written for commercial duty cycles.`,
    collection: "body-contouring",
    price,
    compareAtPrice: Math.round(price * 1.07),
    equipmentType: "Body contouring",
    treatmentTypes: ["Cavitation", "Radiofrequency", "Vacuum therapy", "Cryolipolysis", "EMS"],
    businessTypes: ["Med spa", "Cosmetic clinic", "Esthetician practice"],
    useCase: "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Localized adiposity", "Laxity", "Cellulite appearance"],
    intendedUsers: ["Body specialists", "Med-spa owners", "Clinic directors"],
    benefits: ["High ticket per hour", "Series-friendly protocols", "Financing on the machine, not the treatment"],
    included: ["Console", "Handpieces listed on the spec plate", "Protocol binder"],
    tags: ["contouring", "cavitation", "rf", slug(kind)],
  });
}

const massage = [
  ["Zero-Gravity Massage Chair", 4890, "SL-track, commercial leather", "60 × 32 × 46 in", 248, "110V / 12A"],
  ["Professional Massage Table", 780, "Hardwood, 3 in foam", "73 × 30 × 32 in", 34, "—"],
  ["Electric Lift Table", 2140, "Whisper motor", "73 × 30 × 24–34 in", 118, "110V / 3A"],
  ["Percussion Recovery Kit", 420, "Clinic-grade", "14 × 8 × 6 in", 4, "Battery / 110V"],
  ["Compression Recovery Boots", 890, "Sequential", "18 × 12 × 10 in", 11, "110V / 2A"],
  ["Infrared Sauna Cabin", 6240, "2-person far-IR", "48 × 42 × 75 in", 310, "220V / 20A"],
  ["Wellness Recovery Chair", 3380, "Heat + compression", "54 × 30 × 44 in", 176, "110V / 8A"],
  ["Portable Electric Table", 1280, "Folding lift", "73 × 28 × 22–32 in", 72, "110V / 2A"],
  ["Commercial Massage Chair", 7120, "Lobby duty cycle", "62 × 34 × 48 in", 268, "110V / 14A"],
  ["Infrared Blanket System", 980, "Far-IR wrap", "20 × 16 × 8 in", 9, "110V / 6A"],
  ["Therapist Stool Set", 240, "Two stools", "16 × 16 × 22 in", 18, "—"],
  ["Recovery Studio Bundle Core", 8940, "Chair + boots + percussion", "—", 270, "110V / 16A"],
];

for (let i = 0; i < massage.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = massage[i];
  const line = lines[(i + 3) % lines.length];
  add({
    title: `Aestora ${line} ${kind}`,
    description: `Recovery-floor equipment. The ${kind.toLowerCase()} is specified for studios that run back-to-back sessions, not weekend home use.`,
    collection: "massage-recovery",
    price,
    compareAtPrice: price > 1000 ? Math.round(price * 1.09) : null,
    equipmentType: "Massage / recovery",
    treatmentTypes: ["Massage", "Compression recovery", "Infrared"],
    businessTypes: ["Massage studio", "Recovery studio", "Spa", "Physiotherapy"],
    useCase: price < 500 ? "both" : "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Recovery", "Relaxation programs", "Add-on chair time"],
    intendedUsers: ["Massage therapists", "Recovery studios", "Spa owners"],
    benefits: ["Commercial upholstery", "Serviceable motors", "Parts for seven years"],
    included: ["Unit", "Cover or garment where listed", "Manual"],
    tags: ["massage", "recovery", slug(kind)],
  });
}

const tanning = [
  ["Commercial Tanning Bed", 8900, "32-lamp lay-down", "88 × 40 × 42 in", 420, "220V / 30A"],
  ["Stand-Up Tanning Booth", 12400, "High-pressure vertical", "44 × 44 × 86 in", 510, "220V / 40A"],
  ["Facial Tanner", 1680, "Canopy", "28 × 18 × 16 in", 32, "110V / 8A"],
  ["Spray Tan Machine", 890, "HVLP turbine", "14 × 12 × 16 in", 12, "110V / 6A"],
  ["Airbrush Tanning System", 420, "Compressor + gun", "12 × 10 × 10 in", 8, "110V / 3A"],
  ["Tanning Tent", 310, "Pop-up booth", "40 × 40 × 80 in", 16, "—"],
  ["Salon Extraction Fan", 540, "Spray-room exhaust", "18 × 18 × 12 in", 22, "110V / 4A"],
  ["Tanning Bed Starter", 6400, "24-lamp", "84 × 38 × 40 in", 360, "220V / 24A"],
  ["Sunless Booth", 9800, "Automated spray", "42 × 42 × 84 in", 390, "110V / 15A"],
  ["Lamp Replacement Kit", 280, "Commercial tubes", "36 × 8 × 8 in", 9, "—"],
];

for (let i = 0; i < tanning.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = tanning[i];
  const line = lines[(i + 4) % lines.length];
  add({
    title: `Aestora ${line} ${kind}`,
    description: `Tanning-salon equipment with commercial electrical specs. The ${kind.toLowerCase()} is sold as a revenue unit, not a novelty.`,
    collection: "tanning",
    price,
    compareAtPrice: price > 600 ? Math.round(price * 1.06) : null,
    equipmentType: "Tanning",
    treatmentTypes: ["UV tanning", "Sunless spray"],
    businessTypes: ["Tanning salon", "Spa", "Beauty salon"],
    useCase: price < 500 ? "both" : "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Salon tanning", "Sunless programs"],
    intendedUsers: ["Tanning salon owners", "Spa directors"],
    benefits: ["Duty-cycle lamps", "Service network", "Freight and install quoted on beds"],
    included: ["Equipment", "Starter lamps or solution where listed"],
    tags: ["tanning", "sunless", slug(kind)],
  });
}

const spa = [
  ["Treatment Bed", 1240, "Hydraulic", "73 × 30 × 26 in", 96, "—"],
  ["Spa Chair", 890, "Recline + tray", "48 × 28 × 42 in", 64, "—"],
  ["Shampoo Station", 1120, "Ceramic bowl", "48 × 26 × 40 in", 88, "Plumbing"],
  ["Salon Styling Chair", 640, "Hydraulic pump", "26 × 26 × 36 in", 42, "—"],
  ["Manicure Table", 420, "Vent + wrist rest", "48 × 18 × 30 in", 38, "110V / 1A"],
  ["Pedicure Chair", 1680, "Spa basin, massage", "54 × 30 × 46 in", 148, "110V / 6A"],
  ["Beauty Cart", 280, "Locking drawers", "18 × 16 × 32 in", 24, "—"],
  ["Magnifying Lamp", 190, "LED 5×", "32 in arm", 8, "110V / 1A"],
  ["Treatment Stool", 140, "Saddle", "16 × 16 × 22 in", 12, "—"],
  ["Autoclave Sterilizer", 890, "Cassette", "18 × 14 × 14 in", 28, "110V / 8A"],
  ["UV Sterilizer Cabinet", 240, "Two-shelf", "16 × 12 × 18 in", 16, "110V / 1A"],
  ["Salon Storage Tower", 360, "Locking", "24 × 16 × 72 in", 54, "—"],
  ["Electric Spa Bed", 2480, "4-motor", "75 × 30 × 24–34 in", 168, "110V / 4A"],
  ["Hot Towel Cabinet", 210, "20-towel", "18 × 14 × 16 in", 18, "110V / 4A"],
];

for (let i = 0; i < spa.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = spa[i];
  const line = lines[(i + 5) % lines.length];
  add({
    title: `Aestora ${line} ${kind}`,
    description: `Floor furniture for rooms that have to look finished on day one. The ${kind.toLowerCase()} is commercial-grade, not residential.`,
    collection: "spa-salon",
    price,
    compareAtPrice: null,
    equipmentType: "Spa / salon furniture",
    treatmentTypes: ["Facial", "Massage", "Salon services"],
    businessTypes: ["Beauty salon", "Spa", "Med spa"],
    useCase: "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Treatment rooms", "Wet rooms", "Styling floors"],
    intendedUsers: ["Salon owners", "Spa directors"],
    benefits: ["Holds up to daily turnover", "Replacement upholstery available", "Ships freight-ready"],
    included: ["Unit", "Hardware", "Care card"],
    tags: ["salon", "spa", "furniture", slug(kind)],
  });
}

const nail = [
  ["Ventilated Nail Table", 540, "Dust port", "48 × 18 × 30 in", 42, "110V / 2A"],
  ["LED Nail Lamp Bank", 180, "48W", "10 × 8 × 4 in", 3, "110V / 1A"],
  ["Foot Spa Basin", 320, "Heat + vibration", "20 × 18 × 12 in", 14, "110V / 3A"],
  ["Nail Dust Collector", 260, "Desktop", "12 × 10 × 6 in", 6, "110V / 2A"],
  ["Pedicure Station", 2140, "Chair + basin", "56 × 32 × 46 in", 162, "110V / 7A"],
  ["Dry Heat Sterilizer", 410, "Instrument", "16 × 12 × 12 in", 15, "110V / 5A"],
  ["Manicure Stool Pair", 160, "Two", "16 × 16 × 20 in", 16, "—"],
  ["Nail Cart", 190, "Polish rack", "16 × 14 × 30 in", 18, "—"],
];

for (let i = 0; i < nail.length; i++) {
  const [kind, price, highlight, dimensions, weightLbs, power] = nail[i];
  add({
    title: `Aestora Studio ${kind}`,
    description: `Nail-room equipment with dust control and sterilization in mind. The ${kind.toLowerCase()} is built for back-to-back appointments.`,
    collection: "nail-care",
    price,
    compareAtPrice: null,
    equipmentType: "Nail equipment",
    treatmentTypes: ["Manicure", "Pedicure"],
    businessTypes: ["Beauty salon", "Nail salon"],
    useCase: "professional",
    highlight,
    dimensions,
    weightLbs,
    power,
    applications: ["Manicure", "Pedicure"],
    intendedUsers: ["Nail technicians", "Salon owners"],
    benefits: ["Dust management", "Easy wipe-down", "Replacement filters"],
    included: ["Unit", "Starter filters where listed"],
    tags: ["nail", "manicure", "pedicure", slug(kind)],
  });
}

const accessories = [
  ["Diamond Tip Set", 86, "Nine tips"],
  ["Hydro Head Pack", 124, "6 heads"],
  ["Pressotherapy Garment", 210, "Leg pair"],
  ["RF Conductive Cream 1L", 48, "Clinic bottle"],
  ["Cavitation Gel 5L", 64, "Jug"],
  ["LED Eye Shields", 28, "Pair"],
  ["Steamer Distilled Kit", 22, "Monthly"],
  ["Tanning Solution 1L", 38, "Dark"],
  ["Massage Oil 1L", 32, "Unscented"],
  ["Barrier Film Roll", 18, "Disposables"],
  ["Autoclave Pouches", 24, "200 ct"],
  ["Machine Filter 3-Pack", 54, "OEM"],
  ["Handpiece Hose", 72, "Replacement"],
  ["Power Cable 110V", 26, "Hospital grade"],
  ["Treatment Head Cover 100", 19, "Disposable"],
  ["Cleaning Concentrate", 34, "Equipment-safe"],
];

for (let i = 0; i < accessories.length; i++) {
  const [kind, price, highlight] = accessories[i];
  add({
    title: `Aestora ${kind}`,
    description: `A consumable or wear part for Aestora machines. Keep ${kind.toLowerCase()} on the cart so a room never goes down waiting on freight.`,
    collection: "accessories",
    price,
    compareAtPrice: null,
    equipmentType: "Parts / consumables",
    treatmentTypes: ["Maintenance"],
    businessTypes: ["Med spa", "Spa", "Beauty salon", "Tanning salon"],
    useCase: "both",
    highlight,
    dimensions: "Ships in a carton",
    weightLbs: 2,
    power: "—",
    warrantyYears: 0,
    applications: ["Replacement", "Daily treatments"],
    intendedUsers: ["Any Aestora room"],
    benefits: ["In-stock", "Fits current Aestora heads", "No third-party guesswork"],
    included: [kind],
    tags: ["parts", "consumables", slug(kind)],
  });
}

const packages = [
  {
    title: "Starter Spa Package",
    price: 8940,
    audience: "New spa or extra room",
    includes: ["Electric facial bed", "Hydrodermabrasion tower", "Magnifying lamp", "Steamer", "Stool", "Starter consumables"],
    handles: [],
    summary: "One treatment room that can sell facials on week one.",
  },
  {
    title: "Lymphatic Business Package",
    price: 12480,
    audience: "Lymphatic or wellness studio",
    includes: ["Pressotherapy tower", "Compression boots", "Treatment bed", "Protocol binder", "Garment extras"],
    handles: [],
    summary: "A drainage room with a machine that can run while you take the next consult.",
  },
  {
    title: "Facial Studio Package",
    price: 15620,
    audience: "Esthetician suite",
    includes: ["Hydra facial platform", "LED canopy", "Skin analyzer", "Electric facial bed", "Cart", "Tip kit"],
    handles: [],
    summary: "The facial menu, not a single device.",
  },
  {
    title: "Body Contouring Package",
    price: 18900,
    audience: "Med spa body room",
    includes: ["Body sculpt combo", "RF body platform", "Vacuum therapy", "Training day", "Gel starter"],
    handles: [],
    summary: "A contouring bay specified for package sales.",
  },
  {
    title: "Tanning Salon Package",
    price: 21400,
    audience: "Tanning floor",
    includes: ["Commercial tanning bed", "Spray tan machine", "Extraction fan", "Lamp kit", "Solution starter"],
    handles: [],
    summary: "UV plus sunless so the floor is not a single-revenue bet.",
  },
  {
    title: "Massage & Recovery Package",
    price: 11240,
    audience: "Massage or recovery studio",
    includes: ["Zero-gravity chair", "Electric lift table", "Compression boots", "Percussion kit"],
    handles: [],
    summary: "Chair revenue plus table work in one invoice.",
  },
];

for (const pack of packages) {
  add({
    title: pack.title,
    description: `${pack.summary} Written as a single invoice for owners opening or expanding a ${pack.audience.toLowerCase()}.`,
    collection: "packages",
    price: pack.price,
    compareAtPrice: Math.round(pack.price * 1.12),
    equipmentType: "Turnkey package",
    treatmentTypes: ["Mixed"],
    businessTypes: [pack.audience],
    useCase: "professional",
    highlight: pack.includes[0],
    dimensions: "See line items",
    weightLbs: 400,
    power: "See line items",
    applications: pack.includes,
    intendedUsers: ["Owners opening a room"],
    benefits: ["One freight plan", "Matched protocols", "Training included"],
    included: pack.includes,
    tags: ["package", "b2b", slug(pack.title)],
  });
}

const catalog = {
  brand: "Aestora",
  generatedAt: new Date().toISOString(),
  collections,
  products,
};

writeFileSync(join(root, "data", "catalog.json"), JSON.stringify(catalog, null, 2));
console.log(`Wrote ${products.length} products.`);
