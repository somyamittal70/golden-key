import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M4 16L18 4L32 16V32H24V22H12V32H4V16Z" stroke="#E07B54" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <rect x="15" y="22" width="6" height="10" rx="1" fill="#E07B54" opacity="0.4"/>
      </svg>
    ),
    title: "Residential Properties",
    desc: "From cozy apartments to sprawling villas, find the perfect home that matches your lifestyle and budget.",
    features: ["Apartments & Flats", "Independent Villas", "Gated Communities", "Luxury Penthouses"],
    color: "from-blue-50 to-white",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1768638687896-35bde623d532?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="10" width="30" height="22" rx="2" stroke="#E07B54" strokeWidth="2.5" fill="none"/>
        <rect x="9" y="4" width="18" height="8" rx="2" stroke="#E07B54" strokeWidth="2.5" fill="none"/>
        <line x1="10" y1="20" x2="10" y2="26" stroke="#E07B54" strokeWidth="2"/>
        <line x1="18" y1="20" x2="18" y2="26" stroke="#E07B54" strokeWidth="2"/>
        <line x1="26" y1="20" x2="26" y2="26" stroke="#E07B54" strokeWidth="2"/>
      </svg>
    ),
    title: "Commercial Spaces",
    desc: "Premium office spaces, retail outlets, and commercial complexes in India's top business hubs.",
    features: ["Office Spaces", "Retail Outlets", "Warehouses", "Co-working Spaces"],
    color: "from-[#E07B54]/5 to-white",
    badge: "High ROI",
    image: "https://images.unsplash.com/photo-1778961419928-2968ddd57c05?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 3L6 10V28L18 33L30 28V10L18 3Z" stroke="#E07B54" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="5" fill="#E07B54" opacity="0.5"/>
        <circle cx="18" cy="18" r="2" fill="#E07B54"/>
      </svg>
    ),
    title: "Property Investment",
    desc: "Expert guidance on real estate investment with high returns — REITs, plots, and under-construction projects.",
    features: ["Plot Investments", "REIT Advisory", "Pre-Launch Booking", "Portfolio Review"],
    color: "from-navy-50 to-white",
    badge: "Smart Returns",
    image: "https://images.unsplash.com/photo-1750810977441-cce0110d66db?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="15" r="8" stroke="#E07B54" strokeWidth="2.5" fill="none"/>
        <path d="M11 29C11 25.7 14.1 23 18 23C21.9 23 25 25.7 25 29" stroke="#E07B54" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 11L32 8M24 14H32M24 17L32 20" stroke="#E07B54" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Home Loan Assistance",
    desc: "Hassle-free loan processing with tie-ups with 30+ leading banks and NBFCs across India.",
    features: ["Loan Eligibility Check", "Best Rate Comparison", "Documentation Help", "Quick Disbursement"],
    color: "from-blue-50 to-white",
    badge: "Fast Process",
    image: "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="5" width="26" height="26" rx="3" stroke="#E07B54" strokeWidth="2.5" fill="none"/>
        <path d="M5 14H31" stroke="#E07B54" strokeWidth="2"/>
        <path d="M14 5V14" stroke="#E07B54" strokeWidth="2"/>
        <circle cx="22" cy="23" r="4" fill="#E07B54" opacity="0.4"/>
        <path d="M20.5 23L22 24.5L24.5 21.5" stroke="#E07B54" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Legal & Documentation",
    desc: "Complete legal support including title verification, sale deed preparation, and registration assistance.",
    features: ["Title Clearance", "Sale Deed Drafting", "Registration Help", "RERA Compliance"],
    color: "from-[#E07B54]/5 to-white",
    badge: "100% Legal",
    image: "https://images.unsplash.com/photo-1750277120336-ca98ec2e2f90?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 28L12 24M28 8L24 12M12 24C9.8 21.8 9.8 18.2 12 16L20 8C22.2 5.8 25.8 5.8 28 8C30.2 10.2 30.2 13.8 28 16L20 24C17.8 26.2 14.2 26.2 12 24Z" stroke="#E07B54" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Property Management",
    desc: "End-to-end property management for NRIs and landlords — rent collection, maintenance, and tenant screening.",
    features: ["Tenant Management", "Rent Collection", "Maintenance Coordination", "NRI Services"],
    color: "from-navy-50 to-white",
    badge: "Hands-free",
    image: "https://images.unsplash.com/photo-1758304481940-2264319c990d?auto=format&fit=crop&w=800&q=80",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#E07B54] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="section-heading mb-4">Our Premium Services</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#E07B54" }} />
          <p className="text-gray-500 max-w-xl mx-auto mt-6 leading-relaxed">
            From finding your dream home to managing your property portfolio — we offer
            comprehensive real estate solutions under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative bg-gradient-to-br ${s.color} rounded-2xl border border-gray-100 hover:border-[#E07B54]/40 hover:shadow-xl hover:shadow-[#E07B54]/10 transition-all duration-300 group overflow-hidden`}
            >
              {/* Image header */}
              <div className="relative h-36 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700/50 to-transparent" />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-navy-700 text-[#E07B54] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {s.badge}
                </div>
              </div>

              <div className="p-7 pt-0 relative">
                {/* Icon overlapping image edge */}
                <div className="w-14 h-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center -mt-7 mb-5 relative z-10">
                  {s.icon}
                </div>

                <h3 className="font-display font-bold text-navy-700 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>

                {/* Features list */}
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy-600">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" fill="#E07B54" opacity="0.15"/>
                        <path d="M4.5 7L6.2 8.7L9.5 5.5" stroke="#E07B54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-5 flex items-center gap-2 text-[#E07B54] text-sm font-semibold"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M10 5L13 8L10 11" stroke="#E07B54" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}