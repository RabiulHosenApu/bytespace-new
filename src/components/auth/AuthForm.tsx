"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Mode = "login" | "signup";

const copy: Record<Mode, { title: string; subtitle: string; submit: string; success: string }> = {
  login: {
    title: "Welcome back",
    subtitle: "Sign in to continue your learning journey.",
    submit: "Sign In",
    success: "Signed in successfully (demo — no backend connected).",
  },
  signup: {
    title: "Create your account",
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
      <h1 className="text-3xl font-semibold">{text.title}</h1>
      <p className="mt-2 text-sm text-muted">{text.subtitle}</p>

      <button
        type="button"
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <div className="my-6 flex items-center gap-3 text-xs text-muted">
        <span className="h-px flex-1 bg-gray-200" />
        or continue with email
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

        <Button type="submit" variant="brand" className="mt-2 w-full py-3">
          {text.submit}
        </Button>
      </form>

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
