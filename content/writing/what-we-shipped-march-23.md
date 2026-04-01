---
title: "What We Shipped This Week (March 23–29, 2026)"
date: 2026-03-30
description: "Analytics that were lying, a homepage that finally looks like a real product, and a checkout that was silently failing. Here's the week."
---

![Monday workspace — another week shipped](/images/shipped-hero-march-23.jpg)

Every Monday, I look back at the week and talk about what actually got done. Not in engineering-speak — just what changed for Glow Social customers, for my other projects, and for the business. Here's this week.

---

## Glow Social (the app)

### The analytics were lying

This one stings a little because it's been wrong for a while and I didn't know.

Glow Social shows customers their impression counts — how many times their posts have been seen across platforms. That number should go up as posts age and accumulate views. For some customers, it wasn't. The sync was skipping any post that didn't have a platform value stored on it, which sounds like a very specific edge case until you realize that describes most posts imported before a certain date.

We fixed the filter, then went back and re-synced 34 posts that had been stuck with wrong numbers. If you've been a customer for a while and your analytics looked oddly flat, that's why.

### The preview tool works for any business now

The brand discovery flow — where a new customer puts in their website and we generate a preview of what their content would look like — was quietly assuming certain things about what kind of business you were. Industry categories were baked in. It made sense when we were targeting specific niches, but the tool is increasingly the thing that turns a curious visitor into a paying customer, and narrow assumptions are the enemy of that.

We rebuilt the `/preview` route to be industry-agnostic. Any business, any niche. You put in your URL, we show you something real.

### Scheduling slots weren't matching what people paid for

Legacy unlimited subscribers — including our agency customers — were hitting an invisible wall where they'd run out of scheduling slots before they should have. They were on plans that promised 30 posts per day. They were getting less.

Fixed. And while we were in there, we also added a Founding tier to the agency checkout configuration, which feeds the pricing work we've been doing separately.

### Error messages that are actually honest

This is the kind of thing that's embarrassing to admit, but: when something broke in Glow Social, users were seeing "Something went wrong." That's it. No context, no reassurance, nothing.

We rewrote every major error state. "Your dashboard could not load — your content is safe." "The payment form could not load — your info is secure." Carousel and video modals that used to silently fail now surface a message people can actually act on.

I also found a race condition in how we were handling some behind-the-scenes database writes. On serverless infrastructure, the function can shut down immediately after sending a response — any async work that was happening after that point was failing and logging as a hard error, which was triggering Sentry alerts that weren't real alerts. Demoted it to a warning. Something failing silently is bad; something alerting incorrectly is a different kind of bad.

### Security audit: zero findings

We ran the Supabase security linter. Three findings came back — two database views that had too much permission, and a stored function with a configuration issue. All fixed. The linter now returns nothing.

At the same time, the test suite went from 15 passing to 20 of 20. An audit week is never the most exciting week, but it's the kind of week future-me is grateful for.

---

## Glow Social (the website)

### The homepage finally looks like a real product

![The new Glow Social homepage — dark navy, grid texture, and copy that doesn't apologize for itself](/images/shipped-website-march-23.jpg)

The hero section had been bothering me for months. It was soft. Gradient-heavy in a way that felt more "startup template" than "thing you should trust with your marketing." The copy was good — I've always liked the copy — but the design wasn't holding up its end.

This week we replaced it with a dark navy background, floating platform icons, a subtle grid overlay, and social proof that actually exists. We also removed the fake customer count. It was a placeholder from an early version and it had just... stayed there. Gone now.

### The preview tool lives on the right domain now

![The Glow Social preview tool — a URL and email form, now living natively on glowsocial.com instead of being reverse-proxied](/images/shipped-analytics-march-23.jpg)

This is the one I'm most proud of this week, even though it's invisible to 99% of people.

The preview tool on the marketing site was a hack. It was reverse-proxying the app and injecting it into the marketing page, which meant the styles were always slightly off and form submissions behaved unpredictably depending on which browser cache you hit. I knew it was fragile the day we shipped it and I shipped it anyway because we needed something.

We rebuilt it as a native component that actually lives on glowsocial.com. Same domain, same styles, form submissions that work correctly every time. It's the front door to the product. It needed to actually work.

---

## The Well-Paid Expert

### The Stripe checkout was silently failing

There was a checkout bug on the Agency Blueprint page. The error was a connection failure, which is the vague kind that points at several possible causes, and for a while it was hard to pin down.

The root issue was that we were initializing Stripe too early — before the environment was fully ready. The fix was lazy initialization: load Stripe only when someone actually clicks the checkout button, not before. We also rebuilt how the session ID gets stored. It was in the URL, which got mangled in certain browsers. It's in `sessionStorage` now, which is boring but correct.

The upsell flow works reliably now. Checkout failures that looked random were actually systematic, and now they're gone.

### Two new posts went up

Published two new pieces on the site. More surface area for the right person to find their way in.

---

## The theme

The things I shipped this week don't make for a great demo. You can't show someone "analytics that are accurate now" or "an error message that actually explains something" and have them be wowed by it.

But this is the work that makes the difference between software that users tolerate and software they trust. The front door gets a facelift and actually works. Numbers stop lying. Things that broke tell you something useful instead of shrugging.

I've been thinking a lot about trust lately — what earns it, what erodes it quietly over time. Wrong analytics erode it. Generic error messages erode it. A checkout that fails with no explanation erodes it. None of those are dramatic collapses. They're just small disappointments that accumulate.

This week was about paying down that debt.
