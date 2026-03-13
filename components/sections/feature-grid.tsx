"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, ClipboardCheck, Users, Brain } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const features = [
  {
    icon: Mic,
    title: "AI Transcription",
    description:
      "99.2% accuracy with speaker diarisation and sentiment detection across every call.",
    href: "/features",
  },
  {
    icon: ClipboardCheck,
    title: "Smart Quality Checks",
    description:
      "Define criteria in plain English. AI evaluates pass/fail with evidence — no templates needed.",
    href: "/features",
  },
  {
    icon: Users,
    title: "Agent Coaching",
    description:
      "Performance dashboards, leaderboards, and data-driven coaching recommendations.",
    href: "/features",
  },
  {
    icon: Brain,
    title: "Voice of Customer",
    description:
      "Churn signals, competitor mentions, feature requests, and sentiment trends from every call.",
    href: "/features",
  },
];

export function FeatureGrid() {
  return (
    <Section gray>
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Everything You Need to Understand Every Call
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={feature.href}
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <feature.icon className="h-6 w-6 text-[#3B82F6]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#3B82F6] group-hover:underline">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
