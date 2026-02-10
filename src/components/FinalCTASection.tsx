import CTAButton from "./CTAButton";

const FinalCTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
          Ready to Go Paperless?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-muted-foreground md:text-base">
          Book a free 15-minute call. We'll figure out together if this is right for your business.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <CTAButton size="lg" />

          <div className="gold-divider my-4 w-24" />

          <div className="space-y-1 font-body text-sm text-muted-foreground">
            <p>
              WhatsApp:{" "}
              <a href="https://wa.me/<NUMBER>" className="text-primary underline hover:brightness-110">
                +27 XX XXX XXXX
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:hello@naimagency.co.za" className="text-primary underline hover:brightness-110">
                hello@naimagency.co.za
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
