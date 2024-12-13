import { easeInOut, motion } from "framer-motion";
import { mountAnim, rotateX } from "./animation";
import { useState } from "react";

const Link = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, images } = data;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className="el border-t overflow-hidden h-[15.4vw] sm:h-[12.4vw] md:h-[10.4vw] lg:h-[8.4vw] xl:h-[6.4vw] items-center  border-white flex flex-col cursor-pointer perspective-[80vw] origin-top last:border-b last:border-white relative"
    >
      <motion.div
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ ease: easeInOut }}
      >
        <a
          href="/"
          className="Link text-white uppercase text-[15vw] leading-[15.2vw] sm:text-[12vw] sm:leading-[12.2vw] md:text-[10vw] md:leading-[10.2vw] lg:text-[8vw]  lg:leading-[8.2vw] xl:text-[6.2vw] xl:leading-[6.2vw] font-normal m-0 no-underline"
        >
          {title}
        </a>
      </motion.div>
      <motion.div
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ ease: easeInOut }}
      >
        <a
          href="/"
          className="Link text-white uppercase text-[15vw] leading-[15.2vw] sm:text-[12vw] sm:leading-[12.2vw] md:text-[10vw] md:leading-[10.2vw] lg:text-[8vw]  lg:leading-[8.2vw] xl:text-[6.2vw] xl:leading-[6.2vw] font-normal m-0 no-underline"
        >
          {title}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Link;
