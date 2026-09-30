"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { primaryNav } from "@/lib/data";

type NavbarProps = {
  /** "overlay" sits transparently on top of the blue hero; "solid" is for plain pages. */
  variant?: "overlay" | "solid";
};

export default function Navbar({ variant = "overlay" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = variant === "overlay";

  return (
    <header
      className={`z-50 w-full ${
        overlay ? "absolute inset-x-0 top-0 text-white" : "relative bg-brand text-white"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <Logo tone="light" />

        <ul className="hidden items-center gap-1 rounded-full border border-white/25 bg-white/5 p-1 text-sm backdrop-blur-sm md:flex">
          {primaryNav.map((link) => {
            const active = link.href === pathname;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-4 py-1.5 transition-colors ${
                    active ? "bg-white/15 font-medium" : "text-white/80 hover:text-lime"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/login" className="hover:text-lime">
            Sign In
          </Link>
          <Link href="/signup" className="hover:text-lime">
            Join Us
          </Link>
          <button aria-label="Cart" className="hover:text-lime">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-2xl bg-white p-4 text-ink shadow-xl md:hidden">
          <ul className="flex flex-col">
            {[...primaryNav, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/signup" }].map(
              (link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 font-medium hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
