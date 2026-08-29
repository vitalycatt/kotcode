import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="border-b">
      <Container className="flex flex-col md:flex-row">
      <div className="px-5 pt-16 md:w-[38%] md:border-r md:px-10 md:pt-24">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {site.faq.title}
        </h2>
      </div>

      <div className="flex-1 px-5 pb-8 pt-6 md:px-10 md:py-12">
        <Accordion multiple={false} className="w-full">
          {site.faq.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="py-4 text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-caption">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </Container>
    </section>
  );
}
