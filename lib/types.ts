export type UseCase = "professional" | "home" | "both";

export type Collection = {
  handle: string;
  title: string;
  description: string;
  bay: string;
};

export type Faq = { q: string; a: string };

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  collection: string;
  price: number;
  compareAtPrice: number | null;
  currency: string;
  sku: string;
  brand: string;
  equipmentType: string;
  treatmentTypes: string[];
  businessTypes: string[];
  useCase: UseCase;
  warrantyYears: number;
  financing: boolean;
  quoteOnly: boolean;
  inStock: boolean;
  highlight: string;
  leadTime: string;
  power: string;
  dimensions: string;
  weightLbs: number;
  applications: string[];
  intendedUsers: string[];
  benefits: string[];
  included: string[];
  installation: string;
  training: string;
  shipping: string;
  replacementParts: string;
  faqs: Faq[];
  featured: boolean;
  tags: string[];
  image: string;
  monthly: number;
};

export type CartLine = {
  handle: string;
  quantity: number;
};

export type Catalog = {
  brand: string;
  generatedAt?: string;
  collections: Collection[];
  products: Product[];
};

export type PackageDeal = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  price: number;
  monthly: number;
  includes: string[];
  productHandles: string[];
};

export type Guide = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readMinutes: number;
  sections: { heading: string; body: string }[];
};
