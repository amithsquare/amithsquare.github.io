import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Compass,
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
    title: "Showroom Architecture",
    points: [
      "Architectural planning",
      "Space planning and layouts",
      "Circulation planning",
      "Elevations and working drawings",
      "Design coordination",
    ],
  },
  {
    icon: Palette,
    title: "Showroom Interior Design",
    points: [
      "Display areas and product presentation",
      "Customer circulation",
      "Reception and counter areas",
      "Material and finish selection",
      "Lighting and furniture",
      "Visual consistency",
    ],
  },
  {
    icon: Compass,
    title: "Retail Showroom Space Planning",
    points: [
      "Available area and product categories",
      "Customer movement",
      "Display requirements",
      "Staff areas and storage",
    ],
  },
  {
    icon: Video,
    title: "3D Visualization",
    points: [
      "Layout visualization",
      "Materials and finishes",
      "Lighting studies",
      "Furniture and design review",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "From Design to Execution",
    points: [
      "Construction and execution",
      "Turnkey execution",
      "Site supervision",
      "Execution coordination",
    ],
  },
];

const SHOWROOM_TYPES = [
  "Fashion & Clothing Showrooms",
  "Jewellery Showrooms",
  "Furniture Showrooms",
  "Automobile Showrooms",
  "Electronics Showrooms",
  "Lifestyle & Retail Spaces",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understanding your showroom requirements, products, and brand identity.",
  },
  {
    step: "02",
    title: "Space Planning",
    desc: "Planning layout around customer movement and product categories.",
  },
  {
    step: "03",
    title: "Architecture",
    desc: "Architectural planning, layouts, and working drawings.",
  },
  {
    step: "04",
    title: "Interior Design",
    desc: "Display areas, materials, lighting, and furniture selection.",
  },
  {
    step: "05",
    title: "3D Visualization",
    desc: "Visualizing the showroom before execution begins.",
  },
  {
    step: "06",
    title: "Drawings",
    desc: "Detailed documentation for execution.",
  },
  {
    step: "07",
    title: "Execution",
    desc: "Construction coordination and site supervision.",
  },
  {
    step: "08",
    title: "Handover",
    desc: "Coordinated handover of the completed showroom.",
  },
];

const FAQS = [
  {
    q: "What does a showroom interior designer do?",
    a: "A showroom interior designer plans display areas, customer circulation, materials, lighting, and furniture so the space presents products effectively and works for how customers move through it.",
  },
  {
    q: "What does showroom interior design include?",
    a: "Showroom interior design covers display areas, product presentation, reception and counter areas, material and finish selection, lighting, furniture, and visual consistency.",
  },
  {
    q: "Can A Square Studio handle showroom architecture and interiors together?",
    a: "Yes - architecture and interior design are handled together under one studio, from space planning through to detailed interior design.",
  },
  {
    q: "Do you provide showroom space planning?",
    a: "Yes, we plan showroom layouts around available area, product categories, customer movement, and display requirements.",
  },
  {
    q: "Do you provide 3D visualization for showroom projects?",
    a: "Yes, 3D visualization is available to help you review layout, materials, finishes, and lighting before execution.",
  },
  {
    q: "Do you provide turnkey showroom execution?",
    a: "Yes, we offer turnkey showroom execution - coordinating design, construction, and site supervision through to handover.",
  },
  {
    q: "Can you design different types of retail showrooms?",
    a: "Yes - our showroom design approach can accommodate different retail categories, from fashion and jewellery to automobile and electronics showrooms.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const ShowroomDesign = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Showroom Architecture & Interior Design | A Square Studio</title>
        <meta
          name="description"
          content="A Square Studio provides showroom architecture, interior design, space planning, 3D visualization and turnkey execution for retail spaces across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/showroom-design"
        />
        <meta
          property="og:title"
          content="Showroom Architecture & Interior Design | A Square Studio"
        />
        <meta
          property="og:description"
          content="Showroom architecture, interior design, and turnkey execution from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/showroom-design"
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
            name: "Showroom Architecture & Interior Design",
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
            serviceType: "Showroom Architecture and Interior Design",
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
                name: "Showroom Design",
                item: "https://asquarestudios.com/showroom-design",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Showroom Projects"
          title="Showroom Architecture & Interior Design"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio handles showroom projects from architectural planning
          and space planning through interior design, visualization, and
          execution - serving clients across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Showroom Project{" "}
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
            title="Designing Showrooms That Work"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            A successful showroom balances customer movement, product
            visibility, circulation, display planning, brand identity, lighting,
            and storage - all working together rather than as separate concerns.
            That's the approach we bring to every showroom interior design
            project.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Showroom Design Services"
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

      {/* Showroom Types */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Showroom Types"
            title="Common Showroom Design Requirements"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
            Different retail categories have different display and circulation
            needs. Our showroom design approach can accommodate:
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {SHOWROOM_TYPES.map((type) => (
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

      {/* Why A Square Studio - factual, no unverified numbers per this page's spec */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Architecture & Interiors Under One Studio"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          A Square Studio brings architecture and interior design together under
          one studio - offering a single point of contact for your showroom
          project, from concept through to handover, with site-responsive
          planning at every stage.
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
            title="Showroom Project Questions"
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
            Planning a New Showroom?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From architectural planning to turnkey execution, we're ready to
            talk through your showroom project.
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

export default ShowroomDesign;
