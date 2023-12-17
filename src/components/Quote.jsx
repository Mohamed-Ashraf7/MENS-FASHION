import React from "react";
import { quoteData } from "../data";
import SwipperQuote from "./branches/SwipperQuote";
const Quote = () => {
  const { image, title, parag, btnText, summery, quots } = quoteData;
  return (
    <section className="flex flex-col lg:my-8 mt-2">
      <div className="w-full bg-cover bg-center"
        style={{backgroundImage: `url(${image})`,}}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-14 mx-auto md:p-14">
          <h4 className="text-3xl md:text-6xl tracking-[5px] text-white font-semibold font-secondery text-center">
            {title}
          </h4>
          <p className="pt-2 pb-8 text-xl  text-gray-400 font-primary text-center ">
            {parag}
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="md:w-full p-3 rounded-l-md w-2/3 focus:outline-0"
            />
            <button
              type="button"
              className="w-2/5 p-3 button hover:w-[170px] hover:h-[45px] font-semibold rounded-r-md sm:w-1/3 "
            >
              {btnText}
            </button>
          </div>
        </div>
        <div className="flex flex-col divide-y md:px-12 mx-auto my-4 md:mb-10 px-4 xl:px-32 shadow-md shadow-black divide-gray-700">
          {summery.map((item, idx) => {
            return (
              <details key={idx}>
                <summary className="py-2 font-secondery md:text-3xl text-xl cursor-pointer text-white">
                  {item.title}
                </summary>
                <div className="px-6 pb-4 text-lg text-gray-300">
                  <p>{item.parag}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
      <div className="container px-2 mx-auto">
        <SwipperQuote data={quots} />
      </div>
    </section>
  );
};

export default Quote;
