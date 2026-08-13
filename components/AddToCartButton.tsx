"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useCompare } from "@/lib/compare-context";
import type { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, has } = useCompare();

  if (product.quoteOnly) {
    return (
      <div className="cta-row">
        <Link href={`/quote?machine=${product.handle}`} className="btn btn-teal">
          Request a quote
        </Link>
        <Link href="/support" className="btn btn-outline">
          Talk to a specialist
        </Link>
        <button type="button" className="btn btn-outline" onClick={() => toggle(product.handle)}>
          {has(product.handle) ? "Added to compare" : "Compare"}
        </button>
      </div>
    );
  }

  return (
    <div className="cta-row">
      <button type="button" className="btn btn-teal" onClick={() => addItem(product.handle)}>
        Add to cart
      </button>
      <Link href="/financing" className="btn btn-outline">
        Financing options
      </Link>
      <Link href={`/quote?machine=${product.handle}`} className="btn btn-outline">
        Request a quote
      </Link>
      <button type="button" className="btn btn-outline" onClick={() => toggle(product.handle)}>
        {has(product.handle) ? "Added to compare" : "Compare"}
      </button>
    </div>
  );
}
