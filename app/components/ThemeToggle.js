"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle color scheme"
    >
      {/* moon shows in light mode (what you'd switch to), sun in dark — CSS decides */}
      <svg className="icon-moon" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
        <path
          d="M13.2 10.1a5.6 5.6 0 0 1-7.3-7.3A5.9 5.9 0 1 0 13.2 10.1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="icon-sun" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
        <circle cx="8" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <line x1="8" y1="1" x2="8" y2="2.6" />
          <line x1="8" y1="13.4" x2="8" y2="15" />
          <line x1="1" y1="8" x2="2.6" y2="8" />
          <line x1="13.4" y1="8" x2="15" y2="8" />
          <line x1="3" y1="3" x2="4.2" y2="4.2" />
          <line x1="11.8" y1="11.8" x2="13" y2="13" />
          <line x1="3" y1="13" x2="4.2" y2="11.8" />
          <line x1="11.8" y1="4.2" x2="13" y2="3" />
        </g>
      </svg>
    </button>
  );
}
