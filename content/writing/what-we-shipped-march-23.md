---
title: "What We Shipped This Week (March 23–29, 2026)"
date: 2026-03-30
description: "A look at what actually got done this week — analytics fixes, a new preview tool on the marketing site, a hero overhaul, and plugging a Stripe checkout hole."
---

Every Monday, I look back at the week and talk about what actually got done. Not in engineering-speak — just what changed for Glow Social customers, for my other projects, and for the business. Here's this week.

![A tidy workspace with a MacBook showing a dashboard, coffee, and a notebook — the default Monday setup](/images/shipped-hero-march-23.jpg)

---

## Glow Social (the app)

### Analytics numbers were lying — now they're not

Glow Social shows customers their impression counts — how many people have seen their posts. For a while, those numbers were stale. A sync bug was skipping any post that didn't have a platform value attached, which sounds like a narrow edge case but wasn't. A lot of older imported posts had exactly that problem.

We fixed the bug and rewrote the filter logic so that posts without platform data are handled gracefully instead of silently skipped. Then we went back and backfilled 34 historical posts that had been stuck with bad counts. Customers who've been using Glow Social since the early days should see more accurate numbers if they look at their analytics now.

![A social media scheduling dashboard with charts and platform icons — what we're building toward](/images/shipped-analytics-march-23.jpg)

### The preview tool now works for any kind of business

We shipped a new `/preview` route in the app. Previously, the brand discovery and preview flow was tightly coupled to specific industry categories — it assumed certain things about the business type. This week we decoupled it, so any business, regardless of niche, can go through the preview experience.

This matters because the preview tool is increasingly becoming our top-of-funnel entry point. The less friction there is, the more it can do its job.

### Scheduling slots now actually respect your plan

There was a quiet bug where legacy "unlimited" plan subscribers — including agency customers — were being capped at fewer scheduling slots than their plan promised. They could be on a plan that allowed 30 posts per day but were hitting an artificial wall they couldn't see.

We fixed the slot calculation and also added a "Founding" tier to the agency checkout configuration to support the pricing work we've been doing alongside this. Existing unlimited subscribers should now see their full slot capacity.

### Error messages that are actually helpful

This one is small but it matters a lot. When things went wrong in Glow Social — failed carousels, checkout errors, dashboard load failures — users were seeing "Something went wrong." That's useless.

We rewrote every major error state in the product with specific, human messages. "Your dashboard could not load — your content is safe" instead of a generic error. "The payment form could not load — your info is secure" instead of an alarming blank screen. Modals that silently failed now surface a toast notification so people know something actually happened.

It also turns out we had a race condition in how we were fire-and-forgetting some database writes on our serverless backend. When Vercel shuts down a function immediately after the response is sent, any pending async operations can fail. We were logging those as hard errors, which was triggering false Sentry alerts. Demoted to a warning with a note that it self-heals on the next load.

### Full security audit: 0 findings

We ran an audit of the database security configuration. Found three issues — SECURITY DEFINER views that should have been SECURITY INVOKER, and a stored function with a mutable search path. All three are now fixed. Supabase's security linter reports zero findings.

Test suite went from 15/20 passing to 20/20 at the same time.

---

## Glow Social (the website)

![Abstract illustration of a website hero section being redesigned — grid lines, floating shapes, dark navy](/images/shipped-website-march-23.jpg)

### The homepage looks like a real product now

The hero section got a full overhaul. We had a gradient-heavy, somewhat soft design that wasn't doing the product justice. This week we replaced it with a dark navy background, floating platform icons, a subtle grid texture, and social proof elements that feel earned rather than generic.

We also removed the fake customer count that had been there since launch. It's more honest this way.

### The preview tool lives on glowsocial.com now

This is a bigger architectural win than it sounds. Before this week, the preview tool on the marketing site was a reverse-proxy hack — it was secretly loading the app and injecting it into the marketing page, which caused broken styles and unpredictable behavior.

We rebuilt it from scratch as a native component that lives on the marketing site itself. The form submits on the right domain, the styles are consistent, and the experience is seamless. This matters because the preview tool is how most new users first encounter the product — it needed to actually work.

---

## The Well-Paid Expert

### Stripe checkout was silently failing

There was a checkout failure that had been lurking for a while on the Agency Blueprint page. The Stripe SDK was being initialized eagerly — too early, before the environment was fully ready — which caused connection errors that looked like they came from nowhere.

The fix was to switch to lazy initialization: load Stripe only when someone actually clicks checkout, not before. We also rebuilt the session ID storage using `sessionStorage` instead of relying on a URL parameter, which was getting mangled in some environments. Both fixes together eliminated the checkout error. The upsell flow works reliably now.

### Two new posts published

We published two new sponsored posts to the site. More content, more entry points, more chances for the right person to find the funnel.

---

## The theme

This week was mostly about closing gaps. The kind of gaps that don't show up as features but that silently erode trust — wrong analytics numbers, invisible scheduling limits, confusing error messages, a checkout that failed quietly.

This is the unglamorous part of building software. None of these fixes make for a dramatic demo. But they're the difference between a product that feels broken and one that feels like it's on your side. The goal this week was to be worthy of the trust that's already been placed in it.

The preview tool work is the piece I'm most excited about. Getting that experience right — native, seamless, on the right domain — is the thing that makes everything upstack work better. It's the front door. We finally built one worth walking through.
