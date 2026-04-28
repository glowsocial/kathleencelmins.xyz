---
title: "What We Shipped (March 29 – April 28, 2026)"
date: 2026-04-28
description: "264 commits across the app. 77 across the marketing site. Video, carousels, onboarding, security, SEO, and the unsexy fixes that keep everything running."
---

I haven't written one of these in a month. That's because I've been building.

264 commits on the app. 77 on the marketing site. Here are the ones that matter.

---

## Video — from nothing to multi-scene cinematic

This is the big one. A month ago, Glow Social couldn't make videos. Now it can.

The pipeline went through five complete rewrites before I stopped counting. Here's what landed:

**The system:** You give it a hook. It writes a script (5-8 words per sentence, conversational, not choppy). It generates a background image with Flux, zooms it with Ken Burns, layers in captions, and publishes a 25-30 second video to your connected accounts.

**What I had to fix to get there:**
- Switched from b-roll footage to Flux-generated images + Ken Burns zoom — more visually interesting, more on-brand
- Multi-scene pipeline: new image every 4 seconds instead of one long zoom
- Fixed portrait aspect ratio (9:16, 1080x1920) — it kept generating landscape
- Clamped Ken Burns duration to the 30s API maximum
- Built retry logic for transient Supabase storage failures
- Fixed audio duration sync so videos don't cut off mid-sentence
- Made backgrounds topic-relevant instead of generic stock footage
- Banned phones and screens from prompts (they looked terrible)

99 commits just on video. Some of those were 2am "why is this returning landscape" fixes.

---

## Carousels — white card redesign

Carousels got a full visual overhaul. The old design was fine. The new one is better.

- **White card over atmospheric background** — glassmorphism cards with brand logo
- Topic-relevant backgrounds instead of generic mood imagery
- Panoramic scroll with framework-specific visual treatments
- Fixed the branding defaults bug — new users were getting Glow Social's brand colors instead of their own
- Built a Google Favicon API fallback for Cloudflare-blocked domains

---

## Onboarding — from leaky to locked

Every new signup was a small crisis. The onboarding flow had bugs that made people think the app was broken on their first visit.

- Converted from modal cards to **full-screen layout** — no more hidden buttons below the viewport
- Added progress bar and trust signals
- Built **self-healing onboarding** — if the background job stalls, it auto-retries
- Removed fake schedule defaults that were confusing users
- Added premium loading animations during brand discovery
- Embedded a walkthrough video on the homepage

13 commits. The difference: people now finish onboarding.

---

## Security & stability

The unglamorous work.

- **API rate limiting** on all 99 routes via middleware
- Patched Next.js DoS vulnerability and protobufjs RCE
- Upgraded Inngest SDK to patch an environment variable exposure vulnerability
- Hardened Bundle.Social error handling — graceful failures instead of crashes
- Fixed a webhook race condition that was downgrading subscription statuses
- Dropped unused database indexes and optimized RLS policies to fix Supabase disk I/O budget exhaustion

---

## Analytics

- Added **period toggle** — daily, weekly, monthly, all time
- Defaulted to All Time (users wanted the big picture first)
- Fixed category performance tracking — now stores hook_type directly on posts
- Fixed stale impressions not updating for active users

---

## Content generation

- Rewrote the voice prompt section for first-person, personal tone (instead of generic third-person)
- Fixed duplicate posting to Threads
- Capped daily time slots at 18 to match Bundle.Social's platform limit
- Excluded declined sparks from the generation pipeline
- Prevented duplicate posts from "platform shattering" on unlimited plans

---

## Marketing site (77 commits)

- **SEO overhaul:** rewrote title tags across the top pages, added 301 redirects, optimized FAQ schema
- Published **20 AEO answer block posts** targeting AI visibility
- Published **3 pillar posts** for high-volume content gaps
- Added **6 comparison pages** (Marky, Hookle, and more)
- Built standalone **/pricing** page with video embed
- Restructured nav from landing-page pattern to SaaS navigation
- Generated and uploaded **326 static Pinterest pin images**
- Added RSS feed for Pinterest auto-pinning
- Fixed mobile hamburger menu (it wasn't opening)

---

## What's next

The video pipeline works. Carousels look premium. Onboarding doesn't leak. The marketing site has real SEO. The database isn't burning through its I/O budget.

For the first time, everything works at the same time.

Now: more users.
