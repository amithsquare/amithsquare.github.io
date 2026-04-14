import React from 'react';
import { motion } from 'motion/react';
import { Home, Layout, Key, Box, RefreshCw, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const iconMap: Record<string, any> = {
  Home,
  Layout,
  Key,
  Box,
  RefreshCw,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon] || Home;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-primary/40 border border-secondary/10 p-10 hover:border-gold/50 transition-all duration-500 hover:bg-primary/60"
    >
      <div className="mb-8 relative w-16 h-16 flex items-center justify-center border border-secondary/10 group-hover:border-gold transition-colors duration-500">
        <Icon className="text-gold group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
        <div className="absolute -top-2 -right-2 text-[10px] text-secondary/20 font-mono group-hover:text-gold transition-colors duration-500">
          0{index + 1}
        </div>
      </div>
      
      <h3 className="text-secondary text-2xl font-serif font-medium mb-4 group-hover:text-gold transition-colors duration-500">
        {service.title}
      </h3>
      
      <p className="text-secondary/60 text-sm leading-relaxed mb-8 group-hover:text-secondary/80 transition-colors duration-500">
        {service.description}
      </p>
      
      <div className="flex items-center gap-2 text-secondary/40 text-[10px] uppercase tracking-widest font-bold group-hover:text-gold transition-colors duration-500">
        Learn More <ArrowRight size={14} />
      </div>
      
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};

export default ServiceCard;
