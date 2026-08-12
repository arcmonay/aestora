import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="card">
      <ProductVisual product={product} />
      <div className="card-body">
        <p className="kicker">{product.equipmentType}</p>
        <p className="card-name mt-1">{product.title.replace("Aestora ", "")}</p>
        <p className="card-desc">{product.highlight}. {product.warrantyYears ? `${product.warrantyYears}-year warranty.` : "Wear part."}</p>
        <div className="ticket">
          {product.quoteOnly ? (
            <strong>Request a quote</strong>
          ) : (
            <>
              <strong>{monthlyLabel(product.monthly)}</strong>
              <span>
                {formatMoney(product.price)} · {product.inStock ? "In stock" : "Built to order"} · {product.warrantyYears} yr warranty
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
