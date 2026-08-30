"use client";

import { useState } from "react";
import { socialLinks } from "@/constants/constant";
import { person } from "@/constants/profile";
import { Underline } from "@/components/ui/marks";
import { Lay, Written } from "@/components/ui/reveal";

export function Footer() {
  const [copied, setCopied] = useState(false);

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
    <footer id="contact" className="ruled margin-rule border-t border-rule">
      <div className="mx-auto max-w-page px-5 py-20 pl-8 md:px-10 md:py-28 md:pl-16">
        <h2 className="hand type-title relative inline-block text-ink">
          <Written text="Let's build something" />
          <Underline pen="var(--red)" className="absolute inset-x-0 -bottom-2 h-3 w-full" />
        </h2>

        <Lay delay={0.1}>
          <p className="type-body mt-6 max-w-md text-ink-soft text-pretty">
            {person.availability}, and selected freelance work. Tell me what
            you are building.
          </p>
        </Lay>

        <Lay delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${person.email}?subject=GenAI%20project`}
              className="hand sticky-note rounded-md px-6 py-3 text-2xl leading-none transition-transform duration-300 hover:-translate-y-0.5"
            >
              {person.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="hand rounded-md border-2 border-ink px-5 py-3 text-2xl leading-none text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {copied ? "copied" : "copy it"}
            </button>
          </div>
        </Lay>

        <Lay delay={0.22}>
          <ul className="mt-14 flex flex-wrap gap-x-7 gap-y-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hand text-xl text-ink-soft hover:text-ink"
                >
                  <span className="pen-underline">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Lay>

        <p className="mt-14 border-t border-rule pt-6 font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} {person.name}, {person.role}
        </p>
      </div>
    </footer>
  );
}
