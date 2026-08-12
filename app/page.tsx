import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { getCollections, getFeaturedProducts, getHighTicket } from "@/lib/products";

export default function Home() {
  const departments = getCollections();
  const featured = getHighTicket(8);
  const sellers = getFeaturedProducts(8);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Professional equipment house</p>
          <h1>Elevate your business. Elevate your clients.</h1>
          <p>
            Pressotherapy, hydrodermabrasion, cavitation, and cryolipolysis — each listing shows the machine on the invoice.
          </p>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-brass">
              Shop equipment
            </Link>
            <Link href="/business" className="btn btn-ghost light">
              Explore professional solutions
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/media/catalog/hydra.webp"
            alt="Hydrodermabrasion facial tower"
            width={1400}
            height={1600}
            priority
          />
        </div>
      </section>

      <div className="bays">
        {departments.map((d) => (
          <Link key={d.handle} href={`/departments/${d.handle}`} className="bay">
            <div>
              <em>Bay {d.bay}</em>
              <strong>{d.title}</strong>
            </div>
            <p className="card-desc">{d.description}</p>
          </Link>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">High-ticket floor</p>
            <h2 className="display text-4xl">Featured equipment</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">
            All machines
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">In rooms now</p>
            <h2 className="display text-4xl">Best sellers</h2>
          </div>
          <Link href="/financing" className="btn btn-ghost">
            See payment options
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>
    </>
  );
}
