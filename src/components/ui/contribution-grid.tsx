"use client";

import { useMemo } from "react";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

/**
 * Contribution heatmap drawn by hand rather than by react-github-calendar,
 * which is ESM only and was failing to load its browser chunk. Cells step up in
 * green ink so the grid belongs to this palette instead of GitHub's.
 *
 * Data is passed in: the parent already loads the whole GitHub aggregate, and
 * two components hitting the same endpoint would double the requests against a
 * sixty per hour budget.
 */
const LEVEL: Record<number, string> = {
  0: "bg-rule/45",
  1: "bg-green/25",
  2: "bg-green/50",
  3: "bg-green/75",
  4: "bg-green",
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function ContributionGrid({ days, total }: { days: Day[] | null; total: number }) {
  const { weeks, marks } = useMemo(() => {
    if (!days?.length) return { weeks: [], marks: [] as { col: number; label: string }[] };

    // The feed starts on whatever weekday the range began, so pad the first
    // column to keep every row on a fixed weekday.
    const padded: (Day | null)[] = [
      ...Array(new Date(days[0].date).getUTCDay()).fill(null),
      ...days,
    ];
    const cols: (Day | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) cols.push(padded.slice(i, i + 7));

    const m: { col: number; label: string }[] = [];
    let last = -1;
    cols.forEach((col, i) => {
      const first = col.find(Boolean);
      if (!first) return;
      const month = new Date(first.date).getUTCMonth();
      if (month !== last) {
        m.push({ col: i, label: MONTHS[month] });
        last = month;
      }
    });
    return { weeks: cols, marks: m };
  }, [days]);

  if (!days) {
    return (
      <p className="hand flex h-28 items-center text-xl text-ink-faint">
        counting commits<span className="animate-caret">_</span>
      </p>
    );
  }

  if (!weeks.length) {
    return (
      <p className="hand flex h-28 items-center text-xl text-ink-faint">
        contribution data is unavailable right now
      </p>
    );
  }

  return (
    <figure className="w-full">
      <div className="overflow-x-auto pb-1">
        <div className="min-w-max">
          <div
            aria-hidden
            className="mb-1.5 grid gap-[3px]"
            style={{ gridTemplateColumns: `repeat(${weeks.length}, 11px)` }}
          >
            {weeks.map((_, i) => (
              <span key={i} className="h-3 whitespace-nowrap font-mono text-[9px] text-ink-faint">
                {marks.find((m) => m.col === i)?.label ?? ""}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week[di];
                  if (!day) return <span key={di} className="h-[11px] w-[11px]" />;
                  return (
                    <span
                      key={di}
                      className={`h-[11px] w-[11px] rounded-sm ${LEVEL[day.level]}`}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <span className="hand text-xl text-ink-soft">
          {total.toLocaleString()} contributions this year
        </span>
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="font-mono text-[10px] text-ink-faint">less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`h-[11px] w-[11px] rounded-sm ${LEVEL[l]}`} />
          ))}
          <span className="font-mono text-[10px] text-ink-faint">more</span>
        </span>
      </figcaption>
    </figure>
  );
}
