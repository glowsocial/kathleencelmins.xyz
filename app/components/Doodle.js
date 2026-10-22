// Hand-drawn marks for the margins. Purely decorative, so screen readers skip them.
// Each path has pathLength="1" so CSS can draw it in with one dash.
const DOODLES = {
  squiggle: {
    viewBox: "0 0 200 20",
    paths: [
      "M3 12 C14 4 24 3 34 10 S54 19 67 11 S89 2 101 10 S123 19 137 11 S159 3 171 10 S189 15 197 7",
    ],
  },
  sparkle: {
    viewBox: "0 0 24 24",
    filled: true,
    paths: [
      "M12 1.5 C12.7 8 14.6 10.4 22.5 12 C14.6 13.6 12.7 16 12 22.5 C11.3 16 9.4 13.6 1.5 12 C9.4 10.4 11.3 8 12 1.5 Z",
    ],
  },
  curlicue: {
    viewBox: "0 0 160 60",
    paths: [
      "M4 44 C22 46 36 40 44 28 C52 15 44 5 35 10 C25 16 32 36 52 40 C72 44 86 26 80 17 C74 9 61 18 68 32 C75 46 100 48 118 40 C132 34 140 24 156 26",
    ],
  },
  cloud: {
    viewBox: "0 0 84 46",
    paths: [
      "M16 40 C5 40 3 27 13 25 C10 14 23 8 30 15 C33 4 50 3 53 14 C60 8 73 12 70 24 C81 25 81 40 69 40 C52 41 33 41 16 40 Z",
    ],
  },
  arrow: {
    viewBox: "0 0 70 80",
    paths: [
      "M6 10 C28 2 48 12 44 28 C41 40 26 36 31 26 C37 15 58 24 60 44 C61 54 59 63 55 72",
      "M47 64 L55 73 L63 63",
    ],
  },
  heart: {
    viewBox: "0 0 32 30",
    paths: [
      "M16 27 C8 21 3 16 3 10 C3 5 7 2.5 10.5 2.5 C13.5 2.5 15.3 4.5 16 7 C16.7 4.5 18.5 2.5 21.5 2.5 C25 2.5 29 5 29 10 C29 16 24 21 16 27 Z",
    ],
  },
};

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
      {doodle.paths.map((d) => (
        <path key={d} d={d} pathLength="1" />
      ))}
    </svg>
  );
}
