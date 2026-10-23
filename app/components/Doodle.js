import { DOODLES } from "./doodles";

// Hand-drawn marks for the margins. Purely decorative, so screen readers skip them.
// Each path has pathLength="1" so CSS can draw it in with one dash.
export default function Doodle({ name, className = "" }) {
  const doodle = DOODLES[name];
  if (!doodle) return null;
  return (
    <svg
      className={`doodle doodle-${name}${doodle.filled ? " doodle-filled" : ""} ${className}`.trim()}
      viewBox={doodle.viewBox}
      aria-hidden="true"
      focusable="false"
    >
      {doodle.paths.map((path) => {
        const { d, tone } = typeof path === "string" ? { d: path } : path;
        return <path key={d} d={d} pathLength="1" className={tone ? `tone-${tone}` : undefined} />;
      })}
    </svg>
  );
}
