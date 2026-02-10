import { FileText, List, GraduationCap, Smartphone } from "lucide-react";

const items = [
  { icon: Smartphone, text: "Custom digital form (booking / registration / invoice)" },
  { icon: FileText, text: "Automatic branded PDF output" },
  { icon: List, text: "Simple searchable list of client records" },
  { icon: GraduationCap, text: "Short training so you can run it yourself" },
];

const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-4xl">
          What You Get
        </h2>

        <ul className="mt-10 flex flex-col gap-5">
          {items.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-4 rounded-lg border border-gold-border/30 bg-card p-5 shadow-sm"
            >
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <span className="font-body text-sm text-foreground md:text-base">{text}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center font-body text-xs text-muted-foreground">
          Optional add-ons: reminders, follow-ups, Google Sheets sync.
        </p>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
