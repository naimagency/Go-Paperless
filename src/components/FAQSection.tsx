import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does it cost?",
    a: "We offer affordable, once-off setup packages for small businesses. On your free 15-minute call, we'll give you a clear price with no hidden fees.",
  },
  {
    q: "How long does it take?",
    a: "Most setups are completed within 3–5 working days after our initial call.",
  },
  {
    q: "Do I need a computer?",
    a: "No. Everything works from your phone — filling in forms, viewing records, and sharing PDFs.",
  },
  {
    q: "Can my staff use it too?",
    a: "Absolutely. We include a short training session so everyone on your team can use it confidently.",
  },
  {
    q: "Is my client data safe?",
    a: "Yes. We follow POPIA guidelines — data is stored securely, access is controlled, and nothing is shared without consent.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container max-w-2xl">
        <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-gold-border/30">
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:text-primary md:text-base">
                {q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
