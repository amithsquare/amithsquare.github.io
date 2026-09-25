import { ArrowRight, Compass, FileText, Video, Wrench } from "lucide-react";
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
    icon: Compass,
    title: "Space Planning & Concept Development",
    points: [
      "Site conditions and requirements",
      "Spatial relationships",
      "Circulation",
      "Functional zoning",
      "Design direction",
    ],
  },
  {
    icon: FileText,
    title: "Architectural Drawings & Documentation",
    points: [
      "Floor plans",
      "Elevations and sections",
      "Working drawings",
      "Detailed documentation",
    ],
  },
  {
    icon: Video,
    title: "3D Architectural Visualization",
    points: [
      "Exterior visualization",
      "Interior visualization",
      "Design presentation",
      "Materials, finishes & design review",
    ],
  },
  {
    icon: Wrench,
    title: "Architecture + Interior + Execution Coordination",
    points: [
      "Connects with interior design",
      "3D visualization",
      "Documentation",
      "Construction coordination & turnkey execution",
    ],
  },
];

const PROJECT_TYPE_LINKS = [
  { title: "Residential - Farmhouse", to: "/farmhouse-architecture" },
  { title: "Corporate Offices", to: "/corporate-office-design" },
  { title: "Showrooms", to: "/showroom-design" },
  { title: "Restaurants & Cafes", to: "/restaurant-cafe-design" },
  { title: "Commercial Projects", to: "/commercial-architecture" },
  // Educational intentionally excluded - sector on hold pending client confirmation
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Requirement Study",
    desc: "Understanding your requirements and project scope.",
  },
  {
    step: "02",
    title: "Site & Context Analysis",
    desc: "Understanding site conditions and context.",
  },
  {
    step: "03",
    title: "Concept Development",
    desc: "Developing architectural concepts and design direction.",
  },
  {
    step: "04",
    title: "Space Planning",
    desc: "Planning spatial relationships, circulation, and zoning.",
  },
  {
    step: "05",
    title: "Architectural Design",
    desc: "Detailed architectural design development.",
  },
  {
    step: "06",
    title: "3D Visualization",
    desc: "Visualizing the design before execution begins.",
  },
  {
    step: "07",
    title: "Detailed Drawings",
    desc: "Working drawings and documentation.",
  },
  {
    step: "08",
    title: "Execution Coordination",
    desc: "Construction coordination through to handover.",
  },
];

const FAQS = [
  {
    q: "What do architectural design services include?",
    a: "Architectural design services include site and requirement study, concept development, space planning, layouts, elevations, working drawings, and design development.",
  },
  {
    q: "What does an architect do during the design process?",
    a: "An architect studies the site and requirements, develops a design concept, plans the space, and produces the drawings and documentation needed to build the project.",
  },
  {
    q: "Does A Square Studio provide architectural drawings?",
    a: "Yes, floor plans, elevations, sections, and working drawings are part of our architectural design service.",
  },
  {
    q: "Do you provide residential architectural design?",
    a: "Yes - including farmhouse projects. See our Farmhouse Architecture page for details.",
  },
  {
    q: "Do you provide commercial architectural design?",
    a: "Yes, including offices, showrooms, restaurants, and other commercial projects - see our sector pages for details.",
  },
  {
    q: "Do architectural design services include 3D visualization?",
    a: "Yes, exterior and interior 3D visualization is available to help you review the design before execution.",
  },
  {
    q: "Can architecture, interior design and execution be coordinated together?",
    a: "Yes - architectural design connects with interior design, visualization, documentation, and turnkey execution under one studio.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We serve clients across India, including New Delhi, Gwalior, and Indore.",
  },
];

const ArchitecturalDesign = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Architectural Design Services | A Square Studio</title>
        <meta
          name="description"
          content="A Square Studio provides architectural design, planning, drawings, visualization and execution coordination for residential and commercial projects across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/architectural-design"
        />
        <meta
          property="og:title"
          content="Architectural Design Services | A Square Studio"
        />
        <meta
          property="og:description"
          content="Architectural design, planning, drawings, and execution coordination from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/architectural-design"
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
            name: "Architectural Design Services",
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
            serviceType: "Architectural Design",
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
                name: "Architectural Design",
                item: "https://asquarestudios.com/architectural-design",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Architecture"
          title="Architectural Design Services"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio provides architecture from initial planning through
          detailed documentation and execution coordination - for residential
          and commercial projects across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Project{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/services"
            className="border border-secondary/20 text-secondary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary/10 transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What's Included"
          title="What Our Architectural Design Service Includes"
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

      {/* Architectural Design for Different Project Types */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Project Types"
            title="Architectural Design for Different Project Types"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECT_TYPE_LINKS.map((project) => (
              <Link
                key={project.to}
                to={project.to}
                className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
              >
                <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
                  {project.title}
                </span>
                <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore Further"
          title="Related Services"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          <Link
            to="/interior-design"
            className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
          >
            <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
              Interior Design
            </span>
            <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
              Learn More <ArrowRight size={14} />
            </span>
          </Link>
          <Link
            to="/turnkey-projects"
            className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
          >
            <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
              Turnkey Projects
            </span>
            <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
              Learn More <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Our Process"
            title="Our Architectural Design Process"
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

      {/* Why A Square Studio - factual, no unverified claims */}
      <section className="py-16 md:py-32 px-6 md:px-12">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Architecture, Planned Through to Execution"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Architectural design at A Square Studio is coordinated with interior
          design, visualization, and execution - offering a single point of
          contact for your project, from concept through to handover.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Architectural Design Questions"
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
            Planning a New Project?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From concept to execution, we're ready to talk through your
            architectural project.
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

export default ArchitecturalDesign;
