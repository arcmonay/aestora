"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Collection } from "@/lib/types";

export function ShopFilters({ collections }: { collections: Collection[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("collection") ?? "all";
  const q = params.get("q") ?? "";
  const useCase = params.get("use") ?? "all";

  function update(next: Record<string, string | undefined>) {
    const sp = new URLSearchParams(params.toString());
    const merged = {
      collection: next.collection ?? active,
      q: next.q ?? q,
      use: next.use ?? useCase,
      stock: next.stock ?? params.get("stock") ?? "",
      finance: next.finance ?? params.get("finance") ?? "",
      max: next.max ?? params.get("max") ?? "",
    };
    if (!merged.collection || merged.collection === "all") sp.delete("collection");
    else sp.set("collection", merged.collection);
    if (!merged.q) sp.delete("q");
    else sp.set("q", merged.q);
    if (!merged.use || merged.use === "all") sp.delete("use");
    else sp.set("use", merged.use);
    if (merged.stock) sp.set("stock", "1");
    else sp.delete("stock");
    if (merged.finance) sp.set("finance", "1");
    else sp.delete("finance");
    if (merged.max) sp.set("max", merged.max);
    else sp.delete("max");
    router.push(`/shop?${sp.toString()}`);
  }

  return (
    <aside className="filters">
      <h2>Filter</h2>
      <button type="button" className={active === "all" ? "is-active" : ""} onClick={() => update({ collection: "all" })}>
        All departments
      </button>
      {collections.map((c) => (
        <button
          key={c.handle}
          type="button"
          className={active === c.handle ? "is-active" : ""}
          onClick={() => update({ collection: c.handle })}
        >
          {c.title}
        </button>
      ))}
      <label className="mt-6 block">
        <span>Search</span>
        <input
          type="search"
          defaultValue={q}
          placeholder="lymphatic under $5000"
          onChange={(e) => update({ q: e.target.value })}
        />
      </label>
      <label className="mt-4 block">
        <span>Use</span>
        <select value={useCase} onChange={(e) => update({ use: e.target.value })}>
          <option value="all">Professional & home</option>
          <option value="professional">Professional / clinic</option>
          <option value="home">Home-grade</option>
        </select>
      </label>
      <label className="mt-4 block">
        <span>Max price</span>
        <select
          value={params.get("max") ?? ""}
          onChange={(e) => update({ max: e.target.value })}
        >
          <option value="">Any</option>
          <option value="500">Under $500</option>
          <option value="2000">Under $2,000</option>
          <option value="5000">Under $5,000</option>
          <option value="10000">Under $10,000</option>
        </select>
      </label>
      <button
        type="button"
        className={params.get("stock") ? "is-active mt-3" : "mt-3"}
        onClick={() => update({ stock: params.get("stock") ? "" : "1" })}
      >
        In stock
      </button>
      <button
        type="button"
        className={params.get("finance") ? "is-active" : ""}
        onClick={() => update({ finance: params.get("finance") ? "" : "1" })}
      >
        Financing available
      </button>
    </aside>
  );
}
