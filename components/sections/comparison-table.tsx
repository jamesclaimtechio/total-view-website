"use client";

import { Check, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const rows = [
  { metric: "Coverage", manual: "2-5% of calls", totalview: "100% of calls" },
  { metric: "Time per review", manual: "15-30 minutes", totalview: "Instant" },
  {
    metric: "Consistency",
    manual: "Varies by reviewer",
    totalview: "Identical criteria every time",
  },
  {
    metric: "Cost to scale",
    manual: "+1 QA analyst per 50 agents",
    totalview: "Same platform, unlimited scale",
  },
  {
    metric: "Compliance",
    manual: "Spot-check only",
    totalview: "Every call, every time",
  },
  {
    metric: "Insights",
    manual: "Anecdotal",
    totalview: "Data-driven, queryable",
  },
];

export function ComparisonTable() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
            The Difference
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            TotalView AI vs Manual QA
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="px-6 py-4 font-semibold text-gray-500">
                  Metric
                </th>
                <th className="px-6 py-4 font-semibold text-gray-500">
                  Manual QA
                </th>
                <th className="px-6 py-4 font-semibold text-[#3B82F6] bg-blue-50/50">
                  TotalView AI
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.metric} className="border-b border-gray-100 last:border-0">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {row.metric}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    <span className="flex items-center gap-2">
                      <X className="h-4 w-4 shrink-0 text-red-400" />
                      {row.manual}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#3B82F6] bg-blue-50/30">
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                      {row.totalview}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
