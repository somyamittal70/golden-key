import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Residential", "Commercial", "Luxury", "Plots"];

const properties = [
  {
    id: 1,
    category: "Luxury",
    title: "Sky Villa — Gurgaon",
    price: "₹ 8.5 Cr",
    tag: "Penthouse",
    beds: 4,
    baths: 5,
    sqft: "6200 sq.ft",
    featured: true,
    image: "https://images.unsplash.com/photo-1758448511487-15f69dd6107b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Residential",
    title: "Green Haven — Noida",
    price: "₹ 1.2 Cr",
    tag: "3 BHK Flat",
    beds: 3,
    baths: 3,
    sqft: "1850 sq.ft",
    featured: false,
    image: "https://images.unsplash.com/photo-1762028007806-751f2bef444a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Commercial",
    title: "Prime Office Hub — BKC Mumbai",
    price: "₹ 4.8 Cr",
    tag: "Office Space",
    beds: null,
    baths: null,
    sqft: "4500 sq.ft",
    featured: false,
    image: "https://images.unsplash.com/photo-1778961419928-2968ddd57c05?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Residential",
    title: "Sunrise Residency — Pune",
    price: "₹ 75 L",
    tag: "2 BHK Apartment",
    beds: 2,
    baths: 2,
    sqft: "1100 sq.ft",
    featured: false,
    image: "https://images.unsplash.com/photo-1768638687896-35bde623d532?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Plots",
    title: "Golden Acres — Manesar",
    price: "₹ 45 L",
    tag: "Residential Plot",
    beds: null,
    baths: null,
    sqft: "300 sq.yd",
    featured: false,
    image: "https://images.unsplash.com/photo-1628116904346-44a605db3b6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Luxury",
    title: "The Imperial — Delhi",
    price: "₹ 12 Cr",
    tag: "Luxury Villa",
    beds: 5,
    baths: 6,
    sqft: "9000 sq.ft",
    featured: false,
    image: "https://images.unsplash.com/photo-1759176959174-465ad72f3c32?auto=format&fit=crop&w=800&q=80",
  },
];

// Property card with real photo
function PropertyCard({ prop, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${prop.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""}`}
    >
      {/* Property photo */}
      <div className="h-56 relative overflow-hidden">
        <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Featured badge */}
        {prop.featured && (
          <div className="absolute top-4 left-4 bg-[#c18c3b] text-white text-xs font-bold px-3 py-1 rounded-full">
            ★ Featured
          </div>
        )}

        {/* Category pill */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {prop.tag}
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy-700/60 flex items-center justify-center"
            >
              <button className="bg-[#c18c3b] hover:bg-[#e9926b] text-white font-semibold px-6 py-2.5 rounded-sm text-sm transition-colors">
                View Property
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card info */}
      <div className="bg-white p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-navy-700 text-base leading-tight">
            {prop.title}
          </h3>
          <span className="text-[#c18c3b] font-bold text-base ml-2 whitespace-nowrap">
            {prop.price}
          </span>
        </div>
        <div className="flex items-center gap-4 text-gray-400 text-xs mt-3">
          {prop.beds && (
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect
                  x="1"
                  y="6"
                  width="12"
                  height="7"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path d="M1 9H13" stroke="currentColor" strokeWidth="1.2" />
                <rect
                  x="3"
                  y="3"
                  width="3"
                  height="4"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="8"
                  y="3"
                  width="3"
                  height="4"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {prop.beds} Beds
            </span>
          )}
          {prop.baths && (
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12V10C12 11.1 11.1 12 10 12H4C2.9 12 2 11.1 2 10V7Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M2 7V4C2 3.4 2.4 3 3 3H5C5.6 3 6 3.4 6 4V7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {prop.baths} Baths
            </span>
          )}
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="1"
                y="1"
                width="12"
                height="12"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M4 1V13M10 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.5"
              />
            </svg>
            {prop.sqft}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    active === "All"
      ? properties
      : properties.filter((p) => p.category === active);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#c18c3b] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Properties
          </p>
          <h2 className="section-heading mb-4">Featured Listings</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#c18c3b" }} />
          <p className="text-gray-500 mt-6 max-w-lg mx-auto leading-relaxed">
            Explore our curated selection of premium properties across India's
            most sought-after locations.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
                active === cat
                  ? "bg-navy-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-navy-50 hover:text-navy-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Property grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((prop, i) => (
              <PropertyCard key={prop.id} prop={prop} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}