import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  icon: Icon,
  className = "",
  children,
}: CardProps) {
  return (
    <motion.div
      className={`
        card-glass
        rounded-2xl p-6 md:p-8
        hover-lift hover-glow
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {Icon && (
        <div className="mb-4 inline-block">
          <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
        </div>
      )}

      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h3>

      <p className="text-gray-400 leading-relaxed">{description}</p>

      {children}
    </motion.div>
  );
}
