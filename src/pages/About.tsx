import React, { useState } from "react";
import { motion, LayoutGroup } from "motion/react";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

import AmitImg from "../assets/Amit.png";
import AditiImg from "../assets/Ar.Aditi-Saxena.png";

const About = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [activeTeam, setActiveTeam] = useState(null);
  const [heroActive, setHeroActive] = useState(false);

  // Shared animation (Apple-like)
  const spring = { type: "spring", stiffness: 250, damping: 18 };

  const values = [
    { title: "Creativity", desc: "Pushing boundaries to deliver unique architectural solutions.", icon: Eye },
    { title: "Precision", desc: "Attention to every detail from planning to execution.", icon: Target },
    { title: "Sustainability", desc: "Integrating eco-friendly practices in our designs.", icon: CheckCircle2 },
    { title: "Client Satisfaction", desc: "Building lasting relationships through exceptional service.", icon: Award },
  ];

  const team = [
    { name: "Amit Singh Rathore", role: "Business Owner", image: AmitImg },
    { name: "Ar. Aditi Saxena", role: "Principal Architect", image: AditiImg },
    {
      name: "Vikram Singh",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="pt-32 bg-background">
      <LayoutGroup>

        {/* HERO */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                subtitle="About A Square Studio"
                title="Defining Modern Architecture"
              />

              <p className="text-secondary/60 text-lg mb-6">
                A Square Studio is a premier architectural and interior design firm based in New Delhi,
                creating refined, functional, and sustainable spaces.
              </p>

              <p className="text-secondary/60 text-lg">
                We combine creativity with precision to deliver luxury residential,
                commercial, and bespoke interiors.
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div className="relative">
              <motion.div
                whileTap={{ scale: 0.97 }}
                onClick={() => setHeroActive(!heroActive)}
                className="aspect-square rounded-full overflow-hidden border border-gold/20 p-4 cursor-pointer"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                  alt="Studio"
                  className="w-full h-full object-cover rounded-full"
                  animate={{
                    scale: heroActive ? 1.05 : 1,
                    filter: heroActive ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  transition={spring}
                />
              </motion.div>

              <div className="absolute inset-0 scale-110 border border-gold/10 rounded-full animate-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-28 bg-primary/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Our Mission",
                icon: Target,
                text: "To create timeless spaces with innovation, comfort, and functionality.",
              },
              {
                title: "Our Vision",
                icon: Eye,
                text: "To be globally recognized for excellence and sustainable design.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="p-10 bg-secondary/5 border border-secondary/10 rounded-xl"
              >
                <item.icon className="text-gold mb-4" size={28} />
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-secondary/60">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <SectionHeading subtitle="Our Values" title="The Pillars of Our Success" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => {
              const isActive = activeValue === index;

              return (
                <motion.div
                  key={value.title}
                  onClick={() => setActiveValue(isActive ? null : index)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={spring}
                  className={`relative cursor-pointer p-8 rounded-xl border transition-all duration-500
                    ${isActive ? "bg-gold text-primary" : "bg-secondary/5 border-secondary/10"}
                  `}
                >
                  {/* Tap feedback */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    whileTap={{ opacity: 0.2 }}
                  />

                  <value.icon className="mb-4" size={26} />
                  <h4 className="font-serif text-lg mb-2">{value.title}</h4>
                  <p className="text-sm opacity-80">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* TEAM */}
        <section className="py-28 bg-primary/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading subtitle="Our Team" title="Meet the Creative Minds" centered />

            <div className="grid md:grid-cols-3 gap-10 mt-12">
              {team.map((member, index) => {
                const isActive = activeTeam === index;

                return (
                  <motion.div
                    key={member.name}
                    onClick={() => setActiveTeam(isActive ? null : index)}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.96 }}
                    transition={spring}
                    className="cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">

                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: isActive ? 1.08 : 1,
                          filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                        }}
                        transition={spring}
                      />

                      {/* overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                        animate={{ opacity: isActive ? 1 : 0.3 }}
                      />

                      {/* tap feedback */}
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ opacity: 0 }}
                        whileTap={{ opacity: 0.2 }}
                      />
                    </div>

                    <h4 className="text-xl font-serif">{member.name}</h4>
                    <span className="text-gold text-xs uppercase tracking-widest">
                      {member.role}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </LayoutGroup>
    </div>
  );
};

export default About;