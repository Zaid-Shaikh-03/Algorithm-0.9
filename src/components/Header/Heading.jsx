import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Heading({ paragraph = "TimeLine of event", first }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={`text-shadow-xl font-serif italic text-[8vw] leading-[8.8vw]  sm:text-[4vw] sm:leading-[4.9vw] font-bold text-[#CFD7FE] select-none ${
        first ? "sm:pl-32" : "pl-0"
      }`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="word relative mr-[12px] mt-[12px] ">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="char">
      <span className="shadow absolute opacity-[20%]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
