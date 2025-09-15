import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
