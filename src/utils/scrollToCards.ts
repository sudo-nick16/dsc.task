const scrollToCards = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 250,
      left: 0,
      behavior: "smooth",
    });
  }
};

export default scrollToCards;
