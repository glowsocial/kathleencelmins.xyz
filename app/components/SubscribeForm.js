"use client";

import { useState } from "react";

const FALLBACK_ERROR = "Couldn't subscribe you just now — try again in a minute.";

export default function SubscribeForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const website = form.elements.website.value;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }
      if (res.ok && data?.ok) {
        setStatus("done");
        return;
      }
      setErrorMessage(data?.error || FALLBACK_ERROR);
      setStatus("error");
    } catch {
      setErrorMessage(FALLBACK_ERROR);
      setStatus("error");
    }
  }

  return (
    <aside className="subscribe-card">
      <p className="subscribe-kicker">Email list</p>
      {status === "done" ? (
        <div className="subscribe-done" role="status">
          <p className="subscribe-done-heading">You&rsquo;re in.</p>
          <p className="subscribe-note">New essays will come to your inbox.</p>
        </div>
      ) : (
        <>
          <p className="subscribe-heading">Get new essays by email.</p>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <label className="subscribe-label" htmlFor="subscribe-email">
              Email address
            </label>
            <div className="subscribe-row">
              <input
                id="subscribe-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Joining…" : "Subscribe"}
              </button>
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="subscribe-hp"
            />
          </form>
          {status === "error" && (
            <p className="subscribe-status" role="alert">{errorMessage}</p>
          )}
          <p className="subscribe-fine-print">
            One email per essay. Unsubscribe anytime.
          </p>
        </>
      )}
    </aside>
  );
}
