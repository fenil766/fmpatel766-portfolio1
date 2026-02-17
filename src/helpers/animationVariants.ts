import type { Variants } from "framer-motion";

// Fade In Up
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade In Left
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Fade In Right
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Scale In
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger Container
export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Slide In From Top
export const slideInFromTop: Variants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Rotate In
export const rotateIn: Variants = {
  initial: {
    opacity: 0,
    rotate: -10,
  },
  whileInView: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Viewport settings (reusable)
export const defaultViewport = {
  once: true,
  amount: 0.3,
};