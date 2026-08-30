import { stats, marginNotes } from "@/constants/profile";
import { Counter } from "@/components/ui/counter";
import { Lay } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { marqueeSkills } from "@/constants/profile";

const PEN: Record<string, string> = {
  blue: "var(--blue)",
  red: "var(--red)",
  green: "var(--green)",
  purple: "var(--purple)",
  orange: "var(--orange)",
  ink: "var(--ink)",
};

/**
 * The margin of the first page: four counted facts and four pinned notes,
 * followed by the tools ticker. Kept out of the hero so the hero stays a
 * single moment.
 */
export function Notes() {
  return (
    <section className="border-y border-rule bg-paper-2/60">
      <div className="mx-auto max-w-page px-5 py-12 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat, i) => (
              <Lay key={stat.label} delay={i * 0.06} tilt={i % 2 === 0 ? -0.6 : 0.5}>
                <div>
                  <dd
                    className="hand text-5xl leading-none tabular"
                    style={{ color: `hsl(${PEN[stat.pen]})` }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-2 text-sm text-ink-soft">{stat.label}</dt>
                </div>
              </Lay>
            ))}
          </dl>

          <ul className="space-y-3 self-center">
            {marginNotes.map((item, i) => (
              <Lay key={item.note} delay={0.1 + i * 0.06}>
                <li className="hand flex items-baseline gap-3 text-xl">
                  <span aria-hidden style={{ color: `hsl(${PEN[item.pen]})` }}>
                    &rarr;
                  </span>
                  <span style={{ color: `hsl(${PEN[item.pen]})` }}>{item.note}</span>
                </li>
              </Lay>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-rule py-3">
        <Marquee duration={58}>
          {marqueeSkills.map((skill) => (
            <span key={skill} className="hand flex items-center text-xl text-ink-faint">
              <span aria-hidden className="mx-5 text-ink-faint/50">
                &middot;
              </span>
              {skill}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
