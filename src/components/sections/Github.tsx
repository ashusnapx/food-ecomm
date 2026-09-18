"use client";

import { useEffect, useState } from "react";
import { ContributionGrid } from "@/components/ui/contribution-grid";
import { Counter } from "@/components/ui/counter";
import { ArrowUpRight } from "@/components/ui/icons";
import { Lay } from "@/components/ui/reveal";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Language = { name: string; count: number; share: number };
type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
};

type Payload = {
  contributions: Day[];
  lastYear: number;
  profile: { publicRepos: number; followers: number; createdAt: string } | null;
  languages: Language[];
  featured: Repo[];
  ownRepos: number;
};

/** One accent stepped down through tints, rather than six unrelated hues. */
const RAMP = ["#0099ff", "#4aa9f7", "#7cc0f8", "#a9d3f6", "#4d585f", "#bababa"];

export function Github() {
  const [data, setData] = useState<Payload | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github?username=ashusnapx", { signal: controller.signal })
      .then((r) => r.json())
      .then((json) => {
        if (json.status === "success") setData(json);
      })
      // A third party outage must never blank out the section.
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const years = data?.profile
    ? Math.max(
        1,
        new Date().getUTCFullYear() -
          new Date(data.profile.createdAt).getUTCFullYear()
      )
    : null;

  const tiles = [
    { value: data?.profile?.publicRepos ?? null, label: "Public repos" },
    { value: data?.lastYear ?? null, label: "Commits this year" },
    { value: years, label: "Years on GitHub" },
    { value: data?.profile?.followers ?? null, label: "Followers" },
  ];

  return (
    <section id="github" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-page">
        <Lay className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Live</span>
            <h2 className="t-h2 mt-6">
              Read straight
              <br />
              from GitHub.
            </h2>
          </div>
          <p className="t-lead max-w-md md:text-right">
            Pulled from the API every time this page loads.
          </p>
        </Lay>

        <dl className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {tiles.map((tile, i) => (
            <Lay key={tile.label} delay={i * 0.05}>
              <div className="card-surface p-7">
                <dd className="t-h2 tabular text-ink">
                  {tile.value === null ? (
                    <span className="text-faint">&hellip;</span>
                  ) : (
                    <Counter value={tile.value} />
                  )}
                </dd>
                <dt className="t-small mt-2">{tile.label}</dt>
              </div>
            </Lay>
          ))}
        </dl>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <Lay className="min-w-0">
            <div className="card-surface h-full min-w-0 overflow-hidden p-5 sm:p-7">
              <ContributionGrid
                days={data?.contributions ?? null}
                total={data?.lastYear ?? 0}
              />
            </div>
          </Lay>

          <Lay delay={0.08}>
            <div className="card-surface h-full p-7">
              <h3 className="font-display text-[17px] font-semibold text-ink">
                Languages
              </h3>

              {data?.languages.length ? (
                <>
                  <div className="mt-5 flex h-7 w-full overflow-hidden rounded-full bg-white">
                    {data.languages.map((lang, i) => (
                      <div
                        key={lang.name}
                        title={`${lang.name}, ${lang.share}%`}
                        style={{
                          width: `${lang.share}%`,
                          backgroundColor: RAMP[i % RAMP.length],
                        }}
                      />
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {data.languages.map((lang, i) => (
                      <li
                        key={lang.name}
                        className="flex items-center gap-2.5 text-[14px]"
                      >
                        <span
                          aria-hidden
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: RAMP[i % RAMP.length] }}
                        />
                        <span className="text-ink">{lang.name}</span>
                        <span className="tabular ml-auto text-[13px] text-muted">
                          {lang.share}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="mt-5 h-7 w-full animate-pulse rounded-full bg-white" />
              )}
            </div>
          </Lay>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(data?.featured ?? []).slice(0, 6).map((repo, i) => (
            <Lay key={repo.name} delay={Math.min(i * 0.04, 0.2)} className="h-full min-w-0">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex h-full flex-col p-6 transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[14px] font-medium text-ink">
                    {repo.name}
                  </p>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <p className="t-small mt-2.5 line-clamp-2 flex-1">
                  {repo.description ?? "No description yet."}
                </p>

                <p className="mt-5 flex items-center gap-2 text-[13px] text-muted">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: RAMP[i % RAMP.length] }}
                  />
                  {repo.language ?? "Mixed"}
                  {repo.stars > 0 ? ` · ${repo.stars} stars` : ""}
                </p>
              </a>
            </Lay>
          ))}
        </div>
      </div>
    </section>
  );
}
