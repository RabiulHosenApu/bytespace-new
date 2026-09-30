"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1 pl-5 focus-within:border-brand"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
        />
        <Button type="submit">Subscribe</Button>
      </form>
      {subscribed && (
        <p role="status" className="mt-3 text-sm font-medium text-brand">
          Thanks! You&apos;re on the list.
        </p>
      )}
    </>
  );
}
