import CTAButton from "./CTAButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gold-border/30 bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <span className="font-display text-xl font-bold tracking-wide text-foreground md:text-2xl">
          Naim Agency
        </span>
        <nav className="flex items-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="hidden font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Contact
          </a>
          <CTAButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
