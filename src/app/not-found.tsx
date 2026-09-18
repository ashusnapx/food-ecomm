import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100dvh] place-items-center overflow-hidden px-5 text-center">
      <div className="scene scene-sky scene-clouds fade-bottom" />

      <div className="max-w-md">
        <p className="t-hero text-ink">404</p>
        <h1 className="t-h3 mt-4">Nothing lives on this page</h1>
        <p className="t-lead mt-4">
          Everything is on one page here. The work, the stack and the contact
          details are all a scroll away.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/">Back to the start</Button>
        </div>
      </div>

      {/* Keeps the crawler on a real anchor even if the button markup changes. */}
      <Link href="/" className="sr-only">
        Home
      </Link>
    </main>
  );
}
