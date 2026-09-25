import { ArrowRight } from "lucide-react";
import { motion } from "motion/react"; // Changed from 'motion/react' to 'framer-motion' to match your About page
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { SERVICES } from "../constants";
const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, "-");
const Services = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background">
      <Helmet>
        <title>
          Our Services | Architectural & Interior Design | A Square Studio
        </title>
        <meta
          name="description"
          content="Architectural design, interior design, turnkey projects, 3D visualization, and renovation services from A Square Studio, serving clients across India."
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
              id={slugify(service.title)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center scroll-mt-32
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

                {service.title === "Interior Design" && (
                  <Link
                    to="/interior-design"
                    className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-8 mr-3"
                  >
                    Explore Interior Design <ArrowRight size={14} />
                  </Link>
                )}

                {service.title === "Turnkey Projects" && (
                  <Link
                    to="/turnkey-projects"
                    className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-8 mr-3"
                  >
                    Explore Turnkey Projects <ArrowRight size={14} />
                  </Link>
                )}

                {service.title === "Architectural Design" && (
                  <Link
                    to="/architectural-design"
                    className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-8 mr-3"
                  >
                    Explore Architectural Design <ArrowRight size={14} />
                  </Link>
                )}

                {service.title === "Renovation & Remodeling" && (
                  <Link
                    to="/renovation"
                    className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-8 mr-3"
                  >
                    Explore Renovation & Remodeling <ArrowRight size={14} />
                  </Link>
                )}

                {service.title === "3D Visualization" && (
                  <Link
                    to="/3d-visualization"
                    className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-8 mr-3"
                  >
                    Explore 3D Visualization <ArrowRight size={14} />
                  </Link>
                )}

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
      {/* Sector-Specific Services */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Explore Our Work"
            title="Sector-Specific Design Services"
            centered
          />

          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12 md:mb-16">
            Explore our architecture, interior design, and turnkey solutions for
            different project types and spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link
              to="/farmhouse-architecture"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Farmhouse Architecture & Turnkey
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/corporate-office-design"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Corporate Office Architecture & Interior
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/showroom-design"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Showroom Architecture & Interior
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/restaurant-cafe-design"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Restaurant & Cafe Architecture & Interior
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/commercial-architecture"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Commercial Architecture & Interior
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/turnkey-projects"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Turnkey Architecture, Interior Design & Execution
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/interior-design"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Interior Design Services
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/architectural-design"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Architectural Design Services
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/renovation"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                Renovation & Remodeling Services
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/3d-visualization"
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-xl font-serif group-hover:text-gold transition-colors">
                3D Architectural Visualization & Rendering
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
