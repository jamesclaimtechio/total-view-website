import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface FAQ {
  question: string;
  answer: string;
}

const defaultFaqs: FAQ[] = [
  {
    question: "What happens when I hit my hour limit?",
    answer:
      "You can continue processing calls at the overage rate for your plan (£0.08/min for Starter, £0.04/min for Growth). You'll be notified as you approach your limit so there are no surprises.",
  },
  {
    question: "Can I upgrade or downgrade plans?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees. Upload your first call and start getting insights in under 5 minutes.",
  },
  {
    question: "What phone systems do you integrate with?",
    answer:
      "We integrate with Five9, Genesys, NICE, Talkdesk, RingCentral, and all major cloud phone systems. You can also upload recordings manually or via API.",
  },
  {
    question: "How long is the free trial?",
    answer:
      "You get 10 free hours of call processing — no credit card required. Use them at your own pace; they don't expire.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes — annual billing saves 17%. You pay for 10 months and get 12.",
  },
  {
    question: "What's included in Enterprise?",
    answer:
      "Everything in Growth plus unlimited call hours, custom integrations, a dedicated success manager, SLA guarantees, on-premise deployment options, and phone support.",
  },
  {
    question: "How is call duration calculated?",
    answer:
      "Call duration is measured from the start to the end of the audio file. We round up to the nearest minute per call.",
  },
];

export function FAQAccordion({ faqs = defaultFaqs }: { faqs?: FAQ[] }) {
  return (
    <Section gray>
      <Container className="max-w-3xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Frequently Asked Questions
        </h2>
        <Accordion className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
