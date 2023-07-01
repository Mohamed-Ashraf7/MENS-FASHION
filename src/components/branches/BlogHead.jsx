import React from 'react'

const BlogHead = ({data} ) => {
  const { subTitle, title, des } = data;
  return (
    <>
         <h5 className="text-lg">{subTitle}</h5>
            <h2 className="text-6xl">
              {title}{" "}
                </h2>
            <p className="text-start mt-5 text-xl">{des}</p>
              </>
  )
}

export default BlogHead
