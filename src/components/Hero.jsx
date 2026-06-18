import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";



function StatCounter({ end, label, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#E07B54" }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/50 text-xs mt-1.5 font-medium tracking-widest uppercase">{label}</div>
    </div>
  );
}

const propertyTypes = ["Buy", "Rent", "Commercial"];
const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury property"
          className="w-full h-full object-cover scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 45%, rgba(10,22,40,0.55) 100%)"
          }}
        />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#E07B54" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#1B3A6B" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content */}
          <motion.div style={{ y: textY, opacity }}>

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-8 rounded-full px-4 py-1.5"
              style={{ backgroundColor: "rgba(224,123,84,0.12)", border: "1px solid rgba(224,123,84,0.28)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#E07B54" }} />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "#E07B54" }}>
                India's Trusted Real Estate Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}
            >
              Find Your Perfect<br />
              <span style={{ color: "#E07B54" }}>Home</span> in India
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/55 text-lg leading-relaxed mb-10 max-w-md"
            >
              Over 15 years of expertise in premium residential and commercial properties across India's top cities.
            </motion.p>

            {/* Search Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="rounded-xl mb-10 overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(16px)" }}
            >
              {/* Tabs */}
              <div className="flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {propertyTypes.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-3 text-sm font-semibold transition-all duration-200 relative"
                    style={{
                      color: activeTab === tab ? "#E07B54" : "rgba(255,255,255,0.45)",
                      backgroundColor: activeTab === tab ? "rgba(224,123,84,0.1)" : "transparent",
                    }}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.span
                        layoutId="tabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: "#E07B54" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Search inputs */}
              <div className="p-4 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14 8 14C8 14 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="white" strokeWidth="1.4"/>
                    <circle cx="8" cy="6" r="1.5" stroke="white" strokeWidth="1.4"/>
                  </svg>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-8 pr-3 py-2.5 text-sm rounded-lg appearance-none outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: city ? "white" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    <option value="" disabled style={{ color: "#333" }}>Select City</option>
                    {cities.map(c => <option key={c} value={c} style={{ color: "#333" }}>{c}</option>)}
                  </select>
                </div>

                <div className="flex-1 relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.4"/>
                    <path d="M8 5V8L10 10" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full pl-8 pr-3 py-2.5 text-sm rounded-lg appearance-none outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: budget ? "white" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    <option value="" disabled style={{ color: "#333" }}>Budget Range</option>
                    <option value="1" style={{ color: "#333" }}>Under ₹50 Lakh</option>
                    <option value="2" style={{ color: "#333" }}>₹50L – ₹1 Cr</option>
                    <option value="3" style={{ color: "#333" }}>₹1 Cr – ₹3 Cr</option>
                    <option value="4" style={{ color: "#333" }}>₹3 Cr+</option>
                  </select>
                </div>

                <button
                  onClick={() => handleNavClick(" Gallery ")}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E07B54")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E07B54")}
                  className="px-6 py-2.5 rounded-lg text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#E07B54" }}
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="6.5" cy="6.5" r="5" stroke="white" strokeWidth="1.5"/>
                    <path d="M10.5 10.5L13.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Search
                </button>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: "✓", text: "RERA Certified" },
                { icon: "✓", text: "Zero Brokerage" },
                { icon: "✓", text: "Legal Verified" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <span style={{ color: "#E07B54" }}>{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
            style={{ height: "520px" }}
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 rounded-full"
              style={{ border: "1px dashed rgba(224,123,84,0.18)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 rounded-full"
              style={{ border: "1px dashed rgba(224,123,84,0.28)" }}
            />

            {/* Property Image Card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
              style={{ width: "300px", height: "360px" }}
            >
              {/* Main image card */}
              <div
                className="w-full h-full overflow-hidden"
                style={{
                  borderRadius: "20px",
                  border: "2px solid rgba(224,123,84,0.35)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85"
                  alt="Premium property"
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.05)" }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "45%",
                    background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, transparent 100%)",
                    borderRadius: "0 0 18px 18px",
                  }}
                />
                {/* Price tag inside image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#E07B54", letterSpacing: "0.1em" }}>FEATURED PROPERTY</div>
                  <div className="text-white font-bold text-base leading-tight">Modern Villa · South Delhi</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg" style={{ color: "#E07B54" }}>₹ 4.8 Cr</span>
                    <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(224,123,84,0.2)", color: "#E07B54", border: "1px solid rgba(224,123,84,0.3)" }}>4 BHK · 3,200 sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating card – Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
              className="absolute top-6 right-2 rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                backgroundColor: "rgba(255,255,255,0.97)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                minWidth: "160px"
              }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(224,123,84,0.12)" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1.5L11.2 6.4L16.5 7.2L12.75 10.8L13.7 16.1L9 13.6L4.3 16.1L5.25 10.8L1.5 7.2L6.8 6.4L9 1.5Z" fill="#E07B54"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#1B3A6B" }}>Top Rated</div>
                <div className="text-xs" style={{ color: "#888" }}>4.9 / 5 · 2,400+ reviews</div>
              </div>
            </motion.div>

            {/* Floating card – Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 120 }}
              className="absolute bottom-10 left-0 rounded-xl px-4 py-3"
              style={{
                backgroundColor: "rgba(255,255,255,0.97)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                minWidth: "170px"
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#22c55e" }} />
                <span className="text-xs font-semibold" style={{ color: "#22c55e" }}>New Listing</span>
              </div>
              <div className="font-bold text-sm" style={{ color: "#1B3A6B" }}>3 BHK · Gurgaon</div>
              <div className="font-semibold text-sm mt-0.5" style={{ color: "#E07B54" }}>₹ 2.4 Cr onwards</div>
              <div className="text-xs mt-1" style={{ color: "#aaa" }}>Ready to move · 1,850 sq ft</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-10 grid grid-cols-3 gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <StatCounter end={1200} suffix="+" label="Properties Sold" />
          <StatCounter end={98} suffix="%" label="Client Satisfaction" />
          <StatCounter end={15} suffix="+" label="Years of Experience" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1.5px solid rgba(255,255,255,0.18)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E07B54" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}