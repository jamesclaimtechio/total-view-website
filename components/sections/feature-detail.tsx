"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

interface FeatureDetailProps {
  overline: string;
  title: string;
  description: string;
  bullets: string[];
  stat?: { value: string; label: string };
  imagePosition?: "left" | "right";
  gray?: boolean;
  children?: React.ReactNode;
}

export function FeatureDetail({
  overline,
  title,
  description,
  bullets,
  stat,
  imagePosition = "right",
  gray = false,
  children,
}: FeatureDetailProps) {
  return (
    <section className={cn("py-16 md:py-24", gray ? "bg-[#F8FAFC]" : "bg-white")}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2",
            imagePosition === "left" && "lg:[direction:rtl] lg:[&>*]:[direction:ltr]"
          )}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
              {overline}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {description}
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]" />
                  <span className="text-sm text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
            {stat && (
              <div className="mt-6 inline-flex items-baseline gap-2 rounded-lg bg-[#3B82F6]/5 px-4 py-2">
                <span className="font-mono text-2xl font-bold text-[#3B82F6]">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
            )}
          </motion.div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
              {children || (
                <span className="text-sm font-medium text-gray-300">
                  Product Screenshot
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
