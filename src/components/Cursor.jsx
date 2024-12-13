import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX - 10); // Adjust for cursor size
      mouseY.set(e.clientY - 10); // Adjust for cursor size
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor hidden lg:block w-[20px] h-[20px] bg-white fixed rounded-full z-[999] pointer-events-none mix-blend-difference"
      style={{
        left: smoothX,
        top: smoothY,
      }}
    />
  );
};

export default Cursor;
