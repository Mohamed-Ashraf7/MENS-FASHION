import React from "react";

const BlogHead = ({ data }) => {
  const { subTitle, title, des } = data;
  return (
    <>
      <p className="text-lg">{subTitle}</p>
      <p className="md:text-6xl text-3xl p-0">{title}</p>
      <p className="text-start mt-5 md:text-xl text-sm">{des}</p>
    </>
  );
};

export default BlogHead;
