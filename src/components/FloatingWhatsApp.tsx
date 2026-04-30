import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919667641294"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 2 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Chat with us
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
