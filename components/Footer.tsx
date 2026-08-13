import Link from "next/link";

const columns = [
  {
    title: "Bays",
    links: [
      { href: "/departments/body-lymphatic", label: "Bay 01 · Lymphatic" },
      { href: "/departments/facial", label: "Bay 02 · Facial" },
      { href: "/departments/body-contouring", label: "Bay 03 · Contour" },
      { href: "/shop", label: "Full floor" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/business", label: "Room packages" },
      { href: "/financing", label: "Financing" },
      { href: "/quote", label: "Request a quote" },
      { href: "/compare", label: "Compare units" },
    ],
  },
  {
    title: "Service",
    links: [
      { href: "/guides", label: "Buying guides" },
      { href: "/warranty", label: "Warranty" },
      { href: "/support", label: "Support" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="slab">
      <div className="slab-grid">
        <div>
          <p className="slab-brand">
            <span>Aes</span>
            <span>tora</span>
          </p>
          <p className="slab-note">
            Professional aesthetic equipment for spas, salons, and clinics. Machines photographed
            as invoiced — pressotherapy, hydrodermabrasion, cavitation, cryolipolysis.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} className="slab-col" aria-label={col.title}>
            <h3>{col.title}</h3>
            {col.links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <p className="slab-legal">
        © 2025 Aestora. All rights reserved. Financing is offered through third-party lenders,
        subject to approval. Equipment is sold for professional use where indicated. Not a medical
        device marketplace for unlicensed practice.
      </p>
    </footer>
  );
}
