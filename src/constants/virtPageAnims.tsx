export const enterExitVari = {
  init: {
    scaleX: 0,
    height: "100%",
    originX: "left",
  },
  enter: {
    scaleX: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      ease: "easeInOut",
    },
  },
}

export const wordVari = {
  hover: {
    scale: 1.4,
    y: -7,
    transition: {
      duration: 0.12,
      ease: "backOut",
    },
  },
  exit: {
    scaleX: 0,
    originX: "right",
  },
  init: {
    scale: 1,
    y: 0,
  },
}

export const spanVari = {
  init: {
    scaleX: 0,
  },

  enter: {
    scaleX: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
      ease: "backOut",
    },
  },

  exit: {
    scaleX: 0,
    filter: "invert(100%)",
    transition: {
      ease: "backOut",
    },
  },
}
