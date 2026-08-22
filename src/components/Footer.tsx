"use client";

import { useEffect, useState } from "react";
import { socialLinks } from "@/constants/constant";
import { person } from "@/constants/profile";
import { Lift, MaskReveal } from "@/components/ui/mask-reveal";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");

  // Local clock in the colophon. Small, but it is the kind of detail that says
  // a person maintains this page.
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  };

  return (
    <footer id="contact" className="border-t border-rule">
      <div className="gutter mx-auto max-w-page py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-4">
          <p className="label col-span-12 text-faint md:col-span-2">
            11 <span className="mx-1 text-rule-strong">/</span> Contact
          </p>

          <div className="col-span-12 mt-8 md:col-span-10 md:mt-0">
            <h2 className="type-display uppercase">
              <MaskReveal>Let&apos;s</MaskReveal>
              <MaskReveal delay={0.08}>
                <span className="inline-flex items-baseline gap-[0.1em]">
                  build
                  <span
                    aria-hidden
                    className="inline-block h-[0.44em] w-[0.44em] translate-y-[-0.05em] bg-accent"
                  />
                </span>
              </MaskReveal>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-10 border-t border-rule pt-10 md:mt-20">
          <div className="col-span-12 md:col-span-6">
            <Lift>
              <p className="type-body max-w-md text-dim text-pretty">
                Open to Generative AI engineering roles and selected freelance
                builds. Tell me what you&apos;re working on — I reply to
                everything.
              </p>
            </Lift>

            <Lift delay={0.08}>
              <div className="mt-8 flex flex-wrap items-stretch gap-3">
                <a
                  href={`mailto:${person.email}?subject=GenAI%20project%20enquiry`}
                  className="label accent-block px-5 py-4 transition-opacity hover:opacity-80"
                >
                  {person.email} ↗
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="label border border-rule-strong px-5 py-4 text-ink transition-colors hover:border-ink"
                >
                  {copied ? "Copied ✓" : "Copy address"}
                </button>
              </div>
            </Lift>
          </div>

          {/* Elsewhere */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="label border-b border-rule pb-3 text-faint">
              Elsewhere
            </p>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.href} className="border-b border-rule">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="row-wipe group flex items-baseline justify-between py-3.5 transition-colors hover:text-accent-ink"
                  >
                    <span className="text-sm">{link.label}</span>
                    <span className="label text-faint transition-colors group-hover:text-accent-ink/60">
                      {link.handle} ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-16 flex flex-col gap-3 border-t border-rule pt-6 md:mt-24 md:flex-row md:items-center md:justify-between">
          <p className="label text-faint">
            © {new Date().getFullYear()} {person.name} — {person.role}
          </p>
          <p className="label text-faint">
            {person.location.city} {time && <span className="text-dim">{time} IST</span>}
            <span className="mx-2 text-rule-strong">/</span>
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
