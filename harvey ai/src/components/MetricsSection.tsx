import { useReveal } from "@/hooks/use-reveal";

const metrics = [
  { value: "200K+", label: "queries run per day" },
  { value: "1.3M+", label: "files processed per day" },
  { value: "92%", label: "average monthly usage reported" },
];

const MetricsSection = () => {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-24 border-t border-border" ref={ref}>
      <div className="harvey-container">
        <h3 className="reveal font-display text-section-title font-semibold text-foreground mb-12">
          Delivering value at scale
        </h3>
        <div className="grid grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <div key={m.label} className={`reveal reveal-delay-${i + 1}`}>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {m.value}
              </p>
              <p className="text-sm font-body text-muted-foreground mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
