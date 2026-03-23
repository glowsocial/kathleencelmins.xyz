---
title: "What We Shipped This Week (March 16–22, 2026)"
date: 2026-03-23
description: "Every Monday, I look back at what actually got done — the features, fixes, sites, and SEO work across Glow Social and my client projects. Here's this week."
---

![Monday workspace — another week shipped](/images/weekly-shipped-hero.jpg)

Every Monday, I look back at the week and talk about what actually got done. Not in engineering-speak — just what changed for Glow Social customers, for my other projects, and for the business. Here's this week.

---

## Glow Social (the app)

### The big one: Smart Auto-Approve

This was a feature I've been thinking about for a while. Some of our customers log in, approve every post we generate without edits, and do that week after week. Those people don't need to approve anything — they trust the system, and the system should recognize that.

So we built a trust score. It looks at how often you approve vs. edit, how consistent you are, your publish volume. Based on that score, you can unlock two new automation levels:

- **Semi-auto** (trust score 60+): Most posts get auto-scheduled, unusual ones still come to you for review
- **Full auto** (trust score 85+): Everything schedules automatically, you get an email summary

The key design decision: **it's always opt-in**. The system unlocks the option; *you* decide whether to flip the switch. There's a new Automation tab in Settings with a visual trust score ring so you can see where you stand.

We also built a safety net: if something goes wrong during publishing, any auto-approved post rolls back to "pending approval" instead of disappearing.

![The new Automation settings with trust score visualization](/images/glow-social-dashboard.jpg)

### Carousel publishing: fixed (for real this time)

One of our customers had 27 carousel posts fail in a row. Twenty-seven. The error message said "No social accounts selected" which made zero sense because he had three platforms connected.

Turned out to be two problems stacked on top of each other:

1. **Timeout**: Carousel posts upload up to 10 images, which easily exceeds the default 10-second server limit. Every single one was timing out.
2. **API quirk**: The publishing API requires ALL connected platforms in every request. We were splitting carousel posts into separate calls per platform type, and each partial call got rejected.

The fix: we now publish carousels as one unified post to all platforms and gave the endpoint enough time to actually finish uploading.

### Smarter platform syncing

When a customer connects a new social platform (say they add Instagram after already having LinkedIn), all their upcoming scheduled posts need to go to the new platform too. That worked fine for regular posts — but carousels and videos silently failed because they need different media formats per platform.

Now the system detects whether a post needs re-publishing (carousel or video) vs. a simple metadata update, and handles each correctly.

### Better error handling everywhere

We integrated Sentry user context so when something breaks, we know *exactly* which customer hit the issue. Before, we just had stack traces with no idea who was affected.

We also handled a specific Google Business Profile edge case where users connect GBP but don't pick a location — instead of a cryptic 500 error, they now get a clear message telling them to reconnect and select their business.

### Image uploads: 10x smaller, 10x more reliable

Our AI generates images as PNGs that can be 4MB+. Uploading those from serverless functions was unreliable — too big, too slow, timeouts everywhere.

Now we compress everything to JPEG at 80% quality, capped at 1080px wide (matching Instagram's native resolution). A typical image goes from ~4MB to ~300KB. Uploads that used to fail now complete reliably.

### Monthly post limit clarity

When a Core plan customer uses all 12 posts for the month, the old UI still showed swipeable content cards with a disabled button. People thought they were "out of ideas" when really they just hit their plan limit.

Now there's a clear "All caught up for this month" screen with the reset date and an upgrade CTA. No confusion.

### Better stock video coverage

We switched our B-roll video source from Pexels (~150K videos) to Pixabay as the primary provider (~4.3M assets), with Pexels as fallback. Much better coverage for niche industries like HVAC, concrete, and landscaping.

### Removed Reddit

Reddit was listed as a supported platform but never actually worked. We cleaned it out entirely — removed it from the database, UI, constants, everything. Honesty over optics.

---

## Glow Social (the website)

![SEO content and search growth efforts](/images/seo-growth.jpg)

### Massive SEO overhaul

This was a content-heavy week for glowsocial.com:

- **Expanded 15 thin blog posts** from ~500 words each to 1,500-2,200 words with FAQ schema, internal links, and comparison tables
- **Removed 9 duplicate/stub posts** and set up proper 301 redirects
- **Consolidated 6 cannibalized "time spent on social media" posts** into one authoritative page
- **Rewrote titles on high-traffic pages** that had thousands of impressions but almost no clicks
- **Created new comparison content**: Later vs. Buffer, SM manager cost guide, affordable management guide
- **Published 9 new competitive gap pieces** targeting Vista Social, Hootsuite alternatives, and platform-specific guides
- **Added FAQ schema** across all comparison posts for AI engine extractability
- **Built a comparison hub page** linking to all our vs. pages

---

## Client work: Schrock Construction

Built and shipped a complete website redesign for a Kitsap County remodeling/handyman company. Contact form hooked up, Facebook linked, favicon done. From zero to live in a day.

---

## kathleencelmins.xyz

Launched this very site! Journal-style with Playfair Display headings, Courier Prime body text (typewriter vibe), warm cream/brown palette. Wrote up my own take on *The Untethered Soul*. Built a `newpost` script so I can publish a thought from the terminal in seconds.

---

## Client work: Phil's Random Thoughts

Stood up a personal blog for a client. Card layout, sans-serif typography, fun scramble animation on the "Random" header. Simple but it's *his*.

---

## The Well-Paid Expert

- Recovered 356 blog posts from the Wayback Machine (the old WordPress site was gone)
- Redesigned the whole thing with the original editorial branding
- Fixed 31+ broken category page URLs, 25 landing pages, proper canonical URLs
- Published a new blog post on manufacturing leadership
- Added proper redirect chains so Google doesn't lose the SEO equity

---

## The theme

Looking at this list, the theme is *reliability and reach*.

On the product side: things that were silently broken are now fixed. Carousel publishing, image uploads, platform syncing — all working or failing gracefully with clear messages. On the content side: we massively expanded our search footprint. And on the client side: real websites, shipped.

Not every week is a "launch a new feature" week. Sometimes the most impactful work is making the existing stuff actually work.
