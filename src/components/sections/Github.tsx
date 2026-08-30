"use client";

import { useEffect, useState } from "react";
import { ContributionGrid } from "@/components/ui/contribution-grid";
import { Counter } from "@/components/ui/counter";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Language = { name: string; count: number; share: number };
type Repo = { name: string; url: string; description: string | null; language: string | null; stars: number; pushedAt: string };

type Payload = {
  contributions: Day[];
  lastYear: number;
  profile: { publicRepos: number; followers: number; createdAt: string } | null;
  languages: Language[];
  featured: Repo[];
  ownRepos: number;
};

const PEN = ["var(--red)", "var(--blue)", "var(--green)", "var(--purple)", "var(--orange)", "var(--ink-faint)"];

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
    ? Math.max(1, new Date().getUTCFullYear() - new Date(data.profile.createdAt).getUTCFullYear())
    : null;

  const tiles = [
    { value: data?.profile?.publicRepos ?? null, label: "public repos", pen: PEN[0] },
    { value: data?.lastYear ?? null, label: "commits this year", pen: PEN[1] },
    { value: years, label: "years on GitHub", pen: PEN[2] },
    { value: data?.profile?.followers ?? null, label: "followers", pen: PEN[3] },
  ];

  return (
    <section id="github" className="ruled mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
      <SectionTitle
        title="Read live from GitHub"
        pen="var(--green)"
        note="Repositories, language mix and a year of commits, pulled from the API every time this page builds."
      />

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {tiles.map((tile, i) => (
          <Lay key={tile.label} delay={i * 0.05}>
            <div>
              <dd className="hand text-5xl leading-none tabular" style={{ color: `hsl(${tile.pen})` }}>
                {tile.value === null ? <span className="opacity-40">&hellip;</span> : <Counter value={tile.value} />}
              </dd>
              <dt className="mt-2 text-sm text-ink-soft">{tile.label}</dt>
            </div>
          </Lay>
        ))}
      </dl>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <Lay>
          <div className="card-paper rounded-md p-5 md:p-6">
            <ContributionGrid days={data?.contributions ?? null} total={data?.lastYear ?? 0} />
          </div>
        </Lay>

        <Lay delay={0.08}>
          <div className="card-paper h-full rounded-md p-5 md:p-6">
            <h3 className="hand text-2xl leading-none text-ink">languages</h3>
            {data?.languages.length ? (
              <>
                <div className="mt-5 flex h-7 w-full overflow-hidden rounded-sm border border-rule">
                  {data.languages.map((lang, i) => (
                    <div
                      key={lang.name}
                      title={`${lang.name}, ${lang.share}%`}
                      style={{ width: `${lang.share}%`, backgroundColor: `hsl(${PEN[i % PEN.length]})` }}
                    />
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {data.languages.map((lang, i) => (
                    <li key={lang.name} className="flex items-center gap-2.5 text-sm">
                      <span
                        aria-hidden
                        className="h-3 w-3 shrink-0 rounded-sm"
                        style={{ backgroundColor: `hsl(${PEN[i % PEN.length]})` }}
                      />
                      <span className="text-ink">{lang.name}</span>
                      <span className="ml-auto font-mono text-[11px] text-ink-faint">{lang.share}%</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="mt-5 h-7 w-full animate-pulse rounded-sm bg-rule/40" />
            )}
          </div>
        </Lay>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(data?.featured ?? []).slice(0, 6).map((repo, i) => (
          <Lay key={repo.name} delay={Math.min(i * 0.04, 0.2)} tilt={i % 2 === 0 ? -0.4 : 0.35}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-paper block h-full rounded-md p-4 transition-transform duration-500 ease-paper hover:rotate-0 hover:-translate-y-1"
            >
              <p className="hand text-2xl leading-none" style={{ color: `hsl(${PEN[i % PEN.length]})` }}>
                {repo.name}
              </p>
              <p className="mt-2 line-clamp-2 text-sm text-ink-soft">
                {repo.description ?? "no description yet"}
              </p>
              <p className="mt-3 font-mono text-[11px] text-ink-faint">
                {repo.language ?? "mixed"}
                {repo.stars > 0 ? ` · ${repo.stars} stars` : ""}
              </p>
            </a>
          </Lay>
        ))}
      </div>
    </section>
  );
}
