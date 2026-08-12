import type { Guide, PackageDeal } from "@/lib/types";

export const packages: PackageDeal[] = [
  {
    slug: "starter-spa",
    title: "Starter Spa Package",
    audience: "New spa or extra treatment room",
    summary: "One finished facial room: bed, hydrodermabrasion, lamp, steamer, stool, and starter consumables.",
    price: 8940,
    monthly: 248,
    includes: [
      "Electric facial bed",
      "Hydrodermabrasion tower",
      "Magnifying lamp",
      "Facial steamer",
      "Treatment stool",
      "Starter consumables",
    ],
    productHandles: [],
  },
  {
    slug: "lymphatic-business",
    title: "Lymphatic Business Package",
    audience: "Lymphatic or wellness studio",
    summary: "A drainage room that can run a machine while you take the next consult.",
    price: 12480,
    monthly: 347,
    includes: [
      "Pressotherapy tower",
      "Compression boots",
      "Treatment bed",
      "Protocol binder",
      "Extra garments",
    ],
    productHandles: [],
  },
  {
    slug: "facial-studio",
    title: "Facial Studio Package",
    audience: "Esthetician suite or med-spa facial bay",
    summary: "The facial menu as a single invoice — hydro, LED, analysis, and the bed.",
    price: 15620,
    monthly: 434,
    includes: [
      "Hydra facial platform",
      "LED canopy",
      "Skin analyzer",
      "Electric facial bed",
      "Beauty cart",
      "Tip kit",
    ],
    productHandles: [],
  },
  {
    slug: "body-contouring",
    title: "Body Contouring Package",
    audience: "Med spa body room",
    summary: "Cavitation, RF, and vacuum specified for package sales, plus a training day.",
    price: 18900,
    monthly: 525,
    includes: [
      "Body sculpt combo",
      "RF body platform",
      "Vacuum therapy desk",
      "On-site training day",
      "Gel starter",
    ],
    productHandles: [],
  },
  {
    slug: "tanning-salon",
    title: "Tanning Salon Package",
    audience: "Tanning floor",
    summary: "UV plus sunless so the floor is not a single-revenue bet.",
    price: 21400,
    monthly: 594,
    includes: [
      "Commercial tanning bed",
      "Spray tan machine",
      "Extraction fan",
      "Lamp kit",
      "Solution starter",
    ],
    productHandles: [],
  },
  {
    slug: "massage-recovery",
    title: "Massage & Recovery Package",
    audience: "Massage or recovery studio",
    summary: "Chair revenue plus table work, written as one freight plan.",
    price: 11240,
    monthly: 312,
    includes: [
      "Zero-gravity massage chair",
      "Electric lift table",
      "Compression recovery boots",
      "Percussion kit",
    ],
    productHandles: [],
  },
];

export const guides: Guide[] = [
  {
    slug: "best-lymphatic-drainage-machines",
    title: "Best Lymphatic Drainage Machines for Spas",
    dek: "How to spec a pressotherapy or drainage unit for a room that has to pay rent.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Start with the garment, not the screen",
        body: "A lymphatic machine is only as useful as the chambers that touch the client. Look for overlapping chambers on legs and abdomen, replaceable garments, and a quiet compressor. Touchscreens do not move fluid.",
      },
      {
        heading: "Duty cycle",
        body: "If you book 50-minute sessions back to back, you need a commercial compressor and garments you can wipe and reuse the same day. Home-use boots will not survive a spa week.",
      },
      {
        heading: "What to budget",
        body: "Serious spa units land between $3,000 and $9,000. Dual-client consoles and infrared-lymph beds run higher and are usually quoted. Plan garments as a consumable, not a surprise.",
      },
    ],
  },
  {
    slug: "microdermabrasion-machine-cost",
    title: "How Much Does a Professional Microdermabrasion Machine Cost?",
    dek: "Crystal-free diamond systems, hydrodermabrasion towers, and what the invoice actually includes.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "The range",
        body: "A solid diamond-tip console for an esthetician suite is often $2,000–$3,500. Hydrodermabrasion towers sit closer to $4,500–$9,000. Tips, filters, and serums are the real monthly cost.",
      },
      {
        heading: "What changes the price",
        body: "Closed-loop vacuum, medical carts, and multi-function towers (hydro + LED + RF) cost more because they replace three devices on the floor. If you only sell microderm, do not buy a hydra platform to feel current.",
      },
    ],
  },
  {
    slug: "equipment-for-starting-a-med-spa",
    title: "Best Equipment for Starting a Med Spa",
    dek: "A first-room list that can sell facials and body work without filling a warehouse.",
    category: "Business",
    readMinutes: 9,
    sections: [
      {
        heading: "Room one",
        body: "Electric treatment bed, hydrodermabrasion or a strong diamond microderm, LED, a skin analyzer, and a lymphatic or contouring device if body is on the menu. Sterilization and a cart are not optional.",
      },
      {
        heading: "Do not buy the brochure",
        body: "Four-handpiece contouring platforms look complete. They also sit idle if you do not have a body specialist. Match the machine to the person you have hired.",
      },
    ],
  },
  {
    slug: "lymphatic-drainage-buying-guide",
    title: "Lymphatic Drainage Machine Buying Guide",
    dek: "Pressotherapy versus vacuum drainage, power, garments, and service.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Pressotherapy vs vacuum",
        body: "Pressotherapy uses sequential air chambers. Vacuum / cupping systems pull. Many rooms want both, but the first machine should match the protocol you will actually sell every week.",
      },
      {
        heading: "Service",
        body: "Ask how long garments and hoses stay in stock. Aestora keeps wear parts for seven years from purchase. If a vendor cannot say that out loud, keep walking.",
      },
    ],
  },
  {
    slug: "pressotherapy-vs-manual",
    title: "Pressotherapy vs. Manual Lymphatic Drainage",
    dek: "When the machine is the protocol, and when it is only an assistant.",
    category: "Treatment guides",
    readMinutes: 6,
    sections: [
      {
        heading: "They are not substitutes",
        body: "Manual drainage is a skilled map of nodes. Pressotherapy is a repeatable compression sequence. Use the machine to extend a therapist, not to replace one on post-surgical cases that need hands.",
      },
    ],
  },
  {
    slug: "how-to-start-a-tanning-salon",
    title: "How to Start a Tanning Salon",
    dek: "Beds, booths, sunless, electrical, and the first invoice.",
    category: "Business",
    readMinutes: 8,
    sections: [
      {
        heading: "Electrical first",
        body: "Commercial beds and booths are 220V loads. Get the electrician in before you fall in love with a 40-amp vertical. Spray rooms need exhaust. That is not a lifestyle detail.",
      },
      {
        heading: "Two revenues",
        body: "UV plus sunless keeps the floor useful when a client does not want lamps. Aestora’s tanning package is built that way on purpose.",
      },
    ],
  },
  {
    slug: "commercial-massage-chairs",
    title: "Best Massage Chairs for Commercial Use",
    dek: "Lobby chairs that survive a Tuesday, not a showroom demo.",
    category: "Buying guides",
    readMinutes: 6,
    sections: [
      {
        heading: "Look at the leather and the motor hours",
        body: "Residential chairs fail in salons. You want commercial upholstery, a serviceable SL-track, and a vendor who stocks actuators. Weight and footprint matter in a waiting room.",
      },
    ],
  },
  {
    slug: "cost-to-open-a-beauty-spa",
    title: "How Much Does It Cost to Open a Beauty Spa?",
    dek: "Equipment is one line. Here is how to keep it from eating the build-out.",
    category: "Business",
    readMinutes: 9,
    sections: [
      {
        heading: "A realistic equipment band",
        body: "A single finished facial room can be equipped in the $8,000–$16,000 range if you stay disciplined. A body + facial med spa with contouring and lymph will land $25,000–$60,000 in machines before furniture and build-out.",
      },
      {
        heading: "Finance the machines, cash the permits",
        body: "Lenders will look at equipment. Cities will look at plumbing. Do not finance the build-out on a credit card while the bed sits in a crate.",
      },
    ],
  },
  {
    slug: "body-contouring-for-estheticians",
    title: "Best Body Contouring Equipment for Estheticians",
    dek: "Cavitation, RF, and vacuum — what actually belongs in a non-physician room.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "Stay inside your license",
        body: "Estheticians should spec non-invasive cavitation, RF, and vacuum. Cryolipolysis and some EMS platforms may require a medical director. Buy the machine your license can run.",
      },
    ],
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
