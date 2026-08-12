import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Consult",
};

export default function ConsultPage() {
  return (
    <>
      <p className="kicker">Consult · New intake</p>
      <h1 className="display text-[2.2rem]">Open a chart</h1>
      <p className="lede mt-3 mb-8">
        Tell us the field and what you want changed. We will write a protocol
        or a consult-only visit. Same-day treatment is not guaranteed.
      </p>
      <IntakeForm />
    </>
  );
}
