import Link from "next/link";
import { financeDisclaimer } from "@/lib/finance";

export const metadata = { title: "Financing" };

export default function FinancingPage() {
  return (
    <section className="section">
      <div className="page-width" style={{ maxWidth: 720 }}>
        <p className="eyebrow">Payment plans</p>
        <h1 className="page-title">Flexible financing</h1>
        <p className="lede" style={{ marginTop: "0.75rem" }}>
          High-ticket equipment is often purchased on a payment plan so a room can open before the
          cash account is empty. Aestora works with third-party lenders. Approval, rates, and terms
          are theirs — not ours.
        </p>
        <div className="prose" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2>How it works</h2>
          <p>
            Choose a machine or package, then apply with the lender linked at checkout or through an
            equipment specialist. Monthly figures on product pages are illustrations at 36 months,
            not an offer.
          </p>
          <h2>What we will not say</h2>
          <p>
            We do not advertise approval rates, guaranteed financing, or “everyone qualifies.” Credit
            decisions belong to the lender. If a plan is declined, you can still request a quote and
            pay by invoice.
          </p>
        </div>
        <p className="disclaimer">{financeDisclaimer()}</p>
        <div className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link href="/quote" className="btn btn-teal">
            Talk to a specialist
          </Link>
          <Link href="/shop" className="btn btn-outline">
            Shop equipment
          </Link>
        </div>
      </div>
    </section>
  );
}
