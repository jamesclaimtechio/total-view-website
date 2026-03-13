import Link from "next/link";
import { Container } from "./container";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "/security" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              TotalView<span className="text-[#3B82F6]"> AI</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              AI-powered call analytics for contact centres. See everything. Miss
              nothing.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-gray-800 pt-8">
          <span className="rounded-md border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
            SOC 2 Type II
          </span>
          <span className="rounded-md border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
            GDPR Compliant
          </span>
          <span className="rounded-md border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
            EU Data Residency
          </span>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Total View AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
