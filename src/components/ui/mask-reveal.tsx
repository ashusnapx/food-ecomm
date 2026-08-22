"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The signature move of this design: a line of type sliding up from behind a
 * hard edge. No fade, no blur — the mask does the work, which is why it reads
 * as typographic rather than as a generic "fade in on scroll".
 *
 * Each line needs its own clipping container, so callers pass one line per
 * instance rather than a whole paragraph.
 */
export function MaskReveal({
  children,
  delay = 0,
  duration = 0.9,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <span className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once, amount: 0.6 }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Fade-and-lift for non-type content (paragraphs, tables, media). */
export function Lift({
  children,
  delay = 0,
  className,
  distance = 20,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself left-to-right when it scrolls into view. */
export function RuleDraw({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce)
    return <div className={`h-px w-full bg-rule ${className ?? ""}`} />;

  return (
    <motion.div
      className={`h-px w-full origin-left bg-rule ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: EASE }}
    />
  );
}
