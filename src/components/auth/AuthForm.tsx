"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Mode = "login" | "signup";

type Copy = {
  eyebrow: string;
  title: string;
  submit: string;
  success: string;
  switchText: string;
  switchLink: string;
  switchHref: string;
  switchColor: string;
  /** Extra space under the switch line (the Figma cards differ slightly). */
  switchSpacing: string;
};

const copy: Record<Mode, Copy> = {
  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    submit: "Sign In",
    success: "Signed in successfully (demo — no backend connected).",
    switchText: "New user?",
    switchLink: "Create an account",
    switchHref: "/signup",
    switchColor: "text-[#888888]",
    switchSpacing: "",
  },
  signup: {
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    submit: "Continue",
    success: "Account created (demo — no backend connected).",
    switchText: "Already have an account?",
    switchLink: "Login",
    switchHref: "/login",
    switchColor: "text-body",
    switchSpacing: "mb-[11px]",
  },
};

export default function AuthForm({ mode }: { mode: Mode }) {
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const text = copy[mode];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError(null);
    setDone(true);
  }

  return (
    <>
      <p className="text-lg leading-[1.6] text-brand">{text.eyebrow}</p>
      <h1 className="text-4xl leading-[1.2] font-semibold text-ink md:text-[44px]">{text.title}</h1>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        {mode === "signup" && (
          <Field label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" />
        )}
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
        />
        <PasswordField autoComplete={mode === "login" ? "current-password" : "new-password"} />

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
        {done && (
          <p role="status" className="rounded-xl bg-lime/30 px-4 py-2 text-sm">
            {text.success}
          </p>
        )}

        <Button type="submit" className="self-end">
          {text.submit}
        </Button>
      </form>

      {mode === "login" && (
        <div className="mt-[73px]">
          <div className="flex items-center gap-6 text-lg text-[#888888]">
            <span className="h-px flex-1 bg-line" />
            or
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <SocialButton label="Continue with Facebook" icon="/images/icons/facebook.svg" />
            <SocialButton label="Continue with Google" icon="/images/icons/google.svg" />
          </div>
        </div>
      )}

      <p
        className={`mt-auto pt-12 text-center text-base leading-[1.6] ${text.switchColor} ${text.switchSpacing}`}
      >
        {text.switchText}{" "}
        <Link href={text.switchHref} className="text-brand hover:underline">
          {text.switchLink}
        </Link>
      </p>
    </>
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
  "h-[52px] w-full rounded-xl border border-[#e5e6e8] bg-white px-6 text-lg text-ink outline-none transition-colors placeholder:text-muted focus:border-brand";

function Field({ label, name, type = "text", ...rest }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm leading-[1.2] font-medium text-ink">
      {label}
      <input name={name} type={type} required className={inputClass} {...rest} />
    </label>
  );
}

function PasswordField({ autoComplete }: { autoComplete: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <label className="flex flex-col gap-2 text-sm leading-[1.2] font-medium text-ink">
      Password
      <span className="relative">
        <input
          name="password"
          type={visible ? "text" : "password"}
          required
          minLength={8}
          autoComplete={autoComplete}
          placeholder="********"
          className={`${inputClass} pr-14`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-5 text-muted hover:text-ink"
        >
          {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </span>
    </label>
  );
}

function SocialButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="rounded-3xl transition-colors hover:bg-surface"
    >
      <Image src={icon} alt="" width={72} height={72} />
    </button>
  );
}
