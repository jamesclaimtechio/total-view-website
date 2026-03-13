"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, CheckSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const personas = [
  {
    icon: CheckSquare,
    title: "QA Manager",
    description:
      "Stop random sampling. Get 100% automated coverage with custom quality criteria defined in your words.",
    borderColor: "border-t-blue-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    gradientFrom: "from-blue-50/40",
    href: "/use-cases",
  },
  {
    icon: BarChart3,
    title: "Operations Director",
    description:
      "Scale QA without scaling headcount. 150x more coverage at half the cost of one hire.",
    borderColor: "border-t-cyan-500",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    gradientFrom: "from-cyan-50/40",
    href: "/use-cases",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Officer",
    description:
      "Every call checked. Every violation flagged. Full audit trail for regulators.",
    borderColor: "border-t-amber-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    gradientFrom: "from-amber-50/40",
    href: "/use-cases",
  },
];

export function UseCaseCards() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            Built for Your Role
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Solve Your Specific Challenge
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.title}
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
                href={persona.href}
                className={`group block rounded-xl border border-gray-200 border-t-4 ${persona.borderColor} bg-gradient-to-b ${persona.gradientFrom} to-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${persona.iconBg}`}>
                  <persona.icon className={`h-5 w-5 ${persona.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {persona.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {persona.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[#3B82F6] group-hover:underline">
                  See how →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
