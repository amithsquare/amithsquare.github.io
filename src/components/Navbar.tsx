import { clsx, type ClassValue } from "clsx";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import logo from "../assets/logo.webp";
import { useTheme } from "../context/ThemeContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-2.5 px-4 sm:px-6 md:px-12 lg:py-4",
        scrolled
          ? "bg-primary/90 backdrop-blur-md shadow-lg py-2 lg:py-3"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center min-w-0">
            <img
              className="imgLogo"
              src={logo}
              alt="A Square Studio Logo"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 relative group",
                location.pathname === link.path
                  ? "text-gold"
                  : "text-secondary/80",
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path && "w-full",
                )}
              />
            </Link>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border border-secondary/20 hover:border-gold transition-colors duration-300 text-secondary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://forms.gle/fu33Hxnn6kmrZrNQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-primary px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-colors duration-300"
          >
            Get a Quote
          </a>{" "}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden ml-auto">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border border-secondary/20 text-secondary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            ref={toggleButtonRef}
            className="text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-primary border-t border-secondary/10 px-6 py-4 flex flex-col gap-3 z-[60] lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base uppercase tracking-widest py-1 hover:text-gold transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-secondary",
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-primary px-6 py-2.5 text-center text-xs uppercase tracking-widest font-bold mt-1"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
