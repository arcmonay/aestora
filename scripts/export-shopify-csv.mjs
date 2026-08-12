import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(root, "data", "catalog.json"), "utf8"));
const imageBase =
  process.env.SHOPIFY_IMAGE_BASE_URL ||
  "https://raw.githubusercontent.com/arcmonay/aestora/main/public";
const esc = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

const header = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Variant SKU",
  "Variant Grams",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Compare At Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Image Src",
  "Image Alt Text",
  "Status",
].join(",");

const rows = catalog.products.map((p) => {
  const imagePath = p.image || `/media/catalog/${p.handle}.webp`;
  const collectionTitle =
    catalog.collections.find((c) => c.handle === p.collection)?.title ?? "Equipment";
  const body = [
    `<p>${p.description}</p>`,
    "<ul>",
    `<li>${p.highlight}</li>`,
    `<li>Type: ${p.equipmentType}</li>`,
    `<li>Power: ${p.power}</li>`,
    `<li>Dimensions: ${p.dimensions}</li>`,
    `<li>Weight: ${p.weightLbs} lb</li>`,
    "</ul>",
  ].join("");
  return [
    p.handle,
    p.title,
    body,
    "Aestora",
    collectionTitle,
    (p.tags || []).join(", "),
    "TRUE",
    "Title",
    "Default Title",
    p.sku,
    String(Math.max(50, Math.round(Number(p.weightLbs || 1) * 453.592))),
    "shopify",
    p.inStock ? "5" : "0",
    "deny",
    "manual",
    Number(p.price).toFixed(2),
    p.compareAtPrice ? Number(p.compareAtPrice).toFixed(2) : "",
    "TRUE",
    "TRUE",
    `${imageBase}${imagePath}`,
    p.title,
    "active",
  ]
    .map(esc)
    .join(",");
});

writeFileSync(join(root, "data", "shopify-products.csv"), [header, ...rows].join("\n"));
console.log(`Wrote ${rows.length} Shopify product rows with images.`);
