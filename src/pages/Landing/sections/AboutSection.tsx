import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import RightIcon from "../../../assets/images/right icon.png";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const softSkills = [
    "Understanding client goals and requirements",
    "Attention to detail and design consistency",
    "Communicating progress clearly",
    "Managing tasks and timelines efficiently",
    "Strong problem-solving mindset",
  ];

  // Container animation (for stagger effect)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // LEFT SIDE animation
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // RIGHT SIDE animation
  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Individual soft skill animation
  const skillVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-16! lg:py-24! px-4! sm:px-6! lg:px-8! relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10! lg:mb-16!"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4! text-white font-(family-name:--font-primary)">
            ABOUT ME
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8! lg:gap-12!">
          {/* LEFT SIDE */}
          <motion.div
            className="flex items-start justify-center w-full"
            variants={leftVariants}
          >
            <div className="w-full max-w-lg">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#B3CB3C] mb-4!">
                UI/UX Designer & Frontend Developer
              </h3>

              <p className="text-xl lg:text-2xl text-[#B3CB3C] mb-6! font-semibold">
                bridging design and development.
              </p>

              <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-sans">
                I'm a UI/UX Designer and Frontend Developer passionate about
                creating intuitive, user-focused digital experiences. I enjoy
                turning complex ideas into clean, scalable interfaces by
                thoughtfully bridging design and development. With a strong
                focus on usability, performance, and consistency, I build
                solutions that look great and work seamlessly.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex items-start justify-center w-full"
            variants={rightVariants}
          >
            <div className="w-full max-w-lg">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6!">
                Soft Skills
              </h3>

              <motion.div
                className="space-y-4! font-sans"
                variants={containerVariants}
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    className="flex items-start gap-3! group"
                  >
                    <div className="shrink-0 mt-1!">
                      <img
                        src={RightIcon}
                        alt="Check"
                        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
