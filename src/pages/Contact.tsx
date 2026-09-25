import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { FAQS } from "../constants";

const EMAILJS_SERVICE_ID = "service_2a5iwdm";
const EMAILJS_TEMPLATE_ID = "template_dqjferh";
const EMAILJS_PUBLIC_KEY = "8fd8pi01yZWaaz_s1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString(),
          page: window.location.pathname,
          source: document.referrer || "Direct",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 md:pt-32 bg-background min-h-screen">
      <Helmet>
        <title>Contact Us | A Square Studio</title>
        <meta
          name="description"
          content="Get in touch with A Square Studio for architectural and interior design consultations across New Delhi, Gwalior & Indore."
        />
        <link rel="canonical" href="https://asquarestudios.com/contact" />
      </Helmet>
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-end">
          <SectionHeading
            subtitle="Get In Touch"
            title="Let’s Design Your Dream Space"
          />
          <p className="text-secondary/60 text-lg leading-relaxed mb-8 md:mb-12">
            Ready to start your next architectural or interior project? Our team
            of experts is here to bring your vision to life. Reach out to us for
            a consultation.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-all duration-500">
                  <MapPin
                    className="text-gold group-hover:text-primary"
                    size={24}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary/40 text-[10px] uppercase tracking-widest mb-1">
                    Where We Work
                  </span>
                  <span className="text-secondary text-lg font-serif">
                    Serving New Delhi, Gwalior &amp; Indore
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-all duration-500">
                  <Phone
                    className="text-gold group-hover:text-primary"
                    size={24}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary/40 text-[10px] uppercase tracking-widest mb-1">
                    Call Us
                  </span>
                  <a
                    href="tel:+919667641294"
                    className="text-secondary text-lg font-serif hover:text-gold transition-colors"
                  >
                    +91-9667641294
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-all duration-500">
                  <Mail
                    className="text-gold group-hover:text-primary"
                    size={24}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary/40 text-[10px] uppercase tracking-widest mb-1">
                    Email Us
                  </span>
                  <a
                    href="mailto:info@asquarestudios.com"
                    className="text-secondary text-lg font-serif hover:text-gold transition-colors"
                  >
                    info@asquarestudios.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 md:pt-12 border-t border-secondary/10">
              <h4 className="text-secondary text-xl font-serif mb-6">
                Follow Our Journey
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/aasquarestudios/"
                  className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/asquarestudioindia"
                  className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/a-square-studio"
                  className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <a
              href="https://wa.me/919667641294"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-[#25D366] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-secondary/5 border border-secondary/10 p-10 md:p-16">
            <h3 className="text-secondary text-3xl font-serif mb-8 md:mb-12">
              Send Us a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              <div className="flex flex-col gap-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-secondary/20 py-4 text-secondary focus:border-gold outline-none transition-colors"
                  placeholder="Hiren patel"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-secondary/20 py-4 text-secondary focus:border-gold outline-none transition-colors"
                  placeholder="info@asquarestudios.com"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-secondary/20 py-4 text-secondary focus:border-gold outline-none transition-colors"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-transparent border-b border-secondary/20 py-4 text-secondary focus:border-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="md:col-span-2 pt-4 md:pt-8 flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-gold text-primary px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-500 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}{" "}
                  <Send size={18} />
                </button>

                {status === "success" && (
                  <p className="text-green-500 text-sm">
                    Thank you! Your message has been sent - we'll get back to
                    you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong sending your message. Please try again,
                    or reach us directly on WhatsApp/phone.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <SectionHeading
          subtitle="Where We Work"
          title="Serving Clients Across India"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12">
          {["New Delhi", "Gwalior", "Indore"].map((city) => (
            <div
              key={city}
              className="flex flex-col items-center gap-4 p-8 bg-secondary/5 border border-secondary/10"
            >
              <MapPin className="text-gold" size={28} />
              <span className="text-secondary text-xl font-serif">{city}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <SectionHeading
          subtitle="Support"
          title="Frequently Asked Questions"
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
                {faq.question}
              </h4>
              <p className="text-secondary/60 text-base leading-relaxed pl-10">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
