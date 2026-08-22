import { skillStack } from "@/constants/profile";

/** Flat inks cycled across the five groups. */
const TONE = [
  "var(--accent)",
  "var(--blue)",
  "var(--orange)",
  "var(--pink)",
  "var(--fg-dim)",
];
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * The stack as a specimen table.
 *
 * No tabs, no chips, no progress bars — skill "percentages" are invented data
 * and everyone knows it. A plain ruled table shows the whole stack at once and
 * lets the reader judge it, which is faster and more honest.
 */
export function Stack() {
  return (
    <section id="stack" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="05"
        label="Stack"
        tone="orange"
        title={
          <>
            Tools I reach for
            <br />
            without looking them up.
          </>
        }
        note="Model layer first, because that is where the interesting problems are. Everything under it exists to make the model layer usable."
      />

      <div className="mt-16 border-t border-rule md:mt-24">
        {skillStack.map((group, i) => (
          <Lift key={group.id} delay={i * 0.05}>
            <div className="grid grid-cols-12 gap-x-4 gap-y-4 border-b border-rule py-8 md:py-10">
              <div className="col-span-12 md:col-span-3">
                <span
                  aria-hidden
                  className="mb-3 block h-1.5 w-10"
                  style={{ backgroundColor: `hsl(${TONE[i % TONE.length]})` }}
                />
                <h3 className="type-md">{group.title}</h3>
                <p className="label mt-2 text-faint">{group.caption}</p>
              </div>

              <ul className="col-span-12 flex flex-wrap gap-x-6 gap-y-2.5 md:col-span-8">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group/skill flex items-center gap-2 text-sm text-dim transition-colors hover:text-ink"
                  >
                    <span
                      aria-hidden
                      className="h-[6px] w-[6px] shrink-0"
                      style={{ backgroundColor: `hsl(${TONE[i % TONE.length]})` }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>

              <p className="label col-span-12 self-start text-right text-faint md:col-span-1">
                {String(group.skills.length).padStart(2, "0")}
              </p>
            </div>
          </Lift>
        ))}
      </div>
    </section>
  );
}
