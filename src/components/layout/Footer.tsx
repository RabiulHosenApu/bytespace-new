import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { footerLinks, legalLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-white px-4 pt-[70px] pb-12 text-ink">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[528px_1fr] lg:gap-[92px]">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-[1.6]">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <NewsletterForm />
          <p className="mt-6 max-w-[504px] text-xs leading-[1.6]">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm leading-[1.6] sm:grid-cols-3 lg:pt-12">
          {footerLinks.map((column, i) => (
            <ul key={i} className="flex flex-col gap-4">
              {column.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-[130px] flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs leading-[1.6] md:flex-row">
        <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
        <ul className="flex gap-6">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-brand">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
