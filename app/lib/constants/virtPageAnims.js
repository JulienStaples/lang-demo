export const enterExitVari = {
  init: {
    scaleX: 0,
    originX: "left",
    height: "100%",
  },
  enter: {
    scaleX: 1,
  },
  exit: {
    scaleX: 0,
  },
}

export const wordVari = {
  hover: {
    scale: 1.4,
    filter: "invert(100%)",
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
    filter: "invert(0%)",
  },
}

// exit: {
//   delay: 0.2,
//   opacity: 0,
// },

// await animate(scope.current, { scale: null }, { duration: 2 })

// remove: {
//   scale: null,
// },

export function enterExit(isPresent, safeToRemove, scope, animate) {
  if (!isPresent) {
    const exitSeq = [[scope.current, enterExitVari.exit, { duration: 0.1 }]]
    async function exitAnimation() {
      await animate(exitSeq)
      await safeToRemove()
    }

    exitAnimation()
  } else {
    const enterSeq = [[scope.current, enterExitVari.enter, { duration: 0.1 }]]
    async function enterAnimation() {
      await animate(enterSeq)
    }
    enterAnimation()
  }
}
