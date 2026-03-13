import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  description: "See how contact centres use TotalView AI to transform their QA.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Real results from real contact centres.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl text-center">
          <p className="text-lg text-gray-500">
            Case studies are coming soon. In the meantime, start your free trial
            to see TotalView AI in action.
          </p>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
