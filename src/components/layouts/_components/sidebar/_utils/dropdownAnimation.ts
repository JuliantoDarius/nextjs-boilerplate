export const dropdownContainerAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.1,
      when: "beforeChildren", // Animate container first
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

export const dropdownItemAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};
