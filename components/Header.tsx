"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const equipment = [
  { href: "/departments/body-lymphatic", label: "Body & Lymphatic" },
  { href: "/departments/facial", label: "Facial & Skincare" },
  { href: "/departments/body-contouring", label: "Body Contouring" },
  { href: "/departments/massage-recovery", label: "Massage & Recovery" },
  { href: "/departments/tanning", label: "Tanning" },
  { href: "/departments/spa-salon", label: "Spa & Salon" },
  { href: "/departments/nail-care", label: "Nail & Hand/Foot" },
  { href: "/shop?collection=accessories", label: "Parts & Consumables" },
];

const shop = [
  { href: "/shop", label: "All equipment" },
  { href: "/shop?sort=featured", label: "Best sellers" },
  { href: "/shop?sort=new", label: "New arrivals" },
  { href: "/shop?collection=packages", label: "Bundles" },
  { href: "/shop?collection=accessories", label: "Accessories" },
  { href: "/shop?collection=accessories", label: "Replacement parts" },
];

const business = [
  { href: "/business", label: "Build your business" },
  { href: "/business/starter-spa", label: "Open a spa" },
  { href: "/business/facial-studio", label: "Open a med spa" },
  { href: "/business/tanning-salon", label: "Open a tanning salon" },
  { href: "/business", label: "Equipment packages" },
  { href: "/financing", label: "Financing" },
  { href: "/quote", label: "Request a quote" },
];

const resources = [
  { href: "/guides", label: "Equipment guides" },
  { href: "/guides", label: "Buying guides" },
  { href: "/guides", label: "Treatment guides" },
  { href: "/warranty", label: "Warranty" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
  { href: "/compare", label: "Compare machines" },
];

function Menu({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <details>
      <summary>{label}</summary>
      <div className="mega-panel">
        {items.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="plaque">
      <div className="plaque-top">
        <nav className="plaque-side">
          <Link href="/financing">Financing</Link>
          <Link href="/quote">Quote</Link>
          <Link href="/guides">Guides</Link>
        </nav>
        <Link href="/" className="wordmark">
          <strong>Aestora</strong>
          <span>Equipment house</span>
        </Link>
        <nav className="plaque-side right">
          <Link href="/shop">Shop</Link>
          <Link href="/support">Specialist</Link>
          <Link href="/cart">Bag{count ? ` ${count}` : ""}</Link>
        </nav>
      </div>
      <nav className="mega" aria-label="Departments">
        <Menu label="Equipment" items={equipment} />
        <Menu label="Shop" items={shop} />
        <Menu label="Business solutions" items={business} />
        <Menu label="Resources" items={resources} />
        <Link href="/shop" className={pathname.startsWith("/shop") ? "is-active" : ""}>
          Shop equipment
        </Link>
      </nav>
    </header>
  );
}
