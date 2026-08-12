import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <p className="kicker">404</p>
      <h1 className="display text-[2rem]">No chart under that number.</h1>
      <p className="lede mt-3">
        <Link href="/treatments">Return to protocols</Link>
      </p>
    </>
  );
}
