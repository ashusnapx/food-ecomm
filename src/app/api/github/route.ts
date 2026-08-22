import { NextResponse } from "next/server";

/**
 * GitHub profile aggregate: contribution calendar, profile counters, language
 * mix and headline repositories.
 *
 * We used to render the calendar with `react-github-calendar`, which is
 * ESM-only and was failing to load its browser chunk. It only ever wrapped the
 * jogruber contributions endpoint, so we call that directly and draw the grid
 * ourselves — one less dependency, no chunk to fail, full design control.
 *
 * The GitHub REST calls are unauthenticated (60 req/hour/IP). With a six-hour
 * revalidate that is one request per window per region, comfortably inside the
 * budget, and every piece degrades independently via Promise.allSettled.
 */

export const revalidate = 21600; // 6h

const GH_HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "ashusnapx-portfolio/1.0",
};

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

async function getContributions(username: string) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`contributions ${res.status}`);

  const data = (await res.json()) as {
    total?: Record<string, number>;
    contributions?: Day[];
  };

  return {
    days: data.contributions ?? [],
    lastYear: data.total?.lastYear ?? 0,
  };
}

async function getProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: GH_HEADERS,
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`profile ${res.status}`);

  const d = await res.json();
  return {
    name: d.name as string,
    bio: d.bio as string | null,
    publicRepos: d.public_repos as number,
    followers: d.followers as number,
    createdAt: d.created_at as string,
  };
}

async function getRepos(username: string) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
    { headers: GH_HEADERS, next: { revalidate } }
  );
  if (!res.ok) throw new Error(`repos ${res.status}`);

  const all = (await res.json()) as Repo[];
  // Forks and archives are noise on a portfolio — they say nothing about what
  // this person writes.
  const own = all.filter((r) => !r.fork && !r.archived);

  const byLanguage = new Map<string, number>();
  for (const repo of own) {
    if (!repo.language) continue;
    byLanguage.set(repo.language, (byLanguage.get(repo.language) ?? 0) + 1);
  }

  const counted = own.filter((r) => r.language).length || 1;
  const languages = [...byLanguage.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      share: Math.round((count / counted) * 100),
    }));

  // Rank by stars, then by how recently it was touched — with few stars in
  // play, recency is the more honest signal.
  const featured = [...own]
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        b.pushed_at.localeCompare(a.pushed_at)
    )
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
    }));

  return {
    languages,
    featured,
    stars: own.reduce((sum, r) => sum + r.stargazers_count, 0),
    ownRepos: own.length,
  };
}

export async function GET(request: Request) {
  const username = new URL(request.url).searchParams.get("username");

  if (!username || !/^[A-Za-z0-9-]{1,39}$/.test(username)) {
    return NextResponse.json(
      { status: "error", message: "Valid GitHub username required" },
      { status: 400 }
    );
  }

  const [contributions, profile, repos] = await Promise.allSettled([
    getContributions(username),
    getProfile(username),
    getRepos(username),
  ]);

  const value = <T,>(r: PromiseSettledResult<T>): T | null =>
    r.status === "fulfilled" ? r.value : null;

  const c = value(contributions);
  const p = value(profile);
  const r = value(repos);

  // 200 even when everything failed: the client renders its empty state rather
  // than an error. A third-party outage should not look like a broken site.
  return NextResponse.json(
    {
      status: c || p || r ? "success" : "unavailable",
      contributions: c?.days ?? [],
      lastYear: c?.lastYear ?? 0,
      profile: p,
      languages: r?.languages ?? [],
      featured: r?.featured ?? [],
      stars: r?.stars ?? 0,
      ownRepos: r?.ownRepos ?? 0,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
      },
    }
  );
}
