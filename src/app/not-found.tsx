import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="gutter mx-auto flex min-h-screen max-w-page flex-col justify-center">
      <p className="label text-faint">Error 404</p>
      <h1 className="type-display mt-6 uppercase">
        Not
        <br />
        found
      </h1>
      <p className="type-body mt-8 max-w-md text-dim text-pretty">
        That URL doesn&apos;t exist. Everything lives on one page here — the
        work, the stack and the contact details are all a scroll away.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="label accent-block px-5 py-3.5">
          ← Back home
        </Link>
        <Link
          href="/#work"
          className="label border border-rule-strong px-5 py-3.5 text-ink transition-colors hover:border-ink"
        >
          See the work
        </Link>
      </div>
    </main>
  );
}
