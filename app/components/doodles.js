// The hand-drawn marks, as plain data so the component stays tiny.
// A path is a string, or { d, tone } when one doodle mixes colors.
// `filled` doodles are solid shapes; the rest are pen lines.
export const DOODLES = {
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
  flower: {
    viewBox: "0 0 40 40",
    paths: [
      "M20 20 C14 11 16 3.5 20 3.5 C24 3.5 26 11 20 20 C28 14 35.5 15 36 18.5 C36.5 22 29 24 20 20 C26 27.5 27 35 23.5 36 C20 37 18.5 29 20 20 C14 28 7 32 5 29 C3 26 10 21.5 20 20 C11 18.5 5.5 12 7.5 9 C9.5 6 16 11 20 20",
      "M20 18.6 C21 18.6 21.4 19.4 21.4 20 C21.4 20.8 20.7 21.4 20 21.4 C19.2 21.4 18.6 20.7 18.6 20 C18.6 19.3 19.2 18.6 20 18.6 Z",
    ],
  },
  spiral: {
    viewBox: "8 6 30 30",
    paths: [
      "M21 20 C21 18 23 18 23.5 20 C24 23 20 25 18 23 C15 20 17 15 21 15 C26 15 29 20 27 25 C25 30 17 31 14 27 C10 22 12 13 18 11 C25 9 33 14 33 22",
    ],
  },
  sun: {
    viewBox: "0 0 44 44",
    paths: [
      "M22 14 C27 13.5 30.5 17.5 30 22.5 C29.5 27 26 30.5 21.5 30 C17 29.5 13.8 26 14 21.5 C14.2 17.5 17.5 14.3 22 14 Z",
      "M22 3.5 L22.4 9",
      "M22 35 L21.6 40.5",
      "M3.5 22.5 L9 22",
      "M35 21.5 L40.5 22",
      "M8.5 8.5 L12.4 12.6",
      "M31.6 31.4 L35.5 35.5",
      "M35.5 8.8 L31.4 12.6",
      "M12.6 31.4 L8.6 35.2",
    ],
  },
  leaf: {
    viewBox: "0 0 40 44",
    paths: [
      "M9 37 C6.5 21 15 8.5 35 4.5 C36.5 22 26 35 9 37 Z",
      "M9 37 C16 28 22 20 30 10",
      "M9 37 L4.5 41.5",
    ],
  },
  star: {
    viewBox: "0 0 40 40",
    paths: [
      "M20 3 L24.6 15.2 L37 15.6 L27.2 23.6 L31 36 L20.2 28.6 L9.2 36.2 L13 23.8 L3 15.8 L15.6 15 L19.4 4.6",
    ],
  },
  moon: {
    viewBox: "0 0 40 40",
    paths: [
      "M26 4.5 C16 6 9 13.5 9.2 22.5 C9.4 31 17 37 26.5 35.5 C19.5 32 16 26.5 16.2 20 C16.4 13.5 20 8 26 4.5 Z",
    ],
  },
  plane: {
    viewBox: "0 0 90 56",
    paths: [
      "M86 4 L34 22 L52 29 L86 4 L58 44 L52 29",
      { d: "M30 31 C20 36 12 34 13 27 C14 21 22 22 22 28 C22 36 12 44 2 48", tone: "trail" },
    ],
  },
  sprout: {
    viewBox: "0 0 120 230",
    paths: [
      { d: "M60 226 C57 196 64 166 58 132 C54 106 62 90 61 74", tone: "leaf" },
      { d: "M59 168 C40 160 29 140 33 122 C50 128 58 146 59 168 Z", tone: "leaf" },
      { d: "M60 138 C79 130 92 112 88 95 C71 101 62 118 60 138 Z", tone: "leaf" },
      { d: "M60 50 C49.5 34.3 53 21.1 60 21.1 C67 21.1 70.5 34.3 60 50 C74 39.5 87.1 41.3 88 47.4 C88.9 53.5 75.8 57 60 50 C70.5 63.1 72.3 76.3 66.1 78 C60 79.8 57.4 65.8 60 50 C49.5 64 37.3 71 33.8 65.8 C30.3 60.5 42.5 52.6 60 50 C44.3 47.4 34.6 36 38.1 30.8 C41.6 25.5 53 34.3 60 50", tone: "pop" },
      { d: "M60 46.9 C62.2 46.9 63.1 48.7 63.1 50 C63.1 51.8 61.5 53.1 60 53.1 C58.2 53.1 56.9 51.5 56.9 50 C56.9 48.5 58.2 46.9 60 46.9 Z", tone: "gold" },
    ],
  },
};

// One doodle per post, in this order, counted from the oldest post so a new
// post never changes the doodle of one already published. Colors cycle
// gold, pink, green, so no two neighbours match.
export const POST_DOODLES = [
  { name: "sparkle", tone: "gold" },
  { name: "heart", tone: "pop" },
  { name: "spiral", tone: "leaf" },
  { name: "sun", tone: "gold" },
  { name: "flower", tone: "pop" },
  { name: "leaf", tone: "leaf" },
  { name: "star", tone: "gold" },
  { name: "moon", tone: "pop" },
  { name: "cloud", tone: "leaf" },
];

// `posts` is newest first, as getAllPosts returns them.
export function doodleForPost(posts, slug) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) return null;
  return POST_DOODLES[(posts.length - 1 - i) % POST_DOODLES.length];
}
