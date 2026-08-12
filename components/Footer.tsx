import Link from "next/link";

export function Footer() {
  return (
    <footer className="house-foot">
      <div>
        <strong>Aestora</strong>
        Professional beauty, wellness, and aesthetic equipment for spas, salons, and clinics. Commercial machines, parts, and turnkey rooms.
      </div>
      <div>
        <strong>Equipment</strong>
        <Link href="/departments/body-lymphatic">Body & lymphatic</Link>
        <Link href="/departments/facial">Facial</Link>
        <Link href="/departments/body-contouring">Body contouring</Link>
      </div>
      <div>
        <strong>Business</strong>
        <Link href="/business">Packages</Link>
        <Link href="/financing">Financing</Link>
        <Link href="/quote">Request a quote</Link>
        <Link href="/compare">Compare</Link>
      </div>
      <div>
        <strong>House</strong>
        <Link href="/warranty">Warranty</Link>
        <Link href="/support">Support</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/guides">Guides</Link>
      </div>
      <p className="legal">
        © 2025 Aestora. All rights reserved. Financing is offered through third-party lenders, subject to approval. Equipment is sold for professional use where indicated. Not a medical device marketplace for unlicensed practice.
      </p>
    </footer>
  );
}
