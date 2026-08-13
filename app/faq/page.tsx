export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Do you sell to businesses only?",
    a: "Most machines are specified for professional floors. Some accessories and smaller devices are marked for home use. We still ask what the room is.",
  },
  {
    q: "Can I finance a $12,000 contouring platform?",
    a: "You can apply. Monthly figures on the site are illustrations. Lenders decide. We do not guarantee approval.",
  },
  {
    q: "Do you install?",
    a: "White-glove is available on quote-only equipment and packages. Smaller units ship with video setup.",
  },
  {
    q: "Is checkout secure?",
    a: "Yes. Card data is handled by the payment processor. High-ticket orders are often invoiced after a specialist confirms freight.",
  },
  {
    q: "Can I get trade pricing?",
    a: "Ask on the quote form if you operate more than one room or are opening a chain.",
  },
];

export default function FaqPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="bay-tag">Resources</p>
      <h1 className="machine-name text-4xl mt-2 mb-8">FAQ</h1>
      {faqs.map((f) => (
        <div key={f.q} className="border-t border-[var(--rule)] py-5">
          <h2 className="font-medium">{f.q}</h2>
          <p className="lede mt-2">{f.a}</p>
        </div>
      ))}
    </section>
  );
}
