import { ImageResponse } from "next/og";
import { person } from "@/constants/profile";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = `${person.name} — Generative AI Engineer`;

const INK = "#0D0D0C";
const BONE = "#EDEBE6";
const LIME = "#CCFF1A";
const RULE = "rgba(237,235,230,0.18)";

/**
 * Shared social card for the Open Graph and Twitter image routes.
 *
 * Same system as the page: ink ground, hairline rules, mono labels, one lime
 * mark. Layout stays primitive because Satori supports only a flexbox subset
 * of CSS — every container declares `display: flex` explicitly.
 */
export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: INK,
          color: BONE,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top rule + colophon */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 56px",
            borderBottom: `1px solid ${RULE}`,
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(237,235,230,0.55)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", width: 12, height: 12, background: LIME }} />
            {person.name}
          </div>
          <div style={{ display: "flex" }}>Bengaluru, IN</div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: -5,
              textTransform: "uppercase",
            }}
          >
            Generative
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 108,
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: -5,
              textTransform: "uppercase",
            }}
          >
            AI Engineer
            <div style={{ display: "flex", width: 44, height: 44, background: LIME }} />
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 27,
              lineHeight: 1.35,
              color: "rgba(237,235,230,0.62)",
              maxWidth: 860,
            }}
          >
            Production LLM systems — retrieval pipelines, multi-agent workflows
            and the full-stack products they ship inside.
          </div>
        </div>

        {/* Bottom rule + stack */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "26px 56px",
            borderTop: `1px solid ${RULE}`,
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(237,235,230,0.5)",
          }}
        >
          <div style={{ display: "flex", gap: 34 }}>
            <div style={{ display: "flex" }}>RAG</div>
            <div style={{ display: "flex" }}>LangGraph</div>
            <div style={{ display: "flex" }}>Agents</div>
            <div style={{ display: "flex" }}>Next.js</div>
          </div>
          <div style={{ display: "flex" }}>ashusnapx.vercel.app</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
