import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { Item } from "../Variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
const About = () => {
  const { about, subTeams, Title, subTitle } = aboutData;
  const { spanOne, spanTwo, spanThree, bottomTitle, spans, check } = aboutData;
  return (
    <section className="md:px-10 p-5" id="ABOUT">
      <div className="mx-auto grid lg:grid-cols-2 sm:grid-cols-1 md:gap-7 gap-3 justify-center items-center ">
        <div>
          <LazyLoadImage
            src={about}
            alt="main_About"
            className="w-full h-fit object-contain"
          />
        </div>
        <div className="flex flex-col uppercase items-center justify-center md:items-start p-1">
          <div className="flex items-center gap-3 pt-1 ">
            <span className="text-lg font-extrabold font-primary">
              {spanOne}
            </span>
            <span className="text-3xl">.</span>
            <span className="text-lg font-primary">{spanTwo}</span>
            <span className="text-3xl">.</span>
            <span className="text-xl font-primary">{spanThree}</span>
          </div>
          <div className="my-7">
            <h2 className="text-center lg:text-start sm:text-3xl md:text-4xl">
              {Title}{" "}
            </h2>
            <h3 className="text-3xl md:mt-10 sm:mt-3 text-center lg:text-start font-secondery">
              {subTitle}:
            </h3>
          </div>
          <div className="flex items-center justify-center">
            {subTeams.map((item, idx) => (
              <div key={idx} className="flex mr-4 items-center">
                <LazyLoadImage
                  src={item.image}
                  className="w-14 h-14 mr-2 rounded-full"
                  alt="stylist"
                />
                <p>
                  <span className="font-bold ">{item.name} </span>
                  <br />
                  <small>{item.job}</small>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center pt-6 md:pt-8">
        <motion.h2
          variants={Item("itemB")}
          initial="hidden"
          whileInView={"show"}
          className="md:text-7xl text-4xl"
        >
          {bottomTitle}
        </motion.h2>
        <div className="flex gap-x-2 md:gap-x-10 my-10">
          {spans.map((item, idx) => (
            <span className="md:text-2xl text-sm flex items-center" key={idx}>
              {check}
              {item}
            </span>
          ))}
        </div>
        <button className="button text-6xl p-2 shadow-md shadow-black">
          photo view
        </button>
      </div>
    </section>
  );
};
export default About;
