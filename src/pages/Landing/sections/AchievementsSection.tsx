import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import ML from "../../../assets/images/certificates/ML.png";
import Web from "../../../assets/images/certificates/Web.png";
import PWskills from "../../../assets/images/certificates/PWskills.png";

const achievementsData = [
  {
    title:
      "Professional Certificate in Full Stack Web Development with AI – PW Skills",
    institution: "Physics Wallah",
    image: PWskills,
    link: "#",
  },
  {
    title:
      "HTML, CSS, and JavaScript For Web Developers By Johns Hopkins University",
    institution: "Johns Hopkins University",
    image: Web,
    link: "#",
  },
  {
    title: "Exploratory Data Analysis For Machine Learning by IBM",
    institution: "IBM",
    image: ML,
    link: "#",
  },
  {
    title:
      "HTML, CSS, and JavaScript For Web Developers By Johns Hopkins University",
    institution: "Johns Hopkins University",
    image: Web,
    link: "#",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-12! lg:py-16! px-4! sm:px-6! lg:px-8! relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full mx-auto! max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8! lg:mb-10!"
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-(family-name:--font-primary)">
            Achievements
          </h2>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4! lg:gap-5! mx-auto">
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              variants={cardVariants}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

interface AchievementCardProps {
  achievement: {
    title: string;
    institution: string;
    image: string;
    link: string;
  };
  variants: Variants;
  index: number;
}

function AchievementCard({
  achievement,
  variants,
  index,
}: AchievementCardProps) {
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

        <div className="relative z-10 p-3! lg:p-4!">
          {/* Certificate Image */}
          <motion.div
            className="mb-3! lg:mb-3! rounded-lg overflow-hidden bg-[#2a2a2a] border border-[#444444] group-hover:border-[#B3CB3C]/50 transition-all duration-500"
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-4/3 w-full">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Institution Badge */}
          <motion.div className="mb-2!" transition={{ duration: 0.2 }}>
            <span className="inline-flex items-center gap-1.5 px-2.5! py-1! bg-[#2a2a2a] rounded-md text-gray-400 text-xs border border-[#444444] group-hover:border-[#B3CB3C]/30 transition-all duration-500">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Award className="w-3 h-3 text-[#B3CB3C]" />
              </motion.div>
              {achievement.institution}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-sm lg:text-base font-bold text-white mb-2.5! leading-tight group-hover:text-[#B3CB3C] transition-colors duration-500"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            {achievement.title}
          </motion.h3>

          {/* Learn More Link */}
          <motion.a
            href={achievement.link}
            className="inline-flex items-center gap-1.5 text-[#B3CB3C] text-xs lg:text-sm font-semibold group/link"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="group-hover/link:text-[#F25912] transition-colors duration-300">
              Learn More
            </span>
            <motion.div
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:text-[#F25912] transition-colors duration-300" />
            </motion.div>
          </motion.a>
        </div>

        {/* Bottom accent line with animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B3CB3C] to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}