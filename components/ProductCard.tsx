import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="plate">
      <div className="plate-visual">
        <ProductVisual product={product} />
      </div>
      <div className="plate-body">
        <p className="bay-tag">{product.equipmentType}</p>
        <p className="machine-name">{product.title.replace("Aestora ", "")}</p>
        <p className="card-desc">
          {product.highlight}.{" "}
          {product.warrantyYears ? `${product.warrantyYears}-year warranty.` : "Wear part."}
        </p>
        <div className="invoice-line">
          {product.quoteOnly ? (
            <strong>Quote on request</strong>
          ) : (
            <>
              <strong>{monthlyLabel(product.monthly)}</strong>
              <span>
                {formatMoney(product.price)}
                <br />
                {product.inStock ? "In stock" : "Built to order"} · {product.warrantyYears} yr
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
    <div className="ledger">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
