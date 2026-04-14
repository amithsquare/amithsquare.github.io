import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${centered ? 'text-center mx-auto' : ''}`}
    >
      {subtitle && (
        <span className="text-gold text-xs uppercase tracking-[0.4em] font-sans block mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-secondary text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gold mt-8 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;
