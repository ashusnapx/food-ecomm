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
      className="ruled grid min-h-[100dvh] place-items-center px-5"
    >
      <div className="max-w-md">
        <h1 className="hand text-5xl leading-tight text-red">Something went wrong</h1>
        <p className="type-body mt-4 text-ink-soft">
          An unexpected error stopped this view rendering. Retrying usually
          clears it.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="hand sticky-note rounded-md px-6 py-3 text-2xl leading-none"
          >
            Try again
          </button>
          <Link
            href="/"
            className="hand rounded-md border-2 border-ink px-6 py-3 text-2xl leading-none text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Go home
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 font-mono text-[11px] text-ink-faint">
            digest {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}
