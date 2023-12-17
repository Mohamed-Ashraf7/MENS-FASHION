import React from "react";
import { galleryData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Gallery = () => {
  const { heart, Comment, gallery, title } = galleryData;
  return (
    <section  className="md:p-8" id="GALLERY">
      <h4 className="text-2xl md:text-6xl font-primary border-t-2 py-4 border-t-black text-center md:text-start mb-2">
        {title}
      </h4>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {gallery.map((item, idx) => {
          return (
            <motion.div
              variants={fadeIn("down")}
              initial="hidden"
              whileInView={"show"}
              className="relative overflow-hidden"
              key={idx}
            >
              {" "}
              <LazyLoadImage
                src={item}
                alt={`gallery_image_${idx}`}
                className="object-cover h-[250px] w-full hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <span className="absolute left-[10px] text-white text-xl bottom-[10px]">
                {heart}
              </span>
              <span className="absolute right-[10px] bottom-[10px] text-white text-xl">
                {Comment}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
