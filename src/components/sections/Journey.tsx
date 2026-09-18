import { Lay } from "@/components/ui/reveal";
import { internshipData } from "@/constants/constant";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(value: string) {
  if (!value || value.toLowerCase() === "present") return "Now";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/**
 * Work history, three entries, kept short on purpose.
 *
 * The current role gets the black card so the eye lands on where he is now
 * rather than reading the row left to right as equally weighted.
 */
export function Journey() {
  return (
    <section id="journey" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-page">
        <Lay className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="t-h2 mt-6">
              How I
              <br />
              got here.
            </h2>
          </div>
          <p className="t-lead max-w-md md:text-right">
            Enterprise systems, where breaking production has a price.
          </p>
        </Lay>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {internshipData.map((role, i) => {
            const current = role.toDate.toLowerCase() === "present";

            return (
              <li key={`${role.companyName}-${role.fromDate}`}>
                <Lay delay={i * 0.07} className="h-full min-w-0">
                  <article
                    className={`${
                      current ? "card-black" : "card-surface"
                    } flex h-full flex-col p-6`}
                  >
                    <p
                      className={`tabular text-[13px] font-semibold uppercase tracking-widest ${
                        current ? "text-accent" : "text-accent"
                      }`}
                    >
                      {formatDate(role.fromDate)} to {formatDate(role.toDate)}
                    </p>

                    <h3
                      className={`t-h3 mt-4 ${current ? "text-white" : ""}`}
                    >
                      {role.role}
                    </h3>
                    <p className="t-small mt-1.5">{role.companyName}</p>

                    <ul className="mt-6 flex-1 space-y-3">
                      {role.workDone.slice(0, 2).map((item) => (
                        <li
                          key={item}
                          className={`text-[15px] leading-relaxed ${
                            current ? "text-white/75" : "text-muted"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <ul
                      className={`mt-6 flex flex-wrap gap-2 border-t pt-5 ${
                        current ? "border-white/15" : "border-line"
                      }`}
                    >
                      {role.TechStack.slice(0, 3).map((tech) => (
                        <li
                          key={tech}
                          className={
                            current
                              ? "rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] text-white/80"
                              : "chip-outline"
                          }
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Lay>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
