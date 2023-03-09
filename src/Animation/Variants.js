export const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const variants = {
  hidden: {
    opacity: 0.2,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// const item = {
//   hidden: {
//     opacity: 1,
//     y: 15,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.2,
//       duration: 1,
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// };
