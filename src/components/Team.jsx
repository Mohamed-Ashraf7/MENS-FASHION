import React from "react";
import { teamData } from "../data";
import Socials from "./branches/Socials";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Team = () => {
  const { subtitle, title, cards } = teamData;
  return (
    <section id="TEAM" className="mb-5 py-5">
      <div className="pt-2 rounded-lg bg-black mx-auto flex flex-col items-center justify-center">
        <p className="text-xl font-secondery tracking-wider text-center uppercase pt-8 text-gray-400">
          {subtitle}
        </p>
        <h4 className="text-3xl font-bold py-6 text-center capitalize text-white">
          {title}
        </h4>
        <div className="grid lg:grid-cols-3 md:px-20 px-7 gap-x-5  grid-cols-1 justify-center items-center mt-12">
          {cards.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center px-4 py-6 my-14  text-center  "
              >
                <LazyLoadImage
                  src={item.img}
                  alt={`Team_Member_${idx}`}
                  className="self-center bg-white  w-auto  h-[140px] -mt-28 bg-center bg-cover rounded-sm"
                />
                <div className=" my-4">
                  <p className="text-2xl font-bold leading-snug text-white">
                    {item.author}
                  </p>
                  <p className="text-white opacity-50">{item.work}</p>
                  <p className="py-2 text-white opacity-90">{item.des}</p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 p-2 rounded-lg overflow-hidden">
                  <Socials />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Team;
