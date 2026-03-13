"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface Stat {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: "50x", numericValue: 50, suffix: "x", label: "More Coverage" },
  { value: "85%", numericValue: 85, suffix: "%", label: "Time Saved" },
  { value: "99.2%", numericValue: 99.2, suffix: "%", label: "Transcription Accuracy" },
  { value: "<5 min", numericValue: 5, prefix: "<", suffix: " min", label: "Setup Time" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Number((increment * step).toFixed(1)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const display = Number.isInteger(value)
    ? Math.round(current).toString()
    : current.toFixed(1);

  return (
    <span className="font-mono text-4xl font-bold text-white md:text-5xl">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section dark animate={false}>
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-8 text-center md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedNumber
                value={stat.numericValue}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
              <p className="mt-2 text-sm tracking-wide text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
