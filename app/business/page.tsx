import Link from "next/link";
import { formatMoney } from "@/lib/products";
import { packages } from "@/data/content";
import { monthlyLabel } from "@/lib/finance";

export const metadata = { title: "Build your business" };

export default function BusinessPage() {
  return (
    <section className="section">
      <div className="page-intro">
        <p className="bay-tag">Room packages</p>
        <h1 className="machine-name text-4xl mt-2">Outfit a room that earns</h1>
        <p className="lede mt-3 mb-2">
          Packages are the machines on the floor — pressotherapy, hydrodermabrasion, cavitation,
          cryolipolysis — not lifestyle décor.
        </p>
      </div>
      <div className="pack-grid">
        {packages.map((pack) => (
          <Link key={pack.slug} href={`/business/${pack.slug}`} className="pack-cell">
            <p className="bay-tag">{pack.audience}</p>
            <p className="machine-name text-2xl mt-2">{pack.title}</p>
            <p className="card-desc" style={{ flex: 1, marginTop: "0.55rem" }}>
              {pack.summary}
            </p>
            <div className="invoice-line">
              <strong>{monthlyLabel(pack.monthly)}</strong>
              <span>{formatMoney(pack.price)} equipment invoice</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
