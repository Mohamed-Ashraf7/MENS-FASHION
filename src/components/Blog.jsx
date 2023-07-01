import React from "react";
import { Blogs } from "../data";
import Status from "./branches/Status";
import Post from "./branches/Post";
import BlogHead from "./branches/BlogHead";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
const Blog = () => {
  const { bref, post, sessionOne, sessionTwo, darkWatch } = Blogs;
  const { subTitle, des } = post;

  return (
    <section id="BLOG" className="bg-black py-4 text-white">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-3 gap-x-3 grid-cols-1 mt-2 md:mt-10 overflow-hidden">
          {bref.map((item, idx) => (
            <motion.div
              initial={{
                scale: 1,
                borderRadius: "0",
                backgroundColor: "#000",
              }}
              whileHover={{
                scale: 1.1,
                borderRadius: "10%",
                backgroundColor: "#0c0c0c",
              }}
              transition={{ duration: 0.5 }}
              key={idx}
              className=" flex flex-col gap-y-9  p-5 items-center justify-center"
            >
              <div className="text-5xl">{item.icon}</div>
              <h2 className="text-3xl text-center">{item.title}</h2>
              <p className="text-center ">{item.des}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex border-b-2 border-blue-gray-900 p-6 relative drop-shadow-md shadow-gray-100  flex-col mt-10 items-start w-full md:max-w-3xl">
          <BlogHead data={post} />
        </div>
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          className="p-2 mt-2 grid md:grid-cols-2 gap-0 lg:grid-cols-4 grid-cols-1"
        >
          <Post session={sessionOne} />
        </motion.div>
        <div className="py-5 mt-2 shadow-sm shadow-blue-gray-700">
          <Status />
        </div>
        <div className="flex border-b-2 border-blue-gray-900 p-6 drop-shadow-md shadow-gray-100  flex-col  items-end w-full">
          <h5 className="text-lg">{subTitle}</h5>
          <h2 className="relative text-6xl">
            Take a Look For a Modern One
            <span
              className="block absolute z-[-1] -inset-0 -skew-y-[4deg]  bg-blue-gray-900"
              aria-hidden="true"
            ></span>
          </h2>
          <p className=" text-start mt-5 text-xl md:max-w-3xl">{des}</p>
        </div>
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          className=" p-2 mt-2 grid md:grid-cols-2 gap-0 lg:grid-cols-3 items-center grid-cols-1"
        >
          <Post session={sessionTwo} />
        </motion.div>
        <motion.img
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          src={darkWatch}
          alt="dark_watch"
          className="object-cover h-full w-[90%] mx-auto mt-5 col-span-3 "
        />
      </div>
    </section>
  );
};

export default Blog;
