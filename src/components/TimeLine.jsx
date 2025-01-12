import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Heading from "./Header/Heading";

const images = [
  "https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1728450137593-3415ad70bd9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1716719125964-82d18b8fd1f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1724642487332-101c759dc782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1733714654538-8e9c88dc830e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
];

const timeLines = [
  {
    title: "Event Registration",
    date: "20th Feb 2024 - 26th Feb 2024",
    details:
      "Participants have to register themselves and form a team of three members.",
  },
  {
    title: "Participants Chosen",
    date: "20th Feb 2024 - 26th Feb 2024",
    details:
      "Shortlisted Participants are declared based on their ideas and profiles",
  },
  {
    title: "Problem Statement Announced",
    date: "26th Feb 2024",
    details:
      "Problem statement has been announced and the team lead has to select the topic and start working on it.",
  },
  {
    title: "Team Reporting Day",
    date: "1st March 2024",
    details:
      "Each team has to report to AIKTC's CAMPUS at 9:00 AM IST to 10:00 AM IST.",
  },
  {
    title: "Winner Announcement",
    date: "2nd March 2024",
    details: "Winners will be announced.",
  },
];

const TimeLine = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <div
      ref={container}
      style={{
        backgroundImage: "linear-gradient(to bottom, #020617 5%,#000)",
      }}
      className="carousel  bg-[#020617] sm:h-[500vh] py-12 sm:pt-0"
    >
      <div className="contentContainer  sm:h-[100vh] sm:sticky top-0 flex flex-col items-start justify-center align-middle overflow-hidden gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <Heading paragraph="Algorithm Timeline &" />
          <Heading paragraph="What’s Next for You?" first="false" />
          {/* <p className="font-sans text-[#fff] text-[5vw] leading-[5.7vw] sm:text-[1.2vw] sm:leading-[1.5vw]">
            This is the detailed list of events of Algorithm 8.0
          </p> */}
        </div>
        <motion.div
          style={{ ...(isMobile ? {} : { x }) }}
          className="w-full sm:w-fit flex flex-col sm:flex-row flex-nowrap sm:py-8 sm:pl-10 sm:pr-32"
        >
          {timeLines.map(({ title, date, details }, index) => (
            <div
              key={index}
              className="flex items-center flex-col sm:flex-row sticky top-0"
            >
              <div
                key={index}
                className="w-[90%] h-[350px] sm:w-[550px] sm:h-[350px] flex-shrink-0 rounded-3xl overflow-hidden bg-blue-500 py-4 px-6 pt-10 flex items-center justify-start flex-col gap-3"
              >
                <div className="w-[50px] bg-black h-[50px] rounded-lg"></div>
                <h2 className="font-sans text-lg">{date}</h2>
                <h1 className="font-sans text-3xl sm:text-5xl text-center text-bold">
                  {title}
                </h1>
                <p className="text-center text-lg sm:text-xl">{details}</p>
              </div>
              <div
                className={`${
                  index === timeLines.length - 1 ? "hidden" : ""
                } flex items-center justify-center flex-col sm:flex-row`}
              >
                <div className="w-[20px] h-[20px] bg-yellow-400 rounded-full "></div>
                <div className="w-1 h-12 sm:w-12 sm:h-1 bg-blue-800"></div>
                <div className="w-[20px] h-[20px] bg-yellow-400 rounded-full "></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TimeLine;
