import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Harvey1 from '@/assets/harvey 1.png';
import Harvey2 from '@/assets/harvey 2.png'
import Harvey3 from '@/assets/harvey3.jpg'
const testimonials = [
  {
    quote: "When it comes to AI and technology, it's all about learning by doing. You won’t figure everything out right away, but the more you engage with it, the more opportunities you’ll see.   ",
    name: "Thomas Laubert",
    title: "General Counsel",
    company: "Global Chemical Corp",
    image: Harvey1,
  },
  {
    quote: "N:Harvey: is a tremendous tool that fits perfectly with our culture and our way of approaching legal thinking and legal delivery.",
    name: "Omar Puertas",
    title: "Partner",
    company: "International Legal Partners",
    image: Harvey2,
  },
  {
    quote: "What we have seen at Reed Smith with :Harvey: is by far the most successful firm technology adoption story I have ever been a part of.",
    name: "Rich Robbins",
    title: "Director of Applied AI",
    company: "Reed & Associates",
    image: Harvey3,
  },
];

const TestimonialsSection = () => {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };
  const prev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  // Auto-advance after 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((prevActive) => (prevActive + 1) % testimonials.length);
          return 0;
        }
        return prev + 2; // Increment to reach 100% in 5 seconds (100 / 50 increments)
      });
    }, 500); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className="harvey-section border-t border-border" ref={ref}>
      <div className="harvey-container">
        <div className="reveal">
          {/* Main Container - Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image Left */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={t.image}
                alt={`${t.name} from ${t.company}`}
                className="w-auto h-100 object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Text Right */}
            <div className="flex flex-col">
              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-snug tracking-tight mb-8">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="mb-8">
                <p className="text-sm font-body font-semibold text-foreground">{t.name}</p>
                <p className="text-sm font-body text-muted-foreground">{t.title}</p>
                <p className="text-sm font-body text-muted-foreground">{t.company}</p>
              </div>

              {/* Progress Line */}
              <div className="mb-2 h-0.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActive(i);
                      setProgress(0);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-foreground" : "bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
