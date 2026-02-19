import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Footer.css";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    { name: "DRIBBLE", href: "https://dribbble.com/" },
    { name: "FIGMA", href: "https://www.figma.com/" },
    { name: "GITHUB", href: "https://github.com/fenil766" },
    { name: "INSTAGRAM", href: "https://www.instagram.com/fenil766" },
    { name: "LINKEDIN", href: "https://www.linkedin.com/in/fenil-patel-1a50a6264/" },
    { name: "BEHANCE", href: "https://www.behance.net/" },
    { name: "FACEBOOK", href: "https://www.facebook.com/" },
  ];

  const socialLinksTop = socialLinks.slice(0, 3);
  const socialLinksMiddle = socialLinks.slice(3);

  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: 0.2 + i * 0.08,
        ease: "easeOut",
      },
    }),
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-zinc-900/95 relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16"
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="social-links-container flex flex-col justify-center items-center gap-12 border-b border-zinc-800/50">
          <div className="w-full flex justify-evenly items-center gap-12 px-4 md:px-10">
            {socialLinksTop.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-lg sm:text-sm lg:text-xl font-bold relative group"
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="w-full flex justify-evenly items-center gap-12">
            {socialLinksMiddle.slice(0, 4).map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-lg sm:text-sm lg:text-xl font-bold relative group"
                custom={3 + index}
                variants={socialVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-20 relative">
          <div className="flex flex-col justify-start w-full py-10 md:py-20">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-8xl font-black text-white/40 leading-none whitespace-nowrap"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              PATEL
            </motion.h2>
            <motion.h1
              className="text-5xl md:text-[300px] font-black text-white leading-tight flex-1"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              FENIL
            </motion.h1>
          </div>
        </div>

        <div className="copyright-section border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-xs sm:text-sm lg:text-base text-white/70 font-bold tracking-widest"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            © <span className="text-[#B3CB3C]">PORTFOLIO.</span> ALL RIGHTS RESERVED
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm lg:text-base text-white/70 font-bold tracking-widest"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            DESIGN AND DEVELOPED BY{" "}
            <span className="text-[#B3CB3C]">FENIL PATEL</span>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
