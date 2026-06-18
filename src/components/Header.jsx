import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Services", "Gallery", "FAQ", "Contact Us"];

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link) => {
    setActive(link);
    setMenuOpen(false);
    const id = link.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isHighlighted = (link) => active === link || hovered === link;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick("Home")}
          >
            <LogoIcon />
            <div>
              <span className="font-display text-xl font-bold text-navy-700 leading-tight block">Golden Key</span>
              <span style={{ color: "#E07B54" }} className="text-xs font-semibold tracking-[0.2em] uppercase block -mt-0.5">Realty</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => handleNavClick(link)}
                onMouseEnter={() => setHovered(link)}
                onMouseLeave={() => setHovered(null)}
                style={{ color: isHighlighted(link) ? "#E07B54" : "#1B3A6B" }}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm"
              >
                {link}
                {/* Underline indicator */}
                <span
                  style={{
                    backgroundColor: "#E07B54",
                    transform: isHighlighted(link) ? "scaleX(1)" : "scaleX(0)",
                  }}
                  className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-transform duration-300 origin-left"
                />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => handleNavClick("Contact Us")}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E07B54")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B3A6B")}
              style={{ backgroundColor: "#1B3A6B" }}
              className="ml-4 text-white text-sm font-semibold px-6 py-2.5 rounded-2xl transition-all duration-300"
            >
              Free Consultation
            </motion.button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(p => !p)}>
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
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link)}
                  onMouseEnter={() => setHovered(link)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ color: isHighlighted(link) ? "#E07B54" : "#1B3A6B" }}
                  className="text-left py-3 px-2 text-base font-medium border-b border-gray-50 last:border-0 transition-colors duration-200"
                >
                  {link}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick("Contact Us")}
                style={{ backgroundColor: "#1B3A6B" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E07B54")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B3A6B")}
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