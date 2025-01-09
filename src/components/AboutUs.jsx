import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "First Prize",
    prize: "₹20,000",
    src: "./trophy.svg",
    color: "#f3f3e0",
  },
  {
    title: "Second Prize",
    prize: "₹15,000",
    src: "./trophy.svg",
    color: "#3795bd",
  },
  {
    title: "Third Prize",
    prize: "₹10,000",
    src: "./trophy.svg",
    color: "#88A28D",
  },
];

const AboutUs = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    traget: container,
    offset: ["start start", "end end"],
  });

  const textSplitting = () => {
    var h1Elements = document.querySelectorAll(".textAnimation");
    h1Elements.forEach(function (h1Element, index) {
      var h1Text = h1Element.textContent;
      var splitedText = h1Text.split("");
      var clutter = "";

      splitedText.forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
      });

      h1Element.innerHTML = clutter;
    });
  };

  const gsapanimation = () => {
    gsap.to(".textAnimation span", {
      color: "#CFD7FE",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".textAnimation",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top -15%",
        scrub: 1,
      },
    });
  };

  useEffect(() => {
    textSplitting();
    gsapanimation();
  }, []);

  return (
    <div
      // style={{
      //   backgroundImage:
      //     "radial-gradient(95% 95% at 50% 0%, #1F3078 50%,#020617)",
      // }}
      style={{
        backgroundImage: "linear-gradient(to bottom, #1F3078 5%,#020617)",
      }}
      id="main"
      className="flex flex-col sm:flex-row  "
    >
      <div className="w-full sm:w-[65vw] h-fit sm:h-[100vh] bg-transaprent flex justify-start sm:justify-center items-center flex-col sm:sticky top-0 ">
        <div className="px-2 py-4 sm:px-8 sm:py-8 text-center sm:text-start">
          <h1 className="textAnimation text-shadow-xl font-serif italic text-[10vw] leading-[10.5vw]  sm:text-[4vw] sm:leading-[4.5vw] font-bold text-[#070D27]">
            Who Are We &
          </h1>
          <h1 className="textAnimation text-shadow-xl font-serif italic  text-[10vw] leading-[10.5vw]  sm:text-[4vw] sm:leading-[4.5vw] pl-0 sm:pl-32 font-bold text-[#070D27]">
            What's Up for Grabs?
          </h1>
        </div>
        <div className="w-full sm:w-[80%] px-6 py-4 sm:px-8 sm:py-8 text-center">
          <p className="font-sans text-[#fff] text-[5vw] leading-[5.7vw] sm:text-[1.5vw] sm:leading-[1.9vw]">
            Algorithm 9.0 is an exciting event that encourages innovation and
            teamwork in tech. It gives participants the chance to challenge
            themselves, learn new skills, and create solutions for real-world
            problems related to social awareness. Whether you're an experienced
            developer or a beginner, Algorithm 9.0 offers a great opportunity to
            make a difference. Plus, there’s a prize pool of about ₹45,000, to
            make the event even more exciting.
          </p>
        </div>
      </div>
      <div ref={container} className="w-full sm:w-[35vw] main ">
        <div className="h-[100vh] hidden sm:flex justify-center items-center sticky top-0"></div>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
