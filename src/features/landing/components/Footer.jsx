// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { getAnimation } from "../helpers/getAnimation";

function Footer() {
  return (
    <motion.footer
      {...getAnimation(2)}
      className="absolute bottom-10 text-neutral-500"
    >
      Made by crstelly. &copy; 2025
    </motion.footer>
  );
}

export { Footer };
