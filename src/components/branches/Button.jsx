import React from "react";
import { Fragment } from "react";
const Button = ({ btnText, btnIcon }) => {
  return (
    <Fragment>
      <button className="button shadow-md p-4 px-8 shadow-black flex justify-center items-center">
        {" "}
        {btnText}
        <div className="text-2xl p-2">{btnIcon}</div>
      </button>
    </Fragment>
  );
};

export default Button;
