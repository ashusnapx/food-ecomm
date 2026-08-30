import { NextResponse } from "next/server";

/**
 * Merged article feed: Hashnode + Medium.
 *
 * Hashnode's GraphQL API (gql.hashnode.com) now 301s to a docs page, so both
 * sources are read as RSS. RSS is also the more durable contract, it has not
 * changed under either platform in years.
 *
 * Parsing is done with narrow regexes rather than an XML dependency: these are
 * two known, well-formed feeds, not arbitrary user input.
 */

export const revalidate = 21600; // 6h, these feeds change rarely.

type Source = "Hashnode" | "Medium";

export type Article = {
  title: string;
  url: string;
  published: string;
  source: Source;
  tags: string[];
};

const FEEDS: { source: Source; url: string }[] = [
  { source: "Hashnode", url: "https://ashusnapx.hashnode.dev/rss.xml" },
  { source: "Medium", url: "https://medium.com/feed/@ashusnapx" },
];

/** Unwraps <tag>value</tag>, with or without a CDATA section. */
function tag(xml: string, name: string): string | null {
  const m = xml.match(
    new RegExp(`<${name}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`)
  );
  return m ? m[1].trim() : null;
}

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

function decode(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&[a-z]+;/gi, (e) => ENTITIES[e] ?? e)
    .trim();
}

function parseFeed(xml: string, source: Source): Article[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.flatMap((item) => {
    const title = tag(item, "title");
    const url = tag(item, "link");
    const date = tag(item, "pubDate");
    if (!title || !url) return [];

    const tags = (
      item.match(/<category[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/g) ?? []
    )
      .map((c) => decode(c.replace(/<\/?category[^>]*>|<!\[CDATA\[|\]\]>/g, "")))
      .filter(Boolean)
      .slice(0, 3);

    const published = date ? new Date(date) : null;

    return [
      {
        title: decode(title),
        url: decode(url).split("?")[0],
        published:
          published && !Number.isNaN(published.getTime())
            ? published.toISOString()
            : "",
        source,
        tags,
      },
    ];
  });
}

export async function GET() {
  const results = await Promise.allSettled(
    FEEDS.map(async ({ source, url }) => {
      const res = await fetch(url, {
        next: { revalidate },
        headers: { "User-Agent": "ashusnapx-portfolio/1.0" },
      });
      if (!res.ok) throw new Error(`${source} responded ${res.status}`);
      return parseFeed(await res.text(), source);
    })
  );

  const articles = results
    .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
    .sort((a, b) => b.published.localeCompare(a.published));

  // One feed failing should still show the other's posts.
  return NextResponse.json(
    {
      status: articles.length ? "success" : "unavailable",
      count: articles.length,
      articles,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
      },
    }
  );
}
