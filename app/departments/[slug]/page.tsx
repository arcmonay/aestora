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
      <div className="page-intro">
        <p className="bay-tag">Bay {collection.bay}</p>
        <h1 className="machine-name text-4xl mt-2">{collection.title}</h1>
        <p className="lede mt-3 mb-2">{collection.description}</p>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
