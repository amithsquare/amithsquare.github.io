import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { BLOG_POSTS } from '../constants';

const Blog = () => {
  return (
    <div className="pt-32 bg-background min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 mt-18">
        <SectionHeading
          subtitle="Insights"
          title="Architecture & Design Journal"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-12">
          Stay updated with the latest trends in modern architecture, interior design tips, and studio news.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              
              <div className="flex items-center gap-6 text-secondary/40 text-[10px] uppercase tracking-widest mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-gold" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={12} className="text-gold" />
                  <span>Admin</span>
                </div>
              </div>
              
              <h3 className="text-secondary text-2xl font-serif mb-4 group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-secondary/60 text-sm leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all duration-300">
                Read More <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
