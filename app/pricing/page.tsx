import { Metadata } from "next";
import Link from "next/link";
import { Gift } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PricingCards } from "@/components/sections/pricing-cards";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing. Start with 10 free hours. Plans from £1,250/month.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Start free. Scale as you grow.
          </p>
        </Container>
      </Section>

      <PricingCards />

      {/* Free trial callout */}
      <Section gray className="text-center">
        <Container className="max-w-2xl">
          <Gift className="mx-auto h-10 w-10 text-[#3B82F6]" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Start with 10 free hours
          </h2>
          <p className="mt-2 text-gray-600">
            No credit card required. Full access to all features.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-[#3B82F6] px-8 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
          >
            Get Started Free
          </Link>
        </Container>
      </Section>

      <PricingComparison />
      <FAQAccordion />
      <CTABanner />
    </>
  );
}
