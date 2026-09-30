import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = { title: "Join Us" };

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
