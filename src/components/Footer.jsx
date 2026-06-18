import { motion } from "framer-motion";

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
    <circle cx="16" cy="16" r="11" stroke="#E07B54" strokeWidth="3.5" fill="none"/>
    <circle cx="16" cy="16" r="5" fill="#E07B54"/>
    <rect x="24" y="18" width="16" height="4" rx="2" fill="#E07B54"/>
    <rect x="34" y="22" width="4" height="6" rx="1.5" fill="#E07B54"/>
    <rect x="28" y="22" width="4" height="4" rx="1.5" fill="#E07B54"/>
  </svg>
);

const footerLinks = {
  "Quick Links": ["Home", "About Us", "Services", "Gallery", "FAQ", "Contact Us"],
  "Services": ["Residential Properties", "Commercial Spaces", "Property Investment", "Home Loan Help", "Legal Support", "NRI Services"],
  "Cities": ["Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-").replace("us", "us"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-navy-700 via-navy-800 to-navy-700 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Ready to Find Your Dream Home?
              </h3>
              <p className="text-navy-200 text-sm">
                Join 12,000+ happy families who trusted Golden Key Realty.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => scrollTo("contact-us")}
                style={{ backgroundColor: "#E07B54" }}
                className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-sm transition-opacity text-sm"
              >
                Get Started Today
              </button>
              <a
                href="tel:+919876543210"
                style={{ "--hover-color": "#E07B54" }}
                className="border border-white/20 hover:border-[#E07B54] text-white hover:text-[#E07B54] font-semibold px-6 py-3 rounded-sm transition-colors text-sm flex items-center gap-2"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <LogoIcon />
              <div>
                <span className="font-display text-lg font-bold leading-tight block text-white">Golden Key</span>
                <span style={{ color: "#E07B54" }} className="text-xs font-semibold tracking-[0.2em] uppercase block -mt-0.5">Realty</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              India's most trusted real estate partner since 2009. Unlocking doors to your dream properties across the nation.
            </p>
            {/* Awards */}
            <div className="flex flex-wrap gap-3">
              {["RERA Certified", "ISO 9001:2015", "NAR Member"].map((badge) => (
                <span
                  key={badge}
                  style={{ borderColor: "rgba(224, 123, 84, 0.3)", color: "#E07B54" }}
                  className="text-xs border px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link)}
                      className="text-navy-300 hover:text-[#E07B54] text-sm transition-colors text-left"
                    >
                      {link}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-400">
          <p>© {currentYear} Golden Key Realty Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E07B54] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#E07B54] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#E07B54] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}