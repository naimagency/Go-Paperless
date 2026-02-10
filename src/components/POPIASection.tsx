import { Shield } from "lucide-react";

const POPIASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-2xl text-center">
        <Shield className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 font-display text-xl font-bold text-foreground md:text-2xl">
          Your Data is Protected
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm leading-relaxed text-muted-foreground md:text-base">
          POPIA-friendly setup: We only collect what you need, protect access, and keep
          client data private.
        </p>
      </div>
    </section>
  );
};

export default POPIASection;
