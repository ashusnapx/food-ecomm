"use client";

import Link from "next/link";
import { useEffect } from "react";

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
      className="grid min-h-[100dvh] place-items-center bg-white px-5"
    >
      <div className="max-w-md">
        <h1 className="t-h2">Something went wrong</h1>
        <p className="t-lead mt-5">
          An unexpected error stopped this view rendering. Retrying usually
          clears it.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button type="button" onClick={reset} className="btn btn-primary">
            <span>Try again</span>
            <span className="btn__badge" aria-hidden>
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" />
              </svg>
            </span>
          </button>

          <Link href="/" className="btn-ghost">
            Go home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-9 font-mono text-[11px] text-faint">
            digest {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}
