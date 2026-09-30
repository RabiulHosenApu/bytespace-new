"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Mode = "login" | "signup";

const copy: Record<Mode, { title: string; subtitle: string; submit: string; success: string }> = {
  login: {
    title: "Welcome back to ByteSpace",
    subtitle: "Sign in to continue your learning journey.",
    submit: "Sign In",
    success: "Signed in successfully (demo — no backend connected).",
  },
  signup: {
    title: "Welcome to ByteSpace",
    subtitle: "Join 12K+ students and creators on ByteSpace.",
    submit: "Create Account",
    success: "Account created (demo — no backend connected).",
  },
};

export default function AuthForm({ mode }: { mode: Mode }) {
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const text = copy[mode];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = String(data.get("password") ?? "");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (mode === "signup" && password !== data.get("confirm")) {
      setError("Passwords do not match.");
      return;
    }
    setError(null);
    setDone(true);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold md:text-3xl">{text.title}</h1>
      <p className="mt-2 text-sm text-muted">{text.subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        {mode === "signup" && (
          <Field label="Full name" name="name" autoComplete="name" placeholder="Jane Doe" />
        )}
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
        <PasswordField
          label="Password"
          name="password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
        />
        {mode === "signup" && (
          <PasswordField label="Confirm password" name="confirm" autoComplete="new-password" />
        )}

        {mode === "login" ? (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted">
              <input type="checkbox" name="remember" className="h-4 w-4 accent-brand" />
              Remember me
            </label>
            <Link href="#" className="font-medium text-brand hover:underline">
              Forgot password?
            </Link>
          </div>
        ) : (
          <label className="flex items-start gap-2 text-sm text-muted">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-brand" />
            <span>
              I agree to the{" "}
              <Link href="#" className="text-brand hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-brand hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        )}

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
        {done && (
          <p role="status" className="rounded-lg bg-lime/30 px-3 py-2 text-sm">
            {text.success}
          </p>
        )}

        <Button type="submit" className="mt-2 w-full py-3">
          {text.submit}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-muted">
        <span className="h-px flex-1 bg-gray-200" />
        or continue with
        <span className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="flex justify-center gap-3">
        <SocialButton label="Continue with Google">
          <GoogleIcon />
        </SocialButton>
        <SocialButton label="Continue with Apple">
          <AppleIcon />
        </SocialButton>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        {mode === "login" ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={mode === "login" ? "/signup" : "/login"}
          className="font-medium text-brand hover:underline"
        >
          {mode === "login" ? "Join Us" : "Sign In"}
        </Link>
      </p>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
};

const inputClass =
  "w-full rounded-full border border-gray-200 px-5 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-brand";

function Field({ label, name, type = "text", ...rest }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      <input name={name} type={type} required className={inputClass} {...rest} />
    </label>
  );
}

function PasswordField({ label, name, autoComplete }: Omit<FieldProps, "type">) {
  const [visible, setVisible] = useState(false);
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      <span className="relative">
        <input
          name={name}
          type={visible ? "text" : "password"}
          required
          minLength={8}
          autoComplete={autoComplete}
          placeholder="••••••••"
          className={`${inputClass} pr-12`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-4 text-muted hover:text-ink"
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </span>
    </label>
  );
}

function SocialButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-ink" aria-hidden="true">
      <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2c-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8 2.2-1.3 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9-.1 0-2.6-1-2.6-4.1ZM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.2.7-3 1.5-.6.8-1.2 2-1 3.1 1.1.1 2.3-.6 3-1.4Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8Z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.1a11 11 0 0 0 0 9.9l3.7-2.8Z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z" />
    </svg>
  );
}
