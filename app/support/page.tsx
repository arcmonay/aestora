import Link from "next/link";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Equipment specialists</p>
      <h1 className="display text-4xl mt-2">Support</h1>
      <p className="lede mt-3">
        Spec a room, confirm voltage, or order a head that failed on a Saturday. Specialists know the machines — they do not read from a cosmetics script.
      </p>
      <ul className="leading-8 mt-6">
        <li>Installation and freight questions</li>
        <li>Protocol and training scheduling</li>
        <li>Replacement parts</li>
        <li>Business consultations for first rooms</li>
      </ul>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-brass">
          Talk to a specialist
        </Link>
        <Link href="/faq" className="btn btn-ghost">
          FAQ
        </Link>
      </div>
    </section>
  );
}
