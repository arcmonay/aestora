import Link from "next/link";
import { formatMoney } from "@/lib/products";
import { packages } from "@/data/content";
import { monthlyLabel } from "@/lib/finance";

export const metadata = { title: "Business packages" };

export default function BusinessPage() {
  return (
    <section className="section">
      <div className="page-width">
        <p className="eyebrow">Packages</p>
        <h1 className="page-title">Equipment packages for new rooms</h1>
        <p className="lede" style={{ margin: "0.5rem 0 1.75rem" }}>
          Curated machine sets for lymphatic, facial, and body contouring rooms — financing subject
          to approval.
        </p>
        <div className="pack-grid">
          {packages.map((pack) => (
            <Link key={pack.slug} href={`/business/${pack.slug}`} className="pack-card">
              <p className="eyebrow">{pack.audience}</p>
              <p className="product-title" style={{ fontSize: "1.15rem" }}>
                {pack.title}
              </p>
              <p className="card-desc" style={{ flex: 1, marginTop: "0.5rem" }}>
                {pack.summary}
              </p>
              <div className="price-row" style={{ marginTop: "1rem" }}>
                <span className="now">{formatMoney(pack.price)}</span>
                <span className="mo">{monthlyLabel(pack.monthly)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
