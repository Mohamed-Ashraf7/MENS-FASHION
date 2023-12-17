import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SwipperQuote = ({ data }) => {
  return (
      <Swiper>
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className="cursor-pointer">
              <div className=" flex flex-col items-center p-2 mt-2 mx-auto space-y-4 md:px-8">
                <span className="text-8xl block text-blue-gray-700">
                  {item.medal}
                </span>

                <p className="py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl">
                  " {item.quote} "
                </p>
                <div className="flex justify-center space-x-3">
                  <LazyLoadImage
                    src={item.image}
                    alt={`swipper_image_${idx}`}
                    className="w-20 h-20 object-cover rounded-2xl"
                  />
                  <div>
                    <p className="font-bold">{item.author}</p>
                    <p className="text-sm">{item.sub}</p>
                    <a
                      className="flex items-center py-2 space-x-1 text-sm "
                      href="/"
                    >
                      <span className="hover:underline font-semibold">
                        {item.span}
                      </span>
                      <span className="text-xl">{item.arrow}</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
   
  );
};

export default SwipperQuote;
