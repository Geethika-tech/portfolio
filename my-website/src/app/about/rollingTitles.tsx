"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Full Stack Developer", "Front End Developer", "Software Engineer", "Web Developer"];

export default function RollingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=" absolute w-full text-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
