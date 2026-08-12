import { Suspense } from "react";
import { ProductGrid } from "@/components/ProductCard";
import { ShopFilters } from "@/components/ShopFilters";
import { getCollections, getProducts } from "@/lib/products";
import { filterProducts } from "@/lib/search";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export const metadata = { title: "Shop equipment" };

export default async function ShopPage({ searchParams }: Props) {
  const sp = await searchParams;
  const collection = typeof sp.collection === "string" ? sp.collection : "all";
  const q = typeof sp.q === "string" ? sp.q : "";
  const useCase = typeof sp.use === "string" ? sp.use : "all";
  const max = typeof sp.max === "string" ? Number(sp.max) : undefined;
  const products = filterProducts(getProducts(), {
    collection,
    q,
    useCase,
    inStock: sp.stock === "1",
    financing: sp.finance === "1",
    maxPrice: max,
  });

  return (
    <div className="shop-layout">
      <Suspense>
        <ShopFilters collections={getCollections()} />
      </Suspense>
      <div className="section" style={{ paddingTop: "1.5rem" }}>
        <p className="kicker">Floor</p>
        <h1 className="display text-4xl mb-2">Equipment</h1>
        <p className="lede mb-8">
          {products.length} machines. Each listing uses a catalog photo of that unit.
        </p>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
