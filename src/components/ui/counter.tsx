"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Counts a stat up once, the first time it scrolls into view.
 *
 * The final value is rendered on the server, and the animation writes directly
 * to the DOM node rather than through React state. That keeps the correct
 * number in the HTML for crawlers and no-JS readers, and avoids a re-render per
 * animation frame for what is purely a visual effect.
 */
export function Counter({
  value,
  suffix = "",
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || reduce || !node) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, reduce, value, duration, suffix]);

  return (
    <span ref={ref} className="tabular">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
