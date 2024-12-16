import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  const btnRef = useRef(null);

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

  // Button
  const handleMouseMove = (e) => {
    if (btnRef.current) {
      const btn = btnRef.current;
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;

      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <div className="w-full h-[90%] flex flex-col-reverse sm:flex-col justify-end bg-[#E5E7DF]">
      <div className="w-full lg:h-[40%] flex flex-col-reverse lg:flex-row justify-between  px-4 lg:mb-10">
        <div className="w-full lg:w-[30%] h-full pt-8 flex flex-col justify-end">
          <p className="w-full text-2xl  p-2">
            Register now to join the hackathon, limited time left to turn your
            ideas into reality.
          </p>
          <div className="w-full flex gap-2 mb-4 sm:ml-2">
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-black rounded-xl flex flex-col justify-center items-center">
              <div>{days}</div>
              <div>Days</div>
            </div>
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-black rounded-xl flex flex-col justify-center items-center">
              <div>{hours}</div>
              <div>Hours</div>
            </div>
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-black rounded-xl flex flex-col justify-center items-center">
              <div>{minutes}</div>
              <div>Minutes</div>
            </div>
            <div className="w-20 lg:w-28 px-4 py-2 text-sm lg:text-2xl border-2 border-black rounded-xl flex flex-col justify-center items-center">
              <div>{seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
          <div className="">
            <button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              className="btn relative overflow-hidden inline-flex items-center ml-2 gap-2 px-12 py-3 border-2 border-black  font-semibold text-xl tracking-widest hover:text-[#E5E7DF] rounded-3xl before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-[#383030] hover:before:w-[500px] hover:before:h-[500px] z-[1]"
            >
              <span className="z-[2]">Register</span>
              <span className="z-[2]">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
          <p className="w-full text-[#383030] text-[7.5vw] leading-[7.8vw] lg:text-[2.3vw] lg:leading-[2.7vw] font-semibold p-2">
            <span className="flex flex-wrap gap-3">
              Coding{" "}
              <span className="hidden lg:inline-flex w-24 h-12 rounded-xl  overflow-hidden">
                <img
                  src="./coding1.jpg"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </span>{" "}
              the Future with Innovative{" "}
            </span>{" "}
            <span className="flex flex-wrap gap-2">
              {" "}
              Mindsets. Unlocking Potential{" "}
              <span className="hidden lg:inline-flex w-24 h-12 rounded-xl  overflow-hidden">
                <img
                  src="./teamwork3.jpg"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </span>{" "}
              through
            </span>{" "}
            <span className="flex flex-wrap gap-3 mt-1">
              {" "}
              Collaborative Tech{" "}
              <span className="hidden lg:inline-flex w-24 h-12 rounded-xl  overflow-hidden">
                <img
                  src="./coding2.jpg"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </span>{" "}
              Challenges.{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full text-[#383030] h-[40%] sm:h-[50%] text-[55vw] leading-[55vw] sm:text-[25vw] overflow-hidden uppercase sm:leading-[25vw] font-bold bebas-neue-regular">
        <div className="flex w-full py-4 sm:py-8 gap-12 sm:gap-20 whitespace-nowrap overflow-hidden">
          <motion.div
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex flex-shrink-0 gap-8 sm:gap-20 pr-8 "
          >
            <div className="flex gap-4">
              <p>Algorithm 9 </p>
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
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex flex-shrink-0 gap-8 sm:gap-20 pr-8 "
          >
            <div className="flex gap-4">
              <p>Algorithm 9 </p>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
