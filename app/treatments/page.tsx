import type { Metadata } from "next";
import Link from "next/link";
import { departments, formatPrice, treatmentsByDepartment } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Protocols",
};

export default function TreatmentsPage() {
  return (
    <>
      <p className="kicker">Chart · Protocols</p>
      <h1 className="display text-[2.2rem]">Treatment menu</h1>
      <p className="lede mt-3">
        Each visit is a written protocol. Codes stay on the chart so you can
        book a series without re-explaining the field.
      </p>

      {departments.map((dept) => (
        <section key={dept.id} className="mt-10">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--teal)]">
            {dept.label} · {dept.note}
          </h2>
          <table className="protocol-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Protocol</th>
                <th>Room</th>
                <th>Time</th>
                <th>From</th>
              </tr>
            </thead>
            <tbody>
              {treatmentsByDepartment(dept.id).map((t) => (
                <tr key={t.slug}>
                  <td>
                    <code className="font-mono text-[0.72rem] text-[var(--cross)]">
                      {t.code}
                    </code>
                  </td>
                  <td>
                    <Link href={`/treatments/${t.slug}`}>{t.name}</Link>
                    <div className="text-[0.82rem] text-[var(--muted)] mt-1 max-w-xl">
                      {t.summary}
                    </div>
                  </td>
                  <td>{t.room}</td>
                  <td>{t.duration}</td>
                  <td>{formatPrice(t.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}
