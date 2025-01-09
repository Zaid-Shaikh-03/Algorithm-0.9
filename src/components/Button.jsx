import { FaArrowRight } from "react-icons/fa6";
import "../App.css";
import { useRef } from "react";

const Button = ({ title }) => {
  const btnRef = useRef(null);

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
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className="btn relative overflow-hidden inline-flex items-center ml-2 gap-2 px-12 py-3 border-2 border-[#fff]  font-semibold text-xl tracking-widest hover:text-[#000] rounded-3xl before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full before:bg-[#CFD7FE] hover:before:w-[500px] hover:before:h-[500px] z-[1]"
    >
      <span className="z-[2]">{title}</span>
      <span className="z-[2]">
        <FaArrowRight />
      </span>
    </button>
  );
};

export default Button;
