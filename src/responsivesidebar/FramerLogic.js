export const menuslide = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
  },
};

export const listslide = {
  initial: {
    x: "80px",
  },
  enter: (i) => ({
    x: "0",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: "80px",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i },
  }),
};
