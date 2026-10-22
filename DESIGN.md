---
name: "Kathleen Celmins"
description: "A personal commonplace book with green endpapers, her name in handwriting, and doodles in the margins."
colors:
  bg: "#F9FAF5"
  bg-deep: "#EDF1E7"
  endpaper: "#E5EBD9"
  ink: "#26382C"
  ink-secondary: "#485B4B"
  ink-muted: "#5F6E5C"
  rule: "#D7DECF"
  accent: "#365D40"
  accent-deep: "#24452D"
  on-accent: "#FFFFFF"
  pop: "#D9486F"
  gold: "#D99A1E"
  wave-ink: "#B9C8B1"
  highlight: "#F8CBD6"
  bg-dark: "#19231E"
  bg-deep-dark: "#233027"
  endpaper-dark: "#28372B"
  ink-dark: "#E8EDE2"
  ink-secondary-dark: "#C1CCBC"
  ink-muted-dark: "#ABB9A5"
  rule-dark: "#3D4D3F"
  accent-dark: "#BDCCA9"
  accent-deep-dark: "#D8E2CB"
  on-accent-dark: "#19231E"
  pop-dark: "#F497AE"
  gold-dark: "#E9C46A"
  wave-ink-dark: "#506553"
  highlight-dark: "#6E3446"
typography:
  script:
    fontFamily: "Ms Madi, cursive"
    fontWeight: 400
    lineHeight: 1
  display:
    fontFamily: "Source Serif 4, Iowan Old Style, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Source Serif 4, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.125rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Source Serif 4, Iowan Old Style, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Serif 4, Iowan Old Style, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.7
  excerpt:
    fontFamily: "Source Serif 4, Iowan Old Style, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  ui-small:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.6
  code:
    fontFamily: "JetBrains Mono, SFMono-Regular, monospace"
    fontSize: "0.85em"
rounded:
  ui: "3px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.ui}"
    padding: "0.6rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.on-accent}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.ui}"
    padding: "0.6rem 1.1rem"
  email-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ui}"
    padding: "0.6rem 0.8rem"
  navigation:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.ui-small}"
  post-row:
    textColor: "{colors.ink}"
    padding: "2rem 0"
  subscribe:
    padding: "2rem 0 0"
  theme-toggle:
    textColor: "{colors.ink-secondary}"
    width: "2.75rem"
    height: "2.75rem"
---

# Design System: Kathleen Celmins

## Overview

**Creative North Star: "A personal commonplace book"**

Green endpapers sit beside an off-white reading ground. Forest ink, open space, and serif titles give short notes and long essays the same care. Small sans-serif controls keep the writing easy to find.

Dark mode uses a soft green-black ground with pale text. Both themes keep the same page structure and quiet contrast.

**Key Characteristics:**
- Open post rows with fine rules.
- Serif writing with small sans-serif controls.
- Green tones in both light and dark themes.

## Colors

The palette uses green paper tones and forest ink. The frontmatter holds the exact values.

### Primary

`accent` colors links, primary controls, focus outlines, and selection. `accent-deep` is its hover state. `on-accent` colors text on the accent ground.

### Neutral

`bg` is the reading ground. `bg-deep` supports code. `endpaper` fills the home introduction. `ink`, `ink-secondary`, and `ink-muted` serve main text, support text, and dates. `rule` makes fine dividers.

The unsuffixed tokens are light values. Each `-dark` token replaces the same CSS role in dark mode. A saved light or dark choice takes priority over the system preference.

**The Theme Pair Rule.** Use the matching theme value for each color role. Keep the reading structure the same in both themes.

## Typography

Source Serif 4 supplies writing titles and reading text. Inter supplies navigation, forms, dates, and article section headings. JetBrains Mono supplies code. The frontmatter gives each role's exact size, weight, line height, and tracking.

The home display is regular weight. Article titles use a fluid size. Post titles are smaller than article titles. Reading text has a generous line height. Dates use tabular numbers. Headings elsewhere use the serif at weight 600. About text uses the serif at (1.125rem) with line height (1.65).

## Layout

The shared page has a maximum width of (1180px). Reading containers have a maximum width of (760px), including their padding. The normal horizontal inset is (2rem). The spacing scale runs from a small quarter-rem gap to a six-rem section gap.

The desktop home has two unequal columns. The endpaper column uses `minmax(19rem, calc((100vw - 1116px)/2 + 280px))`. Its introduction has a maximum width of (240px) and stays at (3rem) from the top while scrolling. The reading side has a maximum width of (816px) with (4rem) side padding.

- At (960px) and below, the endpaper column becomes (16rem). The reading side uses (2rem) side padding.
- At (768px) and below, the home stacks. The introduction stops sticking. It has a maximum width of (34rem). The reading side has a maximum width of (38rem) and (1.5rem) side padding. Post titles become (1.625rem). Home titles become (2.25rem). General reading containers use (1rem) side padding. The footer, archive grid, article navigation, and About header each become one column.
- At (520px) and below, the site name sits above the full navigation. Home titles become (2rem). The navigation links keep their (0.625rem) vertical padding.
- At (480px) and below, the email field and button stack.
- A (380px) header rule exists, but the later (520px) rule takes priority for its name size and horizontal padding.

## Elevation & Depth

The design has no shadows. Paper color fields, open space, and hand-drawn wavy lines separate the page parts. Color transitions take (180ms) with `cubic-bezier(0.16, 1, 0.3, 1)`. The legacy entrance animation classes are inert.

## Handwriting and doodles

Added 2026-10-22 because the site still felt sterile. The script face (Ms Madi) sets her name in the header, "in writing." on the home page, "Recent writing", page titles, the article byline, and the footer tagline. Titles of posts and body text stay in the serif.

Doodles come from `app/components/Doodle.js`: squiggle, sparkle, curlicue, cloud, arrow, heart. They are inline SVG, hidden from screen readers, and colored by role: `pop` (pink) for squiggles, the arrow, the curlicue and the heart; `gold` for sparkles; `accent` at low opacity for the cloud. Dividers (`hr`, post rows, byline, page headers, subscribe, article nav) use the `--wave` mask in `wave-ink`.

The squiggle, arrow and curlicues draw themselves in once on load, and the sparkles twinkle. All of it sits inside `prefers-reduced-motion: no-preference`, so a reader who turns motion off sees the finished drawings with no movement.

## Shapes

Controls, portraits, article images, and code blocks use small corners from the UI radius token. Inline code uses a (4px) radius. Post rows have no enclosing box or corner treatment. Rules remain thin and quiet.

## Components

### Buttons

Primary buttons use the accent ground and on-accent text. Hover uses the deeper accent. Secondary buttons use clear grounds, ink text, and a rule border that changes to ink on hover. Both use weight (600) and the small UI type size. Small buttons use the label size and padding (0.4rem 0.8rem).

### Email field

The email field uses the reading ground, ink text, a rule border, and muted placeholder text. Focus changes the border to accent and adds a (2px) outline with a (2px) offset. The button has the same small corners. Disabled submission uses opacity (0.55). The form label remains available to screen readers.

### Navigation

The name and navigation share a slim bar with a bottom rule. Links use support ink and change to main ink on hover. The theme control is a (2.75rem) square with a line SVG icon. The footer uses the same page width and fine rule. Business links stay in its small link group.

### Post rows

Each complete entry is one link. The serif title sits above the excerpt and small date. Hover changes the title to accent. Hover and keyboard focus underline it. The row uses a bottom rule and no shadow.

**The Open Page Rule.** Separate post entries with space and a fine bottom rule. Keep each entry on the reading ground.

### Subscription

A top rule and space mark the form after the home feed. The heading is regular serif type at (1.5rem) with line height (1.35). Fine print uses the label role. The hidden subscription kicker is not a visible design element.

### Focus and skip link

Keyboard focus uses an accent outline (2px) with an offset (3px). The skip link appears at the top when focused. Post-title focus uses the same underline as hover.

## Do's and Don'ts

### Do:
- Do use the theme color roles for text, grounds, rules, and controls.
- Do keep serif titles and reading text distinct from sans-serif controls.
- Do preserve visible keyboard focus and the full mobile navigation.

### Don't:
- Don't box the post feed into raised cards.
- Don't add motion outside the doodles, and keep every doodle animation inside the reduced-motion guard.
- Don't set post titles or body text in the script face; it is for names and labels.
- Don't place the subscription form before the writing on the home page.
