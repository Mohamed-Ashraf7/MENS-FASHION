import React from "react";

const BlogHead = ({ data }) => {
  const { subTitle, title, des } = data;
  return (
    <>
      <h5 className="text-lg">{subTitle}</h5>
      <h2 className="md:text-6xl text-4xl p-0">{title} </h2>
      <p className="text-start mt-5 md:text-xl text-sm">{des}</p>
    </>
  );
};

export default BlogHead;
