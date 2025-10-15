import { Link } from "react-router";
import { motion } from "motion/react";

const getAnimation = function (delay) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut", delay },
  };
};

function Landing() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden bg-gradient-to-b from-neutral-900 to-black/96 text-violet-100/75">
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
      <Link to="/home">
        <motion.button
          {...getAnimation(0.8)}
          className="rounded-lg bg-gradient-to-l from-violet-400 to-violet-500 px-4 py-1 font-bold text-neutral-950 sm:text-xl md:mt-4 md:text-2xl lg:px-8 lg:py-2 lg:text-3xl"
        >
          Try It NOW
        </motion.button>
      </Link>
      <div className="absolute -top-[500px] -right-[300px] aspect-square w-[600px] rotate-30 rounded-full border-4 border-violet-400 bg-gradient-to-br from-neutral-950 to-neutral-900"></div>
      <motion.footer
        {...getAnimation(2)}
        className="absolute bottom-10 text-neutral-500"
      >
        Made by crstelly. &copy; 2025
      </motion.footer>
    </div>
  );
}

export { Landing };
