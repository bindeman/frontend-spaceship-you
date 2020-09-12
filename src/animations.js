//animation properties for page transitions

const animations = {

  pageVariants: {
    initial: {
      opacity: 0,
          y: "-100vw",
          scale: 1.2
    },

  in: {
      opacity: 1,
          y: 0,
          scale: 1
    },
    out: {
      opacity: 0,
          y: "100vh",
          scale: 0.75
    }
  },
  pageTransition: {
    type: "tween",
    ease: "anticipate",
    duration: 1
  },
    hoverbar: {
      initial: {
          opacity: 0
      },
        in: {
            opacity: 1
        },

    }
};

export default animations;
