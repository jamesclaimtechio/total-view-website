import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "The team behind TotalView AI.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            We Built What Contact Centres Actually Need
          </h1>
        </Container>
      </Section>

      {/* Origin */}
      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Born from frustration with contact centre blind spots, TotalView AI
              was built by people who&apos;ve lived the 2% sampling problem.
            </p>
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              [CONTENT NEEDED: Full founding story — why this problem, what drove the team, key moments]
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section gray>
        <Container className="max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Every call contains intelligence. We make sure you never miss it.
          </h2>
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            The Team
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-200" />
                <p className="mt-4 font-semibold text-gray-900">
                  [Team Member {i}]
                </p>
                <p className="text-sm text-gray-500">[Role]</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-amber-600">
            [CONTENT NEEDED: Team photos, names, roles, and bios]
          </p>
        </Container>
      </Section>

      {/* Tech & Trust */}
      <Section gray>
        <Container>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Built on Trust
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Anthropic Claude",
                desc: "AI analysis powered by Claude via AWS Bedrock — EU endpoint only",
              },
              {
                title: "AssemblyAI",
                desc: "Industry-leading transcription with EU data processing (Dublin)",
              },
              {
                title: "AWS eu-west-1",
                desc: "All infrastructure in EU. Encryption at rest and in transit.",
              },
              {
                title: "SOC 2 Type II",
                desc: "Independently audited security controls",
              },
              {
                title: "GDPR Compliant",
                desc: "Full compliance with UK & EU data protection regulations",
              },
              {
                title: "EU Data Residency",
                desc: "Your data never leaves the European Union",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        headline="Want to Join Us?"
        subtext="We're always looking for talented people."
        primaryCta="Get in Touch"
        primaryHref="/contact"
        secondaryCta=""
      />
    </>
  );
}
