import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import AuthShell from "@/components/auth/AuthShell";

export const metadata: Metadata = { title: "Join Us" };

export default function SignupPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
