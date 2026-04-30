import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Target, Eye, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AmitImg from "../assets/Amit.png";
import AditiImg from "../assets/Ar.Aditi-Saxena.png";

const About = () => {
  const values = [
    { title: 'Creativity', desc: 'Pushing boundaries to deliver unique architectural solutions.', icon: Eye },
    { title: 'Precision', desc: 'Attention to every detail from planning to execution.', icon: Target },
    { title: 'Sustainability', desc: 'Integrating eco-friendly practices in our designs.', icon: CheckCircle2 },
    { title: 'Client Satisfaction', desc: 'Building lasting relationships through exceptional service.', icon: Award },
  ];

  const team = [
    { name: 'Amit Singh Rathore', role: 'Business Owner', image: AmitImg },
    { name: 'Ar. Aditi Saxena', role: 'Principal Architect', image: AditiImg },
    { name: 'Vikram Singh', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="pt-32 bg-background">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <SectionHeading 
              subtitle="About A Square Studio"
              title="Defining Modern Architecture"
            />
            <p className="text-secondary/60 text-lg leading-relaxed mb-8">
              A Square Studio is a premier architectural and interior design firm. Since our inception, we have been dedicated to creating spaces that are not only aesthetically pleasing but also highly functional and sustainable.
            </p>
            <p className="text-secondary/60 text-lg leading-relaxed mb-8">
              Our team brings a wealth of experience to every project, whether it's a luxury residential villa, a modern corporate office, or a bespoke interior space.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="aspect-square overflow-hidden rounded-full border-2 border-gold/20 p-4">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Studio Office"
                className="w-full h-full object-cover rounded-full transition-all duration-1000 grayscale-0 md:grayscale md:group-hover:grayscale-0"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-gold/10 rounded-full animate-spin-slow pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Our Mission", icon: Target, text: "To create timeless spaces that reflect innovation, comfort, and functionality while exceeding expectations." },
            { title: "Our Vision", icon: Eye, text: "To become one of India's leading studios, recognized for excellence, sustainability, and creative integrity." }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.2 }}
              className="bg-secondary/5 border border-secondary/10 p-12 md:hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-8">
                <item.icon className="text-gold" size={32} />
              </div>
              <h3 className="text-secondary text-3xl font-serif mb-6">{item.title}</h3>
              <p className="text-secondary/60 text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading subtitle="Our Values" title="The Pillars of Our Success" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              className="text-center p-8 bg-secondary/5 border border-secondary/10 md:hover:bg-gold md:hover:text-primary transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-8 mx-auto group-hover:bg-primary/10">
                <value.icon className="text-gold group-hover:text-primary transition-colors" size={32} />
              </div>
              <h4 className="text-secondary text-xl font-serif mb-4 group-hover:text-primary transition-colors">{value.title}</h4>
              <p className="text-secondary/60 text-sm leading-relaxed group-hover:text-primary/80 transition-colors">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-primary/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading subtitle="Our Team" title="Meet the Creative Minds" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-secondary/10 md:group-hover:border-gold/50 transition-colors duration-500" />
                </div>
                <h4 className="text-secondary text-2xl font-serif mb-1">{member.name}</h4>
                <span className="text-gold text-xs uppercase tracking-widest">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;