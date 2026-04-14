import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative overflow-hidden aspect-[4/5] bg-primary"
    >
      <img
        src={project.image}
        alt={project.name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end">
        <div className="flex flex-col gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans">
            {project.type}
          </span>
          <h3 className="text-secondary text-2xl font-serif font-medium">
            {project.name}
          </h3>
          <div className="flex items-center gap-2 text-secondary/60 text-xs mt-2">
            <MapPin size={14} className="text-gold" />
            <span>{project.location}</span>
          </div>
          
          <Link
            to={`/projects/${project.id}`}
            className="mt-6 flex items-center gap-2 text-secondary text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
          >
            View Project <ArrowRight size={16} className="text-gold" />
          </Link>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full border border-white/10 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
