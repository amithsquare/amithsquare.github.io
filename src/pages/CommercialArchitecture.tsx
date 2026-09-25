import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Compass,
  LayoutGrid,
  Video,
} from "lucide-react";
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
    title: "Commercial Architecture",
    points: [
      "Architectural planning",
      "Site and space planning",
      "Building layouts and circulation",
      "Elevations and working drawings",
      "Design development",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Commercial Interior Design",
    points: [
      "Interior planning and functional zoning",
      "User and customer circulation",
      "Materials, finishes, and lighting",
      "Furniture and visual character",
      "Space utilization",
    ],
  },
  {
    icon: Compass,
    title: "Commercial Space Planning",
    points: [
      "Available area and functional requirements",
      "Departments and zones",
      "Access and circulation",
      "Storage and service areas",
    ],
  },
  {
    icon: Video,
    title: "3D Visualization",
    points: [
      "Layouts and materials",
      "Finishes and lighting",
      "Furniture",
      "Exterior and interior design direction",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey & Execution",
    points: [
      "Construction and execution coordination",
      "Site supervision",
      "Detailed documentation",
      "Handover",
    ],
  },
];

const PROJECT_TYPES = [
  "Commercial Buildings",
  "Retail & Commercial Spaces",
  "Commercial Complexes",
  "Business Properties",
  "Mixed Commercial-Use Spaces",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understanding your commercial project's requirements and scope.",
  },
  {
    step: "02",
    title: "Site & Requirement Study",
    desc: "Understanding site conditions and functional requirements.",
  },
  {
    step: "03",
    title: "Space Planning",
    desc: "Planning layout around access, zones, and circulation.",
  },
  {
    step: "04",
    title: "Architectural + Interior Design",
    desc: "Building design alongside interior design development.",
  },
  {
    step: "05",
    title: "3D Visualization",
    desc: "Visualizing the design before execution begins.",
  },
  {
    step: "06",
    title: "Detailed Drawings",
    desc: "Working drawings and documentation for execution.",
  },
  {
    step: "07",
    title: "Execution & Site Coordination",
    desc: "Construction coordination and site supervision.",
  },
  {
    step: "08",
    title: "Handover",
    desc: "Coordinated handover of the completed project.",
  },
];

const FAQS = [
  {
    q: "What does a commercial architect do?",
    a: "A commercial architect plans and designs commercial buildings and spaces - from site planning and building layouts to elevations and working drawings - suited to the property and its intended use.",
  },
  {
    q: "What does commercial architecture include?",
    a: "It covers architectural planning, space planning, building layouts, circulation, elevations, and working drawings for commercial properties.",
  },
  {
    q: "Does A Square Studio provide commercial interior design?",
    a: "Yes, commercial interior design is part of our service - covering functional zoning, materials, lighting, furniture, and visual character.",
  },
  {
    q: "Can you handle commercial building design and interiors together?",
    a: "Yes - architecture and interior design are handled together under one studio, from planning through to detailed design.",
  },
  {
    q: "Do you provide commercial space planning?",
    a: "Yes, we plan commercial spaces around available area, functional requirements, zones, access, and circulation.",
  },
  {
    q: "Do you provide 3D visualization for commercial projects?",
    a: "Yes, 3D visualization is available to help you review layouts, materials, finishes, and lighting before execution.",
  },
  {
    q: "Do you provide turnkey commercial execution?",
    a: "Yes, we offer turnkey commercial execution - coordinating design, construction, and site supervision through to handover.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const CommercialArchitecture = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>
          Commercial Architecture & Interior Design | A Square Studio
        </title>
        <meta
          name="description"
          content="A Square Studio provides commercial architecture, interior design, space planning, 3D visualization and turnkey execution for commercial spaces across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/commercial-architecture"
        />
        <meta
          property="og:title"
          content="Commercial Architecture & Interior Design | A Square Studio"
        />
        <meta
          property="og:description"
          content="Commercial architecture, interior design, and turnkey execution from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/commercial-architecture"
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
            name: "Commercial Architecture & Interior Design",
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
            serviceType: "Commercial Architecture and Interior Design",
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
                name: "Commercial Architecture",
                item: "https://asquarestudios.com/commercial-architecture",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Commercial Projects"
          title="Commercial Architecture & Interior Design"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio handles commercial projects from architectural
          planning and space planning through interior design, visualization,
          and execution - serving clients across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Commercial Project{" "}
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

      {/* Sections */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="What We Offer"
            title="Commercial Design Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
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
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Project Types"
          title="Types of Commercial Projects"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          Commercial architecture covers a broad range of property types. Our
          design approach can accommodate:
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {PROJECT_TYPES.map((type) => (
            <span
              key={type}
              className="text-secondary/80 text-sm uppercase tracking-widest border border-secondary/10 px-5 py-3"
            >
              {type}
            </span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Our Process"
            title="Design & Execution Process"
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

      {/* Why A Square Studio - factual, no unverified numbers */}
      <section className="py-16 md:py-32 px-6 md:px-12">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Architecture & Interiors Under One Studio"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          A Square Studio brings architecture and interior design together under
          one studio - offering a single point of contact for your commercial
          project, from concept through to handover.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Commercial Project Questions"
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
            Planning a New Commercial Project?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From architectural planning to turnkey execution, we're ready to
            talk through your commercial project.
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

export default CommercialArchitecture;
