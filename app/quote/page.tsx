import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Request a quote" };

export default function QuotePage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Specialist desk</p>
      <h1 className="display text-4xl mt-2">Request a quote</h1>
      <p className="lede mt-3 mb-8">
        For machines over $10,000, freight, and room packages, a quote is the right path. Tell us the voltage, the room, and the opening date.
      </p>
      <Suspense>
        <QuoteForm />
      </Suspense>
    </section>
  );
}
