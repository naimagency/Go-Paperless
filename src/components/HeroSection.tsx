import { CheckCircle } from "lucide-react";
import CTAButton from "./CTAButton";

const bullets = [
  "No printing, scanning, or lost forms",
  "Client details saved and searchable",
  "PDF receipts / invoices / registrations created instantly",
];

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Turn paperwork into simple phone forms —{" "}
          <span className="gold-gradient-text">and get instant PDFs.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          We help South African small businesses stop wasting time on admin. We build
          mobile forms that save client details neatly and generate PDFs automatically.
        </p>

        <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left md:mt-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 font-body text-sm text-foreground md:text-base">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3">
          <CTAButton size="lg" />
          <p className="font-body text-xs text-muted-foreground italic">
            No pressure. If you don't need this, I'll tell you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
