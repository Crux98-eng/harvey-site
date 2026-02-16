import { useReveal } from "@/hooks/use-reveal";
import textureBronze1 from "@/assets/texture-bronze-1.png";
import textureBronze2 from "@/assets/texture-bronze-2.png";
import textureBronze3 from "@/assets/texture-bronze-3.png";
import { Zap, Users, BookOpen } from "lucide-react";

const cards = [
  {
    texture: textureBronze1,
    icon: Zap,
    title: "Move fast, stay sharp",
    desc: "Streamline your entire process, from researching, drafting to reviewing. Your teams will stay focused on delivering world-class work.",
  },
  {
    texture: textureBronze2,
    icon: Users,
    title: "Collaborate with confidence",
    desc: "One platform for firms and corporations to collaborate securely across every document, workflow, and email. Connect internally and externally without sacrificing control.",
  },
  {
    texture: textureBronze3,
    icon: BookOpen,
    title: "Put your knowledge to work",
    desc: "Your institutional knowledge, from documents and data to trusted third-party sources, unified in one environment built for precision.",
  },
];

const ValueProps = () => {
  const ref = useReveal();

  return (
    <section className="harvey-section" ref={ref}>
      <div className="harvey-container">
        <h2 className="reveal font-display text-section-title font-semibold text-foreground mb-12 md:mb-16">
          Why the top performers choose Harvey
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden border border-border mb-4 bg-secondary">
                <img
                  src={card.texture}
                  alt={card.title}
                  className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Icon */}
              <div className="mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
