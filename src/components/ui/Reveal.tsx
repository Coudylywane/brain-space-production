import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  duration = 3,
  delay = 0,
  y = 32,
  x = 0,
  className,
  once = true,
  amount = 0.15,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = Omit<RevealProps, "children"> & {
  children: ReactNode;
};

export function RevealItem(props: RevealItemProps) {
  return <Reveal {...props} />;
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
};

export function RevealGroup({
  children,
  className,
  stagger = 0.18,
  amount = 0.15,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

