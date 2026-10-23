import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DOODLES } from "@/app/components/doodles";

// The link-preview cards: deep teal like the home page column, her name in
// script, and the same hand-drawn doodles. Rendered by next/og at build time.

export const OG_SIZE = { width: 1200, height: 630 };

const TEAL = "#114B4F";
const CREAM = "#F2F8F6";
const MIST = "#C8DFDB";
// The lighter doodle colors the home page column uses on teal.
const TONES = { pop: "#F497AE", gold: "#EBC66C", leaf: "#9AD7CE", trail: "#F497AE" };

// Each path is spelled out so the build bundles only these files.
const font = (file) => readFile(join(process.cwd(), "assets/fonts", file));

// Saved in the repo so a build never depends on reaching Google Fonts.
export async function ogFonts() {
  const [script, serif, serifBold, ui] = await Promise.all([
    font("MsMadi-Regular.woff"),
    font("SourceSerif4-Regular.woff"),
    font("SourceSerif4-Semibold.woff"),
    font("Inter-Medium.woff"),
  ]);
  return [
    { name: "Ms Madi", data: script, weight: 400, style: "normal" },
    { name: "Source Serif 4", data: serif, weight: 400, style: "normal" },
    { name: "Source Serif 4", data: serifBold, weight: 600, style: "normal" },
    { name: "Inter", data: ui, weight: 500, style: "normal" },
  ];
}

export async function portraitDataUrl() {
  const photo = await readFile(join(process.cwd(), "public/images/kathleen-celmins.jpg"));
  return `data:image/jpeg;base64,${photo.toString("base64")}`;
}

// One of the site's doodles at `size` px on its long side. `stroke` is the
// line weight in px; by default it scales with the size, like the site's.
function OgDoodle({ name, tone = "pop", size, stroke, style }) {
  const doodle = DOODLES[name];
  const [, , w, h] = doodle.viewBox.split(" ").map(Number);
  const scale = size / Math.max(w, h);
  const width = Math.round(w * scale);
  const height = Math.round(h * scale);
  const strokeWidth = (stroke ?? size * 0.075) / scale;
  return (
    <svg width={width} height={height} viewBox={doodle.viewBox} style={style}>
      {doodle.paths.map((path, i) => {
        const { d, tone: own } = typeof path === "string" ? { d: path } : path;
        const color = TONES[own || tone];
        return doodle.filled ? (
          <path key={i} d={d} fill={color} />
        ) : (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}

function Signature({ fontSize, sparkle }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <span style={{ fontFamily: "Ms Madi", fontSize, lineHeight: 1.15, color: CREAM }}>
        Kathleen Celmins
      </span>
      <OgDoodle name="sparkle" tone="gold" size={sparkle} style={{ marginLeft: 6, marginTop: fontSize * 0.08 }} />
    </div>
  );
}

const Domain = () => (
  <span style={{ fontFamily: "Inter", fontSize: 26, letterSpacing: 1, color: TONES.leaf }}>
    kathleencelmins.xyz
  </span>
);

// For the home page and every page without its own card.
export function SiteCard({ photo }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: TEAL, padding: "0 80px 0 76px" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, height: "100%", padding: "70px 0 64px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Signature fontSize={104} sparkle={40} />
          <OgDoodle name="squiggle" size={330} stroke={7} style={{ marginTop: 4 }} />
          <span style={{ fontFamily: "Source Serif 4", fontSize: 50, color: MIST, marginTop: 44 }}>
            Everything, in writing.
          </span>
        </div>
        <Domain />
      </div>
      <img
        src={photo}
        width={318}
        height={424}
        style={{ objectFit: "cover", borderRadius: 4, border: `8px solid ${CREAM}`, transform: "rotate(2.5deg)" }}
      />
    </div>
  );
}

// For one essay: its title, big, beside that essay's own doodle.
export function EssayCard({ title, doodle }) {
  const fontSize = title.length <= 32 ? 78 : title.length <= 60 ? 64 : 54;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: TEAL, padding: "56px 80px 60px 76px" }}>
      <Signature fontSize={66} sparkle={26} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontFamily: "Source Serif 4", fontSize, lineHeight: 1.12, letterSpacing: -1, color: CREAM, flex: 1 }}>
          {title}
        </span>
        <OgDoodle name={doodle.name} tone={doodle.tone} size={168} style={{ marginLeft: 56 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <OgDoodle name="squiggle" size={240} stroke={6} />
        <Domain />
      </div>
    </div>
  );
}
