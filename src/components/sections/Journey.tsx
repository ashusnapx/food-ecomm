import { internshipData } from "@/constants/constant";
import { Lift, MaskReveal } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/** Most recent role gets the loudest ink. */
const TONE = ["var(--accent)", "var(--blue)", "var(--orange)"];

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

/** "2025-06-01" -> "JUN 2025"; "Present" passes through. */
function formatDate(value: string) {
  if (!value || value.toLowerCase() === "present") return "PRESENT";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value.toUpperCase();
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/**
 * Experience as a ruled ledger rather than a decorated timeline.
 *
 * The alternating left/right timeline the old version used forced the eye to
 * zig-zag and collapsed to a single rail on mobile anyway. Dates in a fixed
 * left column scan in one pass.
 */
export function Journey() {
  return (
    <section id="journey" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="06"
        label="Journey"
        tone="accent"
        title={
          <>
            Teaching algorithms,
            <br />
            then shipping AI.
          </>
        }
        note="Enterprise engineering by day, generative AI by conviction. Both halves show up in how I build."
      />

      <ol className="mt-16 border-t border-rule md:mt-24">
        {internshipData.map((role, i) => (
          <li key={`${role.companyName}-${role.fromDate}`} className="border-b border-rule">
            <Lift delay={i * 0.06}>
              <article className="grid grid-cols-12 gap-x-4 gap-y-5 py-8 md:py-12">
                {/* Dates */}
                <div className="col-span-12 md:col-span-2">
                  <span
                    aria-hidden
                    className="mb-3 block h-1.5 w-10"
                    style={{ backgroundColor: `hsl(${TONE[i % TONE.length]})` }}
                  />
                  <p className="label text-ink">{formatDate(role.fromDate)}</p>
                  <p className="label mt-1.5 text-faint">
                    ↓ {formatDate(role.toDate)}
                  </p>
                </div>

                {/* Role */}
                <div className="col-span-12 md:col-span-4">
                  <h3 className="type-md">
                    <MaskReveal>{role.role}</MaskReveal>
                  </h3>
                  <p className="mt-2 text-sm text-dim">{role.companyName}</p>
                  <p className="label mt-1.5 text-faint">{role.modeOfWork}</p>
                </div>

                {/* Detail */}
                <div className="col-span-12 md:col-span-6">
                  <ul className="space-y-2.5">
                    {role.workDone.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-dim"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.55em] h-[5px] w-[5px] shrink-0"
                          style={{ backgroundColor: `hsl(${TONE[i % TONE.length]})` }}
                        />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {role.TechStack.map((tech) => (
                      <li key={tech} className="label text-faint">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Lift>
          </li>
        ))}
      </ol>
    </section>
  );
}
