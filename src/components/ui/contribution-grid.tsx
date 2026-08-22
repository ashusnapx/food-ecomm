"use client";

import { useMemo } from "react";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

/**
 * GitHub contribution heatmap, drawn from scratch.
 *
 * Square cells, no rounding, and an ink-to-lime ramp — GitHub's stock green
 * would be the only off-system colour on the page. Levels map to opacity of the
 * accent rather than to five separate colours, so it stays correct in both
 * themes without a second palette.
 *
 * Data is passed in rather than fetched here: the parent already loads the
 * whole GitHub aggregate, and two components fetching the same endpoint would
 * double the requests against a 60/hour budget.
 */
const LEVEL_STYLE: Record<number, string> = {
  0: "bg-rule/45",
  1: "bg-accent/25",
  2: "bg-accent/50",
  3: "bg-accent/75",
  4: "bg-accent",
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function ContributionGrid({
  days,
  total,
}: {
  days: Day[] | null;
  total: number;
}) {
  /**
   * Bucket days into calendar weeks. The feed starts on whatever weekday the
   * range began, so the first column is padded with nulls to keep every row
   * aligned to a fixed weekday.
   */
  const { weeks, monthMarks } = useMemo(() => {
    if (!days?.length) return { weeks: [], monthMarks: [] };

    const padded: (Day | null)[] = [
      ...Array(new Date(days[0].date).getUTCDay()).fill(null),
      ...days,
    ];

    const cols: (Day | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) cols.push(padded.slice(i, i + 7));

    // One label per month, on the first column that month appears in.
    const marks: { col: number; label: string }[] = [];
    let lastMonth = -1;
    cols.forEach((col, i) => {
      const first = col.find(Boolean);
      if (!first) return;
      const month = new Date(first.date).getUTCMonth();
      if (month !== lastMonth) {
        marks.push({ col: i, label: MONTHS[month] });
        lastMonth = month;
      }
    });

    return { weeks: cols, monthMarks: marks };
  }, [days]);

  if (!days) {
    return (
      <div className="flex h-[7.5rem] items-center">
        <p className="label text-faint">
          Loading contributions<span className="animate-caret">_</span>
        </p>
      </div>
    );
  }

  if (!weeks.length) {
    return (
      <div className="flex h-[7.5rem] items-center">
        <p className="label text-faint">
          Contribution data unavailable — see the profile directly
        </p>
      </div>
    );
  }

  return (
    <figure className="w-full">
      <div className="overflow-x-auto pb-1">
        <div className="min-w-max">
          {/* Month scale */}
          <div
            aria-hidden
            className="mb-1.5 grid gap-[3px]"
            style={{ gridTemplateColumns: `repeat(${weeks.length}, 11px)` }}
          >
            {weeks.map((_, i) => (
              <span key={i} className="label-sm h-3 whitespace-nowrap text-faint">
                {monthMarks.find((m) => m.col === i)?.label ?? ""}
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
                      className={`h-[11px] w-[11px] ${LEVEL_STYLE[day.level]}`}
                      title={`${day.count} contribution${
                        day.count === 1 ? "" : "s"
                      } on ${day.date}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <span className="label text-dim">
          {total.toLocaleString()} contributions in the last year
        </span>
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="label-sm text-faint">Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`h-[11px] w-[11px] ${LEVEL_STYLE[l]}`} />
          ))}
          <span className="label-sm text-faint">More</span>
        </span>
      </figcaption>
    </figure>
  );
}
