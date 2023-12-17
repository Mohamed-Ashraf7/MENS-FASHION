import React from "react";
import { statusData } from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Status = () => {
  const { stData } = statusData;
  return (
    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
      {stData.map((item, idx) => {
        return (
          <div className="flex flex-col justify-start m-2" key={idx}>
            <span className="text-3xl font-bold leading-none lg:text-5xl">
              {item.number}
            </span>
            <p className="text-sm sm:text-base">{item.title}</p>
            <LazyLoadImage
              className="w-[160px] px-4 h-[75px] rounded-md bg-dark object-contain mx-auto"
              src={item.image}
              alt={`state_image_${idx}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Status;
