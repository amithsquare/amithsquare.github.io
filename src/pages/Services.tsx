import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <div className="pt-32 bg-background">

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 mt-18">
        <SectionHeading
          subtitle="Our Expertise"
          title="Comprehensive Design Solutions"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-12">
          A Square Studio offers a wide range of architectural and interior design services, tailored to meet the unique needs of each client. From initial concept to final execution, we ensure every detail is perfect.
        </p>
      </section>

      {/* Detailed Services */}
      <section className="py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32">

          {SERVICES.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center 
              ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* Image */}
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="aspect-video overflow-hidden relative group">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"/>

                  <div className="absolute inset-0 border border-secondary/10 group-hover:border-gold/30 transition-colors duration-500" />

                </div>
                </div>


                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>

                  <span className="text-gold text-xs uppercase tracking-[0.4em] font-sans block mb-6">
                    Service 0{index + 1}
                  </span>

                  <h3 className="text-secondary text-4xl md:text-5xl font-serif font-medium mb-8">
                    {service.title}
                  </h3>

                  <p className="text-secondary/60 text-lg leading-relaxed mb-12">
                    {service.description}
                  </p>

                  {/* ✅ FIXED FEATURES LIST */}

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                    {service.features.map((feature, i) => (

                      <li
                        key={i}
                        className="flex items-center gap-3 text-secondary/80 text-sm"
                      >

                        <div className="w-2 h-2 bg-gold rounded-full" />

                        {feature}

                      </li>

                    ))}

                  </ul>

                  <button className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300">
                    Inquire Now
                  </button>

                </div>

            </motion.div>

          ))}

        </div>
      </section>

    </div>
  );
};

export default Services;