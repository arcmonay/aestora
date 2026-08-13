import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { SpecDrawers } from "@/components/SpecDrawers";
import { financeDisclaimer, monthlyLabel } from "@/lib/finance";
import {
  formatMoney,
  getCollection,
  getProduct,
  getProducts,
  getProductsByCollection,
} from "@/lib/products";

const angleHints: Record<string, { src: string; alt: string }[]> = {
  "body-lymphatic": [
    { src: "/media/catalog/presso.webp", alt: "Pressotherapy boots and console catalog view" },
    { src: "/media/lymph.jpg", alt: "Clinical aesthetic treatment room context" },
  ],
  facial: [
    { src: "/media/catalog/hydra.webp", alt: "Hydrodermabrasion tower catalog view" },
    { src: "/media/hero.jpg", alt: "Prepared treatment room for facial equipment" },
  ],
  "body-contouring": [
    { src: "/media/catalog/cavi.webp", alt: "Cavitation platform catalog view" },
    { src: "/media/catalog/cryo2.webp", alt: "Cryolipolysis platform and applicators" },
  ],
};

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
  const angles = (angleHints[product.collection] ?? [])
    .filter((a) => a.src !== product.image)
    .slice(0, 2);

  return (
    <>
      <article className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-stage">
            <ProductVisual product={product} priority />
          </div>
          <div className="pdp-angles" aria-label="Additional views">
            <div className="pdp-angle">
              <ProductVisual product={product} />
            </div>
            {angles.map((a) => (
              <div className="pdp-angle" key={a.src}>
                <Image src={a.src} alt={a.alt} width={640} height={480} />
              </div>
            ))}
            {angles.length < 2 ? (
              <div className="pdp-angle">
                <span>Bay {collection?.bay ?? "—"} · catalog</span>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="purchase-rail">
          <p className="bay-tag">
            {collection ? (
              <Link href={`/departments/${collection.handle}`}>
                Bay {collection.bay} · {collection.title}
              </Link>
            ) : (
              "Aestora floor"
            )}
          </p>
          <h1>{product.title.replace("Aestora ", "")}</h1>
          <p className="lede mt-3">{product.description}</p>

          <div className="price-block">
            {product.quoteOnly ? (
              <p className="cash">Quote on request</p>
            ) : (
              <>
                <p className="cash">{formatMoney(product.price)}</p>
                <p className="mo">{monthlyLabel(product.monthly)}</p>
              </>
            )}
            <p className="mt-2 text-sm text-[var(--muted)]">
              {product.inStock ? "In stock" : "Built to order"} · {product.leadTime}
            </p>
          </div>

          <AddToCartButton product={product} />
          <p className="text-[0.72rem] text-[var(--muted)] mt-4">{financeDisclaimer()}</p>
          <SpecDrawers product={product} />
        </aside>
      </article>

      <div className="prose-block">
        <h2>Overview</h2>
        <p>
          {product.description} {product.highlight}.
        </p>
        <h2>Intended users</h2>
        <ul>
          {product.intendedUsers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Benefits</h2>
        <ul>
          {product.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {related.length ? (
        <section className="section">
          <div className="section-head">
            <h2 className="machine-name text-3xl">Also in this bay</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </>
  );
}
