import React from "react";
import { motion } from "framer-motion";

const Curve = () => {
  const intialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0 `;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0 `;

  const pathAnimation = {
    initial: {
      d: intialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.45, 0, 0.55, 1] },
    },
    exit: {
      d: intialPath,
      transition: { duration: 1, ease: [0.45, 0, 0.55, 1] },
    },
  };
  return (
    <svg className="svgcurver">
      <motion.path
        d={intialPath}
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
