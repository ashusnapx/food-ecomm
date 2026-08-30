import type { ReactNode } from "react";
import { Underline } from "./marks";
import { Lay, Written } from "./reveal";

/**
 * Section heading: handwritten, with a pen underline in that section's colour.
 *
 * No numbering and no uppercase eyebrow. Where a section sits on the page
 * already tells you what it is, and a label above every heading is the single
 * most templated rhythm in machine-made layouts.
 */
export function SectionTitle({
  title,
  note,
  pen = "var(--red)",
  className,
}: {
  title: string;
  note?: ReactNode;
  pen?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="hand type-title relative inline-block pb-3">
        <Written text={title} />
        <Underline
          pen={pen}
          className="absolute inset-x-0 -bottom-1 h-3 w-full"
        />
      </h2>

      {note && (
        <Lay delay={0.1}>
          <p className="type-body mt-5 max-w-xl text-ink-soft text-pretty">
            {note}
          </p>
        </Lay>
      )}
    </div>
  );
}
