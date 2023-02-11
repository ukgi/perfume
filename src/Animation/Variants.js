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
