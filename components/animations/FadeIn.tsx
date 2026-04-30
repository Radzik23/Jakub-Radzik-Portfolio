// components/animations/FadeIn.tsx
'use client'; // Framer Motion wymaga komponentów klienckich do działania animacji

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Zaczynamy lekko niżej i całkowicie przezroczyści
      whileInView={{ opacity: 1, y: 0 }} // Pojawia się, gdy wchodzi w pole widzenia
      viewport={{ once: true, margin: "-100px" }} // Animacja odpala się tylko raz na scroll, z małym opóźnieniem
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // Parametry płynności Apple-like
    >
      {children}
    </motion.div>
  );
}