import Link from "next/link";
import { treatments } from "@/data/treatments";

export function ChartIndex() {
  return (
    <aside className="chart-index">
      <h2>Active chart</h2>
      <ol>
        {treatments.map((t) => (
          <li key={t.slug}>
            <Link href={`/treatments/${t.slug}`}>
              <code>{t.code}</code>
              <span>{t.name}</span>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
