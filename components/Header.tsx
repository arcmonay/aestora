"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const nav = [
  { href: "/shop", label: "Shop All", match: ["/shop", "/compare"] },
  { href: "/departments/facial", label: "Hydrodermabrasion", match: ["/departments/facial"] },
  { href: "/departments/body-contouring", label: "Body Contouring", match: ["/departments/body-contouring"] },
  { href: "/departments/body-lymphatic", label: "Lymphatic", match: ["/departments/body-lymphatic"] },
  { href: "/business", label: "Packages", match: ["/business"] },
  { href: "/financing", label: "Financing", match: ["/financing"] },
  { href: "/guides", label: "Guides", match: ["/guides"] },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <>
      <div className="announce">
        Financing available through third-party lenders, subject to approval ·{" "}
        <Link href="/quote">Talk to a specialist</Link> · Free protocol walkthrough with equipment orders
      </div>
      <header className="site-header">
        <div className="header-row">
          <Link href="/" className="logo">
            Aestora
            <span>Professional spa equipment</span>
          </Link>
          <nav className="main-nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.match.some((m) => pathname === m || pathname.startsWith(`${m}/`)) ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-tools">
            <Link href="/support">Support</Link>
            <Link href="/cart" className="cart-link">
              Cart
              {count ? <span className="cart-count">{count}</span> : null}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
