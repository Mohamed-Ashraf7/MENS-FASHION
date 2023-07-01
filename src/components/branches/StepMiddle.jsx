import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { StepsData } from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
const StepMiddle = () => {
  const { cardImg, cardTitle, cardDes, cardAvatar } = StepsData;
  return (
    <div>
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        className="py-3 lg:px-20"
      >
        <div className="space-y-4 lg:grid lg:grid-cols-3 items-center justify-center lg:gap-12 lg:space-y-0">
          <div className="aspect-w-3 aspect-h-2">
            <LazyLoadImage
              className="object-cover shadow-lg rounded-lg w-full  lg:w-[450px] h-[270px]"
              src={cardImg}
              alt="card_img"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center  px-2.5 py-1.5 text-sm font-medium  rounded-full border border-skin-input">
                  Tag #1
                </span>
                <span className="inline-flex items-center  px-2.5 py-1.5 text-sm font-medium  rounded-full border border-skin-input">
                  Tag #2
                </span>
                <span className="inline-flex items-center  px-2.5 py-1.5 text-sm font-medium  rounded-full border border-skin-input">
                  Tag #3
                </span>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="text-2xl font-extrabold font-primary text-center md:text-start ">
                {cardTitle}
              </h4>
              <p className="mt-1 text-sm hidden md:block font-normal font-secondery text-center md:text-start">
                {cardDes}
              </p>
              <div className="mt-3 flex items-center font-sans">
                <div className="shrink-0">
                  <span className="sr-only">John Doe</span>
                  <LazyLoadImage
                    className="h-14 w-14 rounded-full object-contain"
                    src={cardAvatar}
                    alt="author"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-skin-inverted hover:underline">
                    John Doe
                  </p>
                  <div className="flex space-x-1 text-sm text-skin-muted">
                    <time datetime="2022-02-01">1 Feb, 2022</time>
                    <span aria-hidden="true">·</span>
                    <span>3 min read time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepMiddle;
