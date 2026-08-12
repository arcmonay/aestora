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
      <p className="kicker">Bay {collection.bay}</p>
      <h1 className="display text-4xl mt-2">{collection.title}</h1>
      <p className="lede mt-3 mb-10">{collection.description}</p>
      <ProductGrid products={products} />
    </section>
  );
}
