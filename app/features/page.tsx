import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FeatureDetail } from "@/components/sections/feature-detail";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = createMetadata({
  title: "Features",
  description:
    "AI transcription, quality checks, agent coaching, compliance monitoring, and more. See what TotalView can do.",
  path: "/features",
});

const features = [
  {
    overline: "Transcription",
    title: "AI Transcription",
    description:
      "Every call transcribed with 99.2% accuracy. Speaker diarisation identifies who said what. Sentiment analysis captures the emotional arc of every conversation.",
    bullets: [
      "99.2% accuracy across accents and audio quality",
      "Speaker diarisation — attribute every word",
      "Sentiment detection — positive, negative, neutral",
      "Supports MP3, WAV, M4A, MP4, FLAC, OGG",
    ],
    stat: { value: "99.2%", label: "transcription accuracy" },
  },
  {
    overline: "Quality Assurance",
    title: "Custom Quality Checks",
    description:
      "Define your quality criteria in plain English. No templates, no rigid forms. TotalView evaluates every call against your standards and provides evidence for every score.",
    bullets: [
      "Write criteria in plain English",
      "AI evaluates pass/fail with cited evidence",
      "No templates or rigid forms needed",
      "Update criteria anytime — retroactively score",
    ],
  },
  {
    overline: "Prioritisation",
    title: "Smart Review Queue",
    description:
      "Not every call needs manual review. TotalView automatically flags calls that do — by score thresholds, critical failures, or unusual patterns.",
    bullets: [
      "Auto-flag by quality score thresholds",
      "Critical failure detection",
      "Unusual pattern alerts",
      "Priority inbox for reviewers",
    ],
  },
  {
    overline: "Coaching",
    title: "Agent Coaching Platform",
    description:
      "Turn call data into coaching action. See exactly where each agent excels and struggles, with evidence from real calls.",
    bullets: [
      "Individual agent performance dashboards",
      "Pass rates by criteria and over time",
      "Team leaderboards",
      "AI-generated coaching recommendations",
    ],
  },
  {
    overline: "Intelligence",
    title: "AI Copilot",
    description:
      'Ask questions about your call data in natural language. "Show me calls where customers mentioned switching providers" — and get instant answers.',
    bullets: [
      "Natural language queries across all call data",
      "Instant answers with supporting evidence",
      "Export results for reporting",
      "No SQL or technical skills needed",
    ],
  },
  {
    overline: "Reporting",
    title: "Campaign Reports",
    description:
      "Automatically generated executive summaries that surface the insights that matter. Schedule them or generate on demand.",
    bullets: [
      "Auto-generated executive summaries",
      "Scheduled delivery to stakeholders",
      "Custom report templates",
      "Export to PDF or CSV",
    ],
  },
  {
    overline: "Compliance",
    title: "Compliance Monitoring",
    description:
      "Every call checked for regulatory compliance. Real-time violation alerts. Full audit trails for regulators. Export-ready reports for FCA, PCI-DSS, and GDPR.",
    bullets: [
      "Real-time violation alerts",
      "Full audit trails for every call",
      "Regulatory export formats (FCA, PCI-DSS, GDPR)",
      "Automated compliance scoring",
    ],
  },
  {
    overline: "Customer Intelligence",
    title: "Voice of Customer",
    description:
      "Your calls contain a goldmine of customer intelligence. TotalView surfaces competitor mentions, churn signals, feature requests, and sentiment trends automatically.",
    bullets: [
      "Competitor mention tracking",
      "Churn risk signals",
      "Feature request aggregation",
      "Sentiment trend analysis",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            Product
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Turn Every Call Into Business Intelligence
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Eight powerful capabilities. One platform. Zero blind spots.
          </p>
        </Container>
      </Section>

      {features.map((feature, i) => (
        <FeatureDetail
          key={feature.title}
          {...feature}
          imagePosition={i % 2 === 0 ? "right" : "left"}
          gray={i % 2 === 1}
        />
      ))}

      <SocialProofBar />
      <CTABanner
        headline="Ready to See Everything?"
        primaryCta="Book a Demo"
      />
    </>
  );
}
