import type { ReactNode } from "react";

/**
 * Hard-edged ticker. Two identical tracks, each translating a full 100% of its
 * own width, so the seam never shows. The clone is aria-hidden so a screen
 * reader reads the list once.
 */
export function Marquee({
  children,
  duration = 46,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="pause-on-hover flex w-max"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="animate-marquee flex shrink-0 items-center">
          {children}
        </div>
        <div aria-hidden className="animate-marquee flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
