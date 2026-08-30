"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, person } from "@/constants/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const PEN = ["var(--red)", "var(--blue)", "var(--green)", "var(--purple)", "var(--orange)", "var(--ink)"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

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
        className="hand sr-only rounded-md focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-highlight focus:px-4 focus:py-2 focus:text-lg focus:text-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-rule bg-paper">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-5 md:px-10"
        >
          <a href="#top" className="hand text-2xl leading-none text-ink">
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
                    className="hand relative text-xl leading-none text-ink-soft transition-colors hover:text-ink"
                    style={isActive ? { color: `hsl(${PEN[i % PEN.length]})` } : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-scribble"
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full"
                        style={{ background: `hsl(${PEN[i % PEN.length]})` }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hand sticky-note hidden rounded-md px-3.5 py-1.5 text-lg leading-none sm:block"
            >
              Résumé
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="hand text-xl leading-none text-ink lg:hidden"
            >
              {open ? "close" : "menu"}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="ruled fixed inset-0 z-40 bg-paper pt-16 lg:hidden"
          >
            <ul className="px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-rule"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hand block py-4 text-4xl leading-none"
                    style={{ color: `hsl(${PEN[i % PEN.length]})` }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a
                  href={person.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hand sticky-note block rounded-md px-4 py-3 text-center text-2xl leading-none"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
