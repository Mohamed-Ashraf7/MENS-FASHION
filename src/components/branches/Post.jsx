import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Post = ({ session }) => {
  return (
    <>
      {session.map((item, idx) => {
        return (
          <div className="max-h-[420px] w-full  overflow-hidden" key={idx}>
            <LazyLoadImage
              src={item}
              alt={`session_image_${idx}`}
              className="object-cover h-full w-full transform hover:scale-[1.1] transition ease-in-out duration-700"
            />
          </div>
        );
      })}
    </>
  );
};

export default Post;
