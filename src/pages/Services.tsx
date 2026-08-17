import { motion } from "motion/react"; // Changed from 'motion/react' to 'framer-motion' to match your About page
import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/SectionHeading";
import { SERVICES } from "../constants";

const Services = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background">
      <Helmet>
        <title>
          Our Services | Architectural & Interior Design | A Square Studio
        </title>
        <meta
          name="description"
          content="Architectural design, interior design, turnkey projects, 3D visualization, and renovation services from A Square Studio, serving North India."
        />
        <link rel="canonical" href="https://asquarestudios.com/services" />
      </Helmet>
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Our Expertise"
          title="Comprehensive Design Solutions"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio offers a wide range of architectural and interior
          design services, tailored to meet the unique needs of each client.
          From initial concept to final execution, we ensure every detail is
          perfect.
        </p>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center 
              ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="aspect-video overflow-hidden relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    /* 
                       EXPLANATION:
                       grayscale-0: Default for mobile (Colorful)
                       md:grayscale: Grayscale for desktop screens
                       md:group-hover:grayscale-0: Colorful when hovering on desktop
                    */
                    className="w-full h-full object-cover transition-all duration-1000 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-secondary/10 md:group-hover:border-gold/30 transition-colors duration-500" />
                </div>
              </div>

              {/* Content Section */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="text-gold text-xs uppercase tracking-[0.4em] font-sans block mb-6">
                  Service 0{index + 1}
                </span>

                <h3 className="text-secondary text-4xl md:text-5xl font-serif font-medium mb-4 md:mb-8">
                  {service.title}
                </h3>

                <p className="text-secondary/60 text-lg leading-relaxed mb-6 md:mb-12">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-12">
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

                {/* Inquire Now Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScwxwgGc_8LkwLv7JQMRNa94slMZcJ5oQWmSBYTcobMAMGkbA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 text-center"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
