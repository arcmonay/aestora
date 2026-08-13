import Link from "next/link";

const links = [
  { href: "/departments/body-lymphatic", label: "Body & lymphatic" },
  { href: "/departments/facial", label: "Facial" },
  { href: "/departments/body-contouring", label: "Body contouring" },
  { href: "/shop", label: "All equipment" },
  { href: "/business", label: "Business packages" },
  { href: "/financing", label: "Financing" },
  { href: "/quote", label: "Request a quote" },
  { href: "/compare", label: "Compare" },
  { href: "/guides", label: "Guides" },
  { href: "/warranty", label: "Warranty" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-brand">
        <p className="foot-mark">Aestora</p>
        <p className="foot-statement">
          Professional beauty, wellness, and aesthetic equipment for spas, salons, and clinics.
          Commercial machines, parts, and turnkey rooms.
        </p>
      </div>
      <nav className="foot-links" aria-label="Footer">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="foot-legal">
        © 2025 Aestora. All rights reserved. Financing is offered through third-party lenders, subject to approval. Equipment is sold for professional use where indicated. Not a medical device marketplace for unlicensed practice.
      </p>
    </footer>
  );
}
