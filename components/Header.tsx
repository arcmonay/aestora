"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const plaques = [
  {
    href: "/departments/body-lymphatic",
    bay: "01",
    label: "Lymphatic",
    match: ["/departments/body-lymphatic"],
  },
  {
    href: "/departments/facial",
    bay: "02",
    label: "Facial",
    match: ["/departments/facial"],
  },
  {
    href: "/departments/body-contouring",
    bay: "03",
    label: "Contour",
    match: ["/departments/body-contouring"],
  },
  {
    href: "/shop",
    bay: "Floor",
    label: "All units",
    match: ["/shop", "/compare"],
  },
  {
    href: "/business",
    bay: "Rooms",
    label: "Packages",
    match: ["/business"],
  },
  {
    href: "/financing",
    bay: "Terms",
    label: "Financing",
    match: ["/financing"],
  },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="bayhead">
      <div className="bayhead-inner">
        <Link href="/" className="bay-mark" aria-label="Aestora home">
          <strong>
            Aes
            <br />
            tora
          </strong>
          <em>Machine bays</em>
        </Link>

        <nav className="bay-plaques" aria-label="Machine bays">
          {plaques.map((item) => {
            const active = item.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));
            return (
              <Link
                key={item.href + item.bay}
                href={item.href}
                className={`plaque${active ? " is-active" : ""}`}
              >
                <b>Bay {item.bay}</b>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="bay-desk">
          <Link href="/quote">Quote</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/cart" className="desk-bag">
            Bag
            {count ? <i>{count}</i> : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
