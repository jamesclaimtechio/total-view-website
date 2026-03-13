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
    color: "blue",
    borderColor: "border-t-blue-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    hoverGradient: "group-hover:from-blue-50/80",
  },
  {
    icon: ClipboardCheck,
    title: "Smart Quality Checks",
    description:
      "Define criteria in plain English. AI evaluates pass/fail with evidence — no templates needed.",
    href: "/features",
    color: "cyan",
    borderColor: "border-t-cyan-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    hoverGradient: "group-hover:from-cyan-50/80",
  },
  {
    icon: Users,
    title: "Agent Coaching",
    description:
      "Performance dashboards, leaderboards, and data-driven coaching recommendations.",
    href: "/features",
    color: "emerald",
    borderColor: "border-t-emerald-500",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    hoverGradient: "group-hover:from-emerald-50/80",
  },
  {
    icon: Brain,
    title: "Voice of Customer",
    description:
      "Churn signals, competitor mentions, feature requests, and sentiment trends from every call.",
    href: "/features",
    color: "amber",
    borderColor: "border-t-amber-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    hoverGradient: "group-hover:from-amber-50/80",
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
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
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
                className={`group block rounded-xl border border-gray-200 border-t-2 ${feature.borderColor} bg-gradient-to-b from-white to-white ${feature.hoverGradient} p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${feature.iconBg}`}>
                  <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                </div>
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
