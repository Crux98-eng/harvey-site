import { useReveal } from "@/hooks/use-reveal";
import platformAssistant from "@/assets/platform-assistant.png";
import platformKnowledge from "@/assets/platform-knowledge.png";
import platformDocuments from "@/assets/platform-documents.png";
import platformIntegrations from "@/assets/platform-integrations.png";
import heroDashboard from "@/assets/hero-dashboard.png";

const products = [
  {
    name: "Assistant",
    desc: "Ask questions, analyze documents, and draft faster with domain-specific AI.",
    image: platformAssistant,
  },
  {
    name: "Vault",
    desc: "Securely store, organize, and bulk analyze documents.",
    image: platformKnowledge,
  },
  {
    name: "Workflows",
    desc: "Run pre-built workflows or build your own, tailored to your needs.",
    image: platformDocuments,
  },
  {
    name: "Knowledge",
    desc: "Research complex legal, regulatory, and tax questions across domains.",
    image: platformIntegrations,
  },
  {
    name: "Ecosystem",
    desc: "Leverage the power of Harvey AI where you already work.",
    image: heroDashboard,
  },
];


const ProductsGrid = () => {
  const ref = useReveal();

  return (
    <section className="harvey-section bg-slate-900 text-white overflow-hidden" ref={ref}>
      <div className="harvey-container py-16">
        <div className="reveal mb-12 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            <span className="font-bold">One platform engineered to elevate your entire team.</span>
          </h2>
          <p className="text-slate-300 max-w-xl mt-3">Navigate every challenge with purpose-built tools.</p>
        </div>

        <div className="space-y-16">
          {products.map((product, i) => (
            <div key={product.name} className="grid gap-8 items-center md:grid-cols-2">
              {/* Image */}
              <div className={`reveal ${i % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                  <img src={product.image} alt={product.name} className="w-full rounded-xl border border-slate-700" loading="lazy" />
                </div>
              </div>

              {/* Text */}
              <div className={`reveal ${i % 2 === 1 ? 'md:order-1 text-left' : 'md:order-2 text-left'}`}>
                <h3 className="font-display text-3xl text-white mb-4">{product.name}</h3>
                <p className="text-slate-300 max-w-lg mb-6">{product.desc}</p>
                <a href="#" className="inline-block px-4 py-2 border border-slate-600 rounded text-sm text-white hover:bg-slate-800">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
