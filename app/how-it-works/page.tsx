import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FeatureDetail } from "@/components/sections/feature-detail";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = createMetadata({
  title: "How It Works",
  description:
    "Upload calls, define quality criteria in plain English, and get AI-powered insights in minutes.",
  path: "/how-it-works",
});

const steps = [
  {
    overline: "Step 1",
    title: "Connect Your Calls",
    description:
      "Upload recordings directly or integrate your phone system. We support MP3, WAV, M4A, MP4, FLAC, and OGG — up to 500MB or 4 hours per file.",
    bullets: [
      "Manual upload via dashboard",
      "API integration for automation",
      "Cloud storage sync",
      "All major phone systems supported",
    ],
  },
  {
    overline: "Step 2",
    title: "Define Your Quality Criteria",
    description:
      'Tell TotalView what matters — in plain English. "Did the agent verify the customer\'s identity?" "Was a resolution offered within the first 5 minutes?" No templates, no code.',
    bullets: [
      "Write criteria in natural language",
      "No templates or rigid forms",
      "Update criteria anytime",
      "Retroactively score previous calls",
    ],
  },
  {
    overline: "Step 3",
    title: "AI Analyses Every Call",
    description:
      "TotalView transcribes every call with 99.2% accuracy, then evaluates against your criteria — scoring, flagging, and extracting insights automatically.",
    bullets: [
      "99.2% transcription accuracy",
      "Pass/fail scoring with evidence",
      "Automatic flagging of issues",
      "Sentiment and pattern detection",
    ],
    stat: { value: "99.2%", label: "accuracy" },
  },
  {
    overline: "Step 4",
    title: "Act on Insights",
    description:
      "Review flagged calls in the smart queue. Coach agents with data. Export compliance reports. Ask the AI Copilot anything about your call data.",
    bullets: [
      "Smart review queue prioritises what matters",
      "Data-driven agent coaching",
      "Compliance report exports",
      "Natural language queries via AI Copilot",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Up and Running in Minutes, Not Months
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            No code. No templates. No consultants.
          </p>
        </Container>
      </Section>

      {steps.map((step, i) => (
        <FeatureDetail
          key={step.title}
          {...step}
          imagePosition={i % 2 === 0 ? "right" : "left"}
          gray={i % 2 === 1}
        />
      ))}

      <SocialProofBar />
      <CTABanner
        headline="Ready in Less Than 5 Minutes"
        primaryCta="Get Started Free"
      />
    </>
  );
}
