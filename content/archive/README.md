# Archive

This folder is for public, recovered writing from Kathleen-owned sites that are
at risk of disappearing from the open web.

The archive is intentionally separate from `content/writing/`:

- `content/writing/` is for current, polished writing on this site.
- `content/archive/` is for recovered older work, grouped by its original
  publication home.
- `writing-workbench/` stays private and should not be swept into the archive.

## Permanent Domain

Keep `kathleencelmins.xyz` as the permanent home. It is exact-name, already
live, memorable enough, and under Kathleen's control. The live site currently
uses `www.kathleencelmins.xyz` as canonical, so metadata, robots, and sitemap
URLs should stay aligned to that host.

Do not block consolidation work on reacquiring `kathleencelmins.com`. Treat the
`.com` as optional if it becomes cheap or easy to recover later, not as the
source of truth.

## Recovery Order

1. Recover the personally written, Wayback-only sites first:
   `frugal-portland`, `for-profit-blogging`, `kathleencelmins-com`, and early
   `amplifiednow`.
2. Catalog live business properties separately. Do not bulk-import programmatic
   SEO libraries into the personal archive.
3. Use manual exports for auth-walled platforms such as LinkedIn, X/Twitter,
   Goodreads, and private newsletter archives.

Run `scripts/recover-archive --help` for the importer.
