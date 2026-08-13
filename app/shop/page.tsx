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
    <div className="page-width">
      <div className="shop-layout">
        <Suspense>
          <ShopFilters collections={getCollections()} />
        </Suspense>
        <div>
          <p className="eyebrow">Shop</p>
          <h1 className="page-title">Professional spa equipment</h1>
          <p className="lede" style={{ margin: "0.5rem 0 1.5rem" }}>
            {products.length} products. Catalog photos match the unit on the invoice.
          </p>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
