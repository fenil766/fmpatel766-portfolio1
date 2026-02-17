import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../../helpers/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl md:text-3xl font-bold text-primary hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            LOGO
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.path}
                  className="text-white hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors text-xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors text-xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <i className="fab fa-dribbble"></i>
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors text-xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <i className="fab fa-behance"></i>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="block text-white hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors text-xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={SOCIAL_LINKS.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors text-xl"
              >
                <i className="fab fa-dribbble"></i>
              </a>
              <a
                href={SOCIAL_LINKS.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors text-xl"
              >
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
