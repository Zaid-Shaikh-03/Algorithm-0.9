import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const Home = () => {
  const container = useRef(null);
  // const colors = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c", "#1F3078"];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  // const margin = useTransform(scale, (value) => value * 50);
  const gap = useTransform(scrollYProgress, [0, 1], [2, 0.1]);
  const gapWithUnits = useTransform(gap, (value) => `${value}em`);

  // console.log(gap.get());

  const targetDate = new Date("2025-02-13T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = targetDate - new Date().getTime();
      if (remainingTime <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div
      ref={container}
      style={{
        backgroundImage:
          "radial-gradient(90% 90% at 50% 0%, #020617 50%,#1F3078)",
      }}
      className="w-full h-screen flex flex-col-reverse sm:flex-col justify-end bg-[#1F3078] select-none"
    >
      <div className="w-full lg:h-[40%] flex flex-col-reverse lg:flex-row justify-between  px-4 lg:mb-10">
        <div className="w-full lg:w-[35%] text-[#CFD7FE] h-full pt-8 flex flex-col justify-end">
          <p className="w-full text-2xl  p-2">
            Register now to join the hackathon, limited time left to turn your
            ideas into reality.
          </p>
          <div className="w-full flex gap-2 mb-4 sm:ml-2">
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-white rounded-xl flex flex-col justify-center items-center">
              <div>{days}</div>
              <div>Days</div>
            </div>
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-white rounded-xl flex flex-col justify-center items-center">
              <div>{hours}</div>
              <div>Hours</div>
            </div>
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-white rounded-xl flex flex-col justify-center items-center">
              <div>{minutes}</div>
              <div>Minutes</div>
            </div>
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-white rounded-xl flex flex-col justify-center items-center">
              <div>{seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
          <div className="">
            <Button title={"Register"} />
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
          <p className="w-full text-[#CFD7FE] text-[7.5vw] leading-[7.8vw] lg:text-[2.8vw] lg:leading-[3vw] font-semibold p-2">
            <span className="relative">
              Coding{" "}
              <svg
                viewBox="0 0 284 100"
                fill="none"
                className="absolute -left-2 -right-1 top-0 sm:-translate-y-2 sm:top-2"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FFC260"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
            the Future with{" "}
            <span className="relative">
              Innovative
              <svg
                viewBox="0 0 235 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0  bottom-0"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  d="M1 2.06506C7.42493 1.03877 10.9339 1.02098 17.0344 2.06506C23.1535 3.20973 26.8125 3.36225 34.071 2.06506C40.5274 0.825925 44.1495 0.757688 50.6065 2.06506C57.1835 3.03746 61.2892 3.10657 69.6473 2.06506C75.8335 0.801632 79.3321 0.569819 85.6817 2.06506C90.9003 3.2555 94.4052 3.36655 102.217 2.06506C109.457 0.667423 113.519 0.62271 120.757 2.06506C126.753 3.00843 130.704 3.15054 139.798 2.06506C146.426 0.839929 150.03 0.969369 156.333 2.06506C162.226 3.13304 165.662 3.12361 171.867 2.06506C178.047 0.885099 181.753 0.816515 188.903 2.06506C194.756 3.07787 198.279 3.06148 204.938 2.06506C210.343 0.981044 213.786 0.895249 220.972 2.06506C226.137 2.84349 228.998 2.95603 234 2.06506"
                  stroke="#FFC260"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            Mindsets. Unlocking Potential through{" "}
            <span className="relative">
              Collaborative
              <svg
                viewBox="0 0 295 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0  -bottom-2"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  d="M0.5 16.5C46.0267 4.6891 107.342 0.243663 150.5 1.99999C193.658 3.75631 252.878 4.48306 294 12.4999"
                  stroke="#FFC260"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            Tech Challenges.
          </p>
        </div>
      </div>
      <div className="w-full  h-[30%] sm:h-[50%] text-[55vw] leading-[55vw] sm:text-[25vw]  overflow-hidden uppercase sm:leading-[25vw] font-bold bebas-neue-regular select-none">
        <motion.div
          style={{
            gap: gapWithUnits,
          }}
          className="flex w-full whitespace-nowrap overflow-hidden"
        >
          <motion.div
            style={{ scale }}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex flex-shrink-0 gap-8 sm:gap-20 pr-8 "
          >
            <div className="flex gap-4">
              <p className="textGradient sm:textGradientForSm text-shadow-lg">
                Algorithm 9{" "}
              </p>
              <div className="w-[70vw]  sm:w-[32vw] pt-4 sm:pt-8 pb-12 overflow-hidden">
                <video
                  className="rounded-xl object-cover"
                  src="./video1.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{ scale }}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex flex-shrink-0 gap-8 sm:gap-20 pr-8 "
          >
            <div className="flex gap-4">
              <p className="textGradient sm:textGradientForSm text-shadow-lg">
                Algorithm 9{" "}
              </p>
              <div className="w-[70vw]  sm:w-[32vw] pt-4 sm:pt-8 pb-12overflow-hidden">
                <video
                  className="rounded-xl object-cover"
                  src="./video1.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
