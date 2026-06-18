import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "How do I start the process of buying a property with Golden Key Realty?",
    a: "Start with a free consultation — call us, fill our online form, or visit any of our offices. Our advisor will understand your requirements, budget, and preferred location, then present you with a curated list of matching properties within 48 hours.",
  },
  {
    q: "Does Golden Key Realty help with home loan applications?",
    a: "Absolutely. We have partnerships with 30+ leading banks and NBFCs including HDFC, SBI, ICICI, and Axis Bank. Our dedicated loan desk will check your eligibility, compare rates, and handle all documentation — at no extra charge.",
  },
  {
    q: "What cities does Golden Key Realty operate in?",
    a: "We currently operate in Delhi NCR (Gurgaon, Noida, Faridabad), Mumbai, Pune, Bangalore, Hyderabad, and Chennai. We're rapidly expanding to Ahmedabad, Jaipur, and Kochi in 2025.",
  },
  {
    q: "Are all listed properties RERA registered?",
    a: "Yes. We list only RERA-compliant projects and properties. Each listing clearly displays the RERA registration number. Our legal team also performs independent title verification before any recommendation.",
  },
  {
    q: "What is the typical commission or fee for buyers?",
    a: "For buyers, our advisory and property search service is completely free. We earn a referral commission from developers and sellers. For property management and NRI services, we offer transparent fee packages starting at 1% of annual rent.",
  },
  {
    q: "Can NRIs invest in Indian properties through Golden Key Realty?",
    a: "Yes! We have a dedicated NRI desk offering end-to-end services — property search, legal vetting, home loan assistance (via NRE/NRO accounts), power of attorney guidance, and post-purchase management. Everything can be managed remotely.",
  },
  {
    q: "How long does it typically take to close a property deal?",
    a: "For ready-to-move properties, the process from shortlisting to registration typically takes 30–60 days. Under-construction bookings can be completed within a week. Our team ensures all steps — negotiation, due diligence, documentation, and registration — are smooth and timely.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-[#E07B54]/40 shadow-md shadow-[#E07B54]/10" : "border-gray-100 hover:border-navy-100"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span
          className={`font-semibold text-sm md:text-base pr-4 transition-colors ${
            isOpen ? "text-navy-700" : "text-gray-700 group-hover:text-navy-700"
          }`}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-[#E07B54] text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
              <div className="pt-4">{item.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-[#E07B54] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Got Questions?
            </p>
            <h2 className="section-heading mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#E07B54" }} />
            <p className="text-gray-500 leading-relaxed mt-6 mb-8">
              Everything you need to know about buying, selling, and managing property with Golden Key Realty.
            </p>

            {/* CTA card */}
            <div className="bg-navy-700 rounded-2xl p-7 text-white">
              <div className="w-12 h-12 rounded-full bg-[#E07B54]/20 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 2C5.2 2 4 3.1 4 4.5v15c0 1.4 1.2 2.5 2.6 2.5h10.8c1.4 0 2.6-1.1 2.6-2.5v-15C20 3.1 18.8 2 17.4 2H6.6Z" stroke="#E07B54" strokeWidth="1.5" fill="none"/>
                  <path d="M9 6.5H15M9 10H15M9 13.5H12" stroke="#E07B54" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="font-display font-bold text-lg mb-2">Still have questions?</h4>
              <p className="text-navy-200 text-sm leading-relaxed mb-5">
                Our expert team is available 7 days a week to answer all your real estate queries.
              </p>
              <a
                href="#contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-center bg-[#E07B54] hover:bg-[#e9926b] text-white font-semibold py-3 rounded-sm text-sm transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-3"
          >
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}