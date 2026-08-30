import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="ruled margin-rule grid min-h-[100dvh] place-items-center px-5">
      <div className="max-w-md pl-8 md:pl-16">
        <p className="hand text-[7rem] leading-none text-red">404</p>
        <h1 className="hand mt-2 text-4xl leading-tight text-ink">
          Nothing written on this page
        </h1>
        <p className="type-body mt-4 text-ink-soft text-pretty">
          Everything lives on one page here. The work, the stack and the contact
          details are all a scroll away.
        </p>
        <Link
          href="/"
          className="hand sticky-note mt-8 inline-block rounded-md px-6 py-3 text-2xl leading-none"
        >
          Back to the start
        </Link>
      </div>
    </main>
  );
}
