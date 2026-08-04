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

  if (status === "done") {
    return <p className="subscribe-status">You&apos;re in.</p>;
  }

  return (
    <>
      <p className="subscribe-line">New essays by email. That&apos;s it.</p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <label className="subscribe-label" htmlFor="subscribe-email">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="subscribe-hp"
        />
        <button type="submit" disabled={status === "sending"}>
          Subscribe
        </button>
      </form>
      {status === "error" && <p className="subscribe-status">{errorMessage}</p>}
    </>
  );
}
