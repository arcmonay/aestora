import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductCard";
import { getCollection, getCollections, getProductsByCollection } from "@/lib/products";

export function generateStaticParams() {
  return getCollections().map((c) => ({ slug: c.handle }));
}

export async function generateMetadata({
  params,
}: PageProps<"/departments/[slug]">) {
  const { slug } = await params;
  const c = getCollection(slug);
  return { title: c?.title ?? "Department" };
}

export default async function DepartmentPage({
  params,
}: PageProps<"/departments/[slug]">) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const products = getProductsByCollection(slug);

  return (
    <section className="section">
      <div className="page-width">
        <p className="eyebrow">Collection</p>
        <h1 className="page-title">{collection.title}</h1>
        <p className="lede" style={{ margin: "0.5rem 0 1.75rem" }}>
          {collection.description}
        </p>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
