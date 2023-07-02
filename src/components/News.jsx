import React from "react";
import { NewsData } from "../data";
import { motion } from "framer-motion";
import { Item } from "../Variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
const News = () => {
  const { mainImg, leftSide, rightSide } = NewsData;
  return (
    <section className="px-5 ">
      <div className="container grid grid-cols-12 mx-auto gap-y-4 md:gap-10">
        <div className="flex flex-col justify-between shadow-md shadow-gray-500 col-span-12 p-3 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12 ">
            {leftSide.map((item, idx) => (
              <div className="flex flex-col space-y-2" key={idx}>
                <h3 className="flex items-center space-x-2">
                  <span className="flex-shrink-0 w-2 h-2">{item.icon}</span>
                  <span className="text-xs font-bold pt-2 pl-2 uppercase">
                    {item.title}
                  </span>
                </h3>
                <span className="font-primery">{item.parag}</span>
                <p className="text-xs ">
                  {item.sub}
                  <span className="underline pl-1">{item.author}</span>
                </p>
              </div>
            ))}
            <div className="text-lg shadow-md font-primary">
              {" "}
              Keep looking For Extra About Us{" "}
            </div>
          </div>
        </div>
        <motion.div
          variants={Item("itemB")}
          initial="hidden"
          whileInView={"show"}
          className="relative flex justify-center col-span-12 bg-center bg-no-repeat bg-cover  xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
          style={{ backgroundImage: `url(${mainImg})` }}
        >
          <span className="absolute px-1 pb-2 text-xs font-bold uppercase  text-white border-b-4 left-6 top-6 ">
            paris, france
          </span>
          <div className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group  flex-grow-1 bg-gradient-to-b">
            <span className="text-3xl text-center font-bold text-white  my-4 space-x-2">
              Live
            </span>
            <h3 className="font-primary text-2xl font-semibold text-center text-gray-400">
              Every next Day you will find us glow !
            </h3>
          </div>
        </motion.div>
        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
          <div className="mb-8 space-x-5 border-b-2 border-opacity-10 ">
            <span className="pb-5 text-xs font-bold uppercase border-b-2 ">
              Latest
            </span>
            <span className="pb-5 text-xs font-bold uppercase border-b-2 ">
              Popular
            </span>
          </div>
          <div className="flex flex-col divide-y divide-gray-700">
            {rightSide.map((item, idx) => (
              <div className="flex px-1 py-4" key={idx}>
                <LazyLoadImage
                  src={item.image}
                  alt={`news_image_${idx}`}
                  className="flex-shrink-0 object-cover shadow-md w-20 h-20 mr-4 rounded-xl"
                />
                <div className="flex flex-col flex-grow">
                  <span className="font-serif hover:underline">
                    {item.title}
                  </span>
                  <p className="mt-auto text-xs">
                    {item.time}
                    <span className="lg:ml-2 lg:inline hover:underline">
                      {item.sub}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
