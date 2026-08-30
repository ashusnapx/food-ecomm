import { internshipData } from "@/constants/constant";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const PEN = ["var(--red)", "var(--blue)", "var(--green)"];

function formatDate(value: string) {
  if (!value || value.toLowerCase() === "present") return "now";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Work history, three entries, kept short on purpose. */
export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
      <SectionTitle title="How I got here" pen="var(--blue)" />

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {internshipData.map((role, i) => (
          <li key={`${role.companyName}-${role.fromDate}`}>
            <Lay delay={i * 0.07} tilt={i % 2 === 0 ? -0.4 : 0.4}>
              <article className="card-paper h-full rounded-md p-5">
                <p
                  className="hand text-xl leading-none"
                  style={{ color: `hsl(${PEN[i % PEN.length]})` }}
                >
                  {formatDate(role.fromDate)} to {formatDate(role.toDate)}
                </p>

                <h3 className="mt-3 font-medium leading-snug text-ink">{role.role}</h3>
                <p className="mt-1 text-sm text-ink-soft">{role.companyName}</p>

                <ul className="mt-4 space-y-2">
                  {role.workDone.slice(0, 2).map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-soft text-pretty">
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 border-t border-rule pt-3">
                  {role.TechStack.slice(0, 4).map((tech) => (
                    <li key={tech} className="font-mono text-[11px] text-ink-faint">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Lay>
          </li>
        ))}
      </ol>
    </section>
  );
}
