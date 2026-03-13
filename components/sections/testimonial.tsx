"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function Testimonial() {
  return (
    <Section gray>
      <Container className="max-w-3xl text-center">
        <Quote className="mx-auto h-10 w-10 text-[#3B82F6]/30" />
        <blockquote className="mt-6 text-xl font-medium leading-relaxed text-gray-900 italic md:text-2xl">
          &ldquo;We went from hoping we caught issues to knowing we catch
          everything.&rdquo;
        </blockquote>
        <p className="mt-4 text-base text-gray-500">
          — Contact Centre Operations Lead
        </p>
      </Container>
    </Section>
  );
}
