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
    <section className="border-y border-gray-100 bg-white py-10">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Integrates with your phone system
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {integrations.map((name, i) => (
            <span
              key={name}
              className="text-xl font-bold tracking-tight text-gray-300 transition-colors hover:text-gray-500"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
