import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FeatureDetail } from "@/components/sections/feature-detail";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = createMetadata({
  title: "Use Cases",
  description:
    "See how QA managers, operations directors, and compliance officers use TotalView AI.",
  path: "/use-cases",
});

const personas = [
  {
    overline: "QA Manager",
    title: "Stop Random Sampling. See Everything.",
    description:
      "You know 2-5% coverage isn't enough. Every unreviewed call is a blind spot — a missed coaching opportunity, an undetected compliance risk, an unhappy customer you never heard about.",
    bullets: [
      "100% automated coverage — no calls slip through",
      "Custom quality criteria in your own words",
      "Smart review queue surfaces what needs attention",
      "Evidence-backed scores eliminate reviewer bias",
    ],
    stat: { value: "50x", label: "more coverage" },
  },
  {
    overline: "Operations Director",
    title: "Scale QA Without Scaling Headcount",
    description:
      "Every new QA analyst costs £35-45k. But your call volume keeps growing. TotalView gives you 150x more coverage at half the cost of one hire.",
    bullets: [
      "150x coverage at a fraction of headcount cost",
      "Consistent evaluation — no reviewer variation",
      "Real-time dashboards for operational visibility",
      "ROI measurable within the first month",
    ],
    stat: { value: "150x", label: "more coverage, half the cost" },
  },
  {
    overline: "Compliance Officer",
    title: "Every Call Checked. Every Time.",
    description:
      "Spot-checking isn't compliance — it's hope. TotalView checks every call against your regulatory requirements and creates a complete audit trail.",
    bullets: [
      "Every call evaluated for regulatory compliance",
      "Real-time violation alerts",
      "Full audit trail for FCA, PCI-DSS, GDPR",
      "Export-ready reports for regulators",
    ],
  },
  {
    overline: "Training Leader",
    title: "Coach With Data, Not Anecdotes",
    description:
      "Your coaching is only as good as your data. TotalView gives you evidence from every call — so you can coach agents on what actually happened, not what someone remembers.",
    bullets: [
      "Performance dashboards per agent",
      "Specific call examples for coaching sessions",
      "Track improvement over time",
      "AI-generated coaching recommendations",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Built for Your Role
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            See how TotalView AI solves your specific challenges.
          </p>
        </Container>
      </Section>

      {personas.map((persona, i) => (
        <FeatureDetail
          key={persona.title}
          {...persona}
          imagePosition={i % 2 === 0 ? "right" : "left"}
          gray={i % 2 === 1}
        />
      ))}

      <CTABanner
        headline="See It in Action"
        primaryCta="Get Started Free"
        secondaryCta="Book a Demo →"
      />
    </>
  );
}
