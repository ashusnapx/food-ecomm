# Ashutosh Kumar — Portfolio

Single-page portfolio positioning **Ashutosh Kumar (ashusnapx)** as a Generative AI
Engineer. Next.js App Router, statically rendered, with structured data built for
both classic search and answer engines.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, React Compiler) |
| UI | React 19, Tailwind CSS 3, Framer Motion 13 |
| Type | Archivo (display) · Inter Tight (body) · JetBrains Mono (labels) |
| Hosting | Vercel |

## Design system

Swiss editorial: ink and bone, one acid-lime accent, hairline rules instead of
shadows, square corners, oversized grotesque display type. Tokens live in
`src/app/globals.css`; `tailwind.config.ts` **replaces** the default palette
rather than extending it, so off-system colour cannot creep in.

Motion is restrained by design — masked line reveals, rules that draw
themselves, and hover wipes. Everything collapses cleanly under
`prefers-reduced-motion`.

## Content

All copy, projects, skills and FAQ answers live in `src/constants/profile.ts`.
`src/components/JsonLd.tsx` reads the same file, so the structured data Google
sees can never drift from the copy a human reads. Edit one place.

`src/constants/constant.ts` holds only the social links and the work history.

## SEO / GEO

- `@graph` JSON-LD: Person · WebSite · ProfilePage · ItemList · FAQPage · BreadcrumbList
- Server-rendered metadata, canonical URL, `max-image-preview:large`
- Generated 1200×630 OG and Twitter cards (`src/lib/og-card.tsx`)
- `robots.ts` explicitly allows GPTBot, PerplexityBot, ClaudeBot and Google-Extended
- `public/llms.txt` — plain-text brief for answer engines

## Third-party data

Both live-data panels degrade to a static state rather than an error:

- **GitHub contributions** — `/api/github` proxies the public contributions API and
  the heatmap is drawn in-house (no `react-github-calendar` dependency).
- **LeetCode** — `/api/leetcode` tries LeetCode's GraphQL then a mirror. LeetCode
  serves zeroed placeholder data to anonymous callers, so the panel usually falls
  back to the self-reported total and says so.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint (flat config)
npm run typecheck  # tsc --noEmit
```

## Before deploying

1. Add Google Search Console + Bing verification tokens to `metadata.verification`
   in `src/app/layout.tsx`.
2. Submit `https://ashusnapx.vercel.app/sitemap.xml` in Search Console.
3. Validate the structured data with Google's Rich Results Test.
