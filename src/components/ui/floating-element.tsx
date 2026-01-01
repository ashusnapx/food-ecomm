"use client";
import { motion } from "framer-motion";

export function FloatingElement({
  children,
  depth = 1,
  className,
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10 * depth, 0],
      }}
      transition={{
        duration: 2 + depth,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
