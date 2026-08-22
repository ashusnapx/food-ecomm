"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, person } from "@/constants/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll-spy. The band is biased to the upper third so the marker moves when
  // a section arrives rather than when it crosses the exact middle.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:accent-block focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-bg/95 backdrop-blur-[2px]">
        <nav
          aria-label="Primary"
          className="gutter mx-auto flex h-14 max-w-page items-center justify-between gap-6"
        >
          <a href="#top" className="label flex items-center gap-2.5 text-ink">
            <span aria-hidden className="h-2.5 w-2.5 bg-accent" />
            {person.name}
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`label flex items-baseline gap-1.5 transition-colors ${
                      isActive ? "text-ink" : "text-faint hover:text-ink"
                    }`}
                  >
                    <span className={isActive ? "text-accent" : "text-rule-strong"}>
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            <a
              href={person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label hidden accent-block px-3 py-2 transition-opacity hover:opacity-80 sm:block"
            >
              Résumé ↗
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="label text-ink lg:hidden"
            >
              {open ? "CLOSE" : "MENU"}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg pt-14 lg:hidden"
          >
            <ul className="gutter border-t border-rule">
              {navLinks.map((link, i) => (
                <li key={link.href} className="border-b border-rule">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="row-wipe flex items-baseline justify-between py-5 transition-colors hover:text-accent-ink"
                  >
                    <span className="type-lg">{link.label}</span>
                    <span className="label text-faint">0{i + 1}</span>
                  </a>
                </li>
              ))}
              <li className="pt-8">
                <a
                  href={person.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label accent-block block px-4 py-4 text-center"
                >
                  Download résumé ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
