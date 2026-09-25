import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (name: string) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <footer className="bg-primary text-secondary pt-20 pb-10 px-6 md:px-12 border-t border-secondary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center min-w-0">
              <img
                loading="lazy"
                className="imgLogo1"
                src={logo}
                alt="A Square Studio Logo"
              />
            </div>
          </Link>
          <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
            Designing spaces that inspire living. A Square Studio delivers
            innovative architectural and interior solutions that blend
            creativity, functionality, and elegance.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/aasquarestudios/"
              aria-label="Follow us on Instagram"
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/asquarestudioindia"
              aria-label="Follow us on Facebook"
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com/company/a-square-studio"
              aria-label="Follow us on LinkedIn"
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links - accordion on mobile, static on lg+ */}
        <div className="border-b border-secondary/10 pb-4 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("quickLinks")}
            className="w-full flex items-center justify-between md:pointer-events-none md:cursor-default"
          >
            <h2 className="text-secondary font-serif text-lg mb-0 md:mb-8 uppercase tracking-widest">
              Quick Links
            </h2>
            <ChevronDown
              size={18}
              className={`text-secondary/60 transition-transform duration-300 md:hidden ${
                openSection === "quickLinks" ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`flex-col gap-4 mt-4 md:mt-0 ${
              openSection === "quickLinks" ? "flex" : "hidden"
            } md:flex`}
          >
            {["Home", "About", "Services", "Projects", "Blog", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-secondary/60 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services - accordion on mobile, static on lg+ */}
        <div className="border-b border-secondary/10 pb-4 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("services")}
            className="w-full flex items-center justify-between md:pointer-events-none md:cursor-default"
          >
            <h2 className="text-secondary font-serif text-lg mb-0 md:mb-8 uppercase tracking-widest">
              Services
            </h2>
            <ChevronDown
              size={18}
              className={`text-secondary/60 transition-transform duration-300 md:hidden ${
                openSection === "services" ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`flex-col gap-4 mt-4 md:mt-0 ${
              openSection === "services" ? "flex" : "hidden"
            } md:flex`}
          >
            {[
              { name: "Architectural Design", path: "/architectural-design" },
              { name: "Interior Design", path: "/interior-design" },
              { name: "Turnkey Projects", path: "/turnkey-projects" },
              { name: "3D Visualization", path: "/3d-visualization" },
              { name: "Renovation", path: "/renovation" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-secondary/60 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info - always visible, no accordion (short + important) */}
        <div>
          <h2 className="text-secondary font-serif text-lg mb-8 uppercase tracking-widest">
            Contact Us
          </h2>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0" size={20} />
              <span className="text-secondary/60 text-sm leading-relaxed">
                Serving New Delhi · Gwalior · Indore
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-gold shrink-0" size={20} />
              <a
                href="tel:+919667641294"
                className="text-secondary text-lg font-serif hover:text-gold transition-colors"
              >
                +91-9667641294
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-gold shrink-0" size={20} />
              <a
                href="mailto:info@asquarestudios.com"
                className="text-secondary text-lg font-serif hover:text-gold transition-colors"
              >
                info@asquarestudios.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary/60 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} A Square Studio. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link
            to="/privacy-policy"
            className="text-secondary/60 text-[10px] uppercase tracking-widest hover:text-gold"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-secondary/60 text-[10px] uppercase tracking-widest hover:text-gold"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
