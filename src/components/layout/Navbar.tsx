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
      <nav className="mx-auto flex h-[104px] max-w-[1200px] items-center justify-between px-4 md:h-[120px] xl:px-0">
        <Logo tone="light" />

        <ul className="hidden items-center gap-6 text-surface md:flex">
          {primaryNav.map((link) => {
            const active = link.href === pathname;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-lime ${active ? "font-medium" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-6 text-surface md:flex">
          <Link href="/login" className="hover:text-lime">
            Sign In
          </Link>
          <Link href="/signup" className="hover:text-lime">
            Join Us
          </Link>
          <button aria-label="Cart" className="hover:text-lime">
            <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
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
            {[
              ...primaryNav,
              { label: "Sign In", href: "/login" },
              { label: "Join Us", href: "/signup" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
