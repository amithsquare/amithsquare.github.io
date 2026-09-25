import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  LayoutGrid,
  Palette,
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
    title: "Corporate Office Architecture",
    points: [
      "Architectural planning",
      "Space planning and office layouts",
      "Circulation planning",
      "Working drawings",
      "Design development and coordination",
    ],
  },
  {
    icon: Palette,
    title: "Corporate Office Interior Design",
    points: [
      "Reception areas",
      "Workstations and cabins",
      "Meeting and conference rooms",
      "Common areas",
      "Material, finish, and lighting selection",
      "Furniture planning",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Workspace Planning",
    points: [
      "Available area and employee requirements",
      "Departmental planning",
      "Private vs. collaborative areas",
      "Meeting spaces and storage",
      "Movement and circulation",
    ],
  },
  {
    icon: Video,
    title: "3D Visualization",
    points: [
      "Spatial layouts",
      "Materials and finishes",
      "Lighting studies",
      "Furniture and overall design direction",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "From Office Design to Execution",
    points: [
      "Construction and execution coordination",
      "Turnkey execution",
      "Site supervision",
      "Coordination through to handover",
    ],
  },
];

const WORKSPACE_TYPES = [
  "Corporate Headquarters",
  "Professional Offices",
  "Startup Workplaces",
  "Administrative Offices",
  "Consultation Offices",
  "Executive Offices",
  "Collaborative Workspaces",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Requirement Study",
    desc: "Understanding your business requirements, team size, and workplace goals.",
  },
  {
    step: "02",
    title: "Space Planning & Concept Development",
    desc: "Developing spatial concepts based on functional circulation and available area.",
  },
  {
    step: "03",
    title: "Architectural + Interior Design",
    desc: "Detailed architectural and interior development for the workspace.",
  },
  {
    step: "04",
    title: "3D Visualization & Design Review",
    desc: "Visualizing layouts, materials, and lighting before execution begins.",
  },
  {
    step: "05",
    title: "Detailed Drawings & Documentation",
    desc: "Working drawings and documentation for execution.",
  },
  {
    step: "06",
    title: "Execution & Site Coordination",
    desc: "Construction coordination and site supervision through the build.",
  },
  {
    step: "07",
    title: "Final Handover",
    desc: "Coordinated handover of the completed workspace.",
  },
];

const FAQS = [
  {
    q: "What does a corporate office architect do?",
    a: "A corporate office architect plans and designs the workplace - from space planning and office layouts to working drawings - so the space matches how the business actually operates.",
  },
  {
    q: "What does corporate office interior design include?",
    a: "Corporate office interior design covers reception areas, workstations, cabins, meeting rooms, common areas, and the material, lighting, and furniture selections that go with them.",
  },
  {
    q: "Does A Square Studio provide office space planning?",
    a: "Yes. We plan workspaces around available area, employee requirements, departments, and the balance between private and collaborative spaces.",
  },
  {
    q: "Can you handle office architecture and interior design together?",
    a: "Yes - architecture and interior design are handled together under one studio, from initial planning through to detailed design.",
  },
  {
    q: "Do you provide 3D visualization for office projects?",
    a: "Yes, 3D visualization is available to help you review spatial layouts, materials, finishes, and lighting before execution.",
  },
  {
    q: "Do you provide turnkey office execution?",
    a: "Yes, we offer turnkey office execution - coordinating design, construction, and site supervision through to handover.",
  },
  {
    q: "Do you provide site supervision and execution coordination?",
    a: "Yes, site supervision and execution coordination are part of our turnkey office service.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, including projects and enquiries from New Delhi, Gwalior, and Indore.",
  },
];

const CorporateOfficeDesign = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>
          Corporate Office Architecture & Interior Design | A Square Studio
        </title>
        <meta
          name="description"
          content="A Square Studio provides corporate office architecture, interior design, space planning, 3D visualization and turnkey execution for workplaces across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/corporate-office-design"
        />
        <meta
          property="og:title"
          content="Corporate Office Architecture & Interior Design | A Square Studio"
        />
        <meta
          property="og:description"
          content="Corporate office architecture, interior design, and turnkey execution from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/corporate-office-design"
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
            name: "Corporate Office Architecture & Interior Design",
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
            serviceType: "Corporate Office Architecture and Interior Design",
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
                name: "Corporate Office Design",
                item: "https://asquarestudios.com/corporate-office-design",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Corporate Office Projects"
          title="Corporate Office Architecture & Interior Design"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio handles corporate workplace projects from
          architectural planning through interior design, visualization, and
          execution - serving clients across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Office Project{" "}
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

      {/* Introduction */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Overview"
            title="What Corporate Office Design Involves"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            A corporate office project starts with understanding the business's
            actual requirements - how the team works, how space should be
            allocated, and how people move through it. An office architect
            considers space planning, circulation, functional layouts, and
            architectural requirements alongside the interior design and
            documentation needed for execution.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Corporate Office Services"
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

      {/* Types of Workspaces */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Workspace Types"
            title="Common Corporate Workspace Requirements"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
            Every workplace has different requirements. Corporate office
            projects may include a combination of spaces such as:
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {WORKSPACE_TYPES.map((type) => (
              <span
                key={type}
                className="text-secondary/80 text-sm uppercase tracking-widest border border-secondary/10 px-5 py-3"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
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
      </section>

      {/* Why A Square Studio */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Architecture & Interiors Under One Studio"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          With 5+ years of experience in architectural and interior design, A
          Square Studio brings design and execution together - offering a single
          point of contact for your corporate office project, from concept
          through to handover.
        </p>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore Further"
          title="Related Services & Projects"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Link
            to="/architectural-design"
            className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
          >
            <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
              Architectural Design
            </span>
            <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
              Learn More <ArrowRight size={14} />
            </span>
          </Link>
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
          <Link
            to="/services#3d-visualization"
            className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
          >
            <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
              3D Visualization
            </span>
            <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
              Learn More <ArrowRight size={14} />
            </span>
          </Link>
        </div>
        <div className="mt-6 md:mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-secondary/60 hover:text-gold text-xs uppercase tracking-widest font-bold transition-colors"
          >
            View Our Projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Corporate Office Questions"
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
            Planning a New Corporate Office?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From architectural planning to turnkey execution, we're ready to
            talk through your workplace project.
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

export default CorporateOfficeDesign;
