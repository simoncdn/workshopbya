export const sectionAnimate = {
  initial: { y: 50, opacity: 0 },
  onScreen: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};
export const sectionPageAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, delay: 0.4 } },
};
