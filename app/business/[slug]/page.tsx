import Link from "next/link";
import { notFound } from "next/navigation";
import { getPackage, packages } from "@/data/content";
import { financeDisclaimer, monthlyLabel } from "@/lib/finance";
import { formatMoney } from "@/lib/products";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/business/[slug]">) {
  const { slug } = await params;
  const pack = getPackage(slug);
  return { title: pack?.title ?? "Package" };
}

export default async function PackagePage({ params }: PageProps<"/business/[slug]">) {
  const { slug } = await params;
  const pack = getPackage(slug);
  if (!pack) notFound();

  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">{pack.audience}</p>
      <h1 className="display text-4xl mt-2">{pack.title}</h1>
      <p className="lede mt-3">{pack.summary}</p>
      <p className="mt-6 text-2xl">{formatMoney(pack.price)}</p>
      <p className="text-[var(--brass)]">{monthlyLabel(pack.monthly)}</p>
      <h2 className="display text-2xl mt-10 mb-3">On the invoice</h2>
      <ul className="leading-8">
        {pack.includes.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
      <div className="cta-row mt-8">
        <Link href={`/quote?machine=${pack.slug}`} className="btn btn-brass">
          Request a quote
        </Link>
        <Link href="/financing" className="btn btn-ghost">
          Financing
        </Link>
        <Link href="/shop" className="btn btn-ghost">
          Shop equipment
        </Link>
      </div>
      <p className="mt-6 text-sm text-[var(--muted)]">{financeDisclaimer()}</p>
    </section>
  );
}
