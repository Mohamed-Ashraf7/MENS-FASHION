// fadeIn function
export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        ease: [0.25, 0.25, 0.25, 0.65],
      },
    },
  };
};
export const Item = (Type) => {
  if (Type === "itemA") {
    return {
      hidden: { scale: 0 },
      show: {
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.9,
        },
      },
    };
  } else if (Type === "itemB") {
    return {
      hidden: { scale: 0 },
      show: {
        scale: 1,
        transition: {
          type: "tween",
          duration: 1,
        },
      },
    };
  }
};
