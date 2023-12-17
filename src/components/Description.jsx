import React from "react";
import { TypeAnimation } from "react-type-animation";
import { descrData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
const Description = () => {
  const { subTitle, Title } = descrData;

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      className="lg:p-24 py-10 px-5 bg-black text-white"
    >
      <div className="mx-auto flex flex-col justify-center items-center">
        <p className="text-xl md:text-2xl font-secondery ">{subTitle} </p>
        <h2 className="text-3xl md:text-6xl text-center py-8 font-bold md:py-6 font-primary">
          {Title}
        </h2>
        <div className="text-center">
          <span className="text-lg md:text-4xl">
            <span className="font-secondery">
            Looking good isn't self-importance : it's
            </span>
            <TypeAnimation
              sequence={[
                "self-respect",
                1000,
                "self-Confidence",
                1000,
                "serious life",
                1000,
              ]}
              repeat={Infinity}
            />
          </span>
        </div>
        <p className="w-fit p-3 mt-10 text-3xl md:text-4xl font-secondery text-center bg-white text-black">
          {" "}
          Wanna be Perfect !
        </p>
      </div>
    </motion.section>
  );
};

export default Description;
