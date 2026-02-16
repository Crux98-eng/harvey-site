import { useReveal } from "@/hooks/use-reveal";
import aiImage from '@/assets/ai_platform.png'
const HeroSection = () => {
  const ref = useReveal();

  return (
    <section className="pt-28 md:pt-36 lg:pt-44 pb-8 md:pb-12" ref={ref}>
      <div className="harvey-container">
        {/* Label */}
        <p className="reveal text-sm font-body font-semibold tracking-wide text-foreground mb-6">
          Platform Overview
        </p>

        {/* Massive headline */}
        <h1 className="reveal reveal-delay-1 font-display text-hero font-bold text-foreground max-w-[900px]">
          Engineered for Every Task
        </h1>

        {/* Subtext */}
        <p className="reveal reveal-delay-2 text-base md:text-lg font-body text-muted-foreground mt-8 max-w-[480px] leading-relaxed">
          More than 10,000 professionals across legal and regulated industries use Harvey to cut through complexity and navigate their most demanding work.
        </p>

        {/* Full-width product image */}
        <div className="reveal reveal-delay-3 mt-16 md:mt-24 rounded-xl overflow-hidden">
          <img
            src={aiImage}
            alt="NexusAI platform interface showing document analysis and AI assistant"
            className="w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
