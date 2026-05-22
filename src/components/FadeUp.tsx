"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: AnimationDirection;
  className?: string;
}) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
      case "down":
        return { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } };
      case "left":
        return { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } };
      case "right":
        return { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } };
      case "scale":
        return { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 } };
      case "fade":
      default:
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, ease: [0.21, 1.02, 0.43, 1.01], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

