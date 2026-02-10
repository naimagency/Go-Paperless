import beforeImg from "@/assets/before-paperwork.jpg";
import afterImg from "@/assets/after-digital.jpg";

const BeforeAfterSection = () => {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-4xl">
          From Chaos → <span className="gold-gradient-text">Clean</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Before */}
          <div className="overflow-hidden rounded-lg border border-gold-border/40 bg-card shadow-sm">
            <img
              src={beforeImg}
              alt="Before: messy paperwork on a desk"
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
            <div className="p-5">
              <p className="font-display text-lg font-semibold text-foreground">Before</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                Messy paperwork, lost forms, wasted time.
              </p>
            </div>
          </div>

          {/* After */}
          <div className="overflow-hidden rounded-lg border border-gold-border/40 bg-card shadow-sm">
            <img
              src={afterImg}
              alt="After: phone form with PDF generated"
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
            <div className="p-5">
              <p className="font-display text-lg font-semibold text-foreground">After</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                Phone form + PDF generated automatically.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-body text-sm text-muted-foreground italic">
          Same business. Less stress. Everything on your phone.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
