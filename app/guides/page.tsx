import Link from "next/link";
import { guides } from "@/data/content";

export const metadata = { title: "Guides" };

export default function GuidesPage() {
  return (
    <section className="section">
      <div className="page-width">
        <p className="eyebrow">Resources</p>
        <h1 className="page-title">Equipment buying guides</h1>
        <p className="lede" style={{ margin: "0.5rem 0 1.75rem" }}>
          Practical notes for owners speccing a first room or replacing a commercial machine.
        </p>
        <div className="guide-grid">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
              <p className="eyebrow">
                {g.category} · {g.readMinutes} min
              </p>
              <p className="product-title">{g.title}</p>
              <p className="card-desc" style={{ marginTop: "0.45rem" }}>
                {g.dek}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
