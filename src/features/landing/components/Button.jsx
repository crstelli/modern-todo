// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router";

import { getAnimation } from "../helpers/getAnimation";

function Button() {
  return (
    <Link to="/home" className="md:mt-4">
      <motion.button
        {...getAnimation(0.8)}
        className="cursor-pointer rounded-lg bg-gradient-to-l from-violet-400 to-violet-500 px-4 py-1 font-bold text-neutral-950 sm:text-xl md:text-2xl lg:px-8 lg:py-2 lg:text-3xl"
      >
        Try It NOW
      </motion.button>
    </Link>
  );
}

export { Button };
