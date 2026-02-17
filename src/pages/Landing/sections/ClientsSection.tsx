import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import eWhite from "../../../assets/images/eWhite.png";
import LZnewLogoWhite from "../../../assets/images/LZnewLogoWhite.png";
import sparkLogo from "../../../assets/images/SparkWhite.png";
import meetPetroleumLogo from "../../../assets/images/MEET_PETROLEUM.png";
import koWHITE from "../../../assets/images/koWHITE.png";

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const clients = [
    { name: "Exigo", logo: eWhite },
    { name: "Zelt", logo: LZnewLogoWhite },
    { name: "Spark", logo: sparkLogo },
    { name: "Meet Petroleum", logo: meetPetroleumLogo },
    { name: "Sifi", logo: koWHITE },
  ];

  // Duplicate clients for infinite carousel
  const duplicatedClients = [...clients, ...clients, ...clients];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const carouselVariants: Variants = {
    animate: {
      x: [-0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
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
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-10! lb:mb-16!" variants={containerVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4! text-white font-(family-name:--font-primary)">
            CLIENTS
          </h2>
        </motion.div>

        {/* Infinite Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {/* Left Black Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-64 md:w-48 z-10 bg-linear-to-r from-black via-black/50 to-transparent pointer-events-none" />

          {/* Right Black Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-64 md:w-48 z-10 bg-linear-to-l from-black via-black/50 to-transparent pointer-events-none" />

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12! md:gap-16! lg:gap-20!"
              variants={carouselVariants}
              animate="animate"
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 w-37 md:w-45 lg:w-53 h-29 md:h-37 lg:h-45 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-6">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="object-contain w-auto h-auto max-w-[80%] max-h-[80%] brightness-90"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
