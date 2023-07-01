import React from "react";
import Socials from "./branches/Socials";
import { footerData } from "../data";
const Footer = () => {
  const { ul_one, ul_two, ul_three, logo } = footerData;
  return (
    <footer className="px-4 divide-y bg-black mt-5">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center py-10 mx-auto ">
        <div className="flex flex-col justify-start lg:items-start items-center ">
          <p className="text-2xl mb-4 font-semibold text-white">
            Mens Style Fashion
          </p>
          <img src={logo} alt="footer_logo" className=" w-[150px] h-[120px]" />
        </div>
        <div className="hidden lg:grid col-span-2 grid-cols-3 text-sm px-5">
          <div>
            <h3 className="tracking-wide uppercase text-white text-lg">
              Product
            </h3>
            <ul className="space-y-1">
              {ul_one.map(({ text }, idx) => (
                <li key={idx}>
                  <span className="text-white">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="tracking-wide uppercase  text-white text-lg">
              Company
            </h3>
            <ul className="space-y-1">
              {ul_two.map(({ text }, idx) => (
                <li key={idx}>
                  <span className="text-white">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="uppercase  text-white text-lg">Developers</h3>
            <ul className="space-y-1">
              {ul_three.map(({ text }, idx) => (
                <li key={idx}>
                  <span className="text-white">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <div className="uppercase text-white text-center pb-5 text-3xl">
            Social media
          </div>
          <div className="flex justify-center px-10 py-4 bg-white  rounded-sm">
            <Socials />
          </div>
        </div>
      </div>
      <div className="py-2 text-lg text-center text-white">
        © 2023 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
