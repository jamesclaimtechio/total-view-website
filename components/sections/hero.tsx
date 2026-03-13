"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

const stats = [
  { value: "50x", label: "Coverage" },
  { value: "85%", label: "Time Saved" },
  { value: "99.2%", label: "Accuracy" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-16">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Gradient orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]"
            >
              AI-Powered Call Analytics
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Stop Flying Blind.
              <br />
              Make Smarter Decisions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300"
            >
              TotalView AI turns your call recordings into a business
              intelligence engine — surfacing insights about churn, sales,
              compliance, and coaching.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#"
                className={cn(buttonVariants({ size: "lg" }), "px-8")}
              >
                Get Started Free
              </Link>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8"
                )}
              >
                Book a Demo
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {stat.value}{" "}
                  <span className="text-gray-400">{stat.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Product mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 shadow-2xl">
              <div className="h-full rounded-lg border border-white/5 bg-[#1E293B] p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                  <div className="h-3 w-3 rounded-full bg-green-400/60" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-white/5" />
                  <div className="h-4 w-1/2 rounded bg-white/5" />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-[#3B82F6]/10 p-4">
                      <div className="h-8 w-12 rounded bg-[#3B82F6]/20" />
                      <div className="mt-2 h-3 w-16 rounded bg-white/10" />
                    </div>
                    <div className="rounded-lg bg-[#06B6D4]/10 p-4">
                      <div className="h-8 w-12 rounded bg-[#06B6D4]/20" />
                      <div className="mt-2 h-3 w-16 rounded bg-white/10" />
                    </div>
                    <div className="rounded-lg bg-[#10B981]/10 p-4">
                      <div className="h-8 w-12 rounded bg-[#10B981]/20" />
                      <div className="mt-2 h-3 w-16 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded bg-white/5" />
                    <div className="h-3 w-5/6 rounded bg-white/5" />
                    <div className="h-3 w-4/6 rounded bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
