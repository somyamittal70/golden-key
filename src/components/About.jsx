import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L17 9H24L18.5 13.5L20.5 21L14 17L7.5 21L9.5 13.5L4 9H11L14 2Z" fill="#c18c3b"/>
      </svg>
    ),
    title: "Excellence",
    desc: "We uphold the highest standards in every property we represent, ensuring quality and value.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#c18c3b" strokeWidth="2.5" fill="none"/>
        <path d="M9 14L12.5 17.5L19 11" stroke="#c18c3b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integrity",
    desc: "Transparent dealings, honest advice, and ethical practices — always.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 5 9 5 16C5 20.4 9.1 24 14 24C18.9 24 23 20.4 23 16C23 9 14 4 14 4Z" stroke="#c18c3b" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <circle cx="14" cy="16" r="3" fill="#c18c3b"/>
      </svg>
    ),
    title: "Passion",
    desc: "Real estate is more than transactions — it's about finding the perfect place to call home.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative px-4 sm:px-6 lg:px-0 pt-10 sm:pt-12 lg:pt-0"
          >
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758448511487-15f69dd6107b?auto=format&fit=crop&w=1200&q=80"
                alt="Modern residential building exterior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle gradient for badge legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur rounded-lg sm:rounded-xl px-3 py-2 sm:px-5 sm:py-3 shadow-lg">
                <div className="font-display font-bold text-navy-700 text-sm sm:text-lg">Since 2009</div>
                <div className="text-[#c18c3b] text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
                  Trusted Real Estate Partner
                </div>
              </div>
            </div>

            {/* Secondary accent image */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-2 left-0 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1762028007806-751f2bef444a?auto=format&fit=crop&w=400&q=80"
                alt="Residential property facade"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="mt-6 lg:mt-0">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="text-[#c18c3b] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3"
            >
              Who We Are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
              className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-700 mb-4 leading-tight"
            >
              India's Most Trusted Real Estate Partner
            </motion.h2>
            <div className="w-16 h-1 rounded-full mb-5 sm:mb-6" style={{ backgroundColor: "#c18c3b" }} />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4"
            >
              Founded in 2009, Golden Key Realty has been the cornerstone of real estate excellence across India.
              With offices in Delhi, Mumbai, Bangalore, and Pune, we offer unmatched expertise in residential,
              commercial, and luxury real estate.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
            >
              Our team of 200+ certified agents is dedicated to understanding your unique needs and delivering
              properties that exceed expectations — from first-time buyers to seasoned investors.
            </motion.p>

            {/* Values */}
            <div className="grid gap-4 sm:gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={4 + i}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-navy-50 hover:border-[#c18c3b] hover:bg-[#c18c3b]/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-navy-700/5 group-hover:bg-navy-700/10 flex items-center justify-center flex-shrink-0 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-sm sm:text-base mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}