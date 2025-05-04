import {} from "motion/react";

export const textVariant = {
  hidden: { y: 10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: "0.3", delay: "0.3" },
  },
};
export const reverseTextVariant = {
  hidden: { y: -10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: "0.3", delay: "0.3" },
  },
};
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Duration of each item animation
      ease: "easeOut",
    },
  },
};

export const scaleUp = {
  hidden: { scale: 0.9, opacity: 0.4 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.4 },
  },
  reverseShow: {
    scale: 1.1,
    transition: { ease: "easeIn", duration: 0.7 },
  },
};
