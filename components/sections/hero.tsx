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
      {/* Dot grid - visible */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Primary gradient orb */}
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
      {/* Secondary cyan orb */}
      <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]" />
      {/* Top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-[#0F172A]/80" />

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
              className="mt-4 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl"
            >
              Stop Flying Blind.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Make Smarter Decisions.
              </span>
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
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  <span className="text-[#3B82F6]">{stat.value}</span>{" "}
                  <span className="text-gray-400">{stat.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* CSS-only dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-2 shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)]">
              <div className="flex h-full rounded-lg border border-white/5 bg-[#1E293B] overflow-hidden">
                {/* Sidebar */}
                <div className="w-14 shrink-0 border-r border-white/5 bg-[#0F172A]/50 p-3 flex flex-col gap-3">
                  <div className="h-7 w-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-blue-400" />
                  </div>
                  <div className="h-px w-full bg-white/5 my-1" />
                  <div className="h-5 w-5 mx-auto rounded bg-white/10" />
                  <div className="h-5 w-5 mx-auto rounded bg-blue-500/30 ring-1 ring-blue-500/20" />
                  <div className="h-5 w-5 mx-auto rounded bg-white/10" />
                  <div className="h-5 w-5 mx-auto rounded bg-white/10" />
                  <div className="mt-auto h-5 w-5 mx-auto rounded bg-white/10" />
                </div>
                {/* Main content */}
                <div className="flex-1 p-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-24 rounded bg-white/10" />
                      <div className="h-3 w-16 rounded bg-white/5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-14 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-[7px] font-bold text-green-400 tracking-wide">LIVE</span>
                      </div>
                      <div className="h-5 w-5 rounded bg-white/5" />
                    </div>
                  </div>
                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 p-3">
                      <p className="text-[8px] text-blue-300/60 font-medium">Quality Score</p>
                      <p className="text-lg font-bold text-blue-400 font-mono leading-tight mt-0.5">94.2%</p>
                      <div className="mt-2 h-1 rounded-full bg-blue-900/50">
                        <div className="h-full w-[94%] rounded-full bg-blue-400" />
                      </div>
                    </div>
                    <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-3">
                      <p className="text-[8px] text-cyan-300/60 font-medium">Compliance</p>
                      <p className="text-lg font-bold text-cyan-400 font-mono leading-tight mt-0.5">99.8%</p>
                      <div className="mt-2 h-1 rounded-full bg-cyan-900/50">
                        <div className="h-full w-[99%] rounded-full bg-cyan-400" />
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
                      <p className="text-[8px] text-emerald-300/60 font-medium">Calls Today</p>
                      <p className="text-lg font-bold text-emerald-400 font-mono leading-tight mt-0.5">1,284</p>
                      <div className="mt-2 h-1 rounded-full bg-emerald-900/50">
                        <div className="h-full w-[72%] rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>
                  {/* Mini chart area */}
                  <div className="rounded-lg border border-white/5 bg-[#0F172A]/40 p-3">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[8px] text-white/40 font-medium">Call Quality — Last 7 Days</p>
                      <div className="flex gap-1">
                        <div className="h-3 w-8 rounded bg-white/5" />
                        <div className="h-3 w-8 rounded bg-blue-500/20" />
                      </div>
                    </div>
                    {/* Bar chart */}
                    <div className="flex items-end gap-1.5 h-16">
                      {[65, 78, 82, 71, 90, 88, 94].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-sm bg-gradient-to-t from-blue-500/40 to-blue-400/60"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[6px] text-white/20">
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Recent calls list */}
                  <div className="space-y-1.5">
                    {[
                      { name: "Sarah M.", score: "96%", color: "text-emerald-400" },
                      { name: "James K.", score: "87%", color: "text-blue-400" },
                      { name: "Priya R.", score: "72%", color: "text-amber-400" },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between rounded bg-white/[0.02] px-2 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-white/10" />
                          <span className="text-[8px] text-white/50">{row.name}</span>
                        </div>
                        <span className={`text-[9px] font-mono font-bold ${row.color}`}>{row.score}</span>
                      </div>
                    ))}
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
