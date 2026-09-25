import { ArrowRight, ClipboardList, Building2, Hammer, Layers } from "lucide-react";
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
    icon: ClipboardList,
    title: "Assessment & Planning",
    points: [
      "Assessing the existing space",
      "Identifying functional problems",
      "Redesigning layouts",
      "Material and finish upgrades",
      "Requirement study and planning",
    ],
  },
  {
    icon: Building2,
    title: "Architectural Renovation",
    points: [
      "Architectural assessment",
      "Layout redesign",
      "Elevation and facade changes, where applicable",
      "Spatial modifications",
      "Design documentation",
    ],
  },
  {
    icon: Layers,
    title: "Interior Renovation",
    points: [
      "Materials and finishes",
      "Lighting",
      "Furniture and space planning",
      "Interior upgrades",
    ],
  },
  {
    icon: Hammer,
    title: "Renovation + Execution",
    points: [
      "Detailed documentation",
      "Execution and site coordination",
      "Construction supervision",
      "Coordinated handover",
    ],
  },
];

const RENOVATION_TYPES = {
  Residential: [
    "House Renovation",
    "Home Remodeling",
    "Layout Changes",
    "Interior Upgrades",
    "Kitchen & Bathroom Updates",
    "Exterior Improvements",
  ],
  "Commercial & Office": [
    "Office Refurbishment",
    "Workspace Reconfiguration",
    "Commercial Interior Upgrades",
    "Showroom & Retail Renovation",
    "Existing-Space Redesign",
  ],
};

const SECTOR_LINKS = [
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
    title: "Existing Space Assessment",
    desc: "Understanding the current space, its condition, and constraints.",
  },
  {
    step: "02",
    title: "Requirements & Planning",
    desc: "Defining goals, budget, and scope for the renovation.",
  },
  {
    step: "03",
    title: "Renovation Concept",
    desc: "Developing the direction for layout, look, and function.",
  },
  {
    step: "04",
    title: "Architectural / Interior Design",
    desc: "Detailed design development for the renovated space.",
  },
  {
    step: "05",
    title: "3D Visualization",
    desc: "Visualizing the renovated space before work begins.",
  },
  {
    step: "06",
    title: "Detailed Documentation",
    desc: "Working drawings and documentation for execution.",
  },
  {
    step: "07",
    title: "Execution & Site Coordination",
    desc: "Construction coordination and on-site supervision.",
  },
  {
    step: "08",
    title: "Handover",
    desc: "Coordinated handover of the completed renovation.",
  },
];

const FAQS = [
  {
    q: "What does renovation and remodeling include?",
    a: "Renovation and remodeling includes assessing an existing space, redesigning layouts, updating interiors, making architectural alterations where required, and coordinating execution - covering both residential and commercial projects.",
  },
  {
    q: "What does a renovation architect do?",
    a: "A renovation architect assesses the existing structure, redesigns layouts, addresses architectural alterations such as elevation or spatial changes, and prepares documentation to guide execution.",
  },
  {
    q: "Can A Square Studio renovate existing homes?",
    a: "Yes, we work with existing homes to update layouts, interiors, and finishes, and coordinate execution where required.",
  },
  {
    q: "Do you provide office renovation services?",
    a: "Yes, we provide office refurbishment and workspace reconfiguration for existing commercial spaces.",
  },
  {
    q: "Do you handle commercial renovation projects?",
    a: "Yes, we handle renovation for commercial spaces including offices, showrooms, and retail spaces.",
  },
  {
    q: "Can renovation and interior design be handled together?",
    a: "Yes, renovation projects often include interior design work - materials, finishes, lighting, and space planning - handled together under one studio.",
  },
  {
    q: "Do you provide 3D visualization for renovation projects?",
    a: "Yes, 3D visualization is available to help you review the renovated layout, materials, and finishes before execution.",
  },
  {
    q: "Do you provide execution and site coordination?",
    a: "Yes, we coordinate execution and site supervision through to handover for renovation projects.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const Renovation = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Renovation & Remodeling Services | A Square Studio</title>
        <meta
          name="description"
          content="A Square Studio provides renovation and remodeling services for residential and commercial spaces, including design, planning, interior upgrades and execution across India."
        />
        <link rel="canonical" href="https://asquarestudios.com/renovation" />
        <meta
          property="og:title"
          content="Renovation & Remodeling Services | A Square Studio"
        />
        <meta
          property="og:description"
          content="Renovation and remodeling services for residential and commercial spaces from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/renovation"
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
            name: "Renovation & Remodeling Services",
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
            serviceType: "Renovation and Remodeling",
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
                name: "Renovation & Remodeling",
                item: "https://asquarestudios.com/renovation",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Renovation & Remodeling"
          title="Renovation & Remodeling Services"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio works with existing spaces to rethink layouts,
          update interiors, improve functionality, and coordinate renovation
          work - for residential and commercial spaces across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Renovation Project{" "}
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
            title="Renovation Is More Than Decorating"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            Renovating a space is different from simply decorating it. It
            starts with understanding what isn't working in an existing
            space - the layout, the flow, the finishes - and then redesigning
            it. That can mean architectural alterations, updated interiors,
            or both, coordinated through to execution.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Renovation & Remodeling Services"
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

      {/* Types of Renovation */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Types of Renovation"
            title="Residential & Commercial Renovation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            {Object.entries(RENOVATION_TYPES).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-secondary text-xl font-serif mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-secondary/80 text-sm uppercase tracking-widest border border-secondary/10 px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific Renovation */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore Further"
          title="Sector-Specific Renovation"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
            title="Renovation Process"
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
          title="Renovation, Designed and Executed Together"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Renovation at A Square Studio is handled alongside architecture,
          interior design, and execution - giving you a single point of
          contact for your renovation project, from assessment through to
          handover.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Renovation & Remodeling Questions"
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
            Planning a Renovation Project?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From assessment to execution, we're ready to talk through your
            renovation or remodeling project.
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

export default Renovation;