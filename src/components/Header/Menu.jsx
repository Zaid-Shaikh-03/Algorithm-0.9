import { motion } from "framer-motion";
import { slideLeft, mountAnim } from "./animation";
import Link from "./Link";

const menu = [
  {
    title: "Home",
  },
  {
    title: "TimeLine",
  },
  {
    title: "Sponsors",
  },
  {
    title: "Faqs",
  },
  {
    title: "Contact Us",
  },
];

const Menu = ({ closeMenu }) => {
  return (
    <div className="fixed flex z-[3] h-full w-full flex-col justify-start left-0 top-6">
      <div className="flex justify-end pr-6 xl:pr-12 group">
        <div
          className="w-fit"
          onClick={() => {
            closeMenu();
          }}
        >
          <motion.svg
            variants={slideLeft}
            {...mountAnim}
            onClick={() => {
              closeMenu();
            }}
            width="38"
            height="38"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer w-[50px] h-[50px]"
          >
            <path
              d="M1.5 1.5L67 67"
              stroke="white"
              strokeWidth="4"
              className="transition-colors duration-500 group-hover:stroke-[#d3fd50]"
            />
            <path
              d="M66.5 1L0.999997 66.5"
              stroke="white"
              strokeWidth="4"
              className="transition-colors duration-500 group-hover:stroke-[#d3fd50]"
            />
          </motion.svg>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
