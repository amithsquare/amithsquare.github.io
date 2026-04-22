import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';


const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10 px-6 md:px-12 border-t border-secondary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
           <Link to="/" className="flex items-center gap-2 group">
                 <div className="flex items-center">
            <img className="imgLogo1"
              src={logo}
              alt="A Square Studio Logo"
            />
          </div>
                  </Link>
          <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
            Designing spaces that inspire living. A Square Studio delivers innovative architectural and interior solutions that blend creativity, functionality, and elegance.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/aasquarestudios/" className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/asquarestudioindia" className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com/company/a-square-studio" className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-secondary/60 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-8 uppercase tracking-widest">Services</h4>
          <ul className="flex flex-col gap-4">
            {['Architectural Design', 'Interior Design', 'Turnkey Projects', '3D Visualization', 'Renovation'].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-secondary/60 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-secondary font-serif text-lg mb-8 uppercase tracking-widest">Contact Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0" size={20} />
              <span className="text-secondary/60 text-sm leading-relaxed">
                A Square Studio, New Delhi, India
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-gold shrink-0" size={20} />
              <span className="text-secondary/60 text-sm">+91-7000441294</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-gold shrink-0" size={20} />
              <span className="text-secondary/60 text-sm">info@asquarestudios.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary/40 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} A Square Studio. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-secondary/40 text-[10px] uppercase tracking-widest hover:text-gold">Privacy Policy</a>
          <a href="#" className="text-secondary/40 text-[10px] uppercase tracking-widest hover:text-gold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
