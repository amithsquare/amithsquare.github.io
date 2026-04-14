import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Maximize, Layers, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS } from '../constants';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-background">
        <h1 className="text-secondary text-4xl font-serif mb-6">Project Not Found</h1>
        <Link to="/projects" className="text-gold uppercase tracking-widest font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  const nextProject = PROJECTS.find(p => p.id !== id);

  return (
    <div className="pt-32 bg-background min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <Link to="/projects" className="text-secondary/40 hover:text-gold text-xs uppercase tracking-widest font-bold flex items-center gap-2 mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <SectionHeading
            subtitle={project.type}
            title={project.name}
          />
          <div className="flex flex-wrap gap-8 md:gap-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                <MapPin className="text-gold" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-secondary/40 text-[10px] uppercase tracking-widest">Location</span>
                <span className="text-secondary text-sm">{project.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                <Maximize className="text-gold" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-secondary/40 text-[10px] uppercase tracking-widest">Area Size</span>
                <span className="text-secondary text-sm">{project.areaSize}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                <Calendar className="text-gold" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-secondary/40 text-[10px] uppercase tracking-widest">Year</span>
                <span className="text-secondary text-sm">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-video overflow-hidden relative"
        >
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 border border-white/10 pointer-events-none" />
        </motion.div>
      </section>

      {/* Description & Materials */}
      <section className="py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h3 className="text-secondary text-3xl font-serif mb-8">Project Overview</h3>
            <p className="text-secondary/60 text-lg leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="text-secondary/60 text-lg leading-relaxed">
              Our design philosophy for this project was to create a seamless integration between the interior and exterior environments. We utilized a palette of natural materials to ground the structure in its local context while maintaining a modern, sophisticated aesthetic.
            </p>
          </div>
          
          <div className="bg-secondary/5 border border-secondary/10 p-10 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="text-gold" size={24} />
              <h4 className="text-secondary text-xl font-serif">Materials Used</h4>
            </div>
            <ul className="flex flex-col gap-4">
              {project.materials.map((material) => (
                <li key={material} className="flex items-center gap-3 text-secondary/80 text-sm">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Gallery"
          title="Inside the Project"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="aspect-[4/3] overflow-hidden relative group"
            >
              <img
                src={img}
                alt={`${project.name} Gallery ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-secondary/10 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project CTA */}
      {nextProject && (
        <section className="py-32 border-t border-secondary/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="text-secondary/40 text-[10px] uppercase tracking-widest block mb-6">Next Project</span>
            <Link
              to={`/projects/${nextProject.id}`}
              className="group inline-block"
            >
              <h2 className="text-secondary text-4xl md:text-6xl font-serif font-medium mb-8 group-hover:text-gold transition-colors duration-300">
                {nextProject.name}
              </h2>
              <div className="flex items-center justify-center gap-4 text-gold text-xs uppercase tracking-widest font-bold">
                View Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
