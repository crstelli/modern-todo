// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { getAnimation } from "../helpers/getAnimation";

function Header() {
  return (
    <motion.h1
      {...getAnimation(0.2)}
      className="text-center text-3xl font-thin sm:text-5xl md:text-6xl lg:text-7xl"
    >
      Organize Better with
      <br />
      <span className="bg-gradient-to-l from-violet-400 to-violet-500 bg-clip-text font-extrabold text-transparent">
        DoNow
      </span>
    </motion.h1>
  );
}

export { Header };
