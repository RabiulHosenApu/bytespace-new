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
      <form onSubmit={handleSubmit} className="mt-11 flex max-w-[504px] items-center gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Enter your email"
          className="h-[52px] min-w-0 flex-1 rounded-full border border-line bg-white px-6 text-base text-ink outline-none placeholder:text-ink focus:border-brand"
        />
        <Button type="submit" className="h-[52px]">
          Subscribe
        </Button>
      </form>
      {subscribed && (
        <p role="status" className="mt-3 text-sm font-medium text-brand">
          Thanks! You&apos;re on the list.
        </p>
      )}
    </>
  );
}
