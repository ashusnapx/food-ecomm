"use client";

import { useEffect, useState } from "react";
import { Counter } from "@/components/ui/counter";
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ContributionGrid } from "@/components/ui/contribution-grid";

type Language = { name: string; count: number; share: number };
type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
};
type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

type Payload = {
  contributions: Day[];
  lastYear: number;
  profile: {
    publicRepos: number;
    followers: number;
    createdAt: string;
  } | null;
  languages: Language[];
  featured: Repo[];
  stars: number;
  ownRepos: number;
};

/** Flat inks cycled across the language bar, in a fixed order. */
const LANG_TONE = [
  "var(--accent)",
  "var(--blue)",
  "var(--orange)",
  "var(--pink)",
  "var(--fg-dim)",
  "var(--rule-strong)",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function monthYear(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function Github() {
  const [data, setData] = useState<Payload | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github?username=ashusnapx", { signal: controller.signal })
      .then((r) => r.json())
      .then((json) => {
        if (json.status === "success") setData(json);
      })
      // A third-party outage must never blank out the section.
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const yearsActive = data?.profile
    ? Math.max(
        1,
        new Date().getUTCFullYear() -
          new Date(data.profile.createdAt).getUTCFullYear()
      )
    : null;

  const tiles = [
    { value: data?.profile?.publicRepos ?? null, label: "Public repos", tone: "accent-block" },
    { value: data?.lastYear ?? null, label: "Contributions / yr", tone: "blue-block" },
    { value: yearsActive, label: "Years on GitHub", tone: "orange-block" },
    { value: data?.profile?.followers ?? null, label: "Followers", tone: "pink-block" },
  ];

  return (
    <section id="github" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="07"
        label="GitHub"
        tone="blue"
        title={
          <>
            Consistency,
            <br />
            not a highlight reel.
          </>
        }
        note="Everything here is read live from the GitHub API — repositories, language mix and a year of commits. Boring on any given day, which is exactly why it is worth showing."
      />

      {/* Counters */}
      <dl className="mt-14 grid grid-cols-2 gap-px bg-rule md:mt-20 md:grid-cols-4">
        {tiles.map((tile, i) => (
          <Lift key={tile.label} delay={i * 0.05}>
            <div className={`${tile.tone} h-full px-5 py-7`}>
              <dd className="type-lg tabular">
                {tile.value === null ? (
                  <span className="opacity-45">—</span>
                ) : (
                  <Counter value={tile.value} />
                )}
              </dd>
              <dt className="label mt-3 opacity-70">{tile.label}</dt>
            </div>
          </Lift>
        ))}
      </dl>

      {/* Contribution heatmap */}
      <div className="mt-12 border-t border-rule pt-8">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="label text-ink">Commit activity — last 12 months</h3>
          <a
            href="https://github.com/ashusnapx"
            target="_blank"
            rel="noopener noreferrer"
            className="label link-wipe text-dim"
          >
            github.com/ashusnapx ↗
          </a>
        </div>
        <Lift>
          <ContributionGrid days={data?.contributions ?? null} total={data?.lastYear ?? 0} />
        </Lift>
      </div>

      {/* Language mix */}
      <div className="mt-12 border-t border-rule pt-8">
        <h3 className="label mb-6 text-ink">
          Language mix — by repository
        </h3>

        {data?.languages.length ? (
          <Lift>
            {/* Single stacked bar: the whole distribution in one read. */}
            <div className="flex h-9 w-full overflow-hidden border border-rule">
              {data.languages.map((lang, i) => (
                <div
                  key={lang.name}
                  title={`${lang.name} — ${lang.count} repos (${lang.share}%)`}
                  style={{
                    width: `${lang.share}%`,
                    backgroundColor: `hsl(${LANG_TONE[i % LANG_TONE.length]})`,
                  }}
                />
              ))}
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {data.languages.map((lang, i) => (
                <li key={lang.name} className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="h-3 w-3 shrink-0"
                    style={{
                      backgroundColor: `hsl(${LANG_TONE[i % LANG_TONE.length]})`,
                    }}
                  />
                  <span className="text-sm text-ink">{lang.name}</span>
                  <span className="label tabular text-faint">
                    {lang.share}% · {lang.count}
                  </span>
                </li>
              ))}
            </ul>
          </Lift>
        ) : (
          <div className="h-9 w-full animate-pulse bg-rule/50" />
        )}
      </div>

      {/* Repositories */}
      <div className="mt-12 border-t border-rule pt-8">
        <h3 className="label mb-2 text-ink">Recent repositories</h3>

        <ul>
          {(data?.featured ?? []).map((repo, i) => (
            <li key={repo.name} className="border-b border-rule">
              <Lift delay={Math.min(i * 0.04, 0.2)}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="row-wipe group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 py-5 transition-colors hover:text-accent-ink"
                >
                  <span className="label col-span-2 text-faint transition-colors group-hover:text-accent-ink/60 md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-md col-span-10 md:col-span-3">
                    {repo.name}
                  </span>
                  <span className="col-span-12 text-sm text-dim transition-colors group-hover:text-accent-ink/80 md:col-span-5">
                    {repo.description ?? "No description"}
                  </span>
                  <span className="label col-span-6 text-faint transition-colors group-hover:text-accent-ink/60 md:col-span-2">
                    {repo.language ?? "—"}
                    {repo.stars > 0 && ` · ★ ${repo.stars}`}
                  </span>
                  <span className="label col-span-6 justify-self-end text-faint transition-colors group-hover:text-accent-ink/60 md:col-span-1">
                    {monthYear(repo.pushedAt)} ↗
                  </span>
                </a>
              </Lift>
            </li>
          ))}

          {!data &&
            Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="border-b border-rule py-5">
                <div className="h-5 w-1/3 animate-pulse bg-rule/50" />
              </li>
            ))}
        </ul>

        {data && (
          <p className="label mt-5 text-faint">
            {data.ownRepos} original repositories · {data.stars} stars · forks and
            archives excluded
          </p>
        )}
      </div>
    </section>
  );
}
