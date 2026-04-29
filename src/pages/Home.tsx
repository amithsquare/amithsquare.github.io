import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { PROJECTS, SERVICES, TESTIMONIALS, BLOG_POSTS } from '../constants';
import studioVideo from "../assets/Architect Motion.mp4";

const Home = () => {
  return (
    <div className="bg-background homepage">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
            alt="Modern Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-xs md:text-sm uppercase tracking-[0.5em] font-sans block mb-6 mt-18"
          >
            A Square Studio | New Delhi | Gwalior | Indore 
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-secondary text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8"
          >
            Designing Spaces <br />
            <span className="italic text-gold">That Inspire Living</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-secondary/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A Square Studio delivers innovative architectural and interior solutions that blend creativity, functionality, and elegance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/projects"
              className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
            >
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-secondary/20 text-secondary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          {/* <span className="text-secondary/40 text-[10px] uppercase tracking-[0.3em] vertical-text mb-4">Scroll</span> */}
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
  <video
    src={studioVideo}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
  />
</div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 backdrop-blur-xl border border-gold/20 p-8 hidden md:flex flex-col justify-center">
              <span className="text-gold text-4xl font-serif mb-2">10+</span>
              <span className="text-secondary/60 text-xs uppercase tracking-widest leading-relaxed">
                Years of Excellence in Architectural Innovation
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SectionHeading
              subtitle="Our Philosophy"
              title="Crafting Timeless Architectural Masterpieces"
            />
            <p className="text-secondary/60 text-lg leading-relaxed mb-8">
              At A Square Studio, we believe that architecture is more than just building structures; it's about creating experiences. Our approach combines modern aesthetics with functional precision to deliver spaces that are both beautiful and practical.
            </p>
            <p className="text-secondary/60 text-lg leading-relaxed mb-12">
              Based in the heart of Madhya Pradesh,Gwalior Smartcity. 
              We draw inspiration from the city's rich heritage while embracing global design trends to create unique solutions for our clients.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-4 text-gold text-sm uppercase tracking-widest font-bold group"
            >
              Discover Our Story <div className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeading
              subtitle="Portfolio"
              title="Featured Works"
            />
            <Link
              to="/projects"
              className="text-secondary/60 hover:text-gold text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2 transition-colors"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Expertise"
          title="Our Specialized Services"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="bg-secondary/5 border border-secondary/10 text-secondary px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-primary transition-all duration-500 inline-block"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 text-[20rem] font-serif text-secondary leading-none">"</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-secondary/5 border border-secondary/10 p-10 relative"
              >
                <Quote className="text-gold mb-8 opacity-50" size={40} />
                <p className="text-secondary/80 text-lg italic leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                <div className="flex flex-col">
                  <span className="text-secondary font-serif text-xl">{testimonial.name}</span>
                  <span className="text-gold text-xs uppercase tracking-widest mt-1">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <SectionHeading
            subtitle="Journal"
            title="Latest from Blog"
          />
          <Link
            to="/blog"
            className="text-secondary/60 hover:text-gold text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2 transition-colors"
          >
            Read All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-video overflow-hidden mb-8 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-secondary/10 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
              </div>
              <span className="text-gold text-[10px] uppercase tracking-widest block mb-4">{post.date}</span>
              <h3 className="text-secondary text-xl font-serif mb-4 group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h3>
              <Link
                to="https://www.linkedin.com/company/114394124/admin/page-posts/published/"
                className="flex items-center gap-2 text-secondary/40 text-[10px] uppercase tracking-widest font-bold group-hover:text-gold transition-colors duration-300"
              >
                Read More <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-gold p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <img 
               src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200" 
               alt="Pattern" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="relative z-10">
            <h2 className="text-primary text-4xl md:text-6xl font-serif font-medium mb-8">
              Let’s Design Your <br /> Dream Space
            </h2>
            <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Ready to start your next architectural or interior project? Our team of experts is here to bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-beige px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-primary transition-all duration-500 inline-block"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
