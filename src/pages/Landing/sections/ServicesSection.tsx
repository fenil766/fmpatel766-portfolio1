import { motion, type Variants, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Brush, Code } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      title: "UI/UX Design",
      description:
        "Elevate your brand with intuitive design systems. I focus on creating scalable UI/UX solutions that improve user satisfaction and drive measurable business success.",
      icon: Palette,
      color: "#B3CB3C",
    },
    {
      title: "Graphic Design",
      description:
        "Building cohesive brand identities that tell your story. From logo design to marketing collateral, I create unique visuals that ensure your brand leaves a lasting impression.",
      icon: Brush,
      color: "#B3CB3C",
    },
    {
      title: "Front end development",
      description:
        "Turning complex designs into functional, high-performance websites. I focus on creating fully responsive layouts that provide a seamless experience across all mobile and desktop devices",
      icon: Code,
      color: "#B3CB3C",
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
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="services"
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
            SERVICES
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ServiceCard
                key={index}
                service={service}
                variants={cardVariants}
                IconComponent={IconComponent}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ServiceCard({ service, variants, IconComponent }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background colored card - rotates on hover */}
      <motion.div
        className="absolute inset-0 bg-[#B3CB3C] rounded-lg"
        animate={
          isHovered
            ? { rotate: 3, x: 12, y: 12 }
            : { rotate: 0, x: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Main dark card */}
      <div className="relative bg-[#242424] rounded-lg p-8! border border-[#444444] h-full backdrop-blur-sm z-10">
        {/* Icon container */}
        <div className="mb-6! inline-block p-3! bg-[#B3CB3C]/10 rounded-lg">
          <IconComponent size={32} className="text-[#B3CB3C]" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-[#B3CB3C] mb-4!">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed font-sans">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
