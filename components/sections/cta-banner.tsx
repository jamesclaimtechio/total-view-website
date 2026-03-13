"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function CTABanner({
  headline = "See What You're Missing",
  subtext = "Start with 10 free hours. No credit card required.",
  primaryCta = "Get Started Free",
  primaryHref = "#",
  secondaryCta = "Or book a demo →",
  secondaryHref = "#",
}: CTABannerProps) {
  return (
    <Section dark className="text-center">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-gray-300">{subtext}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className={buttonVariants({ size: "lg" })}
          >
            {primaryCta}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </Container>
    </Section>
  );
}
