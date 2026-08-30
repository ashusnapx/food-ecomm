import { skillStack } from "@/constants/profile";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

const PEN: Record<string, string> = {
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  purple: "var(--purple)",
  orange: "var(--orange)",
};

/**
 * The stack, grouped into five clusters rather than one long ruled list.
 * Each cluster gets its own pen, so the eye can find the model layer without
 * reading every word.
 */
export function Stack() {
  return (
    <section
      id="stack"
      className="border-y border-rule bg-paper-2/40"
    >
      <div className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
        <SectionTitle
          title="What I reach for"
          pen="var(--green)"
          note="Model layer first, because that is where the interesting problems are. Everything under it exists to make the model layer usable."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillStack.map((group, i) => (
            <Lay key={group.id} delay={i * 0.05} tilt={i % 2 === 0 ? -0.4 : 0.35}>
              <div
                className={`card-paper h-full rounded-md p-5 ${
                  group.id === "genai" ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <h3
                  className="hand text-3xl leading-none"
                  style={{ color: `hsl(${PEN[group.pen]})` }}
                >
                  {group.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-faint">{group.caption}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border px-2.5 py-1 text-sm text-ink-soft transition-colors"
                      style={{ borderColor: `hsl(${PEN[group.pen]} / 0.35)` }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Lay>
          ))}
        </div>
      </div>
    </section>
  );
}
