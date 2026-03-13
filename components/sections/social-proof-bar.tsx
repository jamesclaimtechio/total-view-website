import { Container } from "@/components/layout/container";

const integrations = [
  "Five9",
  "Genesys",
  "NICE",
  "Talkdesk",
  "RingCentral",
];

export function SocialProofBar() {
  return (
    <section className="border-t border-gray-100 bg-white py-8">
      <Container>
        <p className="mb-6 text-center text-sm font-medium text-gray-500">
          Integrates with your phone system
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {integrations.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-gray-300"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
