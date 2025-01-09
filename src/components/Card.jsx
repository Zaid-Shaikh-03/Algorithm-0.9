import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({
  i,
  title,
  prize,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="cardContainer h-[100vh] flex justify-center items-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className="card flex flex-col relative top-[-10%] w-[500px] h-[500px] p-[50px] origin-top rounded-3xl shadow-2xl shadow-black"
      >
        <div className="body flex h-[80%]">
          <div className="imageContainer relative w-full h-full rounded-[25px] overflow-hidden">
            <motion.div
              style={{ scale: imgScale }}
              className="inner w-full h-full flex justify-center"
            >
              <img className="object-cover w-1/2" src={src} alt="" />
            </motion.div>
          </div>
        </div>

        <h2 className=" text-center m-0 text-[28px]">{title}</h2>
        <p className="text-center text-xl text-[#FFC260]">{prize}</p>
      </motion.div>
    </div>
  );
};

export default Card;
