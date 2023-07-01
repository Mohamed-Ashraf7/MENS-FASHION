import React from "react";
import Button from "./branches/Button";
import { Membership } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
const MemberShip = () => {
  const {
    btnIcon,
    btnText,
    memberText,
    memberTitle,
    subText,
    Features,
    Logo,
    monthText,
  } = Membership;
  return (
    <motion.section
      id="MEMBERSHIP"
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      className="py-5 grid md:grid-cols-3 grid-col-1 justify-center items-center"
    >
      <div className="container md:col-span-2 relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto overflow-hidden rounded-sm shadow-lg shadow-gray-500 lg:max-w-none lg:flex">
          <div className="px-6 py-8 bg-white lg:p-12">
            <h3 className="text-3xl font-extrabold text-gray-900 md:text-3xl">
              {memberTitle}
            </h3>
            <p className="mt-6 text-base text-gray-500">{memberText}</p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">
                  {subText}
                </h4>
                <div className="border-t-2 border-gray-500 w-full "></div>
              </div>
              <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                {Features.map((item, idx) => (
                  <li key={idx} className="flex items-start lg:col-span-1">
                    <span className="text-xl text-black mr-2">
                      {item.CheckIcon}
                    </span>
                    <p className="ml-3 text-sm text-gray-700">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-6 py-8 text-center bg-gray-50 flex flex-col justify-center lg:p-12">
            <p className="mt-4 text-lg text-gray-500 relative">
              $299 / year{" "}
              <span className="absolute top-[50%] left-[30%] bg-gray-800 w-[70px] h-[1px]"></span>
            </p>
            <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900">
              <span>$149</span>
              <span className="ml-3 text-xl font-medium text-gray-500">
                / year
              </span>
            </div>
            <div className="mt-6 mx-auto">
              <Button btnText={btnText} btnIcon={btnIcon} />
            </div>
            <div className="mt-4 text-sm">
              <span className="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                Or pick a <span className="font-bold">lifetime</span> plan
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-0">
        <div className="bg-gradient-to-r from-blue-gray-900 to-black rounded-lg text-white p-8 text-center h-64 max-w-sm mx-auto">
          <h1 className="text-3xl mb-3">Month Access</h1>
          <p className="text-lg">{monthText}</p>
        </div>
        <div className="bg-white py-8 px-10 flex flex-col items-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 className="font-semibold text-2xl mb-5">Start MemberShip</h2>
          <img
            className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src={Logo}
            alt="Pricing logo"
          />
          <p className="capitalize text-xl mt-1">$15 / Month</p>
          <span className="flex items-center  border-2 rounded-xl w-30 p-2 justify-center mx-auto mt-2 mb-8 ">
            <div className="bg-green-400 rounded-full w-3 h-3 block mr-2"></div>
            Available Now
          </span>

          <Button btnText={btnText} btnIcon={btnIcon} />
        </div>
      </div>
    </motion.section>
  );
};

export default MemberShip;
