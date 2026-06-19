import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4C4 3.4 4.4 3 5 3H8.3C8.8 3 9.2 3.3 9.3 3.8L10.3 7.5C10.4 8 10.2 8.5 9.8 8.7L7.9 9.8C9 12.2 10.9 14.1 13.2 15.1L14.3 13.2C14.6 12.8 15.1 12.6 15.5 12.7L19.2 13.7C19.7 13.9 20 14.2 20 14.7V18C20 18.6 19.6 19 19 19C10.7 19 4 12.3 4 4Z" stroke="#E07B54" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9AM – 7PM",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#E07B54" strokeWidth="1.8" fill="none"/>
        <path d="M3 8L11 13L19 8" stroke="#E07B54" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email",
    value: "hello@goldenkey.in",
    sub: "Reply within 24 hours",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C7.7 2 5 4.7 5 8C5 12.5 11 20 11 20C11 20 17 12.5 17 8C17 4.7 14.3 2 11 2Z" stroke="#E07B54" strokeWidth="1.8" fill="none"/>
        <circle cx="11" cy="8" r="2.5" stroke="#E07B54" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
    label: "Head Office",
    value: "Cyber City, Gurgaon",
    sub: "Haryana — 122 002",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    type: "Residential",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", city: "", type: "Residential", message: "" });
  };

  return (
    <section id="contact-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#E07B54] font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="section-heading mb-4">Contact Us</h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: "#E07B54" }} />
          <p className="text-gray-500 mt-6 max-w-lg mx-auto leading-relaxed">
            Ready to find your dream property? Reach out to us and our expert advisors will
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-5 p-5 rounded-xl border border-gray-100 hover:border-[#E07B54] hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-700/5 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#E07B54] uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="font-semibold text-navy-700">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-700/5 hover:bg-navy-700 flex items-center justify-center group transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M13 2H11C10.2 2 9 2.6 9 4V6H13L12.4 9H9V16H6V9H4V6H6V4C6 2.3 7.3 1 9 1H13V2Z" fill="#1B3A6B" className="group-hover:fill-white transition-colors"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-700/5 hover:bg-navy-700 flex items-center justify-center group transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="4" stroke="#1B3A6B" strokeWidth="1.8" className="group-hover:stroke-white transition-colors"/>
                    <circle cx="9" cy="9" r="3.5" stroke="#1B3A6B" strokeWidth="1.8" className="group-hover:stroke-white transition-colors"/>
                    <circle cx="13" cy="5" r="1" fill="#1B3A6B" className="group-hover:fill-white transition-colors"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-700/5 hover:bg-navy-700 flex items-center justify-center group transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="3" stroke="#1B3A6B" strokeWidth="1.5" className="group-hover:stroke-white transition-colors"/>
                    <path d="M5.5 8V13M5.5 6V5.5" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" className="group-hover:stroke-white transition-colors"/>
                    <path d="M8.5 13V10C8.5 8.9 9.4 8 10.5 8H11C12.1 8 13 8.9 13 10V13" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" className="group-hover:stroke-white transition-colors"/>
                    <path d="M8.5 8V13" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" className="group-hover:stroke-white transition-colors"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="w-10 h-10 rounded-xl bg-navy-700/5 hover:bg-navy-700 flex items-center justify-center group transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1.5" y="3.5" width="15" height="11" rx="3" stroke="#1B3A6B" strokeWidth="1.5" className="group-hover:stroke-white transition-colors"/>
                    <path d="M7.5 6.5L12 9L7.5 11.5V6.5Z" fill="#1B3A6B" className="group-hover:fill-white transition-colors"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50/80 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-xl font-bold text-navy-700 mb-6">
                Book a Free Consultation
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M6 15L12 21L24 9" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-navy-700 text-lg mb-2">Thank You!</h4>
                  <p className="text-gray-500 text-sm">Our team will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Preferred City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Delhi, Mumbai..."
                        className="w-full border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Property Type</label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Plot/Land</option>
                        <option>Luxury</option>
                        <option>Investment</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements — budget, location preference, BHK configuration..."
                      className="w-full border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy-700 hover:bg-[#E07B54] text-white font-semibold py-4 rounded-lg transition-all duration-300 text-sm tracking-wide"
                  >
                    Book Free Consultation →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}