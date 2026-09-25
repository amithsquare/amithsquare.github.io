import { ArrowRight, Box, Building2, Eye, Home } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const SECTIONS = [
  {
    icon: Building2,
    title: "3D Architectural Visualization",
    points: [
      "Building exteriors",
      "Architectural forms",
      "Elevations",
      "Materials",
      "Overall design presentation",
    ],
  },
  {
    icon: Home,
    title: "3D Interior Visualization",
    points: [
      "Living spaces, offices, showrooms, restaurants & cafes",
      "Furniture",
      "Lighting",
      "Materials and finishes",
    ],
  },
  {
    icon: Eye,
    title: "Exterior Rendering",
    points: [
      "Building facade",
      "Exterior materials",
      "Lighting",
      "Architectural character",
      "Contextual presentation",
    ],
  },
  {
    icon: Box,
    title: "3D Floor Plans / Spatial Visualization",
    points: [
      "Room relationships",
      "Furniture placement",
      "Circulation",
      "Spatial organization",
    ],
  },
];

const WHO_CAN_USE = [
  "Architecture Projects",
  "Interior Design Projects",
  "Farmhouse Projects",
  "Corporate Offices",
  "Showrooms",
  "Restaurants & Cafes",
  "Commercial Projects",
];

const SECTOR_LINKS = [
  { title: "Farmhouse Architecture", to: "/farmhouse-architecture" },
  { title: "Corporate Office Design", to: "/corporate-office-design" },
  { title: "Showroom Design", to: "/showroom-design" },
  { title: "Restaurant & Cafe Design", to: "/restaurant-cafe-design" },
  { title: "Commercial Architecture", to: "/commercial-architecture" },
];

const RELATED_SERVICES = [
  { title: "Architectural Design", to: "/architectural-design" },
  { title: "Interior Design", to: "/interior-design" },
  { title: "Turnkey Projects", to: "/turnkey-projects" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Project Brief",
    desc: "Understanding the space, goals, and visualization requirements.",
  },
  {
    step: "02",
    title: "Design / Drawings",
    desc: "Working from architectural or interior drawings as the base.",
  },
  {
    step: "03",
    title: "3D Model Development",
    desc: "Building the 3D model of the space or structure.",
  },
  {
    step: "04",
    title: "Materials & Lighting",
    desc: "Applying materials, finishes, and lighting to the model.",
  },
  {
    step: "05",
    title: "Rendering",
    desc: "Producing the visual output for review.",
  },
  {
    step: "06",
    title: "Review & Revisions",
    desc: "Reviewing the visuals and refining as needed.",
  },
  {
    step: "07",
    title: "Final Visuals",
    desc: "Delivering the completed visualization.",
  },
];

const FAQS = [
  {
    q: "What is 3D architectural visualization?",
    a: "3D architectural visualization is the process of creating realistic 3D representations of a building or space, helping clients understand a design before it's built.",
  },
  {
    q: "What does a 3D visualization service include?",
    a: "It typically includes 3D modeling, application of materials and lighting, and rendering of interior or exterior views based on the project's drawings.",
  },
  {
    q: "Do you provide 3D interior visualization?",
    a: "Yes, we provide 3D interior visualization for residential and commercial spaces, including materials, lighting, and furniture.",
  },
  {
    q: "Do you provide exterior architectural rendering?",
    a: "Yes, we provide exterior rendering covering building facades, materials, lighting, and overall architectural character.",
  },
  {
    q: "Can you create 3D floor-plan visualizations?",
    a: "Yes, we can visualize floor plans to help communicate room relationships, furniture placement, and spatial organization.",
  },
  {
    q: "Can 3D visualization be used for office, showroom and restaurant projects?",
    a: "Yes, 3D visualization supports architecture and interior projects across sectors, including offices, showrooms, and restaurants.",
  },
  {
    q: "Do you provide revisions during the visualization process?",
    a: "Yes, visuals are reviewed and refined as part of the process before final delivery.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const Visualization3D = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>
          3D Architectural Visualization & Rendering Services | A Square Studio
        </title>
        <meta
          name="description"
          content="A Square Studio provides 3D architectural visualization, interior and exterior rendering, and design visualization services for architecture and interior projects across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/3d-visualization"
        />
        <meta
          property="og:title"
          content="3D Architectural Visualization & Rendering Services | A Square Studio"
        />
        <meta
          property="og:description"
          content="3D architectural visualization and rendering services from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/3d-visualization"
        />
        <meta
          property="og:image"
          content="https://asquarestudios.com/og-image.jpg"
        />
        <meta
          name="twitter:title"
          content="Architectural Design Services | A Square Studio"
        />
        <meta
          name="twitter:description"
          content="Architectural design, planning, drawings, visualization, and execution coordination from A Square Studio."
        />
        <meta
          name="twitter:image"
          content="https://asquarestudios.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "3D Architectural Visualization & Rendering Services",
            provider: {
              "@type": "ProfessionalService",
              name: "A Square Studio",
            },
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "City", name: "New Delhi" },
              { "@type": "City", name: "Gwalior" },
              { "@type": "City", name: "Indore" },
            ],
            serviceType: "3D Architectural Visualization",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://asquarestudios.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "3D Visualization",
                item: "https://asquarestudios.com/3d-visualization",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="3D Visualization"
          title="3D Architectural Visualization & Rendering Services"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          3D visualization helps you understand architectural and interior
          concepts before execution - covering interior, exterior, and spatial
          visualization for projects across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Visualization Project{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/services"
            className="border border-secondary/20 text-secondary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary/10 transition-all duration-300"
          >
            View Our Services
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Overview"
            title="What 3D Visualization Does"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            3D visualization lets you review a design before it's built -
            understanding spatial relationships, materials, finishes, and
            lighting, and seeing interiors and exteriors rendered clearly enough
            to communicate the design intent.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Our 3D Visualization Services"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="bg-secondary/5 border border-secondary/10 p-6 md:p-10"
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6">
                <section.icon className="text-gold" size={26} />
              </div>
              <h3 className="text-secondary text-2xl font-serif mb-4">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-secondary/70 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who Can Use the Service */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Who It's For"
            title="Who Can Use the Service?"
          />
          <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
            {WHO_CAN_USE.map((item) => (
              <span
                key={item}
                className="text-secondary/80 text-sm uppercase tracking-widest border border-secondary/10 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific Visualization */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore Further"
          title="Visualization for Your Project Type"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SECTOR_LINKS.map((sector) => (
            <Link
              key={sector.to}
              to={sector.to}
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
                {sector.title}
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Our Process"
            title="Visualization Workflow"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-secondary/5 border border-secondary/10 p-8"
              >
                <span className="text-gold font-serif text-3xl mb-4 block">
                  {s.step}
                </span>
                <h3 className="text-secondary text-lg font-serif mb-3">
                  {s.title}
                </h3>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Related Services"
          title="Explore Related Services"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {RELATED_SERVICES.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
                {service.title}
              </span>
              <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why A Square Studio - factual, no unverified claims */}
      <section className="py-16 md:py-32 px-6 md:px-12">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Design Understanding Behind Every Visual"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Our 3D visualization is grounded in architectural and interior design
          understanding - translating design concepts into clear visuals,
          coordinated with the design and execution teams.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="3D Visualization Questions"
            centered
          />
          <div className="flex flex-col gap-4 md:gap-8">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300"
              >
                <h4 className="text-secondary text-xl font-serif mb-4 flex items-center gap-4">
                  <span className="text-gold font-mono text-sm">
                    0{index + 1}
                  </span>
                  {faq.q}
                </h4>
                <p className="text-secondary/60 text-base leading-relaxed pl-10">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-gold p-12 md:p-24 text-center">
          <h2 className="text-primary text-4xl md:text-6xl font-serif font-medium mb-8">
            Planning a Visualization Project?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From concept to rendered visuals, we're ready to talk through your
            3D visualization needs.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-secondary px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-secondary hover:text-primary transition-all duration-500 inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Visualization3D;
