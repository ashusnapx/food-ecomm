"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useArmed } from "@/lib/use-armed";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * A viewport band that is forgiving about where an element sits. The sticky
 * header covers the top of the screen, so a heading scrolled flush to the top
 * would never satisfy a strict threshold.
 */
const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" } as const;

/** Entrance shaped like a sheet of paper being laid down. */
export function Lay({
  children,
  className,
  delay = 0,
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: number;
}) {
  const reduce = useReducedMotion();
  const armed = useArmed();

  if (reduce || !armed) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22, rotate: tilt * 2.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={VIEWPORT}
      transition={{ duration: 0.68, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word rise, for handwritten headings.
 *
 * The observer sits on the wrapper, not on the words. Each word starts
 * translated fully below its own `overflow-hidden` box, so its intersection
 * rect is empty and `whileInView` on the word itself would never fire: the
 * clip that creates the effect also hides the element from the observer.
 * Watching the unclipped wrapper and propagating through variants avoids that
 * deadlock.
 */
export function Written({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const armed = useArmed();

  if (reduce || !armed) return <span className={className}>{text}</span>;

  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        shown: { transition: { delayChildren: delay, staggerChildren: 0.055 } },
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "105%", rotate: 4 },
              shown: {
                y: "0%",
                rotate: 0,
                transition: { duration: 0.62, ease: EASE },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
