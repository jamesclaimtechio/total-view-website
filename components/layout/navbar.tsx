"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-250",
          showSolid
            ? "border-b border-gray-200/50 bg-white/80 backdrop-blur-lg"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-16">
          <Link href="/" className="flex items-center gap-2">
            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors",
                showSolid ? "text-gray-900" : "text-white"
              )}
            >
              TotalView
              <span className="text-[#3B82F6]"> AI</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#3B82F6]"
                    : showSolid
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-gray-300 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="#"
              className={cn(
                "text-sm font-medium transition-colors",
                showSolid
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-300 hover:text-white"
              )}
            >
              Log In
            </Link>
            <Link
              href="#"
              className={buttonVariants({ size: "sm" })}
            >
              Get Started Free
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 -mr-2",
              showSolid ? "text-gray-900" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white p-6 pt-20 shadow-xl">
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className={cn(buttonVariants(), "w-full")}
              >
                Get Started Free
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-blue-50 text-[#3B82F6]"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#"
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
