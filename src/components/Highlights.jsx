import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";
import Heading from "./Header/Heading";

const images = [
  "https://images.unsplash.com/photo-1668365187350-05c997d09eba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623333769926-a34d46b5fbdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623333923583-7c0c334da2a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623333923583-7c0c334da2a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733826996743-b21ac2ddbaee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1732561030603-477b67140893?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733345109424-46444ca2370a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733422919430-1d1c015bc31f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const Highlights = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: images[7],
      scale: scale4,
    },
    {
      src: images[1],
      scale: scale5,
    },
    {
      src: images[2],
      scale: scale6,
    },
    {
      src: images[3],
      scale: scale5,
    },
    {
      src: images[4],
      scale: scale6,
    },
    {
      src: images[5],
      scale: scale8,
    },
    {
      src: images[6],
      scale: scale9,
    },
  ];

  const getPositionClasses = (index) => {
    switch (index) {
      case 0:
        return "w-[50vw] h-[20vh] sm:w-[25vw] sm:h-[25vh]";
      case 1:
        return "top-[-24vh] left-[-3vw] sm:top-[-30vh] sm:left-[5vw] w-[40vw] h-[25vh] sm:w-[35vw] sm:h-[30vh]";
      case 2:
        return "top-[-7vh] left-[-47vw] w-[40vw] h-[30vh] sm:top-[-7vh] sm:left-[-24vw] sm:w-[20vw] sm:h-[45vh]";
      case 3:
        return "top-[2vh] left-[40.5vw] w-[25vw] h-[25vh] sm:left-[26.5vw] sm:w-[25vw] sm:h-[25vh]";
      case 4:
        return "top-[24vh] left-[-15vw] w-[50vw] h-[25vh] sm:top-[30.5vh] sm:left-[6vw] sm:w-[20vw] sm:h-[25vh]";
      case 5:
        return "top-[-20vh] left-[34vw] w-[30vw] h-[16vh] sm:top-[30.5vh] sm:left-[-20.5vw] sm:w-[30vw] sm:h-[25vh]";
      case 6:
        return "top-[22.5vh] left-[27vw] w-[30vw] h-[15vh] sm:top-[22.5vh] sm:left-[22vw] sm:w-[10vw] sm:h-[15vh]";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center bg-black py-8">
        <Heading paragraph="Previous Glimpse" />
        <Heading paragraph="Of  Algorithm 8.0" first="false" />
      </div>
      <div ref={container} className="h-[300vh] relative bg-[#000]">
        <div className="sticky overflow-hidden top-0 h-[100vh]">
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className={`el w-full h-full top-0 absolute flex items-center justify-center `}
              >
                <div
                  className={`imageContainer relative ${getPositionClasses(
                    index
                  )}`}
                >
                  <img
                    src={src}
                    className="object-fit w-full h-full rounded-md"
                    alt="image"
                    placeholder="blur"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
