import type { ReactNode } from "react";
import { Lift, MaskReveal, RuleDraw } from "./mask-reveal";

/**
 * Every section opens the same way: a drawn rule, a numbered mono label on the
 * left, the title on the right. The repetition is what makes the page read as
 * one document rather than a stack of components.
 *
 * `tone` colours the section number block, so each section carries a different
 * flat ink without any of them owning the page.
 */
const TONE_BLOCK: Record<string, string> = {
  accent: "accent-block",
  blue: "blue-block",
  orange: "orange-block",
  pink: "pink-block",
};

export function SectionHeader({
  index,
  label,
  title,
  note,
  tone = "accent",
}: {
  index: string;
  label: string;
  title: ReactNode;
  note?: ReactNode;
  tone?: "accent" | "blue" | "orange" | "pink";
}) {
  return (
    <header>
      <RuleDraw />

      <div className="grid grid-cols-12 gap-x-4 pt-5 md:pt-6">
        <div className="col-span-12 md:col-span-2">
          <Lift>
            <p className="flex items-center gap-2.5">
              <span className={`label ${TONE_BLOCK[tone]} px-2 py-1.5`}>
                {index}
              </span>
              <span className="label text-dim">{label}</span>
            </p>
          </Lift>
        </div>

        <div className="col-span-12 mt-6 md:col-span-10 md:mt-0">
          <h2 className="type-xl text-balance">
            <MaskReveal>{title}</MaskReveal>
          </h2>

          {note && (
            <Lift delay={0.12}>
              <p className="type-body mt-6 max-w-2xl text-dim text-pretty">
                {note}
              </p>
            </Lift>
          )}
        </div>
      </div>
    </header>
  );
}
