export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  hours: string;
  agents: string;
  overage: string | null;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  features: string[];
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For small contact centres getting started with AI QA",
    monthlyPrice: 1250,
    annualPrice: 10420,
    hours: "250 hrs/mo",
    agents: "5-10 agents",
    overage: "£0.08/min",
    cta: "Start Free Trial",
    ctaHref: process.env.NEXT_PUBLIC_APP_URL || "#",
    highlighted: false,
    features: [
      "AI transcription (99.2% accuracy)",
      "Custom quality checks",
      "Smart review queue",
      "Agent scorecards",
      "Basic dashboards",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For scaling teams that need comprehensive call intelligence",
    monthlyPrice: 6250,
    annualPrice: 52080,
    hours: "2,500 hrs/mo",
    agents: "60-125 agents",
    overage: "£0.04/min",
    cta: "Start Free Trial",
    ctaHref: process.env.NEXT_PUBLIC_APP_URL || "#",
    highlighted: true,
    features: [
      "Everything in Starter",
      "AI Copilot (natural language queries)",
      "Campaign reports",
      "Compliance monitoring",
      "Voice of Customer insights",
      "Advanced dashboards",
      "Priority support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    description: "For large operations with custom requirements",
    monthlyPrice: null,
    annualPrice: null,
    hours: "Unlimited",
    agents: "500+ agents",
    overage: null,
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Unlimited call hours",
      "Custom integrations",
      "Dedicated success manager",
      "SLA guarantee",
      "On-premise option",
      "Custom training",
      "Phone support",
    ],
  },
];

export const comparisonFeatures = [
  { name: "AI Transcription", starter: true, growth: true, enterprise: true },
  { name: "Custom Quality Checks", starter: true, growth: true, enterprise: true },
  { name: "Smart Review Queue", starter: true, growth: true, enterprise: true },
  { name: "Agent Scorecards", starter: true, growth: true, enterprise: true },
  { name: "AI Copilot", starter: false, growth: true, enterprise: true },
  { name: "Campaign Reports", starter: false, growth: true, enterprise: true },
  { name: "Compliance Monitoring", starter: false, growth: true, enterprise: true },
  { name: "Voice of Customer", starter: false, growth: true, enterprise: true },
  { name: "API Access", starter: false, growth: true, enterprise: true },
  { name: "Custom Integrations", starter: false, growth: false, enterprise: true },
  { name: "Dedicated Success Manager", starter: false, growth: false, enterprise: true },
  { name: "SLA Guarantee", starter: false, growth: false, enterprise: true },
];
