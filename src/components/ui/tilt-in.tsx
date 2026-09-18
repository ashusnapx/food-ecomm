"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

/**
 * The reference's signature move: a screenshot that lies back on its X axis and
 * rises to flat as it scrolls into view.
 *
 * The perspective lives on the wrapper rather than the moving element, which is
 * also what the scroll progress is measured against, so the rotation is driven
 * by where the frame sits in the viewport instead of by a timed animation.
 * Reduced motion drops the transform completely rather than shortening it: a
 * 24 degree rotation is exactly the kind of thing the preference is asking to
 * be spared.
 */
export function TiltIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div ref={ref} className={`stage ${className}`}>
      <motion.div
        style={
          reduce
            ? undefined
            : { rotateX, scale, opacity, transformStyle: "preserve-3d" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
