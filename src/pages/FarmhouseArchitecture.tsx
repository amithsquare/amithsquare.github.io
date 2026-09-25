import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Home,
  Sofa,
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

const OFFERINGS = [
  {
    icon: Home,
    title: "Farmhouse Architectural Design",
    points: [
      "Site planning and orientation",
      "Concept development",
      "Space and floor planning",
      "Elevations and working drawings",
      "Architectural detailing",
    ],
  },
  {
    icon: Sofa,
    title: "Farmhouse Interior Design",
    points: [
      "Living and entertainment spaces",
      "Bedrooms and bathrooms",
      "Kitchen planning",
      "Material and finish selection",
      "Lighting and furniture styling",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Construction & Execution",
    // NOTE: confirm exact scope with client before launch - plan flags this
    // explicitly as needing verification (contractor coordination,
    // procurement, quality control, supervision). Keep generic until confirmed.
    points: [
      "Coordination with execution partners",
      "Construction supervision",
      "Quality oversight through the build",
    ],
  },
  {
    icon: Building2,
    title: "Turnkey Farmhouse Projects",
    points: [
      "Single studio for design and execution",
      "One point of contact from concept to handover",
      "Coordinated architecture, interiors, and build",
    ],
  },
];

const DESIGN_APPROACHES = [
  "Modern Farmhouse",
  "Luxury Farmhouse",
  "Contemporary Farmhouse",
  "Traditional & Indian-Inspired Farmhouse",
  "Weekend Farmhouse",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Consultation",
    desc: "We start by understanding your land, requirements, and budget for the farmhouse.",
  },
  {
    step: "02",
    title: "Conceptual Design",
    desc: "Site-responsive architectural concepts and spatial planning tailored to your farmhouse plot.",
  },
  {
    step: "03",
    title: "Detailed Planning & Documentation",
    desc: "Detailed architectural and interior development, working drawings, and material selection.",
  },
  {
    step: "04",
    title: "Execution & Handover",
    desc: "Construction coordination and quality oversight through to final handover.",
  },
];

const FAQS = [
  {
    q: "What does a farmhouse architect do?",
    a: "A farmhouse architect plans and designs the layout, structure, and aesthetics of a farmhouse - from site planning and floor plans to elevations and detailed working drawings - tailored to the land and how the space will be used.",
  },
  {
    q: "Can A Square Studio design and construct a farmhouse?",
    a: "Yes. A Square Studio handles farmhouse architecture and interior design, with construction coordination and execution support as part of a turnkey engagement.",
  },
  {
    q: "Do you provide turnkey farmhouse projects?",
    a: "Yes, we offer turnkey farmhouse projects - combining architectural design, interior design, and execution coordination under one studio.",
  },
  {
    q: "Do you provide farmhouse interior design?",
    a: "Yes, farmhouse interior design is part of our farmhouse service - covering living spaces, bedrooms, kitchens, and material and furniture selection.",
  },
  {
    q: "Can you design a farmhouse based on an existing plot?",
    a: "Yes - our process begins with a site and requirement analysis so the design responds to your specific plot and its conditions.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with active project experience in New Delhi, Gwalior, and Indore.",
  },
];

const FarmhouseArchitecture = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Farmhouse Architect & Turnkey Projects | A Square Studio</title>
        <meta
          name="description"
          content="Farmhouse architecture, interior design, and turnkey execution from A Square Studio - serving clients across India with priority experience in New Delhi, Gwalior & Indore."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/farmhouse-architecture"
        />
        <meta
          property="og:title"
          content="Farmhouse Architect & Turnkey Projects | A Square Studio"
        />
        <meta
          property="og:description"
          content="Farmhouse architecture, interior design, and turnkey execution from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/farmhouse-architecture"
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
            name: "Farmhouse Architecture & Turnkey Projects",
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
            serviceType: "Farmhouse Architecture and Interior Design",
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
                name: "Farmhouse Architecture",
                item: "https://asquarestudios.com/farmhouse-architecture",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Farmhouse Projects"
          title="Farmhouse Architecture & Turnkey Design"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio designs and delivers farmhouses across India -
          combining architecture, interior design, and turnkey execution under
          one studio, with priority experience in New Delhi, Gwalior, and
          Indore.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Farmhouse Project{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/projects"
            className="border border-secondary/20 text-secondary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary/10 transition-all duration-300"
          >
            View Our Projects
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Overview"
            title="Architecture, Interiors & Execution - One Studio"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            A farmhouse project brings together site-responsive architectural
            planning, considered interior design, and - where landscape and
            construction are part of the scope - coordinated execution. We work
            through each of these as one connected process rather than treating
            design and build as separate, disconnected steps.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Farmhouse Services"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {OFFERINGS.map((offer, i) => (
            <motion.div
              key={offer.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="bg-secondary/5 border border-secondary/10 p-6 md:p-10"
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6">
                <offer.icon className="text-gold" size={26} />
              </div>
              <h3 className="text-secondary text-2xl font-serif mb-4">
                {offer.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {offer.points.map((p) => (
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

      {/* Design Approaches */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Design Direction"
            title="Farmhouse Design Can Be Approached in Several Ways"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
            Every farmhouse is shaped by its land, its purpose, and the client's
            brief. Some of the directions a farmhouse design can take include:
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {DESIGN_APPROACHES.map((style) => (
              <span
                key={style}
                className="text-secondary/80 text-sm uppercase tracking-widest border border-secondary/10 px-5 py-3"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Our Process"
            title="Farmhouse Design & Execution Process"
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

      {/* Why A Square Studio */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Architecture & Interiors Under One Studio"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          With 5+ years of experience in architectural and interior design, A
          Square Studio brings design and execution together - offering a single
          point of contact for your farmhouse from concept through to handover,
          with site-responsive planning at every stage.
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
            to="/projects"
            className="group bg-secondary/5 border border-secondary/10 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
          >
            <span className="text-secondary text-lg font-serif group-hover:text-gold transition-colors">
              Our Projects
            </span>
            <span className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
              View Portfolio <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Farmhouse Project Questions"
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
            Tell Us About Your Farmhouse
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Whether you have land ready or are still exploring the
            possibilities, we're happy to talk through your farmhouse project.
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

export default FarmhouseArchitecture;
