"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useArmed } from "@/lib/use-armed";

/**
 * Pen marks.
 *
 * Hand-drawn SVG is normally a bad default, but "written on paper with
 * different pens" is the literal brief, so these are the subject matter rather
 * than decoration. Each path is deliberately uneven; a perfect arc reads as a
 * border-radius, not as a person's hand.
 *
 * Every mark draws itself once on scroll-in via stroke-dashoffset, and renders
 * complete and static under reduced motion.
 */
type MarkProps = {
  className?: string;
  pen?: string;
  delay?: number;
  duration?: number;
};

function useDraw(delay: number, duration: number) {
  const reduce = useReducedMotion();
  // Same reasoning as the reveals: a path serialised at pathLength 0 would
  // never be drawn if the observer did not fire.
  const armed = useArmed();

  return reduce || !armed
    ? { initial: false as const, animate: { pathLength: 1 } }
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration, delay, ease: [0.16, 1, 0.3, 1] as const },
      };
}

/** Scratchy underline that sits under a word. */
export function Underline({
  className,
  pen = "var(--red)",
  delay = 0.1,
  duration = 0.7,
}: MarkProps) {
  const anim = useDraw(delay, duration);
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <motion.path
        {...anim}
        d="M3 10.5C46 5.4 96 4.2 148 6.1c50 1.8 100 5.4 149 2.2"
        stroke={`hsl(${pen})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Loose ellipse drawn around something worth noticing. */
export function CircleMark({
  className,
  pen = "var(--blue)",
  delay = 0.15,
  duration = 1,
}: MarkProps) {
  const anim = useDraw(delay, duration);
  return (
    <svg aria-hidden viewBox="0 0 320 120" preserveAspectRatio="none" className={className} fill="none">
      <motion.path
        {...anim}
        d="M162 8C86 6 14 28 9 60c-5 32 74 54 155 52 78-2 148-24 147-54C310 28 236 10 162 8"
        stroke={`hsl(${pen})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Curved arrow, for pointing at a thing from the margin. */
export function ArrowMark({
  className,
  pen = "var(--ink-soft)",
  delay = 0.2,
  duration = 0.8,
}: MarkProps) {
  const anim = useDraw(delay, duration);
  return (
    <svg aria-hidden viewBox="0 0 120 90" className={className} fill="none">
      <motion.path
        {...anim}
        d="M8 8c34 4 62 22 74 54"
        stroke={`hsl(${pen})`}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <motion.path
        {...anim}
        d="M68 50l16 14 4-20"
        stroke={`hsl(${pen})`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn checkmark, used where something is verified. */
export function CheckMark({ className, pen = "var(--green)", delay = 0, duration = 0.45 }: MarkProps) {
  const anim = useDraw(delay, duration);
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none">
      <motion.path
        {...anim}
        d="M4 13.5c2.4 1.4 4.3 3.3 5.7 5.6C12.4 12.6 15.6 7.6 20 4.4"
        stroke={`hsl(${pen})`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Star doodle, for the strongest single item on the page. */
export function StarMark({ className, pen = "var(--orange)", delay = 0, duration = 0.7 }: MarkProps) {
  const anim = useDraw(delay, duration);
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={className} fill="none">
      <motion.path
        {...anim}
        d="M20 3.5l4.9 11.2 12.2 1.2-9.1 8.2 2.6 12-10.6-6.3L9.4 36l2.6-12-9.1-8.2 12.2-1.2z"
        stroke={`hsl(${pen})`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
