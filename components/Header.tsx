import Link from "next/link";
import { ChartTabs } from "@/components/ChartTabs";

export function PlusMark() {
  return <span className="plus" aria-hidden />;
}

export function Header() {
  return (
    <header>
      <div className="nameplate">
        <Link href="/" className="nameplate-brand">
          <PlusMark />
          <span className="nameplate-copy">
            <strong>Aestora</strong>
            <span>Medical aesthetics</span>
          </span>
        </Link>
        <ChartTabs />
        <Link href="/consult" className="consult-link">
          Open a chart
        </Link>
      </div>
      <div className="vitals">
        <span>Chart no. 04-2291</span>
        <span>Rooms 01–04</span>
        <span>By appointment</span>
        <span>Licensed aesthetic medicine</span>
      </div>
    </header>
  );
}
