import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <div className="pt-32 bg-background min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 mt-18">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Architectural Masterpieces"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-12">
          Explore our diverse range of projects across New Delhi NCR and beyond. Each project is a testament to our commitment to excellence and innovation.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 border-b border-secondary/10 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 relative py-2 ${
                filter === cat ? 'text-gold' : 'text-secondary/40 hover:text-secondary'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-secondary/40 text-lg font-serif italic">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
