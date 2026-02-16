import { useReveal } from "@/hooks/use-reveal";
import { Shield } from "lucide-react";

const badges = [
  { name: "SOC2 II", detail: "Independently audited security controls" },
  { name: "CCPA", detail: "California consumer privacy compliance" },
  { name: "ISO 27001", detail: "International information security standard" },
  { name: "GDPR", detail: "EU data protection regulation compliance" },
];

const SecuritySection = () => {
  const ref = useReveal();

  return (
    <section className="harvey-section bg-slate-900 text-white overflow-hidden" ref={ref}>
      <div className="harvey-container py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              Enterprise-grade
              <br />
              security and controls
            </h2>
          </div>

          <div className="reveal">
            <p className="text-slate-300 max-w-lg mb-6 leading-relaxed">
              Havey meets the highest industry standards for security and compliance. We include all default controls that enterprise teams expect: SAML SSO, audit logs, IP allow-listing, data lifecycle management, and more.
            </p>
            <a href="#" className="inline-block px-4 py-2 border border-slate-600 rounded text-sm text-white hover:bg-slate-800 transition-colors">More About Security</a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-6">
          {badges.map((badge, i) => (
            <div key={badge.name} className="reveal flex flex-col items-center text-center">
              <div className="w-36 h-36 flex items-center justify-center rounded-md mb-6 bg-[rgba(255,255,255,0.02)]">
                <Shield className="w-20 h-20 text-slate-700" strokeWidth={1} />
              </div>
              <p className="text-sm font-body font-semibold text-white mb-2">{badge.name}</p>
              <a href="#" className="text-xs text-slate-400 inline-flex items-center gap-2 hover:text-white transition-colors">
                <span>Details</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
