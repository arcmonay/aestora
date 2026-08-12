export type Department = "body" | "lymph" | "skin";

export type Treatment = {
  slug: string;
  code: string;
  name: string;
  department: Department;
  duration: string;
  price: number;
  room: string;
  summary: string;
  protocol: string[];
  indications: string[];
  aftercare: string[];
  image: string;
};

export const departments: { id: Department; label: string; note: string }[] = [
  { id: "body", label: "Body", note: "Contour and density" },
  { id: "lymph", label: "Lymph", note: "Drainage and recovery" },
  { id: "skin", label: "Skin", note: "Surface and texture" },
];

export const treatments: Treatment[] = [
  {
    slug: "body-contouring",
    code: "BC-01",
    name: "Body contouring",
    department: "body",
    duration: "60 min",
    price: 320,
    room: "01",
    summary:
      "A non-surgical protocol that targets stubborn adipose deposits with radiofrequency and mechanical stimulation, mapped to the abdomen, flanks, or thighs.",
    protocol: [
      "Chart review and circumference mapping",
      "Warming pass to raise tissue conductivity",
      "Contour pass along marked quadrants",
      "Cool-down and compression briefing",
    ],
    indications: ["Localized adiposity", "Post-weight-loss laxity", "Abdominal and flank fullness"],
    aftercare: ["Water, 2 L the day of treatment", "Light compression 24 hours", "No heat exposure until the next morning"],
    image: "/media/body.jpg",
  },
  {
    slug: "cryolipolysis",
    code: "CL-02",
    name: "Cryolipolysis",
    department: "body",
    duration: "75 min",
    price: 410,
    room: "01",
    summary:
      "Controlled cooling of subcutaneous fat. Applicators are placed on a pre-marked field; the tissue is drawn, chilled, and released on a timed cycle.",
    protocol: [
      "Field marking and applicator selection",
      "Protective membrane and vacuum seal",
      "Timed cooling cycle",
      "Manual massage of the treated field",
    ],
    indications: ["Pinchable fat pads", "Flanks", "Lower abdomen"],
    aftercare: ["Expect transient numbness", "Resume activity the same day", "Follow-up chart at 8 weeks"],
    image: "/media/body.jpg",
  },
  {
    slug: "radiofrequency-tightening",
    code: "RF-03",
    name: "Radiofrequency tightening",
    department: "body",
    duration: "50 min",
    price: 275,
    room: "01",
    summary:
      "Volumetric heat delivered through the dermis to encourage collagen contraction. Used on the body and the lower face when laxity is the primary finding.",
    protocol: [
      "Skin prep and coupling gel",
      "Grid-pattern energy delivery",
      "Temperature monitoring at the surface",
      "Soothing finish and SPF",
    ],
    indications: ["Mild laxity", "Crepey texture", "Jawline and abdomen"],
    aftercare: ["SPF 30+", "No sauna for 48 hours", "Series of 4–6 visits typical"],
    image: "/media/device.jpg",
  },
  {
    slug: "ultrasound-cavitation",
    code: "UC-04",
    name: "Ultrasound cavitation",
    department: "body",
    duration: "45 min",
    price: 240,
    room: "01",
    summary:
      "Low-frequency ultrasound used to disrupt adipocyte membranes in a defined field, followed by lymphatic support so the body can clear the debris.",
    protocol: [
      "Hydration check",
      "Cavitation pass on the marked field",
      "Lymphatic sweep toward regional nodes",
      "Home drainage notes",
    ],
    indications: ["Soft adipose tissue", "Outer thigh", "Lower abdomen"],
    aftercare: ["Walk 20 minutes after the visit", "Avoid alcohol that evening", "Lymph session recommended within 72 hours"],
    image: "/media/body.jpg",
  },
  {
    slug: "lymphatic-drainage",
    code: "LD-05",
    name: "Lymphatic drainage",
    department: "lymph",
    duration: "50 min",
    price: 185,
    room: "03",
    summary:
      "Manual and sequential compression work that follows lymph pathways. Used for puffiness, post-procedure swelling, and sluggish circulation.",
    protocol: [
      "Node opening at the neck and axilla",
      "Proximal-to-distal clearing",
      "Abdominal and limb sequences",
      "Rest interval before standing",
    ],
    indications: ["Edema", "Post-contour swelling", "Heaviness in the limbs"],
    aftercare: ["Salt-light meals that day", "Compression if prescribed", "No intense training for 12 hours"],
    image: "/media/lymph.jpg",
  },
  {
    slug: "post-procedure-lymph",
    code: "LD-06",
    name: "Post-procedure lymph",
    department: "lymph",
    duration: "40 min",
    price: 165,
    room: "03",
    summary:
      "A quieter drainage protocol written for the days after contouring, peels, or microneedling, when tissue is still reactive.",
    protocol: [
      "Inspect the treated field",
      "Light sequential strokes only",
      "Avoid open or crusted skin",
      "Chart swelling grade",
    ],
    indications: ["Day 2–10 after body work", "Facial edema", "Bruising with swelling"],
    aftercare: ["Keep the field cool", "Sleep slightly elevated", "Return if heat or spreading redness appears"],
    image: "/media/lymph.jpg",
  },
  {
    slug: "detox-wrap",
    code: "LD-07",
    name: "Clinic wrap",
    department: "lymph",
    duration: "70 min",
    price: 210,
    room: "03",
    summary:
      "Warm botanical wrap over a drainage sequence. The wrap is occlusive, timed, and followed by a cool rinse and light moisturizer.",
    protocol: [
      "Dry brush and lymph openers",
      "Wrap application and rest",
      "Rinse and rehydrate the barrier",
      "Standing circumference check",
    ],
    indications: ["Fluid retention", "Pre-event smoothing", "Heavy legs"],
    aftercare: ["Water through the evening", "Skip hot yoga that night", "Results are transient without a series"],
    image: "/media/lymph.jpg",
  },
  {
    slug: "microdermabrasion",
    code: "MD-08",
    name: "Microdermabrasion",
    department: "skin",
    duration: "45 min",
    price: 165,
    room: "02",
    summary:
      "Crystal-free diamond-tip exfoliation that lifts stratum corneum in controlled passes. Often paired with a calming infusion.",
    protocol: [
      "Cleanse and degrease",
      "Two to three diamond passes",
      "Vacuum setting by zone",
      "Barrier cream and mineral SPF",
    ],
    indications: ["Dullness", "Congestion", "Fine surface texture"],
    aftercare: ["No acids for 48 hours", "SPF, even indoors", "Mild flush is expected"],
    image: "/media/face.jpg",
  },
  {
    slug: "microneedling",
    code: "MN-09",
    name: "Microneedling",
    department: "skin",
    duration: "60 min",
    price: 295,
    room: "02",
    summary:
      "Controlled percutaneous injury with a sterile cartridge. Depth is charted by zone. A serum is applied only after the field is intact enough to receive it.",
    protocol: [
      "Topical anesthetic as indicated",
      "Pass plan by facial third",
      "Sterile cartridge, single use",
      "Occlusive recovery layer",
    ],
    indications: ["Texture", "Shallow scarring", "Crepey under-eye"],
    aftercare: ["No makeup 24 hours", "Vinegar soaks if prescribed", "Avoid gym heat for 48 hours"],
    image: "/media/face.jpg",
  },
  {
    slug: "chemical-peel",
    code: "CP-10",
    name: "Medical peel",
    department: "skin",
    duration: "40 min",
    price: 190,
    room: "02",
    summary:
      "A physician-grade acid protocol (AHA/BHA or TCA blend) selected after a Fitzpatrick and barrier review. Strength is written on the chart, not guessed.",
    protocol: [
      "Patch history and photos",
      "Degrease and timed application",
      "Neutralize or frost as indicated",
      "Recovery kit dispensed",
    ],
    indications: ["Pigment", "Congestion", "Photodamage"],
    aftercare: ["Do not pick flake", "Bland cleanser only", "Return for a nurse check if burning persists"],
    image: "/media/face.jpg",
  },
  {
    slug: "hydrodermabrasion",
    code: "HF-11",
    name: "Hydrodermabrasion",
    department: "skin",
    duration: "50 min",
    price: 220,
    room: "02",
    summary:
      "A closed-loop vortex that exfoliates while infusing. Less abrasive than classic microderm; used when the barrier is thin or the patient is peel-intolerant.",
    protocol: [
      "Cleanse and analyze",
      "Vortex pass with solution A",
      "Extraction where indicated",
      "Infusion and LED close",
    ],
    indications: ["Dehydration", "Congestion without inflammation", "Pre-event skin"],
    aftercare: ["SPF", "Resume actives in 48 hours", "Makeup the same evening if needed"],
    image: "/media/face.jpg",
  },
  {
    slug: "dermaplaning",
    code: "DP-12",
    name: "Dermaplaning",
    department: "skin",
    duration: "35 min",
    price: 145,
    room: "02",
    summary:
      "Sterile surgical blade held at 45 degrees to lift vellus hair and surface debris. No numbing. The field is then sealed with a bland emollient.",
    protocol: [
      "Cleanse and taut skin",
      "Single-use blade, zonal passes",
      "Inspect for nicks",
      "Occlusive finish",
    ],
    indications: ["Peach fuzz", "Makeup grab", "Dull film"],
    aftercare: ["No retinoid that night", "SPF the next morning", "Hair does not grow back thicker"],
    image: "/media/face.jpg",
  },
  {
    slug: "led-phototherapy",
    code: "LED-13",
    name: "LED phototherapy",
    department: "skin",
    duration: "25 min",
    price: 95,
    room: "04",
    summary:
      "Narrow-band red and near-infrared light over clean skin. Used as a standalone quiet visit or as the close of a more involved protocol.",
    protocol: [
      "Eye shields",
      "Timed panel at a fixed distance",
      "No photosensitizing products on the field",
      "Chart wavelength and minutes",
    ],
    indications: ["Post-needling calm", "Dull tone", "Low-grade inflammation"],
    aftercare: ["None required", "May be booked twice weekly", "Skip if on photosensitizing medication"],
    image: "/media/device.jpg",
  },
  {
    slug: "oxygen-infusion",
    code: "OX-14",
    name: "Oxygen infusion",
    department: "skin",
    duration: "40 min",
    price: 175,
    room: "02",
    summary:
      "Pressurized oxygen used to drive a hyaluronic cocktail into the epidermis. A finishing protocol, not a substitute for resurfacing.",
    protocol: [
      "Cleanse and optional enzyme",
      "Infusion in overlapping passes",
      "Cool mask",
      "SPF",
    ],
    indications: ["Dehydration", "Pre-event brightness", "Post-travel skin"],
    aftercare: ["Makeup allowed", "Drink water", "Results last days, not months"],
    image: "/media/face.jpg",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function treatmentsByDepartment(id: Department) {
  return treatments.filter((t) => t.department === id);
}

export function formatPrice(n: number) {
  return `$${n}`;
}
