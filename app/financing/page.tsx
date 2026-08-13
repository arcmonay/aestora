import Link from "next/link";
import { financeDisclaimer } from "@/lib/finance";

export const metadata = { title: "Financing" };

export default function FinancingPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="bay-tag">Payment terms</p>
      <h1 className="machine-name text-4xl mt-2">Financing, subject to approval</h1>
      <p className="lede mt-3">
        High-ticket equipment is often purchased on a payment plan so a room can open before the cash
        account is empty. Aestora works with third-party lenders. Approval, rates, and terms are
        theirs — not ours.
      </p>
      <div className="prose-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2>How it works</h2>
        <p>
          Choose a machine or package, then apply with the lender linked at checkout or through an
          equipment specialist. Monthly figures on product pages are illustrations at 36 months, not
          an offer.
        </p>
        <h2>What we will not say</h2>
        <p>
          We do not advertise approval rates, guaranteed financing, or “everyone qualifies.” Credit
          decisions belong to the lender. If a plan is declined, you can still request a quote and
          pay by invoice.
        </p>
        <h2>Trade and clinic accounts</h2>
        <p>
          Opening a second room? Ask for trade pricing on packages. Net terms are available for
          established businesses after review.
        </p>
      </div>
      <p className="text-sm text-[var(--muted)]">{financeDisclaimer()}</p>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-brass">
          Talk to a specialist
        </Link>
        <Link href="/shop" className="btn btn-ghost">
          Shop equipment
        </Link>
      </div>
    </section>
  );
}
