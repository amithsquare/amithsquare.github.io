import {
  ArrowRight,
  Building2,
  ClipboardCheck,
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
    title: "Architecture",
    points: [
      "Site and space planning",
      "Architectural design",
      "Layouts",
      "Elevations and working drawings",
    ],
  },
  {
    icon: Palette,
    title: "Interior Design",
    points: [
      "Interior planning",
      "Materials and finishes",
      "Lighting",
      "Furniture planning and functional zoning",
    ],
  },
  {
    icon: Video,
    title: "3D Visualization",
    points: [
      "Design visualization",
      "Materials and finishes",
      "Lighting",
      "Spatial review",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Construction & Execution",
    points: [
      "Construction coordination",
      "Execution",
      "Site supervision",
      "Quality coordination and handover",
    ],
  },
];

const SECTOR_LINKS = [
  { title: "Farmhouse Projects", to: "/farmhouse-architecture" },
  { title: "Corporate Office Projects", to: "/corporate-office-design" },
  { title: "Showroom Projects", to: "/showroom-design" },
  { title: "Restaurant & Cafe Projects", to: "/restaurant-cafe-design" },
  { title: "Commercial Projects", to: "/commercial-architecture" },
  // Educational intentionally excluded - sector on hold pending client confirmation
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understanding your project's requirements and scope.",
  },
  {
    step: "02",
    title: "Requirement & Site Study",
    desc: "Understanding site conditions and project requirements.",
  },
  {
    step: "03",
    title: "Architecture & Space Planning",
    desc: "Architectural design and spatial planning.",
  },
  {
    step: "04",
    title: "Interior Design",
    desc: "Interior planning, materials, and furniture.",
  },
  {
    step: "05",
    title: "3D Visualization",
    desc: "Visualizing the project before execution begins.",
  },
  {
    step: "06",
    title: "Detailed Documentation",
    desc: "Working drawings and documentation for execution.",
  },
  {
    step: "07",
    title: "Construction & Execution",
    desc: "Construction coordination and site supervision.",
  },
  {
    step: "08",
    title: "Site Supervision & Handover",
    desc: "Quality coordination through to final handover.",
  },
];

const FAQS = [
  {
    q: "What is a turnkey project?",
    a: "A turnkey project brings multiple stages of a project together under coordinated design and execution, so you have a central point of contact rather than managing separate teams for each stage.",
  },
  {
    q: "What does a turnkey project include?",
    a: "Our turnkey service includes architecture, interior design, 3D visualization, documentation, and construction execution - coordinated as one service.",
  },
  {
    q: "What is turnkey interior design?",
    a: "Turnkey interior design means the interior planning, material selection, and execution are handled together under one coordinated service, rather than as separate stages.",
  },
  {
    q: "Does A Square Studio provide turnkey construction and execution?",
    a: "Yes, construction coordination, execution, and site supervision are part of our turnkey service.",
  },
  {
    q: "Can architecture, interior design and execution be handled together?",
    a: "Yes - that's the core of our turnkey approach. Architecture, interiors, visualization, documentation, and execution are coordinated under one studio.",
  },
  {
    q: "Do you provide turnkey office projects?",
    a: "Yes, turnkey execution is available for corporate office projects - see our Corporate Office Design page for details.",
  },
  {
    q: "Do you provide turnkey restaurant projects?",
    a: "Yes, turnkey execution is available for restaurant and cafe projects - see our Restaurant & Cafe Design page for details.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const TurnkeyProjects = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>
          Turnkey Architecture, Interior Design & Execution | A Square Studio
        </title>
        <meta
          name="description"
          content="A Square Studio provides turnkey architecture, interior design, construction coordination and execution services for projects across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/turnkey-projects"
        />
        <meta
          property="og:title"
          content="Turnkey Architecture, Interior Design & Execution | A Square Studio"
        />
        <meta
          property="og:description"
          content="Turnkey architecture, interior design, and execution from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/turnkey-projects"
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
            name: "Turnkey Architecture, Interior Design & Execution",
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
            serviceType: "Turnkey Architecture, Interior Design and Execution",
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
                name: "Turnkey Projects",
                item: "https://asquarestudios.com/turnkey-projects",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Turnkey Service"
          title="Turnkey Architecture, Interior Design & Execution"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio brings architecture, interiors, visualization,
          documentation, construction coordination, and execution together under
          one service - a single point of contact from concept through to
          handover.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Turnkey Project{" "}
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

      {/* What Is a Turnkey Project */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Overview"
            title="What Is a Turnkey Project?"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            A turnkey project brings multiple stages of a project together under
            coordinated design and execution, so you have a central point of
            contact rather than managing separate teams for each stage - from
            architecture through to the finished, ready-to-use space.
          </p>
        </div>
      </section>

      {/* What Our Turnkey Service Includes */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What's Included"
          title="What Our Turnkey Service Includes"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={section.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="bg-secondary/5 border border-secondary/10 p-6 md:p-8"
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6">
                <section.icon className="text-gold" size={24} />
              </div>
              <h3 className="text-secondary text-lg font-serif mb-4">
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

      {/* One Point of Coordination */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <SectionHeading
          subtitle="One Point of Coordination"
          title="Design and Execution, Coordinated"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Combining these services under one studio means architectural
          decisions, interior decisions, drawings, materials, and site
          coordination are managed together - rather than across separate,
          disconnected teams.
        </p>
      </section>

      {/* Types of Projects - sector internal links */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Where We Apply It"
          title="Turnkey Solutions Across Project Types"
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
            title="Turnkey Process"
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
          title="Architecture, Interiors & Execution, Coordinated"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Architecture, interior design, visualization, and execution are
          coordinated through one studio - from concept through to handover.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Turnkey Project Questions"
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
            Planning a Project from Design to Execution?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From architectural planning to turnkey execution, we're ready to
            talk through your project.
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

export default TurnkeyProjects;
