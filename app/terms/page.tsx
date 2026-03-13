import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "TotalView AI terms of service.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Section dark className="pt-24 pb-12 text-center">
        <Container>
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">
            Last updated: 1 March 2026
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using TotalView AI (&quot;the Service&quot;),
              provided by Human in the Loop Limited, you agree to be bound by
              these Terms of Service.
            </p>

            <h2>2. Service Description</h2>
            <p>
              TotalView AI provides AI-powered call analytics, transcription,
              quality assurance, and business intelligence services for contact
              centres.
            </p>

            <h2>3. Your Account</h2>
            <p>
              You are responsible for maintaining the security of your account
              credentials and for all activities that occur under your account.
            </p>

            <h2>4. Your Data</h2>
            <p>
              You retain all rights to the call recordings and data you upload.
              We process your data solely to provide the Service. See our{" "}
              <a href="/privacy">Privacy Policy</a> for details on data handling.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Upload content that violates any law or regulation</li>
              <li>Attempt to gain unauthorised access to the Service</li>
              <li>
                Use the Service to process recordings without appropriate consent
              </li>
              <li>Reverse engineer or attempt to extract our AI models</li>
            </ul>

            <h2>6. Billing</h2>
            <p>
              Paid plans are billed monthly or annually as selected. Payments are
              processed by Paddle.com. You may cancel at any time; cancellation
              takes effect at the end of your current billing period.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot;. We shall not be liable
              for any indirect, incidental, or consequential damages arising from
              your use of the Service.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. We will notify you of
              material changes via email or through the Service.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:hello@totalview.ai">hello@totalview.ai</a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
