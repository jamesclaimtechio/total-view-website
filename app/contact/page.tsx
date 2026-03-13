import { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with the TotalView AI team.",
  path: "/contact",
});

const contacts = [
  { label: "General", email: "hello@totalview.ai" },
  { label: "Sales", email: "sales@totalview.ai" },
  { label: "Support", email: "support@totalview.ai" },
];

export default function ContactPage() {
  return (
    <>
      <Section dark className="pt-24 pb-12 text-center">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Let&apos;s Talk
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Contact Information
              </h2>
              <div className="mt-6 space-y-4">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        {c.label}
                      </p>
                      <a
                        href={`mailto:${c.email}`}
                        className="text-sm text-[#3B82F6] hover:underline"
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Clock className="h-4 w-4 text-gray-400" />
                <p className="text-sm text-gray-600">
                  Mon-Fri, 9:00 AM - 6:00 PM GMT
                </p>
              </div>
              <div className="mt-8 rounded-lg border border-gray-200 bg-[#F8FAFC] p-6">
                <p className="font-medium text-gray-900">
                  Prefer a live conversation?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Book a 30-minute demo with our team.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-[#3B82F6] hover:underline"
                >
                  Book a Demo →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
