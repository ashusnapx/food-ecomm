"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main
      role="alert"
      aria-live="assertive"
      className="gutter mx-auto flex min-h-screen max-w-page flex-col justify-center"
    >
      <p className="label text-danger">Runtime error</p>
      <h1 className="type-xl mt-6">Something broke.</h1>
      <p className="type-body mt-6 max-w-md text-dim">
        An unexpected error stopped this view rendering. Retrying usually clears
        it.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="label accent-block px-5 py-3.5"
        >
          Try again
        </button>
        <Link
          href="/"
          className="label border border-rule-strong px-5 py-3.5 text-ink transition-colors hover:border-ink"
        >
          Go home
        </Link>
      </div>
      {error.digest && (
        <p className="label mt-10 text-faint">Digest {error.digest}</p>
      )}
    </main>
  );
}
