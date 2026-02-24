import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import RightIcon from "../../../assets/images/right icon.png";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const softSkills = [
    { name: "Understanding client goals", tip: "I'm basically a mind reader, but for design. 🧠" },
    { name: "Attention to detail", tip: "I see pixels you didn't even know existed. 👁️" },
    { name: "Communicating progress", tip: "I'll update you so often you'll think I'm a bot. 🤖" },
    { name: "Managing timelines", tip: "Time is a flat circle, but my deadlines are solid. ⏳" },
    { name: "Problem-solving mindset", tip: "I eat 'impossible' problems for breakfast. 🥣" },
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
                    className="flex items-start gap-3! group relative"
                  >
                    <div className="shrink-0 mt-1!">
                      <motion.img
                        src={RightIcon}
                        alt="Check"
                        className="w-6 h-6"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </p>

                      {/* Cartoonish Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        whileHover={{ opacity: 1, y: -5, scale: 1 }}
                        className="absolute -top-10 left-0 bg-[#F25912] text-white text-xs py-1 px-3 rounded-lg opacity-0 pointer-events-none z-20 whitespace-nowrap shadow-xl"
                      >
                        {skill.tip}
                        <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#F25912] rotate-45" />
                      </motion.div>
                    </div>
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
