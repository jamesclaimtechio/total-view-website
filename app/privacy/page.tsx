import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "TotalView AI privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Section dark className="pt-24 pb-12 text-center">
        <Container>
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-400">
            Last updated: 1 March 2026
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Human in the Loop Limited (trading as TotalView AI, &quot;we&quot;,
              &quot;our&quot;, &quot;us&quot;) is committed to protecting your
              privacy. This policy explains how we collect, use, and protect your
              personal data when you use our website and services.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              The data controller is Human in the Loop Limited, registered in the
              Isle of Man. For privacy inquiries, contact{" "}
              <a href="mailto:privacy@totalview.ai">privacy@totalview.ai</a>.
            </p>

            <h2>3. Data We Collect</h2>
            <h3>Website visitors</h3>
            <ul>
              <li>
                Analytics data via Plausible Analytics (privacy-focused, no
                cookies, no personal data)
              </li>
              <li>
                Contact form submissions (name, email, company, phone, message)
              </li>
            </ul>
            <h3>Service users</h3>
            <ul>
              <li>Account information (email, company name)</li>
              <li>
                Call recordings uploaded for analysis (processed in EU only)
              </li>
              <li>Transcriptions and analysis results</li>
            </ul>

            <h2>4. How We Process Your Data</h2>
            <ul>
              <li>
                <strong>Transcription:</strong> AssemblyAI EU endpoint (Dublin)
              </li>
              <li>
                <strong>AI Analysis:</strong> Anthropic Claude via AWS Bedrock
                (EU endpoint)
              </li>
              <li>
                <strong>Infrastructure:</strong> AWS eu-west-1 (Dublin)
              </li>
              <li>
                <strong>Payments:</strong> Paddle.com
              </li>
            </ul>

            <h2>5. Data Residency</h2>
            <p>
              All customer data is processed and stored exclusively within the
              European Union. We do not transfer personal data outside the EU/EEA.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>7. Security</h2>
            <p>
              We are SOC 2 Type II certified. All data is encrypted at rest
              (AES-256) and in transit (TLS 1.3). See our{" "}
              <a href="/security">Security page</a> for details.
            </p>

            <h2>8. Contact</h2>
            <p>
              For privacy inquiries:{" "}
              <a href="mailto:privacy@totalview.ai">privacy@totalview.ai</a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
