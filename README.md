# kathleencelmins.xyz

Personal writing repo and private voice-writing workbench.

This project has two separate writing zones:

- `writing-workbench/` is private raw material: dictated notes, messy drafts, fragments, and unfinished pieces.
- `content/writing/` is public writing: polished pieces that are ready for the site.

Do not move anything from `writing-workbench/` into `content/writing/` unless Kathleen explicitly says it is ready to publish.

## Writing Workflow

1. Dictated notes start in `writing-workbench/inbox/voice-inbox.md`.
2. Rough pieces with a shape move to `writing-workbench/drafts/`.
3. Loose lines, memories, images, and stray ideas go to `writing-workbench/fragments/`.
4. Finished private pieces can move to `writing-workbench/archive/`.
5. Public pieces go to `content/writing/` only after an explicit publish-ready decision.

The workbench folders are ignored by git except for the folder placeholders and workflow docs, so private notes do not get swept into normal publish commits.

## Voice Cleanup

When cleaning dictated notes:

- Preserve the phrasing that sounds like Kathleen.
- Cut repetition, filler, and false starts.
- Keep the piece personal, specific, and alive.
- Do not make it corporate, generic, LinkedIn-polished, or artificially tidy.
- Find the point before deciding the format.
- Suggest what the note might become: essay, short post, fragment, title idea, story seed, or private journal entry.

Default response shape for a dictated note:

1. Cleaned draft
2. What this seems to be about
3. Lines worth keeping
4. What it could become

## Publishing

Published posts live in `content/writing/` as Markdown or MDX with frontmatter:

```md
---
title: "Title"
date: 2026-06-04
description: "Short description"
---
```

Useful commands:

```bash
npm run dev
scripts/shipping-log            # draft the week's work from real git history
scripts/newpost "Title"
scripts/publish "New post: Title"
```

`scripts/shipping-log` reads the commits across every project alongside this
one and writes a skeleton into `writing-workbench/drafts/`, with the raw
material parked under each heading. It gathers; it does not write prose. Use
it when the subject needs to arrive on its own.

`scripts/newpost` is for public, publish-ready writing. Use the workbench first for dictated notes, rough drafts, and fragments.

## Development

```bash
npm install
npm run dev
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.
