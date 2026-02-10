import { Phone, Wrench, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, num: "1", title: "Quick call (15 min)", desc: "We learn about your business needs." },
  { icon: Wrench, num: "2", title: "We build your form + PDF", desc: "Custom-made for your workflow." },
  { icon: Rocket, num: "3", title: "You go paperless", desc: "Start using it on your phone right away." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, num, title, desc }) => (
            <div
              key={num}
              className="flex flex-col items-center rounded-lg border border-gold-border/30 bg-card p-8 text-center shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-4 font-display text-3xl font-bold text-primary">{num}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
