export const menuslide = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
  },
};

export const listslide = {
  initial: {
    x: "500px",
  },
  enter: (i) => ({
    x: "0",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: "500px",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.05 * i },
  }),
};

// export const iconBox = {
//   initial: {
//     opacity:0
//   },
//   enter: {
//     opacity:1,
//     transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1],delay:0.8 },
//   },
//   exit: {
//     opacity:0,
//     transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
//   },
// };
export const iconslide = {
  initial: {
    y: "500px",
  },
  enter: (i) => ({
    y: "0",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.08 * i },
  }),
  exit: (i) => ({
    y: "500px",
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.08 * i },
  }),
};
