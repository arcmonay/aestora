import Link from "next/link";
import { guides } from "@/data/content";

export const metadata = { title: "Guides" };

export default function GuidesPage() {
  return (
    <section className="section">
      <div className="page-intro">
        <p className="bay-tag">Resources</p>
        <h1 className="machine-name text-4xl mt-2">Equipment guides</h1>
        <p className="lede mt-3 mb-2">
          Research before you finance. Written for owners speccing a first room or replacing a
          machine that failed on a Tuesday.
        </p>
      </div>
      <div className="pack-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="pack-cell">
            <p className="bay-tag">
              {g.category} · {g.readMinutes} min
            </p>
            <p className="machine-name text-xl mt-2">{g.title}</p>
            <p className="card-desc" style={{ marginTop: "0.5rem" }}>
              {g.dek}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
