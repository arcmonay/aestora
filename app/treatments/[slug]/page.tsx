import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getTreatment, treatments } from "@/data/treatments";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return { title: "Protocol" };
  return { title: `${t.code} ${t.name}` };
}

export default async function TreatmentPage({
  params,
}: PageProps<"/treatments/[slug]">) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  return (
    <>
      <p className="kicker">
        Protocol · {t.department} · Rm {t.room}
      </p>
      <h1 className="display text-[2.2rem]">
        {t.code} {t.name}
      </h1>
      <p className="lede mt-3">{t.summary}</p>

      <div className="rx mt-8">
        <div>
          <Image
            src={t.image}
            alt={t.name}
            width={900}
            height={620}
            className="w-full h-[320px] object-cover grayscale-[0.2]"
          />
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] mt-8 text-[var(--muted)]">
            Sequence
          </h2>
          <ol className="steps">
            {t.protocol.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] mt-8 text-[var(--muted)]">
            Indications
          </h2>
          <ul className="mt-3 text-[0.95rem] leading-7">
            {t.indications.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] mt-8 text-[var(--muted)]">
            Aftercare
          </h2>
          <ul className="mt-3 text-[0.95rem] leading-7">
            {t.aftercare.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </div>
        <aside className="rx-meta">
          <dt>Code</dt>
          <dd>{t.code}</dd>
          <dt>Duration</dt>
          <dd>{t.duration}</dd>
          <dt>Fee from</dt>
          <dd>{formatPrice(t.price)}</dd>
          <dt>Room</dt>
          <dd>0{t.room}</dd>
          <dt>Department</dt>
          <dd className="capitalize">{t.department}</dd>
          <p className="mt-6">
            <Link href="/consult" className="consult-link inline-block">
              Request this protocol
            </Link>
          </p>
        </aside>
      </div>
    </>
  );
}
