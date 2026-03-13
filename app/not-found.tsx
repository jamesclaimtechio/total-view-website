import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-16">
      <Container className="text-center">
        <p className="text-7xl">🦉</p>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Looks like this page flew the coop
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Scout couldn&apos;t find what you&apos;re looking for.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-[#3B82F6] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
          >
            Go Home
          </Link>
          <Link
            href="/features"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            View Features
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
}
