import { ArrowRight, Home, Palette, Video, Wrench } from "lucide-react";
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
    icon: Home,
    title: "Interior Space Planning",
    points: [
      "Functional zoning",
      "Circulation",
      "Room relationships",
      "Furniture placement and storage",
      "Spatial efficiency",
    ],
  },
  {
    icon: Palette,
    title: "Materials, Finishes & Lighting",
    points: [
      "Material selection",
      "Finishes",
      "Colour and material coordination",
      "Lighting planning",
      "Furniture considerations",
    ],
  },
  {
    icon: Video,
    title: "3D Visualization",
    points: [
      "3D interiors",
      "Spatial visualization",
      "Materials and finishes",
      "Lighting and design review",
    ],
  },
  {
    icon: Wrench,
    title: "Interior Design + Execution",
    points: [
      "Detailed drawings",
      "Material coordination",
      "Site coordination",
      "Construction, supervision & handover",
    ],
  },
];

const SPACE_TYPES = {
  Residential: [
    "Homes",
    "Apartments",
    "Villas",
    "Bedrooms",
    "Living Spaces",
    "Kitchens",
  ],
  Commercial: [
    "Offices",
    "Showrooms",
    "Restaurants & Cafes",
    "Commercial Spaces",
  ],
};

const SECTOR_LINKS = [
  { title: "Corporate Office Interior Design", to: "/corporate-office-design" },
  { title: "Showroom Interior Design", to: "/showroom-design" },
  { title: "Restaurant & Cafe Interior Design", to: "/restaurant-cafe-design" },
  { title: "Commercial Interior Design", to: "/commercial-architecture" },
  { title: "Farmhouse Interior Design", to: "/farmhouse-architecture" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understanding your space, requirements, and budget.",
  },
  {
    step: "02",
    title: "Space & Requirement Study",
    desc: "Understanding the space and how it will be used.",
  },
  {
    step: "03",
    title: "Concept Development",
    desc: "Developing interior design concepts and direction.",
  },
  {
    step: "04",
    title: "Interior Design",
    desc: "Detailed interior development - materials, lighting, furniture.",
  },
  {
    step: "05",
    title: "3D Visualization",
    desc: "Visualizing the interior before execution begins.",
  },
  {
    step: "06",
    title: "Detailed Documentation",
    desc: "Working drawings and documentation for execution.",
  },
  {
    step: "07",
    title: "Execution / Coordination",
    desc: "Construction coordination and site supervision.",
  },
  {
    step: "08",
    title: "Handover",
    desc: "Coordinated handover of the completed interior.",
  },
];

const FAQS = [
  {
    q: "What do interior design services include?",
    a: "Interior design services include space planning, material and finish selection, lighting planning, furniture planning, 3D visualization, and - where needed - execution coordination.",
  },
  {
    q: "What does an interior designer do?",
    a: "An interior designer plans how a space functions and looks - from layout and circulation to materials, lighting, and furniture - so the space works for how it will actually be used.",
  },
  {
    q: "Does A Square Studio provide residential and commercial interior design?",
    a: "Yes, we design interiors for both residential spaces - homes, apartments, villas - and commercial spaces, including offices, showrooms, and restaurants.",
  },
  {
    q: "Do you provide space planning?",
    a: "Yes, functional zoning, circulation, and spatial efficiency are core to our interior design process.",
  },
  {
    q: "Do you provide 3D interior visualization?",
    a: "Yes, 3D visualization is available to help you review layouts, materials, finishes, and lighting before execution.",
  },
  {
    q: "Can interior design and execution be handled together?",
    a: "Yes - interior design can continue into detailed drawings, material coordination, site coordination, and construction execution under one studio.",
  },
  {
    q: "Can you help with materials, finishes and lighting?",
    a: "Yes, material selection, finishes, and lighting planning are part of our core interior design service.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const InteriorDesign = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Interior Design Services | A Square Studio</title>
        <meta
          name="description"
          content="A Square Studio provides interior design services for residential and commercial spaces, including space planning, materials, 3D visualization and execution."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/interior-design"
        />
        <meta
          property="og:title"
          content="Interior Design Services | A Square Studio"
        />
        <meta
          property="og:description"
          content="Interior design services for residential and commercial spaces from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/interior-design"
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
            name: "Interior Design Services",
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
            serviceType: "Interior Design",
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
                name: "Interior Design",
                item: "https://asquarestudios.com/interior-design",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Interior Design"
          title="Interior Design Services"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          Interior design for residential and commercial spaces, from space
          planning and material selection through visualization and execution -
          serving clients across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Interior Project{" "}
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
            title="Interior Design Is More Than Decoration"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            Good interior design starts with understanding the space -
            functional planning, circulation, materials, finishes, lighting,
            furniture, and an overall visual direction that ties everything
            together.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Interior Design Services"
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

      {/* Interior Design for Different Spaces */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Spaces We Design"
            title="Interior Design for Different Spaces"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            {Object.entries(SPACE_TYPES).map(([category, items]) => (
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

      {/* Sector-Specific Interior Design */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore Further"
          title="Sector-Specific Interior Design"
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
            title="Interior Design Process"
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
          title="Interiors, Planned and Executed Together"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Interior design at A Square Studio is handled alongside architecture
          and execution - offering a single point of contact for your interior
          project, from concept through to handover.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Interior Design Questions"
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
            Planning Your Interior Project?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From space planning to execution, we're ready to talk through your
            interior design project.
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

export default InteriorDesign;
