const getAnimation = function (delay) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut", delay },
  };
};

export { getAnimation };
