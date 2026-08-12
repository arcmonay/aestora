import catalog from "@/data/catalog.json";
import type { Catalog, Collection, Product } from "@/lib/types";

const data = catalog as Catalog;

export function getCollections(): Collection[] {
  return data.collections;
}

export function getCollection(handle: string): Collection | undefined {
  return data.collections.find((c) => c.handle === handle);
}

export function getProducts(): Product[] {
  return data.products;
}

export function getProduct(handle: string): Product | undefined {
  return data.products.find((p) => p.handle === handle);
}

export function getProductsByCollection(handle: string): Product[] {
  return data.products.filter((p) => p.collection === handle);
}

export function getFeaturedProducts(limit = 8): Product[] {
  const featured = data.products.filter((p) => p.featured && p.collection !== "accessories");
  if (featured.length >= limit) return featured.slice(0, limit);
  return data.products.filter((p) => p.collection !== "accessories").slice(0, limit);
}

export function getHighTicket(limit = 6): Product[] {
  return [...data.products]
    .filter((p) => p.collection !== "accessories")
    .sort((a, b) => b.price - a.price)
    .slice(0, limit);
}

export function formatMoney(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function collectionTitle(handle: string): string {
  return getCollection(handle)?.title ?? handle;
}

export function equipmentDepartments(): Collection[] {
  return data.collections.filter((c) => c.handle !== "packages");
}
