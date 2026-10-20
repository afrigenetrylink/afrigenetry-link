
"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>

      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Your email address"
        aria-describedby="newsletter-note"
        required
      />

      <button
        type="submit"
        aria-label="Subscribe to the newsletter"
        title="Subscribe"
      >
        <ArrowRight size={20} aria-hidden="true" />
      </button>

      <p id="newsletter-note" className="sr-only">
        Newsletter subscription is not yet connected.
      </p>
    </form>
  );
}
