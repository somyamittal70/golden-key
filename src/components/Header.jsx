import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQ", id: "faq" },
  { label: "Contact Us", id: "contact-us" },
];

const LogoIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
    <circle cx="16" cy="16" r="11" stroke="#E07B54" strokeWidth="3.5" fill="none"/>
    <circle cx="16" cy="16" r="5" fill="#E07B54"/>
    <rect x="24" y="18" width="16" height="4" rx="2" fill="#E07B54"/>
    <rect x="34" y="22" width="4" height="6" rx="1.5" fill="#E07B54"/>
    <rect x="28" y="22" width="4" height="4" rx="1.5" fill="#E07B54"/>
  </svg>
);

const HamburgerIcon = ({ open }) =>
  open ? (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <line x1="5" y1="5" x2="21" y2="21" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="21" y1="5" x2="5" y2="21" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ) : (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <line x1="3" y1="7" x2="23" y2="7" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="3" y1="13" x2="23" y2="13" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="3" y1="19" x2="23" y2="19" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

// Height of the fixed header — used to offset scroll position so the
// section's top isn't hidden behind the navbar.
const HEADER_OFFSET = 80;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);

  // Track scroll for header shadow + scroll-spy (auto-highlight current section)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll-spy: find which section is currently in view
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top - HEADER_OFFSET - 10;
          if (top <= 0) current = link.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrolls smoothly to a section, correctly offsetting for the fixed header.
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActive(id);
    // Wait a tick so the mobile menu can close before measuring positions
    requestAnimationFrame(() => scrollToSection(id));
  };

  const isHighlighted = (id) => active === id || hovered === id;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-lg shadow-navy-700/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.button
            type="button"
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick("home")}
          >
            <LogoIcon />
            <div className="text-left">
              <span className="font-display text-xl font-bold text-navy-700 leading-tight block">Golden Key</span>
              <span style={{ color: "#E07B54" }} className="text-xs font-semibold tracking-[0.2em] uppercase block -mt-0.5">Realty</span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ color: isHighlighted(link.id) ? "#E07B54" : "#1B3A6B" }}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm"
              >
                {link.label}
                <span
                  style={{
                    backgroundColor: "#E07B54",
                    transform: isHighlighted(link.id) ? "scaleX(1)" : "scaleX(0)",
                  }}
                  className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-transform duration-300 origin-left"
                />
              </motion.button>
            ))}
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => handleNavClick("contact-us")}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E07B54")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B3A6B")}
              style={{ backgroundColor: "#1B3A6B" }}
              className="ml-4 text-white text-sm font-semibold px-6 py-2.5 rounded-2xl transition-all duration-300"
            >
              Free Consultation
            </motion.button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMenuOpen((p) => !p)} aria-label="Toggle menu">
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  style={{ color: active === link.id ? "#E07B54" : "#1B3A6B" }}
                  className="text-left py-3 px-2 text-base font-medium border-b border-gray-50 last:border-0 transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick("contact-us")}
                style={{ backgroundColor: "#1B3A6B" }}
                className="mt-3 text-white font-semibold py-3 rounded-sm text-center transition-all duration-300"
              >
                Free Consultation
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}