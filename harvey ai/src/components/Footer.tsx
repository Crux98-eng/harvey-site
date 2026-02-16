const Footer = () => {
  const columns = [
    {
      title: "Platform",
      links: ["Overview", "Assistant", "Vault", "Knowledge", "Workflows", "Ecosystem"],
    },
    {
      title: "Solutions",
      links: ["Innovation", "In-House", "Transactional", "Litigation", "Collaboration"],
    },
    {
      title: "Resources",
      links: ["Blog", "Videos", "Guides", "Press Kit"],
    },
    {
      title: "Company",
      links: ["About", "Newsroom", "Careers", "Security"],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 py-16">
      <div className="harvey-container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-start">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block text-4xl font-display font-bold tracking-tight text-white">
              H
            </a>
          </div>

          {columns.map((col, idx) => (
            <div key={col.title} className="md:col-span-1">
              <h4 className="text-sm font-body font-semibold uppercase tracking-widest text-slate-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="group flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <span>{link}</span>
                      <span className="ml-1 inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Copyright © {new Date().getFullYear()} Harvey AI Corporation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <span>Privacy Policy</span>
              <span className="ml-1 inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a href="#" className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <span>Terms of Service</span>
              <span className="ml-1 inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
