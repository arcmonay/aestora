"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const nav = [
  { href: "/shop", label: "Equipment", match: ["/shop", "/departments", "/compare"] },
  { href: "/business", label: "Business", match: ["/business"] },
  { href: "/financing", label: "Financing", match: ["/financing"] },
  { href: "/guides", label: "Guides", match: ["/guides"] },
  { href: "/support", label: "Support", match: ["/support", "/warranty", "/faq"] },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="atelier">
      <div className="atelier-bar">
        <Link href="/" className="atelier-brand">
          <strong>Aestora</strong>
          <span>Equipment house</span>
        </Link>
        <nav className="atelier-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.match.some((m) => pathname.startsWith(m)) ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="atelier-tools">
          <Link href="/quote" className="atelier-quote">
            Request a quote
          </Link>
          <Link href="/cart" className="atelier-bag">
            Bag
            {count ? <em>{count}</em> : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
