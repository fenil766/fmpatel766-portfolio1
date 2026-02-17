import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Download } from "lucide-react";

const educationData = [
  {
    institution: "LJ University, Ahmedabad",
    degree: "B.E Computer Science & Engineering",
    duration: "2022 - 2026",
  },
  {
    institution: "Nalanda School, Godhra",
    degree: "HSC - 12 Science #GSEB",
    duration: "2021-2022",
  },
  {
    institution: "Nalanda School, Godhra",
    degree: "SSC - 10th #GSEB",
    duration: "2018-2020",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Google Drive CV link
  const FILE_ID = "17skgmCacqQjJwpwqhjVNhEpStEprvQ80";
  const DIRECT_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  const handleDownloadCV = () => {
    // Create an invisible anchor element and trigger download
    const link = document.createElement("a");
    link.href = DIRECT_DOWNLOAD_URL;
    link.download = "Fenil_Patel_CV.pdf"; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariantsLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariantsRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-16! lg:py-24! px-4! sm:px-6! lg:px-8! relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full mx-auto! max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10! lg:mb-16!"
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4! text-white font-(family-name:--font-primary)">
            Education
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-4! mb-12! px-20!">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
              index={index}
            />
          ))}
        </div>

        {/* Download CV Button */}
        <motion.div className="flex justify-center" variants={buttonVariants}>
          <motion.button
            className="group relative px-8! py-3! bg-transparent border-2 border-[#B3CB3C] rounded-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(179, 203, 60, 0)",
                "0 0 30px rgba(179, 203, 60, 0.3)",
                "0 0 20px rgba(179, 203, 60, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onClick={handleDownloadCV}
          >
            {/* Sliding background effect */}
            <motion.div className="absolute inset-0 bg-[#B3CB3C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2 text-[#B3CB3C] font-semibold group-hover:text-black transition-colors duration-500">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download className="w-5 h-5" />
              </motion.span>
              Download CV
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

interface EducationCardProps {
  education: {
    institution: string;
    degree: string;
    duration: string;
  };
  variants: Variants;
  index: number;
}

function EducationCard({ education, variants, index }: EducationCardProps) {
  return (
    <motion.div
      variants={variants}
      className="relative group"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#B3CB3C]/0 via-[#B3CB3C]/20 to-[#B3CB3C]/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main card */}
      <div className="relative bg-[#1a1a1a] rounded-xl border border-[#333333] overflow-hidden group-hover:border-[#B3CB3C]/50 transition-colors duration-500">
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(179, 203, 60, 0.1), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0%", "-200% 0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 flex items-center justify-between p-4! lg:p-5!">
          {/* Left side - Icon and Info */}
          <div className="flex items-center gap-4 flex-1">
            {/* Graduation Cap Icon */}
            <motion.div className="shrink-0">
              <motion.div
                className="w-12 h-12 lg:w-14 lg:h-14 bg-[#2a2a2a] rounded-lg flex items-center justify-center border border-[#444444] group-hover:border-[#B3CB3C]/50 transition-all duration-500"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-[#B3CB3C]" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Institution Info */}
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-base lg:text-lg font-bold text-white mb-0.5! truncate group-hover:text-[#B3CB3C] transition-colors duration-500"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, x: 5 }}
              >
                {education.institution}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-xs lg:text-sm truncate"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                {education.degree}
              </motion.p>
            </div>
          </div>

          {/* Right side - Duration */}
          <motion.div
            className="shrink-0 ml-4!"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="inline-block px-3! py-1.5! lg:px-4! lg:py-2! bg-[#2a2a2a] rounded-md text-[#B3CB3C] font-semibold text-xs lg:text-sm border border-[#444444] group-hover:bg-[#B3CB3C] group-hover:text-black transition-all duration-500"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(179, 203, 60, 0)",
                  "0 0 15px rgba(179, 203, 60, 0.3)",
                  "0 0 0px rgba(179, 203, 60, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            >
              {education.duration}
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom accent line with animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B3CB3C] to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
}