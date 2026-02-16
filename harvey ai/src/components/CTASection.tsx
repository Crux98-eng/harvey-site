const CTASection = () => {
  return (
    <section className="harvey-section border-t border-border">
      <div className="harvey-container text-center">
        <h2 className="font-display text-hero font-bold text-foreground max-w-[800px] mx-auto">
          Transform Your Workflows with AI
        </h2>
        <p className="text-base font-body text-muted-foreground mt-6 max-w-md mx-auto">
          Join thousands of professionals using Harvey to work smarter, faster, and more securely.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center mt-10 px-8 py-3 text-sm font-body font-medium rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default CTASection;
