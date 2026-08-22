import { pillars } from "@/constants/profile";
import { Lift, MaskReveal } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";

/** Each pillar owns one flat ink, declared alongside its copy in profile.ts. */
const TONE_BLOCK: Record<string, string> = {
  accent: "accent-block",
  blue: "blue-block",
  orange: "orange-block",
  pink: "pink-block",
};

const TONE_VAR: Record<string, string> = {
  accent: "var(--accent)",
  blue: "var(--blue)",
  orange: "var(--orange)",
  pink: "var(--pink)",
};

/**
 * Four numbered claims, set as ruled rows rather than as cards.
 *
 * Each blurb is deliberately self-contained: this is the section an answer
 * engine quotes when asked what this person actually does.
 */
export function Approach() {
  return (
    <section id="approach" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="01"
        label="Approach"
        tone="accent"
        title={
          <>
            Anyone can call an API.
            <br />
            Shipping it is the job.
          </>
        }
        note="A demo that works on the happy path and a system people depend on are different pieces of engineering. Here is where the difference goes."
      />

      <ol className="mt-16 border-t border-rule md:mt-24">
        {pillars.map((pillar, i) => (
          <li key={pillar.id} className="border-b border-rule">
            <Lift delay={i * 0.04}>
              <article className="grid grid-cols-12 gap-x-4 gap-y-4 py-8 md:py-10">
                <p className="col-span-2 md:col-span-1">
                  <span className={`label ${TONE_BLOCK[pillar.tone]} px-2 py-1.5`}>
                    0{i + 1}
                  </span>
                </p>

                <h3 className="type-lg col-span-10 md:col-span-4">
                  <MaskReveal>{pillar.title}</MaskReveal>
                </h3>

                <p className="type-body col-span-12 text-dim text-pretty md:col-span-5">
                  {pillar.blurb}
                </p>

                <ul className="col-span-12 flex flex-wrap gap-x-4 gap-y-2 md:col-span-2 md:flex-col md:gap-y-2.5">
                  {pillar.tags.map((tag) => (
                    <li
                      key={tag}
                      className="label flex items-center gap-2 text-dim"
                    >
                      <span
                        aria-hidden
                        className="h-[7px] w-[7px] shrink-0"
                        style={{ backgroundColor: `hsl(${TONE_VAR[pillar.tone]})` }}
                      />
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Lift>
          </li>
        ))}
      </ol>
    </section>
  );
}
