import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the top portion of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections that have an ID matching our nav links
    const sections = ["home", "works", "services", "about", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Works", href: "#works", id: "works" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-behance", href: "https://behance.net", delay: 0 },
    { icon: "fab fa-dribbble", href: "https://dribbble.com", delay: 0.12 },
    { icon: "fab fa-github", href: "https://github.com", delay: 0.24 },
  ];

  // Animation variants
  const navbarVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: 0.8 + i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.4 + delay,
        ease: "backOut",
      },
    }),
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-full mx-auto px-4! sm:px-6! lg:px-8!">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl sm:text-3xl font-bold text-(--color-primary) font-(family-name:--font-primary) cursor-pointer hover:scale-103 transition-transform duration-200 ease-in-out"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            Portfolio
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`text-sm lg:text-base font-medium tracking-wider hover:-translate-y-0.5 transition-all duration-200 ease-in-out relative group ${activeSection === link.id
                  ? "text-(--color-primary)!"
                  : "text-white/90"
                  }`}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-(--color-primary) transition-all duration-300 ease-in-out ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </motion.a>
            ))}
          </div>


          {/* Social Icons */}
          <div className="flex flex-row-reverse items-center gap-4 lg:gap-5">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-(--color-primary)! hover:scale-110 transition-all duration-200 ease-in-out"
                custom={social.delay}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
              >
                <i className={`${social.icon} text-xl lg:text-2xl`}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Bottom Border */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#B3CB3C] to-transparent"></div>
    </motion.nav>
  );
}