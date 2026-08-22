"use client";

import { useEffect, useState } from "react";
import { Lift } from "@/components/ui/mask-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { writingProfiles } from "@/constants/profile";

type Article = {
  title: string;
  url: string;
  published: string;
  source: "Hashnode" | "Medium";
  tags: string[];
};

/** Each publication gets its own ink so the source is readable at a glance. */
const SOURCE_BLOCK: Record<Article["source"], string> = {
  Hashnode: "blue-block",
  Medium: "pink-block",
};

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  })
    .format(d)
    .toUpperCase();
}

/**
 * Articles pulled live from Hashnode and Medium.
 *
 * Both are read as RSS on the server and merged into one date-sorted list —
 * the writing matters more than which platform it happens to live on, so the
 * platform is reduced to a coloured tag.
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
    <section id="writing" className="gutter mx-auto max-w-page py-20 md:py-28">
      <SectionHeader
        index="08"
        label="Writing"
        tone="pink"
        title={
          <>
            Explaining it is
            <br />
            how I know I know it.
          </>
        }
        note="Technical writing on Hashnode and Medium, pulled live from both feeds. Mostly fundamentals — the things that stay true after the framework of the month is gone."
      />

      {/* Where to follow */}
      <Lift>
        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3 border-b border-rule pb-5 md:mt-16">
          <span className="label text-faint">Follow along</span>
          {writingProfiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="label border border-rule-strong px-3.5 py-2 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
            >
              {profile.label} ↗
            </a>
          ))}
        </div>
      </Lift>

      <ul>
        {articles === null &&
          Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="border-b border-rule py-6">
              <div className="h-6 w-2/3 animate-pulse bg-rule/50" />
            </li>
          ))}

        {articles?.map((article, i) => (
          <li key={article.url} className="border-b border-rule">
            <Lift delay={Math.min(i * 0.035, 0.25)}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 transition-colors"
              >
                <span className="label col-span-2 text-faint md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="type-md col-span-10 transition-colors group-hover:text-dim md:col-span-6">
                  <span className="link-wipe">{article.title}</span>
                </h3>

                <span className="col-span-6 md:col-span-2">
                  <span
                    className={`label ${SOURCE_BLOCK[article.source]} px-2 py-1`}
                  >
                    {article.source}
                  </span>
                </span>

                <span className="label col-span-4 text-faint md:col-span-2">
                  {article.tags.slice(0, 2).join(" · ")}
                </span>

                <span className="label col-span-2 justify-self-end text-faint md:col-span-1">
                  {formatDate(article.published)}
                </span>
              </a>
            </Lift>
          </li>
        ))}

        {articles?.length === 0 && (
          <li className="border-b border-rule py-8">
            <p className="label text-faint">
              Feeds unreachable right now — the articles are on{" "}
              <a
                href="https://hashnode.com/@ashusnapx"
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe text-ink"
              >
                Hashnode
              </a>{" "}
              and{" "}
              <a
                href="https://medium.com/@ashusnapx"
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe text-ink"
              >
                Medium
              </a>
              .
            </p>
          </li>
        )}
      </ul>

      {articles && articles.length > 0 && (
        <Lift>
          <p className="label mt-5 text-faint">
            {articles.length} articles across Hashnode and Medium
          </p>
        </Lift>
      )}
    </section>
  );
}
