"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { plans } from "@/lib/pricing";

export function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-gray-900" : "text-gray-500"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors",
              annual ? "bg-[#3B82F6]" : "bg-gray-300"
            )}
            aria-label="Toggle annual billing"
          >
            <span
              className={cn(
                "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform",
                annual ? "translate-x-5.5" : "translate-x-0.5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-gray-900" : "text-gray-500"
            )}
          >
            Annual
          </span>
          {annual && (
            <Badge className="bg-[#F59E0B] text-white hover:bg-[#F59E0B]">
              Save 17%
            </Badge>
          )}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "relative rounded-2xl border p-8",
                plan.highlighted
                  ? "border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  : "border-gray-200 shadow-sm"
              )}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-white hover:bg-[#3B82F6]">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

              <div className="mt-6">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="text-4xl font-bold text-gray-900">
                      £
                      {annual
                        ? Math.round(plan.annualPrice! / 12).toLocaleString()
                        : plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500">/mo</span>
                    {annual && (
                      <p className="mt-1 text-xs text-gray-500">
                        £{plan.annualPrice!.toLocaleString()}/yr
                      </p>
                    )}
                  </>
                ) : (
                  <span className="text-4xl font-bold text-gray-900">
                    Custom
                  </span>
                )}
              </div>

              <div className="mt-2 space-y-1 text-sm text-gray-500">
                <p>{plan.hours}</p>
                <p>{plan.agents}</p>
                {plan.overage && <p>{plan.overage} overage</p>}
              </div>

              <Link
                href={plan.ctaHref}
                className={cn(
                  buttonVariants({
                    variant: plan.highlighted ? "default" : "outline",
                  }),
                  "mt-6 w-full"
                )}
              >
                {plan.cta}
              </Link>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
