"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const steps = [
  {
    number: "1",
    title: "Connect",
    description: "Upload recordings or integrate your phone system",
  },
  {
    number: "2",
    title: "Analyse",
    description:
      "AI transcribes, evaluates, and scores every call automatically",
  },
  {
    number: "3",
    title: "Act",
    description: "Review insights, coach agents, ensure compliance",
  },
];

export function HowItWorksPreview() {
  return (
    <Section gray>
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Three Steps to Total Visibility
          </h2>
        </div>

        <div className="mt-12">
          {/* Desktop horizontal */}
          <div className="hidden items-start justify-center gap-4 md:flex">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-1 flex-col items-center text-center"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-lg font-bold text-white">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden h-px w-24 bg-gray-300 lg:block" />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="space-y-8 md:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-bold text-white">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-2 h-12 w-px bg-gray-300" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "px-6"
            )}
          >
            See detailed walkthrough →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
