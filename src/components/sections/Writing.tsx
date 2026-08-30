"use client";

import { useEffect, useState } from "react";
import { writingProfiles } from "@/constants/profile";
import { Lay } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

type Article = {
  title: string;
  url: string;
  published: string;
  source: "Hashnode" | "Medium";
  tags: string[];
};

const PEN: Record<string, string> = { Hashnode: "var(--blue)", Medium: "var(--purple)" };

function year(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : String(d.getUTCFullYear());
}

/**
 * Articles pulled live from the Hashnode and Medium RSS feeds and merged into
 * one dated list. Shown as a compact index because the writing is supporting
 * evidence here, not the main exhibit.
 */
export function Writing() {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/writing", { signal: controller.signal })
      .then((r) => r.json())
      .then((json) => setArticles(json.articles ?? []))
      .catch(() => setArticles([]));
    return () => controller.abort();
  }, []);

  return (
    <section id="writing" className="mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
      <SectionTitle title="Notes I published" pen="var(--purple)" />

      <Lay delay={0.08}>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          {writingProfiles.map((p) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="hand text-xl text-ink-soft hover:text-ink"
            >
              <span className="pen-underline">{p.label}</span>
            </a>
          ))}
        </div>
      </Lay>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles === null &&
          Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="card-paper h-24 animate-pulse rounded-md" />
          ))}

        {articles?.slice(0, 9).map((article, i) => (
          <li key={article.url}>
            <Lay delay={Math.min(i * 0.03, 0.2)} tilt={i % 2 === 0 ? -0.3 : 0.3}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-paper flex h-full flex-col rounded-md p-4 transition-transform duration-500 ease-paper hover:rotate-0 hover:-translate-y-1"
              >
                <p className="hand text-lg leading-none" style={{ color: `hsl(${PEN[article.source]})` }}>
                  {article.source}
                  <span className="ml-2 text-ink-faint">{year(article.published)}</span>
                </p>
                <h3 className="mt-2.5 flex-1 text-sm font-medium leading-snug text-ink text-pretty">
                  {article.title}
                </h3>
              </a>
            </Lay>
          </li>
        ))}

        {articles?.length === 0 && (
          <li className="hand text-xl text-ink-faint">
            the feeds are unreachable right now
          </li>
        )}
      </ul>
    </section>
  );
}
