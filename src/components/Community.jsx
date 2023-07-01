import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { community } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/navigation";

const CommunitySlider = () => {
  const { title, testimonials } = community;
  return (
    <section className="mb-10 relative hidden md:block">
      <div className="container mx-auto flex flex-col justify-between items-center lg:flex-row ">
        <div className="p-5 hidden lg:block">
          <h2 className="button p-2 capitalize text-center shadow-md shadow-black text-[50px] relative mb-2 lg:mb-10">
            {title}
          </h2>
        </div>
        <div className="w-[1200px]">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            centeredSlides={0}
            grabCursor={true}
            modules={[]}
          >
            {testimonials.map((item, idx) => {
              const { image, name, message } = item;
              return (
                <SwiperSlide key={idx}>
                  <div className="relative">
                    <div>
                      <LazyLoadImage
                        src={image}
                        alt={`testimonsal_img_${idx}`}
                      />
                    </div>
                    <div className="absolute bottom-0 p-2 w-[80%] left-[50px] opacity-40 text-white text-center bg-black">
                      <div className="flex items-center justify-center gap-x-[3px]">
                        <div className="text-[20px] font-bold">{name}</div>
                      </div>
                      <div className="italic font-secondery text-lg font-light">
                        {message}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CommunitySlider;
