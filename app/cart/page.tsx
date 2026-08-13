import { CartView } from "@/components/CartView";

export const metadata = { title: "Bag" };

export default function CartPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="bay-tag">Bag</p>
      <h1 className="machine-name text-4xl mt-2 mb-8">Equipment bag</h1>
      <CartView />
    </section>
  );
}
