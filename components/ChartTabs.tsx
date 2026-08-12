"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Intake", match: (p: string) => p === "/" },
  {
    href: "/treatments",
    label: "Protocols",
    match: (p: string) => p.startsWith("/treatments"),
  },
  { href: "/clinic", label: "Rooms", match: (p: string) => p.startsWith("/clinic") },
  { href: "/consult", label: "Consult", match: (p: string) => p.startsWith("/consult") },
];

export function ChartTabs() {
  const pathname = usePathname();
  return (
    <nav className="chart-tabs" aria-label="Chart">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={tab.match(pathname) ? "is-active" : ""}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
