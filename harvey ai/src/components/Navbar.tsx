import { useState, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Platform",
    items: [
      { title: "Overview", desc: "A unified view of how our products work together." },
      { title: "Assistant", desc: "Ask questions, analyze documents, and draft faster with domain-specific AI." },
      { title: "Vault", desc: "Securely store, organize, and bulk-analyze documents." },
      { title: "Knowledge", desc: "Research complex legal, regulatory, and tax questions across domains." },
      { title: "Workflows", desc: "Run pre-built workflows or build your own, tailored to your needs." },
      { title: "Ecosystem", desc: "Access the platform where you already work." },
    ],
  },
  {
    label: "Solutions",
    items: [
      { title: "Innovation", desc: "Scale expertise and impact to drive firmwide transformation." },
      { title: "In-House", desc: "Streamline work and shift focus to strategy and speed." },
      { title: "Transactional", desc: "Accelerate due diligence, contract analysis, and review." },
      { title: "Litigation", desc: "Reduce manual effort and drive stronger outcomes." },
      { title: "Collaboration", desc: "Work across organizations in secure, shared spaces." },
    ],
  },
  {
    label: "Resources",
    items: [
      { title: "Blog", desc: "Product updates, insights, and behind-the-scenes." },
      { title: "Videos", desc: "Solutions videos, expert insights, and product updates." },
      { title: "Guides", desc: "Practical instruction and expert perspective." },
    ],
  },
  {
    label: "About",
    items: [
      { title: "Company", desc: "Our leadership and career opportunities." },
      { title: "Newsroom", desc: "Press releases and partnership announcements." },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="harvey-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          Harvey
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors">
                {item.label}
                <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-3">
                  <div className="mega-menu-enter bg-popover border border-border rounded-xl shadow-xl p-3 min-w-[300px]">
                    {item.items.map((sub) => (
                      <a
                        key={sub.title}
                        href="#"
                        className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="text-sm font-medium font-body text-foreground">{sub.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 font-body">{sub.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="#" className="px-4 py-2 text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors">
            Customers
          </a>
          <a href="#" className="px-4 py-2 text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors">
            Security
          </a>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors">
            Login
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-body font-medium rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Request a Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full py-3 text-sm font-body font-medium text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileAccordion === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.items.map((sub) => (
                      <a key={sub.title} href="#" className="block py-2 text-sm font-body text-muted-foreground hover:text-foreground">
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="block py-3 text-sm font-body font-medium text-foreground">Customers</a>
            <a href="#" className="block py-3 text-sm font-body font-medium text-foreground">Security</a>
            <div className="pt-4 space-y-3">
              <a href="#" className="block text-sm font-body text-muted-foreground">Login</a>
              <a
                href="#"
                className="block text-center px-5 py-2.5 text-sm font-body font-medium rounded-full border border-foreground text-foreground"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
