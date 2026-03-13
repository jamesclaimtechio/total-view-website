"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  gray?: boolean;
  id?: string;
  animate?: boolean;
}

export function Section({
  children,
  className,
  dark,
  gray,
  id,
  animate = true,
}: SectionProps) {
  const bg = dark
    ? "bg-[#0F172A] text-white"
    : gray
      ? "bg-[#F8FAFC]"
      : "bg-white";

  if (!animate) {
    return (
      <section id={id} className={cn("py-16 md:py-24", bg, className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-16 md:py-24", bg, className)}
    >
      {children}
    </motion.section>
  );
}
