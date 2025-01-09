import React from "react";
import { height, background, mountAnim } from "./animation";
import { motion } from "framer-motion";

const Stair = ({ index }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={4 - index}
      className="w-[20vw] h-full bg-[#020617]"
    ></motion.div>
  );
};

const Background = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className="w-full h-full absolute bg-[#020617]"
    ></motion.div>
  );
};

const Stairs = () => {
  return (
    <div className="top-0 left-0 fixed z-[2] h-[100vh] flex transition-all duration-1000">
      {[...Array(5)].map((_, index) => {
        return <Stair key={index} index={index} />;
      })}
      <Background />
    </div>
  );
};

export default Stairs;
