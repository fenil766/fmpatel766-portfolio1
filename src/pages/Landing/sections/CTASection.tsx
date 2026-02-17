import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
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

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Contact details
  const email = "fenil15112004@gmail.com";
  const phoneNumber = "9313693007";
  const whatsappLink = `https://wa.me/919313693007`; // India country code +91

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-16! lg:py-24! px-4! sm:px-6! lg:px-8! bg-black"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12! lg:mb-16!" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6! tracking-wider">
            LET'S WORK
            <br />
            TOGETHER
          </h2>
          <p className="text-gray-400 text-base md:text-lg mx-auto">
            Have a project, opportunity, or idea in mind? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Info Display */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4! mb-8! text-gray-400"
          variants={itemVariants}
        >
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-2! hover:text-[#B3CB3C] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>
          <span className="hidden sm:block text-gray-600">|</span>
          <a 
            href={`tel:+91${phoneNumber}`}
            className="flex items-center gap-2! hover:text-[#B3CB3C] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{phoneNumber}</span>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4! lg:gap-6! justify-center items-center"
          variants={containerVariants}
        >
          {/* Connect With Me Button - WhatsApp */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto bg-[#B3CB3C] hover:bg-black text-black hover:text-[#B3CB3C] border! border-[#B3CB3C] px-10! py-4! rounded-none font-bold text-base md:text-lg tracking-wide transition-all duration-500 hover:[text-shadow:0_0_20px_#B3CB3C,0_0_30px_#B3CB3C,0_0_40px_#B3CB3C] text-center"
          >
            CONNECT ON WHATSAPP
          </motion.a>

          {/* Mail Me Button */}
          <motion.a
            href={`mailto:${email}`}
            variants={buttonVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto bg-[#B3CB3C] hover:bg-black text-black hover:text-[#B3CB3C] border! border-[#B3CB3C] px-10! py-4! rounded-none font-bold text-base md:text-lg tracking-wide transition-all duration-500 hover:[text-shadow:0_0_20px_#B3CB3C,0_0_30px_#B3CB3C,0_0_40px_#B3CB3C]"
          >
            <span className="flex items-center justify-center">
              <span>MAIL ME</span>
              
              {/* Mail Icon - appears on hover with spacing */}
              <Mail 
                className="w-0 h-5 opacity-0 ml-0! transition-all duration-500 group-hover:w-5 group-hover:opacity-100 group-hover:ml-3! group-hover:filter-[drop-shadow(0_0_8px_#B3CB3C)]" 
                strokeWidth={2.5}
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}