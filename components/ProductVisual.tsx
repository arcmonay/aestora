import Image from "next/image";
import type { Product } from "@/lib/types";

const fallback: Record<string, string> = {
  "body-lymphatic": "/media/lymph.jpg",
  facial: "/media/face.jpg",
  "body-contouring": "/media/body.jpg",
  "massage-recovery": "/media/body.jpg",
  tanning: "/media/hall.jpg",
  "spa-salon": "/media/consult.jpg",
  "nail-care": "/media/face.jpg",
  accessories: "/media/device.jpg",
  packages: "/media/hall.jpg",
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
  const src = fallback[product.collection] || "/media/hall.jpg";
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
