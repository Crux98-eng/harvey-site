import { useReveal } from "@/hooks/use-reveal";
import { FileText, Mail, Globe, Smartphone, Monitor, HardDrive } from "lucide-react";

const useIn = [
  { icon: FileText, name: "Word" },
  { icon: Mail, name: "Outlook" },
  { icon: HardDrive, name: "iManage" },
  { icon: Globe, name: "Web Browsers" },
  { icon: Mail, name: "Email" },
  { icon: Smartphone, name: "Mobile App" },
];

const pullFrom = [
  { icon: Globe, name: "LexisNexis®" },
  { icon: HardDrive, name: "iManage" },
  { icon: Monitor, name: "NetDocuments" },
  { icon: FileText, name: "SharePoint" },
  { icon: HardDrive, name: "Google Drive" },
  { icon: Globe, name: "APIs" },
  { icon: Globe, name: "400+ Regional Sources" },
];

const IntegrationsSection = () => {
  const ref = useReveal();

  return (
    <section className="harvey-section border-t border-border" ref={ref}>
      <div className="harvey-container">
        <h2 className="reveal font-display text-section-title font-semibold text-foreground mb-16">
          Works with tools your team is already using
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Use Harvey in */}
          <div className="reveal reveal-delay-1">
            <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Use Harvey in:
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {useIn.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-secondary transition-colors">
                  <item.icon className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs font-body text-foreground text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pull context from */}
          <div className="reveal reveal-delay-2">
            <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Pull context from:
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {pullFrom.map((item, i) => (
                <div key={item.name + i} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-secondary transition-colors">
                  <item.icon className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs font-body text-foreground text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
