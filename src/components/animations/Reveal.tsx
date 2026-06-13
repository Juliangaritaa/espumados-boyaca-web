import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 40,
}: RevealProps) {
  const variants = {
    up: {
      x: 0,
      y: distance,
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}