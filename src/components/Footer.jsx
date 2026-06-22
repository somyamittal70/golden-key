import { motion } from "framer-motion";

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
    <circle cx="16" cy="16" r="11" stroke="#c18c3b" strokeWidth="3.5" fill="none"/>
    <circle cx="16" cy="16" r="5" fill="#c18c3b"/>
    <rect x="24" y="18" width="16" height="4" rx="2" fill="#c18c3b"/>
    <rect x="34" y="22" width="4" height="6" rx="1.5" fill="#c18c3b"/>
    <rect x="28" y="22" width="4" height="4" rx="1.5" fill="#c18c3b"/>
  </svg>
);

// Each link now carries the real section id it should scroll to.
// Every "Services" column link points to the Services section (id="services").
const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", id: "home" },
      { label: "About Us", id: "about" },
      { label: "Services", id: "services" },
      { label: "Gallery", id: "gallery" },
      { label: "FAQ", id: "faq" },
      { label: "Contact Us", id: "contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Residential Properties", id: "services" },
      { label: "Commercial Spaces", id: "services" },
      { label: "Property Investment", id: "services" },
      { label: "Home Loan Help", id: "services" },
      { label: "Legal Support", id: "services" },
      { label: "NRI Services", id: "services" },
    ],
  },
  {
    title: "Cities",
    links: [
      { label: "Delhi NCR", id: "gallery" },
      { label: "Mumbai", id: "gallery" },
      { label: "Bangalore", id: "gallery" },
      { label: "Pune", id: "gallery" },
      { label: "Hyderabad", id: "gallery" },
      { label: "Chennai", id: "gallery" },
    ],
  },
];

const HEADER_OFFSET = 80;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Scrolls to a section by id, correctly offsetting for the fixed header.
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-navy-700 via-navy-800 to-navy-700 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Ready to Find Your Dream Home?
              </h3>
              <p className="text-navy-200 text-xs sm:text-sm">
                Join 12,000+ happy families who trusted Golden Key Realty.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={() => scrollTo("contact-us")}
                style={{ backgroundColor: "#c18c3b" }}
                className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-sm transition-opacity text-sm w-full sm:w-auto"
              >
                Get Started Today
              </button>
              <a
                href="tel:+919026611045"
                className="border border-white/20 hover:border-[#c18c3b] text-white hover:text-[#c18c3b] font-semibold px-6 py-3 rounded-sm transition-colors text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3C3 2.4 3.4 2 4 2H6.3C6.8 2 7.2 2.3 7.3 2.8L8 5.5C8.1 6 7.9 6.5 7.5 6.7L6.4 7.3C7.2 9.2 8.8 10.8 10.7 11.6L11.3 10.5C11.5 10.1 12 9.9 12.5 10L15.2 10.7C15.7 10.8 16 11.2 16 11.7V14C16 14.6 15.6 15 15 15C7.3 15 1 8.7 1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <LogoIcon />
              <div>
                <span className="font-display text-base sm:text-lg font-bold leading-tight block text-white">Golden Key</span>
                <span style={{ color: "#c18c3b" }} className="text-xs font-semibold tracking-[0.2em] uppercase block -mt-0.5">Realty</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              India's most trusted real estate partner since 2009. Unlocking doors to your dream properties across the nation.
            </p>
            {/* Awards */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["RERA Certified", "ISO 9001:2015", "NAR Member"].map((badge) => (
                <span
                  key={badge}
                  style={{ borderColor: "rgba(224, 123, 84, 0.3)", color: "#c18c3b" }}
                  className="text-[11px] sm:text-xs border px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white text-sm mb-4 sm:mb-5 tracking-wide">{col.title}</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      className="text-navy-300 hover:text-[#c18c3b] text-xs sm:text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-navy-400 text-center sm:text-left">
          <p>© {currentYear} Golden Key Realty Pvt. Ltd. All rights reserved.</p>
          <p className="text-navy-500">
            Developed by Debox Technology
          </p>
        </div>
      </div>
    </footer>
  );
}