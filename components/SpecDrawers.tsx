"use client";

import type { Product } from "@/lib/types";

export function SpecDrawers({ product }: { product: Product }) {
  const specs = [
    ["SKU", product.sku],
    ["Type", product.equipmentType],
    ["Use", product.useCase],
    ["Power", product.power],
    ["Dimensions", product.dimensions],
    ["Weight", `${product.weightLbs} lb`],
    ["Warranty", product.warrantyYears ? `${product.warrantyYears} year limited` : "Wear part"],
    ["Financing", product.financing ? "Available, subject to approval" : "—"],
  ] as const;

  return (
    <div className="drawers">
      <details className="drawer" open>
        <summary>Specifications</summary>
        <div className="drawer-body">
          <div className="spec-grid">
            {specs.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </details>

      <details className="drawer">
        <summary>Applications</summary>
        <div className="drawer-body">
          <ul>
            {product.applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </details>

      <details className="drawer">
        <summary>What’s included</summary>
        <div className="drawer-body">
          <ul>
            {product.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </details>

      <details className="drawer">
        <summary>Install & training</summary>
        <div className="drawer-body">
          <p>{product.installation}</p>
          <p style={{ marginTop: "0.65rem" }}>{product.training}</p>
        </div>
      </details>

      <details className="drawer">
        <summary>Shipping & parts</summary>
        <div className="drawer-body">
          <p>{product.shipping}</p>
          <p style={{ marginTop: "0.65rem" }}>{product.replacementParts}</p>
        </div>
      </details>

      <details className="drawer">
        <summary>FAQ</summary>
        <div className="drawer-body">
          {product.faqs.map((f) => (
            <p key={f.q} style={{ marginBottom: "0.75rem" }}>
              <strong>{f.q}</strong>
              <br />
              {f.a}
            </p>
          ))}
        </div>
      </details>
    </div>
  );
}
