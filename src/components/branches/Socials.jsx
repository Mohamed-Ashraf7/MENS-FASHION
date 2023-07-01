import React from "react";
import { socialData } from "../../data";
const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[30px] text-xl">
      {socialData.map((item, index) => {
        return (
          <li
            key={index}
            className="shadow-md p-1 rounded-sm hover:hover-dark "
          >
            <span>{item.icon}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
