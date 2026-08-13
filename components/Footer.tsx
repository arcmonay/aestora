import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All equipment" },
      { href: "/departments/facial", label: "Hydrodermabrasion" },
      { href: "/departments/body-contouring", label: "Body contouring" },
      { href: "/departments/body-lymphatic", label: "Lymphatic" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/business", label: "Room packages" },
      { href: "/financing", label: "Financing" },
      { href: "/quote", label: "Request a quote" },
      { href: "/compare", label: "Compare" },
    ],
  },
  {
    title: "Help",
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
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">Aestora</p>
          <p className="footer-note">
            Professional beauty and aesthetic equipment for spas, salons, and clinics. Commercial
            machines with catalog photos that match the unit on the invoice.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} className="footer-col" aria-label={col.title}>
            <h3>{col.title}</h3>
            {col.links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <p className="footer-legal">
        © 2025 Aestora. All rights reserved. Financing is offered through third-party lenders,
        subject to approval. Equipment is sold for professional use where indicated.
      </p>
    </footer>
  );
}
