import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const onSale = Boolean(product.compareAtPrice && product.compareAtPrice > product.price);

  return (
    <Link href={`/shop/${product.handle}`} className="product-card">
      <div className="product-media">
        {onSale || product.featured ? <span className="sale-badge">Sale</span> : null}
        <ProductVisual product={product} />
      </div>
      <div className="product-meta">
        <p className="product-title">{product.title.replace("Aestora ", "")}</p>
        <div className="price-row">
          {product.quoteOnly ? (
            <span className="now">Request a quote</span>
          ) : (
            <>
              <span className="now">{formatMoney(product.price)}</span>
              {onSale ? <span className="was">{formatMoney(product.compareAtPrice!)}</span> : null}
              <span className="mo">{monthlyLabel(product.monthly)}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
