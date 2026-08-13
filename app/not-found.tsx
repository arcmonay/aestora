import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="bay-tag">404</p>
      <h1 className="machine-name text-4xl mt-2">That machine is not on the floor.</h1>
      <Link href="/shop" className="btn btn-brass mt-6 inline-flex">
        Shop equipment
      </Link>
    </section>
  );
}
