import { notFound } from "next/navigation";
import { getGuide, guides } from "@/data/content";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const g = getGuide(slug);
  return { title: g?.title ?? "Guide", description: g?.dek };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <article className="prose-block">
      <p className="kicker">{guide.category} · {guide.readMinutes} min</p>
      <h1 className="display text-4xl mt-2">{guide.title}</h1>
      <p className="lede mt-3">{guide.dek}</p>
      {guide.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </article>
  );
}
