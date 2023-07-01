import React, { useState, useEffect } from "react";

import { GiReturnArrow } from "react-icons/gi";
const BackTOP = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed right-3 bottom-5 z-[9999] rotate-6 bg-black rounded-lg  shadow-white shadow-sm hover:bg-blue-gray-700">
          <button
            onClick={scrollToTop}
            className="md:p-3 p-1  text-white text-sm md:text-xl flex flex-col justify-center"
          >
            <span className="block self-center rotate-45">
              <GiReturnArrow />
            </span>{" "}
            [ Top ]
          </button>
        </div>
      )}
    </>
  );
};

export default BackTOP;
