import Link from "next/link";

export const metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="bay-tag">Coverage</p>
      <h1 className="machine-name text-4xl mt-2">Warranty</h1>
      <p className="lede mt-3">
        Most Aestora machines carry a one- or two-year limited warranty on chassis and electronics. Wear parts — tips, garments, lamps, filters, hoses — are sold separately and stocked for seven years from the purchase date.
      </p>
      <p className="mt-6 leading-7">
        Warranty does not cover misuse, unlicensed operation, or water damage. Register the serial number with support after delivery. For freight damage, photograph the crate before signing.
      </p>
      <Link href="/support" className="btn btn-brass mt-8 inline-flex">
        Contact support
      </Link>
    </section>
  );
}
