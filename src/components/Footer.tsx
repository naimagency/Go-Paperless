const Footer = () => {
  return (
    <footer className="border-t border-gold-border/40 py-8">
      <div className="container text-center font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Naim Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
