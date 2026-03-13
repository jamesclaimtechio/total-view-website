import { Check, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { comparisonFeatures } from "@/lib/pricing";

export function PricingComparison() {
  return (
    <Section>
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Compare Plans
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-left font-semibold text-gray-500">
                  Feature
                </th>
                <th className="pb-3 text-center font-semibold text-gray-500">
                  Starter
                </th>
                <th className="pb-3 text-center font-semibold text-[#3B82F6]">
                  Growth
                </th>
                <th className="pb-3 text-center font-semibold text-gray-500">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr key={row.name} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    {row.name}
                  </td>
                  {[row.starter, row.growth, row.enterprise].map(
                    (included, i) => (
                      <td key={i} className="py-3 text-center">
                        {included ? (
                          <Check className="mx-auto h-5 w-5 text-[#10B981]" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
