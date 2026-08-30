import { ImageResponse } from "next/og";
import { person } from "@/constants/profile";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = `${person.name}, Generative AI Engineer`;

const PAPER = "#F3F1E9";
const INK = "#1B1A16";
const RULE = "#C3D4E8";
const MARGIN = "#E8A9A9";
const HIGHLIGHT = "#FFE9A3";
const RED = "#D23B3B";

/**
 * Share card, drawn as a page torn from the same notebook: cream stock, blue
 * rule, red margin, highlighted role.
 *
 * Satori supports a flexbox subset of CSS, so every container declares
 * `display: flex` and the rule lines are stacked divs rather than a repeating
 * background.
 */
export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          color: INK,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ruled lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 92 + i * 46,
              height: 1,
              background: RULE,
              opacity: 0.55,
              display: "flex",
            }}
          />
        ))}

        {/* Red margin */}
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 0,
            bottom: 0,
            width: 2,
            background: MARGIN,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 140,
            paddingRight: 72,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: "#4A6FA8" }}>
            {person.name}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Generative AI
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
            <div
              style={{
                display: "flex",
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -2,
                background: HIGHLIGHT,
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              Engineer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 27,
              lineHeight: 1.4,
              color: "#57534A",
              maxWidth: 780,
            }}
          >
            Production LLM applications. Retrieval pipelines, multi-agent
            workflows, and the products they ship inside.
          </div>

          <div style={{ display: "flex", gap: 26, marginTop: 40, fontSize: 22, color: RED }}>
            <div style={{ display: "flex" }}>RAG</div>
            <div style={{ display: "flex" }}>Agents</div>
            <div style={{ display: "flex" }}>MCP</div>
            <div style={{ display: "flex" }}>Next.js</div>
            <div style={{ display: "flex" }}>ashusnapx.vercel.app</div>
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
