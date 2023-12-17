import React from "react";
import { heroData } from "../data";
import Button from "./branches/Button";
import Socials from "./branches/Socials";
import { motion } from "framer-motion";
import { Item } from "../Variants";

const Home = () => {
  const { image, subTitle, title, btnText, btnIcon } = heroData;
  return (
    <section className="min-h-[100vh] relative pt-44 mb-6" id="HOME">
      <motion.div
        variants={Item("itemB")}
        initial="hidden"
        whileInView={"show"}
        className="container  mx-auto flex flex-col items-center justify-center "
      >
        <div className="flex justify-center items-center md:mt-4">
          <img
            src={image}
            alt="hero_image"
            className="md:mt-5 h-[160px] w-[190px] object-contain rounded-sm shadow-2xl"
          />
          <div className="md:p-6 p-2 md:text-4xl text-2xl text-center border-b-4">
            {subTitle}
            <p className="text-sm text-gray-600 font-secondery">
              ٍSocial Manger
            </p>
          </div>
        </div>
        <div className="py-4 text-center">
          <h1 className="md:text-8xl text-[50px]">{title}</h1>
        </div>
        <div className="mb-5">
          <Button btnText={btnText} btnIcon={btnIcon} />
        </div>
        <Socials />
      </motion.div>
    </section>
  );
};

export default Home;
