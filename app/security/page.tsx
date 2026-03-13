import { Metadata } from "next";
import { Shield, Server, Brain, Globe, Lock, FileCheck } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = createMetadata({
  title: "Security",
  description:
    "SOC 2 Type II certified. GDPR compliant. EU data residency. Your data security is our obsession.",
  path: "/security",
});

const sections = [
  {
    icon: Shield,
    title: "SOC 2 Type II Certified",
    description:
      "Our security controls have been independently audited and verified. SOC 2 Type II certification demonstrates our ongoing commitment to protecting your data.",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description:
      "Full compliance with UK and EU data protection regulations. Clear data processing agreements. Right to deletion. Data portability.",
  },
  {
    icon: Server,
    title: "AWS eu-west-1 Infrastructure",
    description:
      "All core infrastructure runs in AWS Dublin (eu-west-1). Data encrypted at rest (AES-256) and in transit (TLS 1.3).",
  },
  {
    icon: Brain,
    title: "AI Processing — EU Only",
    description:
      "AI analysis via Anthropic Claude on AWS Bedrock (EU endpoint). Transcription via AssemblyAI EU endpoint (Dublin). Your data never leaves the EU for processing.",
  },
  {
    icon: Globe,
    title: "EU Data Residency",
    description:
      "All customer data — recordings, transcriptions, analysis results — is processed and stored exclusively within the European Union.",
  },
  {
    icon: Lock,
    title: "Regulatory Ready",
    description:
      "Built for regulated industries. FCA, PCI-DSS, and GDPR compliance features including audit trails, access controls, and regulatory report exports.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Section dark className="pt-24 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Your Data. Our Obsession.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Enterprise-grade security with EU data residency.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <item.icon className="h-8 w-8 text-[#3B82F6]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section gray className="text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Have Security Questions?
          </h2>
          <p className="mt-2 text-gray-600">
            Our security team is happy to discuss your requirements.
          </p>
          <a
            href="mailto:security@totalview.ai"
            className="mt-4 inline-block text-[#3B82F6] font-medium hover:underline"
          >
            security@totalview.ai
          </a>
        </Container>
      </Section>
    </>
  );
}
