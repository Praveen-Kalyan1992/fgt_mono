import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const TextRevealMotion: React.FC<Props> = ({ text }) => {
  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: 0, opacity: 1 }}
        whileHover={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "#006cbb",
          fontWeight: 500,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "relative",
          display: "inline-block",
          color: "gold",
          fontWeight: 500,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default TextRevealMotion;
