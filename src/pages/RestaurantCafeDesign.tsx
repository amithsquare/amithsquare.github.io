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
    title: "Restaurant & Cafe Architecture",
    points: [
      "Architectural planning",
      "Layout planning and circulation",
      "Spatial organization",
      "Elevations and working drawings",
      "Design coordination",
    ],
  },
  {
    icon: Palette,
    title: "Restaurant & Cafe Interior Design",
    points: [
      "Entrance and reception",
      "Seating and dining areas",
      "Counter and service areas",
      "Materials, finishes, and lighting",
      "Furniture and visual character",
    ],
  },
  {
    icon: Compass,
    title: "Space Planning",
    points: [
      "Customer seating and circulation",
      "Kitchen and service relationship",
      "Waiting areas and storage",
      "Staff movement and functional zones",
    ],
  },
  {
    icon: Video,
    title: "3D Visualization",
    points: [
      "Layout visualization",
      "Furniture and materials",
      "Finishes and lighting",
      "Design review",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey Restaurant & Cafe Execution",
    points: [
      "Construction coordination",
      "Execution and site supervision",
      "Fit-out coordination",
      "Handover",
    ],
  },
];

const SPACE_TYPES = [
  "Cafes",
  "Coffee Shops",
  "Restaurants",
  "Casual Dining Spaces",
  "Fine Dining Spaces",
  "Food & Beverage Spaces",
  "Small-Format Cafes",
  "Takeaway / QSR Spaces",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understanding your restaurant or cafe concept, requirements, and brand.",
  },
  {
    step: "02",
    title: "Space Planning",
    desc: "Planning seating, circulation, and the kitchen-service relationship.",
  },
  {
    step: "03",
    title: "Architecture + Interior Design",
    desc: "Architectural planning alongside interior design development.",
  },
  {
    step: "04",
    title: "3D Visualization",
    desc: "Visualizing the space before execution begins.",
  },
  {
    step: "05",
    title: "Working Drawings",
    desc: "Detailed documentation for execution.",
  },
  {
    step: "06",
    title: "Execution / Site Coordination",
    desc: "Construction coordination and site supervision.",
  },
  {
    step: "07",
    title: "Handover",
    desc: "Coordinated handover of the completed space.",
  },
];

const FAQS = [
  {
    q: "What does a restaurant interior designer do?",
    a: "A restaurant interior designer plans seating, circulation, materials, lighting, and furniture so the space works for both customers and staff, while reflecting the brand's character.",
  },
  {
    q: "What does restaurant interior design include?",
    a: "It covers entrance and reception, seating and dining areas, counter and service areas, materials, lighting, and furniture selection.",
  },
  {
    q: "Can A Square Studio design both restaurants and cafes?",
    a: "Yes - we design restaurants, cafes, and food & beverage spaces of different formats and scales.",
  },
  {
    q: "Do you provide restaurant and cafe space planning?",
    a: "Yes, we plan layouts around customer seating, circulation, the kitchen-service relationship, and staff movement.",
  },
  {
    q: "Do you provide restaurant architecture?",
    a: "Yes, architectural planning and layout design are part of our restaurant and cafe service.",
  },
  {
    q: "Do you provide 3D visualization?",
    a: "Yes, 3D visualization is available to help you review layout, materials, finishes, and lighting before execution.",
  },
  {
    q: "Do you provide turnkey restaurant execution?",
    a: "Yes, we offer turnkey restaurant and cafe execution - coordinating design, construction, and site supervision through to handover.",
  },
  {
    q: "Which locations does A Square Studio serve?",
    a: "We work with clients across India, with priority experience in New Delhi, Gwalior, and Indore.",
  },
];

const RestaurantCafeDesign = () => {
  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>
          Restaurant & Cafe Architecture & Interior Design | A Square Studio
        </title>
        <meta
          name="description"
          content="A Square Studio provides restaurant and cafe architecture, interior design, space planning, 3D visualization and turnkey execution across India."
        />
        <link
          rel="canonical"
          href="https://asquarestudios.com/restaurant-cafe-design"
        />
        <meta
          property="og:title"
          content="Restaurant & Cafe Architecture & Interior Design | A Square Studio"
        />
        <meta
          property="og:description"
          content="Restaurant and cafe architecture, interior design, and turnkey execution from A Square Studio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://asquarestudios.com/restaurant-cafe-design"
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
            name: "Restaurant & Cafe Architecture & Interior Design",
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
            serviceType: "Restaurant and Cafe Architecture and Interior Design",
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
                name: "Restaurant & Cafe Design",
                item: "https://asquarestudios.com/restaurant-cafe-design",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <SectionHeading
          subtitle="Restaurant & Cafe Projects"
          title="Restaurant & Cafe Architecture & Interior Design"
          as="h1"
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
          A Square Studio handles restaurant and cafe projects from architecture
          and space planning through interior design, visualization, and
          execution - serving clients across India.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-gold text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
          >
            Discuss Your Restaurant or Cafe Project{" "}
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
            title="Designing Spaces People Want to Stay In"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl">
            A successful restaurant or cafe project balances customer flow,
            seating, circulation, service areas, the relationship with the
            kitchen, atmosphere, lighting, materials, and brand identity - all
            working together as one design, not separate decisions.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Restaurant & Cafe Design Services"
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

      {/* Space Types */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            subtitle="Space Types"
            title="Common Restaurant & Cafe Design Requirements"
          />
          <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mb-8 md:mb-12">
            Every food & beverage space has different flow and format
            requirements. Our design approach can accommodate:
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {SPACE_TYPES.map((type) => (
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

      {/* Why A Square Studio - factual, no unverified numbers */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <SectionHeading
          subtitle="Why A Square Studio"
          title="Architecture & Interiors Under One Studio"
          centered
        />
        <p className="text-secondary/60 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          A Square Studio brings architecture and interior design together under
          one studio - offering a single point of contact for your restaurant or
          cafe project, from concept through to handover.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 bg-primary/30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="FAQs"
            title="Restaurant & Cafe Project Questions"
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
            Planning a New Restaurant or Cafe?
          </h2>
          <p className="text-primary/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
            From architectural planning to turnkey execution, we're ready to
            talk through your restaurant or cafe project.
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

export default RestaurantCafeDesign;
