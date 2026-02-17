import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import Figma from "../../../assets/images/Figma.png";
import Webflow from "../../../assets/images/Webflow.png";
import Shopify from "../../../assets/images/Shopify.png";
import HTMLImg from "../../../assets/images/HTML.png";
import CSSImg from "../../../assets/images/CSS.png";
import JavaScript from "../../../assets/images/JavaScript.png";
import ReactIcon from "../../../assets/images/React.png";
import Angular from "../../../assets/images/Angular.png";

const FRAMEWORK_ICONS = [
  { name: "Figma", image: Figma },
  { name: "Webflow", image: Webflow },
  { name: "Shopify", image: Shopify },
  { name: "HTML5", image: HTMLImg },
  { name: "CSS", image: CSSImg },
  { name: "JavaScript", image: JavaScript },
  { name: "React", image: ReactIcon },
  { name: "Angular", image: Angular },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      number: "01",
      company: "Freelancer",
      position: "UI/UX Designer",
      duration: "Dec 2024 - Present",
    },
    {
      number: "02",
      company: "Freelancer",
      position: "Frontend Developer",
      duration: "Dec 2024 - Present",
    },
    {
      number: "03",
      company: "Adopt Net Tech Pvt. Ltd.",
      position: "Frontend Developer & QA Engineer",
      duration: "Feb 2025 - May 2025",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10! lg:mb-16!"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4! text-white font-(family-name:--font-primary)">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Icons and Experience Container - Equal width sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8! lg:gap-12!">
          {/* Left: Framework Icons Section - Full width of left column */}
          <motion.div
            className="hidden lg:flex items-center justify-center w-full"
            variants={containerVariants}
          >
            <div className="w-full max-w-md">
              <div className="grid grid-cols-4 grid-rows-2 gap-6! w-full">
                {FRAMEWORK_ICONS.map((icon, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="aspect-square rounded-lg bg-[#2a2a2a] border border-[#444444] flex items-center justify-center hover:bg-[#B3CB3C]/10 transition-colors duration-300 p-4!"
                    title={icon.name}
                  >
                    <img
                      src={icon.image}
                      alt={icon.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Experience Cards Section - Full width of right column */}
          <motion.div
            className="w-full flex items-center"
            variants={containerVariants}
          >
            <div className="w-full space-y-5!">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  variants={cardVariants}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceCard({ experience, variants }: any) {
  return (
    <motion.div variants={variants} className="relative h-full group">
      {/* Main dark card */}
      <div className="relative bg-[#242424] rounded-lg border border-[#444444] backdrop-blur-sm z-10 overflow-hidden">
        {/* Sliding background from right - slower and smoother */}
        <div className="absolute inset-0 bg-[#B3CB3C] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />

        <div className="relative z-10 flex items-start justify-between p-6! lg:p-8!">
          {/* Number badge and content */}
          <div className="flex gap-6! items-start flex-1">
            {/* Number Badge */}
            <div className="shrink-0">
              <div className="w-14 h-14 bg-white group-hover:bg-black rounded-sm flex items-center justify-center transition-colors duration-700">
                <span className="text-black group-hover:text-white font-bold text-xl transition-colors duration-700">
                  {experience.number}
                </span>
              </div>
            </div>

            {/* Job Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-black mb-1! transition-colors duration-700">
                {experience.company}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-800 text-sm lg:text-base transition-colors duration-700 font-sans">
                {experience.position}
              </p>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="shrink-0 ml-4! text-right">
            <p className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-700 mb-1! transition-colors duration-700">
              Job Duration
            </p>
            <p className="text-sm lg:text-base font-semibold text-white group-hover:text-black whitespace-nowrap transition-colors duration-700">
              {experience.duration}
            </p>
          </div>
        </div>

        {/* Yellow accent line - always visible on top */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#B3CB3C] z-20" />
      </div>
    </motion.div>
  );
}

// function ExperienceCard({ experience, variants }: any) {
//   return (
//     <motion.div variants={variants} className="relative h-full group">
//       {/* Main dark card */}
//       <div className="relative bg-[#242424] rounded-lg border border-[#444444] backdrop-blur-sm z-10 overflow-hidden">
//         {/* Sliding background from right - slower and smoother */}
//         <div className="absolute inset-0 bg-[#B3CB3C] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />

//         <div className="relative z-10 flex items-start justify-between p-6! lg:p-8!">
//           {/* Number badge and content */}
//           <div className="flex gap-6! items-start flex-1">
//             {/* Number Badge */}
//             <div className="shrink-0">
//               <div className="w-14 h-14 bg-white group-hover:bg-black rounded-sm flex items-center justify-center transition-colors duration-700">
//                 <span className="text-black group-hover:text-white font-bold text-xl transition-colors duration-700">
//                   {experience.number}
//                 </span>
//               </div>
//             </div>

//             {/* Job Info */}
//             <div className="flex-1 min-w-0">
//               <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-black mb-1! transition-colors duration-700">
//                 {experience.company}
//               </h3>
//               <p className="text-gray-300 group-hover:text-gray-800 text-sm lg:text-base transition-colors duration-700">
//                 {experience.position}
//               </p>
//             </div>
//           </div>

//           {/* Duration Badge */}
//           <div className="shrink-0 ml-4! text-right">
//             <p className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-700 mb-1! transition-colors duration-700">
//               Job Duration
//             </p>
//             <p className="text-sm lg:text-base font-semibold text-white group-hover:text-black whitespace-nowrap transition-colors duration-700">
//               {experience.duration}
//             </p>
//           </div>
//         </div>

//         {/* Yellow accent line - always visible on top */}
//         <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#B3CB3C] z-20" />
//       </div>
//     </motion.div>
//   );
// }
