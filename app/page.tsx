import { Hero } from "@/components/sections/hero";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { StatsCounter } from "@/components/sections/stats-counter";
import { UseCaseCards } from "@/components/sections/use-case-cards";
import { HowItWorksPreview } from "@/components/sections/how-it-works-preview";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { Testimonial } from "@/components/sections/testimonial";
import { CTABanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />

      {/* Problem Statement */}
      <Section>
        <Container className="max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            You&apos;re Only Hearing 2-5% of Your Calls
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Manual QA means random sampling. You&apos;re making decisions about agent
            performance, customer satisfaction, and compliance based on a tiny
            fraction of reality. What&apos;s hiding in the other 95%?
          </p>
        </Container>
      </Section>

      <FeatureGrid />
      <StatsCounter />
      <UseCaseCards />
      <HowItWorksPreview />
      <ComparisonTable />
      <Testimonial />
      <CTABanner />
    </>
  );
}
