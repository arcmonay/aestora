import Image from "next/image";
import type { Product } from "@/lib/types";

const fallback: Record<string, string> = {
  "body-lymphatic": "/media/catalog/presso.webp",
  facial: "/media/catalog/hydra.webp",
  "body-contouring": "/media/catalog/cavi.webp",
};

export function ProductVisual({
  product,
  priority = false,
  className = "",
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const src = product.image || fallback[product.collection] || "/media/catalog/hydra.webp";
  return (
    <Image
      src={src}
      alt={product.title}
      width={1200}
      height={900}
      priority={priority}
      className={`visual ${className}`}
    />
  );
}
