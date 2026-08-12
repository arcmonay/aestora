import Image from "next/image";
import Link from "next/link";
import { formatPrice, treatments } from "@/data/treatments";

export default function Home() {
  return (
    <>
      <p className="kicker">Intake · New chart</p>
      <h1 className="display text-[2.4rem] sm:text-[3.1rem] max-w-3xl">
        Protocols for contour, lymph, and skin.
      </h1>
      <p className="lede mt-4">
        Aestora is a medical aesthetics clinic. Visits are charted like a
        procedure: code, duration, field, and aftercare. No retail floor. No
        walk-ins. You open a chart, we assign a room.
      </p>

      <table className="protocol-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Protocol</th>
            <th>Dept</th>
            <th>Time</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>
          {treatments.slice(0, 8).map((t) => (
            <tr key={t.slug}>
              <td>
                <code className="font-mono text-[0.72rem] text-[var(--cross)]">
                  {t.code}
                </code>
              </td>
              <td>
                <Link href={`/treatments/${t.slug}`}>{t.name}</Link>
              </td>
              <td className="capitalize text-[var(--muted)]">{t.department}</td>
              <td>{t.duration}</td>
              <td>{formatPrice(t.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--muted)]">
        <Link href="/treatments">Full protocol list →</Link>
      </p>

      <div className="rooms">
        <figure className="room">
          <Image
            src="/media/hall.jpg"
            alt="Clinic corridor"
            width={800}
            height={500}
          />
          <figcaption>Rm 00 · Arrival</figcaption>
        </figure>
        <figure className="room">
          <Image
            src="/media/body.jpg"
            alt="Body treatment room"
            width={800}
            height={500}
          />
          <figcaption>Rm 01 · Body contouring</figcaption>
        </figure>
        <figure className="room">
          <Image
            src="/media/face.jpg"
            alt="Facial treatment"
            width={800}
            height={500}
          />
          <figcaption>Rm 02 · Skin</figcaption>
        </figure>
        <figure className="room">
          <Image
            src="/media/lymph.jpg"
            alt="Lymphatic and facial work"
            width={800}
            height={500}
          />
          <figcaption>Rm 03 · Lymph</figcaption>
        </figure>
      </div>
    </>
  );
}
