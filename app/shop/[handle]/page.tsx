import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { financeDisclaimer, monthlyLabel } from "@/lib/finance";
import {
  formatMoney,
  getCollection,
  getProduct,
  getProducts,
  getProductsByCollection,
} from "@/lib/products";

export function generateStaticParams() {
  return getProducts().map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[handle]">) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Equipment" };
  return { title: product.title, description: product.description };
}

export default async function ProductPage({ params }: PageProps<"/shop/[handle]">) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();
  const collection = getCollection(product.collection);
  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const onSale = Boolean(product.compareAtPrice && product.compareAtPrice > product.price);

  return (
    <>
      <div className="page-width">
        <article className="pdp">
          <div className="pdp-gallery">
            <ProductVisual product={product} priority />
          </div>
          <div className="pdp-buy">
            <p className="eyebrow">
              {collection ? (
                <Link href={`/departments/${collection.handle}`}>{collection.title}</Link>
              ) : (
                "Aestora"
              )}
            </p>
            <h1>{product.title.replace("Aestora ", "")}</h1>
            <p className="lede">{product.description}</p>

            {product.quoteOnly ? (
              <p className="pdp-price">Quote on request</p>
            ) : (
              <>
                <p className="pdp-price">
                  {formatMoney(product.price)}
                  {onSale ? <span className="was">{formatMoney(product.compareAtPrice!)}</span> : null}
                </p>
                <p className="pdp-mo">{monthlyLabel(product.monthly)}</p>
              </>
            )}

            <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
              {product.inStock ? "In stock" : "Built to order"} · {product.leadTime}
            </p>

            <AddToCartButton product={product} />
            <p className="disclaimer">{financeDisclaimer()}</p>

            <table className="spec-table">
              <tbody>
                {[
                  ["SKU", product.sku],
                  ["Type", product.equipmentType],
                  ["Power", product.power],
                  ["Dimensions", product.dimensions],
                  ["Weight", `${product.weightLbs} lb`],
                  ["Warranty", product.warrantyYears ? `${product.warrantyYears} year limited` : "Wear part"],
                  ["Financing", product.financing ? "Available, subject to approval" : "—"],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>

      <div className="prose">
        <h2>Overview</h2>
        <p>
          {product.description} {product.highlight}.
        </p>
        <h2>Applications</h2>
        <ul>
          {product.applications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>What’s included</h2>
        <ul>
          {product.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Intended users</h2>
        <ul>
          {product.intendedUsers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Installation &amp; training</h2>
        <p>{product.installation}</p>
        <p>{product.training}</p>
        <h2>FAQ</h2>
        {product.faqs.map((f) => (
          <p key={f.q}>
            <strong>{f.q}</strong>
            <br />
            {f.a}
          </p>
        ))}
      </div>

      {related.length ? (
        <section className="section section-cream">
          <div className="page-width">
            <div className="section-head">
              <h2>You may also like</h2>
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </>
  );
}
