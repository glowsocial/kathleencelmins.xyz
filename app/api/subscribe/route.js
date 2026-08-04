import { createSubscriber, addToNewsletter } from "@/lib/kit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — a hidden field real readers never fill. Lie to the bot.
  if (body?.website) {
    return Response.json({ ok: true });
  }

  const email = String(body?.email || "")
    .trim()
    .toLowerCase();

  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return Response.json(
      { error: "That doesn't look like an email address." },
      { status: 400 }
    );
  }

  // Fail closed — never pretend a signup happened when Kit can't be reached.
  if (!process.env.KIT_API_KEY || !process.env.KIT_TAG_ID) {
    console.error("subscribe: KIT_API_KEY/KIT_TAG_ID missing — request NOT sent");
    return Response.json(
      { error: "Subscriptions are down right now." },
      { status: 500 }
    );
  }

  const created = await createSubscriber(email);
  if (!created.success) {
    console.error("subscribe: createSubscriber failed:", created.status, created.error);
    return Response.json(
      { error: "Couldn't subscribe you just now — try again in a minute." },
      { status: 502 }
    );
  }

  const tagged = await addToNewsletter(email);
  if (!tagged.success) {
    console.error("subscribe: addToNewsletter failed:", tagged.status, tagged.error);
    return Response.json(
      { error: "Couldn't subscribe you just now — try again in a minute." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
