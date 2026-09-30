import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { footerLinks, legalLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 pt-16 pb-8 text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm text-muted">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs text-muted">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          {footerLinks.map((column, i) => (
            <ul key={i} className="flex flex-col gap-4">
              {column.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-ink/80 transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-muted md:flex-row">
        <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
        <ul className="flex gap-6">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
