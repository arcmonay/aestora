import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { getCollections, getFeaturedProducts, getHighTicket } from "@/lib/products";

const treatmentImages: Record<string, string> = {
  "body-lymphatic": "/media/catalog/presso.webp",
  facial: "/media/catalog/hydra.webp",
  "body-contouring": "/media/catalog/cavi.webp",
};

export default function Home() {
  const departments = getCollections();
  const bestsellers = getFeaturedProducts(8);
  const featured = getHighTicket(4);

  return (
    <>
      <section className="hero-banner">
        <Image
          src="/media/hero.jpg"
          alt="Professional spa treatment room"
          fill
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="hero-overlay" aria-hidden />
        <div className="hero-content">
          <h1>Spa equipment for estheticians &amp; clinics</h1>
          <p>
            Hydrodermabrasion, body contouring, and lymphatic systems for professional rooms —
            priced online, with financing options subject to approval.
          </p>
          <div className="btn-row">
            <Link href="/shop" className="btn btn-teal">
              Shop equipment
            </Link>
            <Link href="/business" className="btn btn-outline light">
              View packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="section-head">
            <div>
              <p className="eyebrow">Collections</p>
              <h2>Shop by treatment type</h2>
            </div>
            <Link href="/shop" className="link-teal">
              View all →
            </Link>
          </div>
          <div className="treatment-grid">
            {departments.map((d) => (
              <Link key={d.handle} href={`/departments/${d.handle}`} className="treatment-card">
                <Image
                  src={treatmentImages[d.handle] || "/media/hero.jpg"}
                  alt={d.title}
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                />
                <div className="veil" aria-hidden />
                <div className="label">
                  <strong>{d.title}</strong>
                  <span>{d.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="page-width">
          <div className="promo-band" style={{ background: "transparent" }}>
            <div className="promo-copy">
              <p className="eyebrow">New arrivals</p>
              <h2>Professional devices for growing treatment menus</h2>
              <p className="lede">
                Explore high-demand platforms selected for daily commercial use — each listing shows
                a catalog photo of the machine you receive.
              </p>
              <div className="btn-row" style={{ marginTop: "1.25rem" }}>
                <Link href="/shop" className="btn btn-teal">
                  See latest equipment
                </Link>
              </div>
            </div>
            <div className="promo-media" style={{ borderRadius: 4, overflow: "hidden" }}>
              <Image
                src="/media/lymph.jpg"
                alt="Clinical aesthetic treatment in progress"
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-teal">
        <h2>Business packages &amp; volume pricing</h2>
        <p>
          Outfit a facial, lymphatic, or body room with curated equipment sets. Ask about trade
          pricing for multi-room openings.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/business" className="btn btn-outline light">
            Shop packages
          </Link>
          <Link href="/quote" className="btn" style={{ background: "#fff", color: "#121212" }}>
            Request a quote
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="section-head">
            <div>
              <p className="eyebrow">Best sellers</p>
              <h2>Popular aesthetic devices</h2>
            </div>
            <Link href="/shop" className="link-teal">
              Shop all →
            </Link>
          </div>
          <ProductGrid products={bestsellers} />
        </div>
      </section>

      <section className="section section-cream">
        <div className="page-width">
          <div className="section-head">
            <div>
              <p className="eyebrow">High-ticket floor</p>
              <h2>Featured equipment</h2>
            </div>
            <Link href="/financing" className="link-teal">
              Financing options →
            </Link>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>
    </>
  );
}
