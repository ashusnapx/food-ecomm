"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, Cross } from "@/components/ui/icons";
import { navLinks, person } from "@/constants/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The floating pill nav.
 *
 * A single white capsule that hangs clear of the page rather than a full-bleed
 * bar: brand tile on the left, links in the middle, one dark call to action
 * inset on the right. The link for whichever section is currently on screen
 * carries `aria-current`, which is what `.nav-link[aria-current="true"]` paints
 * as the light grey active pill, so the highlight costs no extra markup.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  /* Scroll spy. The band is biased to the top of the viewport so a heading
     sitting just under the floating pill counts as the current section. */
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

  /* The panel covers the page, so the page must not scroll behind it. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Growing past the lg breakpoint puts the real links back on screen, so the
     panel would otherwise be left stranded over a nav that already works. */
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  const wordmark = person.name.split(" ")[0];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-[15px] focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <motion.header
        initial={reduce ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed inset-x-0 top-4 z-50 px-4 md:px-6"
      >
        <nav
          aria-label="Primary"
          className="nav-pill mx-auto w-full max-w-[880px] justify-between"
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-2.5 rounded-full pr-1"
          >
            <Image
              src="/avatar.png"
              alt=""
              width={72}
              height={72}
              priority
              className="h-9 w-9 rounded-full object-cover ring-1 ring-line"
            />
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
              {wordmark}
            </span>
          </a>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link block"
                  aria-current={
                    active === link.href.slice(1) ? "true" : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-1 lg:ml-0">
            <Button
              href={person.resumeUrl}
              variant="dark"
              external
              className="hidden shadow-none sm:inline-flex"
            >
              Resume
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-surface lg:hidden"
            >
              {open ? (
                <Cross className="h-5 w-5" />
              ) : (
                <span className="flex flex-col gap-[5px]" aria-hidden>
                  <span className="block h-[1.5px] w-[18px] rounded-full bg-ink" />
                  <span className="block h-[1.5px] w-[18px] rounded-full bg-ink" />
                </span>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            key="site-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.26, ease: EASE }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white px-6 pb-12 pt-28 lg:hidden"
          >
            <nav aria-label="Site">
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.04 + i * 0.05, ease: EASE }}
                    className="border-b border-line"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        active === link.href.slice(1) ? "true" : undefined
                      }
                      className="t-h3 flex items-center justify-between gap-4 py-5 text-ink"
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 text-faint" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-9">
                <Button href={person.resumeUrl} variant="dark" external>
                  Resume
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
