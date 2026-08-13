import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { getCollections, getFeaturedProducts, getHighTicket } from "@/lib/products";

export default function Home() {
  const departments = getCollections();
  const featured = getHighTicket(6);
  const sellers = getFeaturedProducts(4);

  return (
    <>
      <section className="showroom" aria-label="Showroom">
        <div className="showroom-frame" aria-hidden />
        <div className="showroom-media">
          <Image
            src="/media/hero.jpg"
            alt="Bright clinical treatment room with a prepared spa table"
            fill
            priority
            quality={92}
            sizes="100vw"
          />
        </div>
        <div className="showroom-veil" aria-hidden />
        <div className="showroom-plaque">
          <p className="bay-tag">Limestone showroom · Machine bays</p>
          <h1>Equipment for rooms that earn.</h1>
          <p>
            Pressotherapy, hydrodermabrasion, cavitation, and cryolipolysis — catalog shots of the
            unit on the invoice, specified for spa and clinic floors.
          </p>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-brass">
              Enter the floor
            </Link>
            <Link href="/business" className="btn btn-ghost light">
              Room packages
            </Link>
          </div>
        </div>
      </section>

      <section className="floor-index" aria-label="Machine bays">
        <div className="floor-index-label">
          <div>
            <p className="bay-tag">Floor plan</p>
            <strong>Three machine bays</strong>
          </div>
          <p className="lede" style={{ margin: 0, fontSize: "0.85rem" }}>
            Navigate by bay number — the same metaphor as a showroom walk.
          </p>
        </div>
        <div className="floor-bays">
          {departments.map((d) => (
            <Link key={d.handle} href={`/departments/${d.handle}`} className="floor-bay">
              <span className="num">{d.bay}</span>
              <div>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
              </div>
              <span className="enter">Enter bay {d.bay}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="bay-tag">High-ticket ledger</p>
            <h2 className="machine-name text-4xl">Featured units</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">
            Full floor
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="protocol-strip">
        <div className="protocol-copy">
          <p className="bay-tag" style={{ color: "var(--brass-lit)" }}>
            Protocol, not portrait
          </p>
          <h2>Machines photographed as sold.</h2>
          <p>
            Manufacturer catalog angles for the console you will receive — paired with clinical room
            photography, not spa-lifestyle still life. Financing available through third-party
            lenders, subject to approval.
          </p>
          <div className="cta-row">
            <Link href="/financing" className="btn btn-brass">
              Payment terms
            </Link>
            <Link href="/guides" className="btn btn-ghost light">
              Buying guides
            </Link>
          </div>
        </div>
        <div className="protocol-media">
          <Image
            src="/media/lymph.jpg"
            alt="Clinical aesthetic treatment with gloved hands and precision tool"
            fill
            sizes="(max-width: 980px) 100vw, 55vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="bay-tag">On the floor</p>
            <h2 className="machine-name text-4xl">In rooms now</h2>
          </div>
          <Link href="/quote" className="btn btn-ghost">
            Request a quote
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>
    </>
  );
}
