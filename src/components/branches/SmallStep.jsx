import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SmallStep = ({ stepHeader, stepDes, step }) => {
  return (
    <div className="flex-auto border rounded  border-gray-300">
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex-auto">
          <div className="p-3 text-3xl font-primary font-bold">
            {stepHeader}
          </div>
          <div className="px-3 pb-6 font-secondery">{stepDes}</div>
        </div>
        <div className="md:w-72 w-full p-5">
          <LazyLoadImage
            src={step}
            alt="step_img_1"
            className="object-scale-down"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallStep;
