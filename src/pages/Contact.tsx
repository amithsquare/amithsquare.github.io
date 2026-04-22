import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { FAQS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    alert('Thank you for your message! Our team will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 bg-background min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <SectionHeading
            subtitle="Get In Touch"
            title="Let’s Design Your Dream Space"
          />
          <p className="text-secondary/60 text-lg leading-relaxed mb-12">
            Ready to start your next architectural or interior project? Our team of experts is here to bring your vision to life. Reach out to us for a consultation.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-all duration-500">
                  <MapPin className="text-gold group-hover:text-primary" size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary/40 text-[10px] uppercase tracking-widest mb-1">Our Studio</span>
                  <span className="text-secondary text-lg font-serif">A Square Studio, New Delhi, India</span>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-all duration-500">
                  <Phone className="text-gold group-hover:text-primary" size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary/40 text-[10px] uppercase tracking-widest mb-1">Call Us</span>
                  <span className="text-secondary text-lg font-serif">+91-7000441294</span>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold transition-all duration-500">
                  <Mail className="text-gold group-hover:text-primary" size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary/40 text-[10px] uppercase tracking-widest mb-1">Email Us</span>
                  <span className="text-secondary text-lg font-serif">info@asquarestudios.com</span>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-secondary/10">
              <h4 className="text-secondary text-xl font-serif mb-6">Follow Our Journey</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/aasquarestudio/" className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/asquarestudioindia" className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://www.linkedin.com/in/a-square-studio-62870435b/" className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                {/* <a href="#" className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                  <MessageSquare size={20} />
                </a> */}
              </div>
            </div>
            
            {/* WhatsApp Integration */}
            <a 
              href="https://wa.me/917000441294" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 bg-[#25D366] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-secondary/5 border border-secondary/10 p-10 md:p-16">
            <h3 className="text-secondary text-3xl font-serif mb-12">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-secondary/20 py-4 text-secondary focus:border-gold outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-secondary/20 py-4 text-secondary focus:border-gold outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">Phone Number</label>
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
                <label className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">Your Message</label>
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
              <div className="md:col-span-2 pt-8">
                <button
                  type="submit"
                  className="bg-gold text-primary px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-500 flex items-center gap-3"
                >
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-primary/50 relative overflow-hidden">
  <div className="absolute inset-0 grayscale opacity-40">
    <img 
      src="/src/assets/Location.png" 
      alt="Map Placeholder" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-primary/20" />

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
    
    {/* CLICKABLE LOCATION ICON */}
    <a
      href="https://www.google.com/maps/dir/Anaisha+girls+hostel,+B-10,+Samarth+Nagar,+Deen+Dayal+Nagar,+Gwalior,+Madhya+Pradesh+474005/Anaisha+girls+hostel,+B-10,+Samarth+Nagar,+Deen+Dayal+Nagar,+Gwalior,+Madhya+Pradesh+474005/@28.491776,77.1424256,5243m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3976c1f0731b37e1:0xf3d98d42af1cd3f6!2m2!1d78.2146025!2d26.252943!1m5!1m1!1s0x3976c1f0731b37e1:0xf3d98d42af1cd3f6!2m2!1d78.2146025!2d26.252943?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open location in Google Maps"
    >
      <div className="w-20 h-20 bg-gold/20 backdrop-blur-xl border border-gold/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse hover:scale-110 transition cursor-pointer">
        
        <MapPin className="text-gold" size={40} />

      </div>
    </a>

    <h4 className="text-secondary text-2xl font-serif mb-2">
      Our Gwalior Office
    </h4>

    <p className="text-secondary/60 text-sm uppercase tracking-widest">
      Visit us for a consultation
    
<p className="text-secondary/60 text-sm uppercase tracking-widest">
</p>

      B-10 Samarth Nagar Airport Road Gwalior Madhya Pradesh 474005
    </p>

  </div>
</section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <SectionHeading
          subtitle="Support"
          title="Frequently Asked Questions"
          centered
        />
        <div className="flex flex-col gap-8">
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
                <span className="text-gold font-mono text-sm">0{index + 1}</span>
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
