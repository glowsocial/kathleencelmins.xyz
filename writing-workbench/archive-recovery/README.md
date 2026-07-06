# Archive Recovery Workbench

This folder is for local recovery and triage only. It is where Wayback imports
and scan reports live before anything becomes public.

Public archive entries must move through this order:

1. Recover into `raw/` with `scripts/recover-archive`.
2. Scan with `scripts/scan-archive-candidates`.
3. Read the piece.
4. Promote only keepers with `scripts/promote-archive-post <source>/<slug>`.
5. Keep `curated: true` only after the piece is good enough to show publicly.

The `raw/` and `reports/` folders are ignored by git.
